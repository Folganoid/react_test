import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      ]
    }
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items}/>
        <Footer />
      </div>
    )
  };
}

export default App;
