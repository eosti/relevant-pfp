function drawTextAlongArc(context, str, centerX, centerY, radius, angle) {
  const len = str.length;
  let s;
  context.save();
  context.translate(centerX, centerY);
  context.rotate((-1 * angle) / 2);
  context.rotate((-1 * (angle / len)) / 2);
  for (var n = 0; n < len; n++) {
    context.rotate(angle / len);
    context.save();
    context.translate(0, -1 * radius);
    s = str[n];
    context.fillText(s, 0, 0);
    context.restore();
  }
  context.restore();
}

export default drawTextAlongArc;
