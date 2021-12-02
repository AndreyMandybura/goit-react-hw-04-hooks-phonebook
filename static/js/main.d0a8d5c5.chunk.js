(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{19:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),o=n.n(r),s=n(12),i=n(3),l=n(4),u=n(6),m=n(5),d=n(13),b=n(11),h=n(2),j=n.n(h),p=n(0),f=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){t.setState(Object(b.a)({},e.currentTarget.name,e.currentTarget.value))},t.handleSubmit=function(e){e.preventDefault(),console.log(t.state),t.props.onSubmit(t.state),t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("form",{onSubmit:this.handleSubmit,className:j.a.form,children:[Object(p.jsxs)("label",{className:j.a.label,children:[" ","Name",Object(p.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:this.state.name,onChange:this.handleChange,className:j.a.inputName})]}),Object(p.jsxs)("label",{className:j.a.label,children:["Number",Object(p.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:this.state.number,onChange:this.handleChange,className:j.a.inputNumber})]}),Object(p.jsx)("button",{type:"submit",className:j.a.button,children:"Add contact"})]})}}]),n}(a.Component),C=f,O=n(8),v=n.n(O);var _=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(p.jsx)("div",{children:Object(p.jsx)("ul",{className:v.a.list,children:e.map((function(t){return Object(p.jsxs)("li",{className:v.a.listItem,children:[t.name,": ",t.number,Object(p.jsx)("button",{onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))})})},g=n(9),x=n.n(g);var N=function(t){var e=t.value,n=t.onChange;return Object(p.jsxs)("div",{children:[Object(p.jsx)("h4",{className:x.a.header,children:"Find contacts by name"}),Object(p.jsx)("input",{type:"text",name:"filter",value:e,onChange:n,className:x.a.filterInput})]})},y=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){var n=e.name,a=e.number,c={id:Object(d.a)(),name:n,number:a};t.state.contacts.some((function(t){return t.name.toLowerCase()===c.name.toLowerCase()}))||t.state.contacts.some((function(t){return t.number===c.number}))?alert("".concat(c.name," is already in contacts!")):t.setState((function(t){var e=t.contacts;return{contacts:[c].concat(Object(s.a)(e))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.handleChangeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.handleContactFilter=function(){return t.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t.state.filter.toLowerCase())}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t){this.state.contacts!==t.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Phonebook"}),Object(p.jsx)(C,{onSubmit:this.addContact}),Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)(N,{onChange:this.handleChangeFilter,value:this.statefilter}),Object(p.jsx)(_,{contacts:this.handleContactFilter(),onDeleteContact:this.deleteContact})]})}}]),n}(a.Component),S=y;o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(S,{})}),document.getElementById("root"))},2:function(t,e,n){t.exports={form:"ContactForm_form__1Sw7-",button:"ContactForm_button__DvJPa",label:"ContactForm_label__27Anl",inputName:"ContactForm_inputName__1ig12",inputNumber:"ContactForm_inputNumber__1GHQA"}},8:function(t,e,n){t.exports={list:"ContactList_list__37EZn",listItem:"ContactList_listItem__2PgW-"}},9:function(t,e,n){t.exports={filterInput:"Filter_filterInput___YfoP",header:"Filter_header__3zUea"}}},[[19,1,2]]]);
//# sourceMappingURL=main.d0a8d5c5.chunk.js.map