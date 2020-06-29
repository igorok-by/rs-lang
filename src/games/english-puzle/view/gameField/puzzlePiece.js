class PuzzlePiece {
  constructor() {
    this.pieceTypes = {
      BEGINIG: 'start',
      ENDING: 'end',
      INTERIM: 'interim',
    };
  }

  createPiece(width, type) {
    const canvas = this.view.createElement('canvas', 'puzzle__piece');
    const ctx = canvas.getContext('2d');
    const height = 52;
    const q = height / 4;
    const a = height / 2 - q / 2; // upto circ
    // const width = type === this.pieceTypes.ENDING ? Width - a : Width;

    ctx.canvas.height = height;
    ctx.canvas.width = width;

    ctx.beginPath();
    ctx.lineWidth = 1.2;
    ctx.moveTo(0, 0);

    ctx.lineTo(0, a);

    if (type !== this.pieceTypes.BEGINIG) {
      ctx.bezierCurveTo(
        9, a - 4,
        15, a - 2,
        15, a + 7,
      );
      ctx.bezierCurveTo(
        15, a + 22,
        0, a + 14,
        0, a + 14,
      );
    }

    ctx.lineTo(0, height);

    ctx.lineTo(width, height);

    if (type !== this.pieceTypes.ENDING) {
      ctx.lineTo(width, height - a);

      ctx.bezierCurveTo(
        width + 9, height - a + 4,
        width + 15, height - a + 2,
        width + 15, height - a - 7,
      );
      ctx.bezierCurveTo(
        width + 15, height - a - 22,
        width + 0, height - a - 14,
        width + 0, height - a - 14,
      );
    }
    ctx.lineTo(width, 0);

    ctx.lineTo(0, 0);

    ctx.closePath();
    ctx.stroke();

    return canvas;
  }

  // TODO image background

  drawImage(piece, image, row, width){
    // void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);

      const ctx = piece.getContext('2d');
      ctx.drawImage(
        image,
        0,
        0,
        // startXPointCropImage,
        // startYPointCropImage,
        // canvasWidth + radius,
        // canvasHeight,
        // 0,
        // 0,
        // canvasWidth + radius,
        // canvasHeight,
      );
    // }


    return piece;
  }
}

export default PuzzlePiece;
