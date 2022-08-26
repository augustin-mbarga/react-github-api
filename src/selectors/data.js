export const resultsDataFiltered = (dataArray) => dataArray.map((item) => (
    {
        id: item.id,
        imageUrl: item.owner.avatar_url,
        title: item.full_name,
        owner: item.owner.login,
        description: item.description || "No description."
    }
));