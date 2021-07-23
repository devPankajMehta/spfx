import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'WebpartListusersWebPartStrings';
import WebpartListusers from './components/WebpartListusers';
import { IWebpartListusersProps } from './components/IWebpartListusersProps';

export interface IWebpartListusersWebPartProps {
  description: string;
  title:string
}

export default class WebpartListusersWebPart extends BaseClientSideWebPart<IWebpartListusersWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IWebpartListusersProps> = React.createElement(
      WebpartListusers,
      {
        description: this.properties.description,
        title:this.properties.title
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                PropertyPaneTextField('title', {
                  label: "title"
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
