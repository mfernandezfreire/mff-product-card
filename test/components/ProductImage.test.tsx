import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';

import { product2 } from '../data/producto';



describe('ProductImage', () => {
    test('Debe mostar el componente con la imagen personalizada', () => {
        const wrapper = renderer.create(
            <ProductImage img='https://hola.jpg' className='custom-class' />
        )

        expect(wrapper.toJSON()).toMatchSnapshot();

    });

    test('Debe mostrar el componente con la imagen del producto', () => {
        const wrapper = renderer.create(
            <ProductCard product={product2} >
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
    })
})
