
var quotes = [{"author":"Mark Twain", "content":"Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover."},
{"author":"John Cage", "content":"I can't understand why people are frightened of new ideas. I'm frightened of the old ones."},
{"author":"Thomas Carlyle", "content":"The tragedy of life is not so much what men suffer, but rather what they miss."},
{"author":"Elbert Hubbard", "content":"The greatest mistake you can make in life is to be continually fearing you will make one."},
{"author":"Albert Einstein", "content":"Anyone who has never made a mistake has never tried anything new."},
{"author":"Warren Buffett", "content":"It's better to hang out with people better than you. Pick out associates whose behavior is better than yours and you'll drift in that direction."},
{"author":"Ayn Rand", "content":"The question is not who is going to let me, it's who is going to stop me."},
{"author":"Malcolm Forbes", "content":"The dumbest people I know are those who know it all."},
{"author":"George Eliot", "content":"If what you’re doing is not your passion, you have nothing to lose."},
{"author":"Walt Disney", "content":"All our dreams can come true – if we have the courage to pursue them."},
{"author":"Albert Ellis", "content":"The best years of your life are the ones in which you decide your problems are your own. You do not blame them on your mother, the ecology, or the president. You realize that you control your own destiny."},
{"author":"Milton Berle", "content":"If opportunity doesn’t knock, build a door."},
{"author":"Mark Twain", "content":"Let us so live that when we come to die even the undertaker will be sorry."},
{"author":"Lao Tzu", "content":"A good traveler has no fixed plans, and is not intent on arriving."},
{"author":"Saint Augustine", "content":"The World is a book, and those who do not travel read only a page."},
{"author":"Alan Keightley", "content":"Once in a while it really hits people that they don't have to experience the world in the way they have been told to."},
{"author":"Debbi Fields", "content":"The important thing is not being afraid to take a chance. Remember, the greatest failure is to not try. Once you find something you love to do, be the best at doing it."},
{"author":"Dr. Seuss", "content":"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."},
{"author":"Eleanor Roosevelt", "content":"Yesterday is history. Tomorrow is a mystery. Today is a gift. That's why we call it 'The Present'."},
{"author":"Mark Twain", "content":"Whenever you find yourself on the side of the majority, it is time to pause and reflect."},
{"author":"Tony Hsieh", "content":"Money alone isn't enough to bring happiness . . . happiness [is] when you're actually truly ok with losing everything you have."},
{"author":"Oscar Wilde", "content":"To live is the rarest thing in the world. Most people exist, that’s all."},
{"author":"Napoleon Hill", "content":"Don't wait. The time will never be just right."},
{"author":"Mahatma Gandhi", "content":"Live as if you were to die tomorrow. Learn as if you were to live forever."},
{"author":"Karen Lamb", "content":"A year from now you may wish you had started today."},
{"author":"Mahatma Gandhi", "content":"Live simply, so others may simply live."},
{"author":"Antoine de Saint-Exupery", "content":"Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away."},
{"author":"Albert Einstein", "content":"We act as though comfort and luxury were the chief requirements of life, when all that we need to make us happy is something to be enthusiastic about."},
{"author":"Jon Bentley and Douglas McIlroy", "content":"The key to performance is elegance, not battalions of special cases."},
{"author":"John Le Carre", "content":"A desk is a dangerous place from which to view the world."},
{"author":"Elbert Hubbard", "content":"One machine can do the work of fifty ordinary men. No machine can do the work of one extraordinary man."},
{"author":"Elbert Hubbard", "content":"Folks who never do any more than they are paid for, never get paid more than they do."},
{"author":"Faith Popcorn", "content":"The trouble in corporate America is that too many people with too much power live in a box (their home), then travel the same road every day to another box (their office)."},
{"author":"David Ramsey", "content":"We buy things we don't need with money we don't have to impress people we don't like."},
{"author":"Theodore Roosevelt", "content":"It is hard to fail, but it is worse never to have tried to succeed."},
{"author":"Seth Godin", "content":"Instead of wondering when your next vacation is, maybe you should set up a life you don't need to escape from."},
{"author":"Pappy Van Winkle", "content":"We make a fine bourbon, at a profit if we can, at a loss if we must, but always FINE BOURBON."},
{"author":"Winston Churchill", "content":"An army of lions led by a sheep is no match for an army of sheep led by a lion."},
{"author":"Grace Hopper", "content":"A ship in port is safe, but that is not what ships are for. "},
{"author":"Mark Twain", "content":"I never let my schooling get in the way of my education"},
{"author":"Roger Staubach", "content":"There are no traffic jams along the extra mile."},
{"author":"Albert Einstein", "content":"The world is a dangerous place, not because of those who do evil, but because of those who look on and do nothing."},
{"author":"Johann Wolfgang von Goethe", "content":"Whatever you think you can do or believe you can do, begin it. Action has magic, grace and power in it."},
{"author":"George Woodberry", "content":"Defeat is not the worst of failures.  Not to have tried is the true failure."},
{"author":"James Cash Penney ", "content":"It is always the start that requires the greatest effort."},
{"author":"Thomas Edison", "content":"The best thinking has been done in solitude."},
{"author":"Dave Ramsey", "content":"If you will live like no one else, later you can live like no one else."},
{"author":"Samuel Goldwyn", "content":"The harder I work, the luckier I get."},
{"author":"Maya Angelou", "content":"Life is not measured by the number of breaths we take, but by the moments that take our breath away."},
{"author":"Victoria Holt", "content":"Never regret. If it's good, it's wonderful. If it's bad, it's experience."},
{"author":"Aristotle", "content":"We are what we repeatedly do. Excellence, then is not an act but a habit."},
{"author":"Thomas Jefferson", "content":"One travels more usefully when alone, because he reflects more."},
{"author":"Jim Rohn", "content":"We must all suffer one of two things: the pain of discipline or the pain of regret and disappointment."},
{"author":"Thomas Alva Edison", "content":"I haven't failed, I've just found 10,000 ways that don't work."},
{"author":"Nassim Nicholas Taleb", "content":"The three most harmful addictions are heroin, carbohydrates and a monthly salary."},
{"author":"Ron Swanson", "content":"Never half-ass two things, whole-ass one thing."},
{"author":"C. S. Lewis", "content":"Humility is not thinking less of yourself, it's thinking of yourself less."},
{"author":"Charles Dickens", "content":"Every traveler has a home of his own, and he learns to appreciate it the more from his wandering."},
{"author":"Walter Anderson", "content":"Nothing diminishes anxiety faster than action."},
{"author":"Jim Rohn", "content":"If you don't design your own life plan, chances are you'll fall into someone else's plan."},
{"author":"Shantideva", "content":"If you can solve your problem, then what is the need of worrying? If you cannot solve it, then what is the use of worrying?"},
{"author":"Steve Jobs", "content":"Sometimes life is going to hit you in the head with a brick. Dont lose faith."},
{"author":"Eleanor Roosevelt", "content":"It takes as much energy to wish as it does to plan."},
{"author":"Oscar Wilde", "content":"I am so clever that sometimes I don't understand a single word of what I am saying."},
{"author":"Sarah Ban Breathnach", "content":"The world needs dreamers and the world needs doers. But above all, the world needs dreamers who do."},
{"author":"A. McLaughlin", "content":"When you listen, it's amazing what you can learn. When you act on what you've learned, it's amazing what you can change."},
{"author":"Leonardo Da Vinci", "content":"Simplicity is the ultimate sophistication."},
{"author":"Carl W. Buechner", "content":"They may forget what you said, but they will never forget how you made them feel."},
{"author":"Angela Wright", "content":"Be too busy to have time for regrets."},
{"author":"Prue Leith", "content":"Don't spend time with anyone you don't like."},
{"author":"Ted Smart", "content":"Work hard but make sure you enjoy life too."},
{"author":"Darren Richards", "content":"You only get one crack at a big opportunity so make sure you recognize it and grab it with both hands."},
{"author":"Brian Tracy", "content":"The more reasons you have for achieving your goal, the more determined you will become."},
{"author":"James M. Barrie", "content":"Nothing is really work unless you would rather be doing something else."},
{"author":"John Ruskin", "content":"The highest reward for a person's toil is not what they get for it, but what they become by it."},
{"author":"Aristotle", "content":"Pleasure in the job puts perfection in the work."},
{"author":"J. C. Penney", "content":"Long-range goals keep you from being frustrated by short-term failures."},
{"author":"Albert Payson", "content":"Win without boasting. Lose without excuse."},
{"author":"Stephen King", "content":"Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work."},
{"author":"Richard Bandler", "content":"Don't re-open old wounds in order to examine their origins. Leave them healed."},
{"author":"Brian Tracy", "content":"The act of taking the first step is what separates the winners from the losers."},
{"author":"Dr. Joe Vitale", "content":"A goal should scare you a little, and excite you a lot."},
{"author":"Mark Twain", "content":"A person who won't read has no advantage over one who can't read."},
{"author":"Nelson Mandela", "content":"It always seems impossible until it's done."},
{"author":"Christopher Morley", "content":"There is only one success - to be able to spend your life in your own way."},
{"author":"Wendell Johnson", "content":"Always and never are two words you should always remember never to use."},
{"author":"Henry Ford", "content":"Don't find fault, find a remedy."},
{"author":"Bob Dylan", "content":"A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do."},
{"author":"Confucious", "content":"A superior man is modest in his speech, but exceeds in his actions."},
{"author":"Ralph Waldo Emerson", "content":"You cannot do a kindness too soon, for you never know how soon it will be too late."}];


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
            <CommentList comments={quotes}/>
            </p></body>
            </html>
        )
    }
});