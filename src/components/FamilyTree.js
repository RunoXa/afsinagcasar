import React from 'react';
import Tree from 'react-d3-tree';
import '../styles/FamilyTree.css';
import WorkImage from "../images/work-shift.png";

// const svgSquare = {
//     shape: 'rect',
//     shapeProps: {
//         width: 100,
//         height: 50,
//         x: -10,
//         y: -10,
//     }
// };
const myTreeData1 = [
   {
      name: 'Dede 1',
      textLayout: {textAnchor: "start", x: 1, y: 30, transform: undefined},
      // _collapsed: true,
      nodeImageStyle: {imageHeight: 20, imageWidth: 30},
      nodeSvgShape: {
         shape: 'image',
         shapeProps: {
            r: 15,
            y: -50,
            fill: 'red',
            href: "https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png", width: 80, height: 80,
         },
      },
      children: [
         {
            name: 'Dede 2',
            textLayout: {textAnchor: "start", x: 1, y: 30, transform: undefined},
            nodeSvgShape: {
               shape: 'image',
               shapeProps: {
                  r: 100,
                  y: -50,
                  fill: 'red',
                  href: "https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png", width: 80, height: 80,
               },
            },
            children: [
               {
                  name: 'Level 2: A',
               },
               {
                  name: 'Level 2: B',
                  children: [
                     {
                        name: 'Level 2: A',
                     },
                     {
                        name: 'Level 2: B',
                     },
                     {
                        name: 'Level 2: B',
                        children: [
                           {
                              name: 'Level 2: A',
                           },
                           {
                              name: 'Level 2: B',
                           },
                           {
                              name: 'Level 2: B',
                           },
                        ],
                     },
                     {
                        name: 'Level 2: B',
                     },
                  ],
               },
               {
                  name: 'Level 2: B',
               },
               {
                  name: 'Level 2: B',
               },
            ],
         },
         {
            name: 'Level 2: B',
         },
      ],
   },
];

const containerStyles = {
   width: "85%",
   height: "110vh",
   marginLeft: "20px",
   marginBottom: "20px",
   border: "1px solid grey"
};
export default class FamilyTree extends React.Component {
   state = {};

   componentDidMount() {
      const dimensions = this.treeContainer.getBoundingClientRect();
      this.setState({
         translate: {
            x: dimensions.width / 100,
            y: dimensions.height / 2
         }
      });
      window.scrollTo(0, 0);
   }
   render() {
      return (
         <div className="tree-content">
            <h1 className="tree-title">Soyağacı</h1>
            <div style={{textAlign: "center"}}><img src={WorkImage} alt="WorkImage"/></div>
            {/*<button>Collapse All</button>*/}
            <div style={containerStyles} ref={tc => (this.treeContainer = tc)}>
               <Tree data={myTreeData1} translate={this.state.translate} orientation='horizontal'/>
            </div>
         </div>
      );
   }
}