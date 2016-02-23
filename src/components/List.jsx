var React = require('react');
var ListItem = require('./ListItem.jsx');


var Ingregients = [{"id" : 1, "text" : "ham"}, {"id" : 2, "text" : "cheese"}, {"id" : 3, "text" : "potatoes"} ];


var List = React.createClass({

      render : function(){
          var ListItems = Ingregients.map(function(item){
              return <ListItem key={item.id} ingregient={item.text}/>

          });
        return (<ul>{ListItems}</ul>)
      }

});

module.exports=List;
