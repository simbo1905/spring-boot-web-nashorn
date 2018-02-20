
var Comment = createReactClass({
    render: function () {
        return (
            <div>
                <h2>{ this.props.author }</h2>
                <p>{ this.props.content } </p>
            </div>
        )
    }
});

var CommentList = createReactClass({
    render: function () {
        var commentNodes = this.props.comments.map(function ( comment ) {
            return <Comment author={ comment.author } content={ comment.content } key={ comment.id } />
        });

        return (
            <div className="comment-list">
                { commentNodes }
            </div>
        )
    }
});

createReactClass({
    render: function() {
        return (
            <html><head><title>Comments</title></head>
            <body><p>
            <CommentList comments={this.props.comments}/>
            </p></body>
            </html>
        )
    }
});