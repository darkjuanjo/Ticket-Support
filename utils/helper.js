module.exports = {
    select: function(category, option){
        return (category == option) ? 'selected="selected"' : '';
    }
}