import React, {Component} from 'react';
import Styles from './Counter.module.css';

import Storage from '../Storage/Storage'; // Placeholder to store counter & form values

class Counter extends Component {
   state = { num: 0 }

   rise = () => { this.setState( { num: this.state.num +1 } ); }
   fall = () => { this.setState( { num: (this.state.num === 0) ? 0 : this.state.num -1 } );}
    
   render() {
    const { num } = this.state;
    return (
       <div className={Styles.counter}>
            <button type="button" onClick={this.rise}>
               <i class="material-icons">expand_less</i>
            </button>
            <span>{num}</span>               
                { (num === 0) ? '' : 
                     <button onClick={this.fall}>
                        <i class="material-icons">expand_more</i>
                        <Storage counterValue={num} />
                     </button>
               }
       </div>
    )
  }
}

export default Counter;