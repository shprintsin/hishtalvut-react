export function convertArray(nodes:any[]) {
    // Filter out the parent nodes
    const parents = nodes.filter(node => node.childItems.nodes.length > 0);

    // Map the parent nodes to the new structure
    const result = parents.map(parent => {
        return {
            title: parent.label,
            uri: parent.uri,
            id: parent.databaseId,
            children: parent.childItems.nodes.map(child => {
                return {
                    title: child.label,
                    uri: child.uri,
                    id: child.databaseId
                };
            })
        };
    });
    return result;
}