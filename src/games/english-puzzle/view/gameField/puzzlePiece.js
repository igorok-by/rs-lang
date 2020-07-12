class PuzzlePiece {
  constructor() {
    this.pieceTypes = {
      BEGINIG: 'start',
      ENDING: 'end',
      INTERIM: 'interim',
    };
    this.height = 52;
    this.q = this.height / 4;
    this.a = this.height / 2 - this.q / 2;
  }

  createPiece({ width, type }) {
    const canvasElement = this.view.createElement('canvas', 'puzzle__piece');
    const ctx = canvasElement.getContext('2d');
    const { height, a } = this;
    const lineColor = '#ffffff';

    ctx.canvas.height = height;
    ctx.canvas.width = type === this.pieceTypes.ENDING ? width : width + a;
    ctx.canvas.dataset.type = type;

    ctx.beginPath();
    ctx.lineWidth = 1.2;
    ctx.strokeStyle = lineColor;
    ctx.lineCap = 'round';
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

    ctx.lineTo(width, height - a);

    if (type !== this.pieceTypes.ENDING) {
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

    return canvasElement;
  }

  // eslint-disable-next-line class-methods-use-this
  drawImage({
    canvasElement, canvasImage, x, y, imageOffset = 0,
  }) {
    const ctx = canvasElement.getContext('2d');

    ctx.clip();
    ctx.drawImage(
      canvasImage,
      x - imageOffset,
      y,
      canvasElement.width,
      canvasElement.height,
      0,
      0,
      canvasElement.width,
      canvasElement.height,
    );
    ctx.stroke();
    ctx.globalCompositeOperation = 'destination-in';
    ctx.fill();
    ctx.globalCompositeOperation = 'source-over';

    return canvasElement;
  }

  fillText({ canvasElement, word }) {
    const ctx = canvasElement.getContext('2d');
    const { width, height } = canvasElement;
    const fontSize = Math.round(height / 4);

    ctx.beginPath();
    ctx.shadowColor = '#505050';
    ctx.shadowBlur = 10;
    ctx.lineWidth = 1;
    ctx.font = `bold ${fontSize}pt Arial`;
    ctx.textAlign = 'center';
    ctx.fillStyle = '#fff';
    ctx.fillText(word, width / 2, height / 2 + fontSize / 3);

    return canvasElement;
  }

  // eslint-disable-next-line class-methods-use-this
  setBorderColor({ canvasElement, color }) {
    const ctx = canvasElement.getContext('2d');

    ctx.strokeStyle = '#ff0000';
    ctx.stroke();
  }
}

export default PuzzlePiece;
