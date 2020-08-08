import React from 'react'
const ProductTable=()=> {
  const products=[
    {
        id:1,
        name: 'Milk',
        price:'20',
        stock:'10'
    },
    {
        id:2,
        name: 'Fruit',
        price:'50',
        stock:'8'
    },
    {
        id:3,
        name: 'Jam',
        price:'30',
        stock:'5'
    },
]    
  // const { products } = props;
  const [sortConfig, setSortConfig] = React.useState(null);
  React.useMemo(()=>{
  let sortedProducts = [...products];
  if (sortedField !== null) {
    sortedProducts.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  }
  const useSortableData = (items, config = null) => {
    const [sortConfig, setSortConfig] = React.useState(config);
    
    const sortedItems = React.useMemo(() => {
      let sortableItems = [...items];
      if (sortConfig !== null) {
        sortableItems.sort((a, b) => {
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
          }
          return 0;
        });
      }
      return sortableItems;
    }, [items, sortConfig]);
  
    const requestSort = key => {
      let direction = 'ascending';
      if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
        direction = 'descending';
      }
      setSortConfig({ key, direction });
    }
  
    return { items: sortedItems, requestSort };
  }
  })
  // const [sortedField, setSortedField] = React.useState(null);
  // sortedProducts.sort((a, b) => {
  //   if (a.name < b.name) {
  //     return -1;
  //   }
  //   if (a.name > b.name) {
  //     return 1;
  //   }
  //   return 0;
  // });

  // const requestSort = key => {
  //   let direction = 'ascending';
  //   if (sortConfig.key === key && sortConfig.direction === 'ascending') {
  //     direction = 'descending';
  //   }
  //   setSortConfig({ key, direction });
  // }
  return (
    <table>
      <caption>Our products</caption>
      <thead>
        <tr>
        <th>
            <button type="button" onClick={() => requestSort('name')}>
              Name
            </button>
          </th>
          <th>
            <button type="button" onClick={() => requestSort('price')}>
              Price
            </button>
          </th>
          <th>
            <button type="button" onClick={() => requestSort('stock')}>
              In Stock
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.stock}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default ProductTable