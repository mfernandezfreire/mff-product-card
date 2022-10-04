import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components';

import { product1 } from '../data/producto';

const { act } = renderer;



describe('ProductImage', () => {
    test('Debe mostar el componente con la imagen personalizada', () => {
        const wrapper = renderer.create(
            <ProductCard product={product1}  >
                {
                    ({ count }) => (
                        <>
                            <h1>Product Card</h1>
                            <h1>{count}</h1>
                        </>
                    )
                }
            </ ProductCard >
        )

        expect(wrapper.toJSON()).toMatchSnapshot();

    });

    test('debe incrementar el contador', () => {
        const wrapper = renderer.create(
            <ProductCard product={product1}  >
                {
                    ({ count, increaseBy }) => (
                        <>
                            <h1>Product Card Testing</h1>
                            <span>{count}</span>
                            <button onClick={() => increaseBy(1)}></button>
                        </>
                    )
                }
            </ ProductCard >

        )

        let tree = wrapper.toJSON();

        expect(tree).toMatchSnapshot();

        act(() => {
            (tree as any).children[2].props.onClick();
        })

        tree = wrapper.toJSON();

        expect((tree as any).children[1].children[0]).toBe('1');

    })
})
