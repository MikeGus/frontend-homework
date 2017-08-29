'use strict';

QUnit.module('Тестируем функцию rle', function () {
	QUnit.test('rle работает правильно', function (assert) {
		assert.strictEqual(rle('AAAB'), 'A3B');
		assert.strictEqual(rle('BCCDDDAXXXX'), 'BC2D3AX4');
		assert.strictEqual(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'), 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4');
	});
	QUnit.test('rle работает правильно на пустых строках', function (assert) {
		assert.strictEqual(rle(''), '');
	});
	QUnit.test('rle работает правильно на строках без повторяющихся символов', function (assert) {
		assert.strictEqual(rle('ABCDEFGHZ'), 'ABCDEFGHZ');
	});
	QUnit.test('rle работает правильно на строках с кириллицей', function (assert) {
		assert.strictEqual(rle('ААААБББВГДД'), 'А4Б3ВГД2');
	});
});