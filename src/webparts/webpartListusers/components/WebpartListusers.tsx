import * as React from 'react';
import styles from './WebpartListusers.module.scss';
import { IWebpartListusersProps } from './IWebpartListusersProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { product } from './IListProductsProps';
import ListProducts from './ListProducts';

export default class WebpartListusers extends React.Component<IWebpartListusersProps, {}> {

  private _listofproducts :product[] = [
    {title:"1",description:"demo 1"},
    {title:"2",description:"demo 2"},
    {title:"3",description:"demo 3"},
    {title:"4",description:"demo 4"},
]

  public render(): React.ReactElement<IWebpartListusersProps> {
    return (
      <div className={ styles.webpartListusers }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              products are below
                  <ListProducts 
                  products={this._listofproducts}  />

              </div>
          </div>
        </div>
      </div>
    );
  }
}
