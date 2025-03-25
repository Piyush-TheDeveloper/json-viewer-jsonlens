import React, { useState } from 'react';

export const TreeView = ({ data }) => {
    const renderTree = (node) => {
        if (typeof node === 'object' && node !== null) {
            return Object.entries(node).map(([key, value]) => (
                <TreeNode key={key} nodeKey={key} value={value} />
            ));
        } else {
            return <span className="leaf-node">{node}</span>;
        }
    };

    return <div className="tree-view-container">{renderTree(data)}</div>;
};

const TreeNode = ({ nodeKey, value }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNode = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`tree-node ${isOpen ? 'open' : ''}`}>
            <span onClick={toggleNode} className="node-toggle">
                {isOpen ? '[-]' : '[+]'} {nodeKey}
            </span>
            {isOpen && (
                <div className="tree-node-content">
                    {typeof value === 'object' && value !== null ? (
                        <TreeView data={value} />
                    ) : (
                        <span className="node-value">{String(value)}</span>
                    )}
                </div>
            )}
        </div>
    );
};
