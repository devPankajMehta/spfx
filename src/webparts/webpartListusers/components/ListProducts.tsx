import { getItemClassNames } from "office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.classNames";
import * as React from "react";

import { IListProductsProps} from "./IListProductsProps";
import { IListProductsState} from "./IListProductsState";


export default class ListProducts extends React.Component<IListProductsProps>{



    public render():React.ReactElement<IListProductsProps>{
        return(
            <div>
                  <ul> 
                       {
                           this.props.products.map(product=>
                               <li>                
                                    {product.title}         
                               </li>
                           )
                       }
                  </ul>
                    
            </div>      
        );
    }
        
    

}