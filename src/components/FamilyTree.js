import React from 'react';
import Tree from 'react-d3-tree';
import '../styles/FamilyTree.css';

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
      // _collapsed: true,
      nodeImageStyle: {imageHeight: 30, imageWidth: 30},
      nodeSvgShape: {
         shape: 'image',
         shapeProps: {
            r: 15,
            fill: 'red',
            href: "https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png", width: 50, height: 50,
         },
      },
      children: [
         {
            name: 'Dede 2',
            strokeWidth: 3,
            nodeSvgShape: {
               shape: 'image',
               shapeProps: {
                  r: 100,
                  fill: 'red',
                  href: "https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png", width: 50, height: 50,
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
   height: "100vh",
   marginLeft: "20px",
   marginBottom: "20px"
};
export default class FamilyTree extends React.Component {
   state = {};

   componentDidMount() {
      const dimensions = this.treeContainer.getBoundingClientRect();
      this.setState({
         translate: {
            x: dimensions.width / 30,
            y: dimensions.height / 2
         }
      });
   }

   render() {
      return (
         <div className="tree-content">
            <h1 className="tree-title">Soyağacı</h1>

            <div style={containerStyles} ref={tc => (this.treeContainer = tc)}>
               <Tree data={myTreeData1} translate={this.state.translate} orientation='horizontal'/>
            </div>
         </div>
      );
   }
}