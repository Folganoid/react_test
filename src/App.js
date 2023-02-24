import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Chair',
          desc: 'lsfslkfjlskfjls',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Chair2',
          desc: 'lsfslkfjlskfjls22222',
          category: 'chairs',
          price: '59.99'
        },
        {
          id: 3,
          title: 'Chair3',
          desc: 'lsfslkfjlskfjls33333',
          category: 'chairs',
          price: '19.99'
        },
        {
          id: 4,
          title: 'Table',
          desc: 'ttttttt',
          category: 'tables',
          price: '50.00'
        },
        {
          id: 5,
          title: 'Table2',
          desc: 'ttttttt222',
          category: 'tables',
          price: '60.00'
        },
        {
          id: 6,
          title: 'Table3',
          desc: 'ttttttt333',
          category: 'tables',
          price: '70.00'
        }
      ],
      showFullItem: false
    }
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }

  chooseCategory(category) {
    console.log(category);
    if (category !== 'all') {
      this.setState({
        currentItems: this.state.items.filter(el => el.category === category)
      })
    } else {
      this.setState({
        currentItems: this.state.items
      })
    }

  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem});
  }

  render() {
    return (
      <div className="wrapper">
        <Header onDelete={this.deleteOrder} orders={this.state.orders}/>
        <Categories chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
        {this.state.showFullItem && <ShowFullItem item={this.state.fullItem}/>}
        <Footer />
      </div>
    )
  };

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)});
  }

  addToOrder(item) {
    let isInArr = false;
    this.state.orders.forEach(el => {
      if(el.id === item.id) {
        isInArr = true;
      }
    })
    if (!isInArr) this.setState({orders: [...this.state.orders, item]});
  }
}

export default App;
