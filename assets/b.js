(function(){

	this.BGrid = BGrid;

	/**
	 * BGrid
	 * @arg cols a 2d array (a[col][row]) defining cell presence
	 */
	
	function BGrid(cols) {

		this.cellWidth = 4;
		this.cellHeight = 4;
		
		this.cols = cols;
		this.nCols = this.cols.length;
		this.nRows = (this.cols[0]||[]).length;

		this.gap = 1; // gap between cells

		this.width = this.nCols * (this.cellWidth+this.gap);
		this.height = this.nRows * (this.cellHeight+this.gap);

		this.canvas = document.createElement('canvas');
		this._ = this.canvas.getContext('2d');

		this.realWidth = this.width + 100;
		this.realHeight = this.height + 100;
		this.realOffsetX = -50;
		this.realOffsetY = -50;

		this.canvas.width = this.realWidth;
		this.canvas.height = this.realHeight;

		this._.translate(50, 50);

		this.cells = [];
		this.cellsFlat = [];

		this.setupCells();

	}

	BGrid.prototype = {
		setupCells: function() {

			for (var c = -1, cl = this.nCols; ++c < cl;) {

				this.cells[c] || (this.cells[c] = []);

				for (var r = -1, rl = this.nRows; ++r < rl;) {

					if (!this.cols[c][r]) continue;

					this.cellsFlat.push(
						this.cells[c][r] = new BGrid.Cell(
							this,
							c, r,
							c * (this.cellWidth+this.gap),
							r * (this.cellHeight+this.gap),
							this.cellWidth,
							this.cellHeight
						)
					);

				}

			}

		},
		animate: function(t) {
			
			var me = this,
				_ = this._,
				h = this.height,
				w = this.width,
				cells = this.cellsFlat,
				cl = cells.length;

			this._jq = jQuery({t:me.t||0}).animate({t:t}, {
				step: function() {

					var t = me.t = this.t;

					_.globalCompositeOperation = 'destination-out';
					_.fillStyle = 'rgba(1,1,1,' + (~~((t)*1000)/1000) + ')';
					_.fillRect(me.realOffsetX, me.realOffsetY, me.realWidth, me.realHeight);
					_.globalCompositeOperation = 'source-over';

					for (var l = cl; l--;) {
						cells[l].show(t);
					}

				},
				complete: function() {

					if (t === 0) return;

					_.clearRect(me.realOffsetX, me.realOffsetY, me.realWidth, me.realHeight);
					for (var l = cl; l--;) {
						cells[l].show(t);
					}
				},
				duration: 2000,
				easing: 'swing'
			});

		},
		stop: function() {
			this._jq && this._jq.stop();
		}
	};

	BGrid.Cell = function Cell(grid, c, r, x, y, width, height) {

		this.r = 0 | Math.random() * 20 + 20;
		this.g = 0 | Math.random() * 60 + 144;
		this.b = 0 | Math.random() * 20 + 235;
		
		this.grid = grid;

		this.col = c;
		this.row = r;

		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;

		this.origin = {
			x: Math.random() * (this.grid.width + 100) - 50,
			y: Math.random() * (this.grid.height + 100) - 50,
			width: 0,
			height: 0
		};

	};

	BGrid.Cell.prototype = {
		draw: function() {

			this.grid._.fillStyle = 'rgb(' + this.r + ',' + this.g + ',' + this.b +')';
			this.last && this.grid._.clearRect.apply(this.grid._, this.last);
			this.grid._.fillRect(
				this.x,
				this.y,
				this.width,
				this.height
			);

			this.last = [this.x, this.y, this.width, this.height];

		},
		show: function(p) {

			var w = p * (this.width - this.origin.width) + this.origin.width,
				h = p * (this.height - this.origin.height) + this.origin.height,
				x = p * (this.x - this.origin.x) + this.origin.x,
				y = p * (this.y - this.origin.y) + this.origin.y,
				_ = this.grid._;

			_.fillStyle = 'rgb(' + this.r + ',' + this.g + ',' + this.b +')';

			_.fillRect(x, y, w, h);

		}
	};

}());
