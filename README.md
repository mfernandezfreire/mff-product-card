# MFF-Product Card
Paquete de pruebas de un paquete npm del curso de react-avanzado

### Manu Fernández Freire

## Ejemplo
```
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from 'do-product-cart' ;

```

```
<ProductCard
    key={product.id}
    product={product}
    initialValues={{
        count: 4,
        maxCount: 15
    }}
>
    {
        ({ count, maxCount, isMaxCountReached, reset, increaseBy }) => (
            <>
                <ProductImage />
                <ProductTitle  />
                <ProductButtons  />
            </>
        )
    }
</ ProductCard >
``` 

