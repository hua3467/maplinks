/**
 * 
 * @param {JSON} node 
 * @returns 
 */
 const buildDom = (node) => {

    const ele = document.createElement(node.type);

    for ( key in node.props) {
        if (key.substring(0, 5) === "data_") {
            ele.dataset[key.substring(5)] = node.props[key]
        } else {
            ele[key] = node.props[key];
        }
    }

    if (node.events) {
        for ( key in node.events) {
            ele.addEventListener( key, node.events[key]);
        }
    }

    if (node.children) {
  
        node.children.forEach( child => {
            const childEle = buildDom(child);
            ele.append(childEle)
        });
    }

    return ele;
}

