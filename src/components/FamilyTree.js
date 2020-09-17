import React from 'react';
import Tree from 'react-d3-tree';
import '../styles/FamilyTree.css'

const myTreeData1 = [
    {
        name: 'Dede 1',
        children: [
            {
                name: 'Level 2: A',

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
    width: "100%",
    height: "100vh"
};
export default class FamilyTree extends React.Component {
    state = {};

    componentDidMount() {
        const dimensions = this.treeContainer.getBoundingClientRect();
        this.setState({
            translate: {
                x: dimensions.width / 2,
                y: dimensions.height / 40
            }
        });
    }

    render() {
        return (
            <div className="tree-content">
                <h1 className="tree-title">Soyağacı</h1>

                <div style={containerStyles} ref={tc => (this.treeContainer = tc)}>
                    <Tree data={myTreeData1} translate={this.state.translate} orientation='vertical' zoomable={false}/>
                </div>
            </div>
        );
    }
}