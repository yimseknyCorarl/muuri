(function (window) {

  var Muuri = window.Muuri;

  QUnit.module('Item methods - isActive');

  QUnit.test('item.isActive() should return true if the item is active and otherwise false', function (assert) {

    assert.expect(2);

    var container = utils.createGridElements().container;
    var grid = new Muuri(container);
    var item = grid.getItems()[0];

    assert.strictEqual(item.isActive(), true, 'An item should be active when the it`s initiated and it`s display value is set to block');
    grid.hide(item);
    assert.strictEqual(item.isActive(), false, 'An item should not be active after hide is called');
    grid.destroy();
    container.parentNode.removeChild(container);

  });

})(this);