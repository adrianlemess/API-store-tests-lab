import ProductsControler from '../../../src/controllers/products';
import sinon from 'sinon';

describe('Controller product', () => {

    const defaultProduct = [{
        name: 'Default Product',
        description: 'product description',
        price: 100
    }];
    
    describe('get() products', () => {
        it('should return a list of products', () => {
            const request = {};
            const response = {
                send: sinon.spy()
            };

            const productController = new ProductsControler();
            productController.get(request, response);

            expect(response.send.called).to.be.true;
            expect(response.send.calledWith(defaultProduct)).to.be.true;
        });
    });
});