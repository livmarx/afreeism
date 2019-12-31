<template>
  <div>
    <div class="HomePage">
      <div class="Top"> 
        <div style="padding:0px 20px;">Login</div>
        <div style="padding:0px 20px;">Contribute</div>
      </div>
     <div class="Logo">
        <LogoCode />
      </div>
      <div class="PageTitle">
        <span id="Back">What Is Afreeism?</span>
      </div>
      <TopMenCode />
      
      <div class="Main">
        <div class="TopicCategories">
          <div class="CatInactive"><routerLink :to="{name: 'Basics'}">The Basics of Afreeism</routerLink></div>
          <div class="CatInactive"><routerLink :to="{name: 'Policy'}">Afreeist Social Policy</routerLink></div>
          <div class="CatActive">Personal Afreeism</div>
        </div>
        <div class="TopicGrid">
          <div style="margin-left:20px">
            <p>Click on the topics below.  For a more extended and thoughtful discussion of afreeism, 
              please see the <routerLink :to="{name: 'AfreeistHandbook'}">Afreeist Handbook</routerLink>.
            </p>
          </div>
        </div>
        <div class="TopicGrid">
          <div class="Topic">
            <a href="#Humility">Humility</a>
          </div>
          <div class="Topic">
            <a href="#Wonder">Wonder</a>
          </div>
          <div class="Topic">
            <a href="#Gratitude">Gratitude</a>
          </div>
          <div class="Topic">
            <a href="#Tolerance">Tolerance</a>
          </div>
          <div class="Topic">
            <a href="#Self-Acceptance">Self-Acceptance</a>
          </div>
          <div class="Topic">
            <a href="#Engagement">Engagement</a>
          </div>
          <div class="Topic">
            <a href="#Resilience">Resilience</a>
          </div>
          <div class="Topic">
            <a href="#Meaning">Meaning</a>
          </div>
         
        </div>
        <div class="MainTextTopics">
          <div  id="Humility" class="TopicExplanation" >
            <div class="TopicHeading">Humility</div>
            <p>
              The world often lacks humility.  We much too often run into people who 
              have inflated views of themselves and their accomplishments.  How 
              refreshing it is, then, to meet people who understand that their worlds 
              are just a tiny part of the universe and who realize that their 
              accomplishments had many contributors.  From the afreeist perspective, 
              there are four aspects of humility:
            </p>
            <p>
              1.	Humans are not exempt from the laws of nature.  We may be special, 
              but we are not that special.
            </p>
            <p>
              2.	Our lives are just a speck in time compared to the sweep of time and 
              the immense web of causation.
            </p>
            <p>
              3.	The web of causation is so complex and awesome and that we really know so 
              little about what there is to know.
            </p>
            <p>
              4	Our accomplishments and our failures are not ours, but rather were determined 
              to occur long before we existed.
            </p>
            <p>
              These realizations put our lives in perspective.  They help us to avoid taking 
              ourselves so seriously.  They encourage us to listen and learn, to be more willing 
              to say “I don’t know,” and to be humble about our so-called accomplishments.  
              Let us look at each of these.
            </p>
            <p>
            <b>The Laws of the Universe Apply to Us</b>
            </p>
            <p>            
              Determinism assumes that the laws of nature, the laws that govern the 
              rest of the universe, also apply to us.  This may seem evident to many, 
              but proponents of free will, most notably philosophical libertarians, 
              argue that humans have a special faculty that allows them to be exempt 
              from the laws of physics and causation.  Yet there is strong evidence 
              (as well as commonsense) that humans are just like other physical phenomena.  
              Indeed, no event has ever been observed that has not been the result of 
              causes or (in the subatomic realm) randomness.  True, there are some 
              very special things about humans, in our ability to make forward-looking 
              decisions based on reason, in our ability to communicate through language 
              and metaphor, in our ability to adapt to our environment and engineer our 
              environment to adapt to us.  (Some of these we share with other animals.)  
              But we are not so special that the laws of physics do not apply to us.  
              We are not separate from the universe, but part of it.
            </p>
            <p>
              <b>The Sweep of Time and Space</b>
            </p>
            <p>
              Afreeism recognizes that the present is the result of causes 
              (and perhaps some quantum events) that stretch back to at least 
              the big bang, almost 14 billion years ago.    The present is 
              just a speck in time.  The Stoics of ancient Greece and Rome, 
              who were determinists, understood this.  Seneca wrote:
            </p>
            <p style="margin-left:20px;">
              Imagine the vast abyss of time, and think of the entire universe; 
              then compare what we call a human lifetime to that immensity. 
              You will see how tiny a thing it is that we wish for and seek to prolong.  
            </p>
            <p>
              And also:
            </p>
            <p style="margin-left:20px;">
              Present time is very short – so short, indeed, that for some it seems not to exist. 
              It is always in motion, it flows and hurries on; it ceases to be before it arrives. 
            </p>
            <p>             
              Marcus Aurelius concurred:
            </p>
            <p style="margin-left:20px;">
              Short-lived are both the praiser and the praised, 
              the rememberer and the remembered. And all this in just one corner of this 
              continent – and yet even here we are not in accord with each other, nor with 
              ourselves; and the whole of the earth, too, is a speck.
            </p>
            <p> 
              Not only is the present just a speck of time in the vast evolution of the universe, 
              our corner of the universe is unimaginably small compared to vastness of space.  
              The Stoics believed that by understanding how small we are compared to the 
              immensity of time and space, we could free ourselves from concern with what is 
              happening to us.  Whatever our concerns, they are small and fleeting compared to the universe.
              Marcus Aurelius again:
            </p>
            <p style="margin-left:20px;">
You can get rid of a great number of your annoyances because they lie entirely in your own head. You will clear ample space for yourself by comprehending the scale of the universe in your mind, by observing the infinity of time, and by studying carefully the rapid change of each part of each thing – how short the time is from birth to dissolution, the time before it an abyss, the time afterwards also endless.  
</p>
<p>
And again,
</p>
<p style="margin-left:20px;">
Think often about how quickly everything that exists, and that is coming into being, is carried away and disappears. For substance is like a river that constantly flows on: the action is constantly changing, and the causes of it operate in endless variations; almost nothing is fixed. And next to us is the boundless abyss of what has passed by and what is about to be, into which all things are lost. How then is he not a fool, who gets worked up and carried away over these things, complaining as if they were enduring and troublesome?  
</p>
<p>
I should say that the Stoics did not say that we should not enjoy the moment.  Quite the contrary.  Nor did they believe in inaction.  They just believed that we take ourselves too seriously and that we should lighten up a bit.  The Buddha concurs:
</p>
<p style="margin-left:20px;">
Most people never realize that all of us here shall one day perish. But those who do realize that truth settle their quarrels peacefully. 
</p>
<p>
<b>The Willingness to Say “I Don’t Know”</b>
</p>
<p style="margin-left:20px;">
“It ain’t what you don’t know that gets you into trouble. It’s what you know for sure that just ain’t so.” 
</p>
<p style="margin-left:60px;">
	Author Unknown 
</p>
<p>
The universe is deterministic.  Events unfold because of a chain of causes.  This does not mean that the causal chain is simple.  Indeed, its complexity boggles the mind.  We know so little about how the universe unfolds, but science continues apace and we make progress every day.  We have put a person on the moon, we have eradicated smallpox, we have created cellphones and supercomputers.  Still, much eludes us.  People still die of cancer.  And many big questions also elude us.  How did we get here?  How did life begin?  Does it have any purpose at all?  What does it mean to live the good life?  
</p>
<p>
The most appropriate answer to most of these questions is, for the present,  “We don’t know.”  Yet this seems to be a difficult admission for many, if not most.  There are those who purport to have the answer to these questions of existence, purpose, and meaning.  The earth was created in six days.  Our purpose is to serve a god.  Suffering is a test of faith.  If we do the right things, we can attain heaven or nirvana.  If we fail, then hell awaits us, or perhaps reincarnation to try again.  So many answers, so little evidence!
</p>
<p>
Causal determinism eschews the metaphysical and the supernatural.  Events are caused and, through scientific inquiry, perhaps we will learn a little about how the universe functions and where it and we are heading.  Maybe we can get a bit better at making predictions.  More than anything, however, the deterministic universe tells us how much we do not know.  The causal web is complex and often obscure.
</p>
<p>
This applies especially to the big issues of existence, meaning, and purpose.  These are important issues and have been the subject of study and speculation throughout the centuries.  It is only natural to want to know the answers.  We need to continue to experiment, to collect data, and to ponder.  We also have to accept that we may never have the answers.”  Causal determinism holds out hope that each day we might understand something better than we do the day before, but the enormous complexity of causal chains means that we will always have uncertainty.  The humility of a simple “We don’t know” is vastly better than making up “truths” that have no evidence to support them.  
</p>
<p>
<b>The Illusion of Accomplishment</b>
</p>
<p>
In Chapter 6, in reference to afreeist social policy, I spoke of the myth of deservedness and the illusion of accomplishment.  These concepts apply, perhaps with even more force, to our personal lives.  In a deterministic world, our accomplishments are not really ours but rather the result of a chain of causation.  True, we may be smart and creative, and we may have worked hard, but our propensity for hard work, our intelligence, and our creativity were all determined long before we were born.  
</p>
<p>
It is important to understand the full implication of this.  In a causal universe, hard work is an input (a cause) which, when combined with other inputs, can lead to success in the future.  
</p>
<p>
However, when we look at our accomplishments, we should realize that they simply had to happen.  They were determined long before we were born.  We just happened to be the instrument.  In reality, we were just along for the ride.  This realization should give us an abiding sense of humility.  The Buddha expressed this same sentiment:
</p>
<p>
Even as a solid rock is unshaken by the wind, so are the wise unshaken by praise or blame. 
</p>
<p>
Determinism tells us that accomplishment is an illusion.  We should enjoy it but not become so full of ourselves.  Our failures are similar.  They too are the product of a chain of causation.  
</p>
<p>
Understanding the deterministic nature of the universe can also mitigate what psychologists call “serf-serving bias.”   Self-serving bias is the propensity to interpret events in a way that increases our self-esteem.  One manifestation of this is to take credit for whatever goes right but to blame someone else for whatever goes wrong.  In the deterministic world, however, assigning blame and taking credit just do not make sense.
</p>
<p>
Again, even though we cannot take credit for what unfolds, this does not mean that we should not enjoy the ride.  In fact, we should enjoy it all the more.  It is like stumbling on a great restaurant.  We were just fortunate enough to be in the right place at the right time.  The serendipity of it does not diminish our enjoyment.  Perhaps it even increases it.
</p>

            <p><a href="#Back">Back to top</a></p>
          </div>
          <div  id="Wonder" class="TopicExplanation" >
            <div class="TopicHeading">The Wonder Of It All</div>
<p>
Learning to be humble and to accept ourselves and others, removes impediments to joy.  Being active in trying to improve our own lives and those of others (without the burdens of regret, remorse, or despair), can be tremendously rewarding.  I believe that the afreeist perspective, besides being the most accurate representation of reality, can make life more joyful.  An understanding of the deterministic universe can make us feel more connected, help us live more in the moment, encourage us to take steps to change the world for the better, and perhaps make us more appreciative and thankful for our little time upon the earth.  
</p>
<p>
As we ponder the universe, it is easy to become overcome by its magnitude, complexity, and beauty.  Using space telescopes such as the Hubble, scientists have found evidence of over 100 billion galaxies with hundreds of billion of stars each.  Black holes, neutron stars, quasars, and other bizarre phenomena populate the universe.  And at the other end of the scale, atoms, electrons, protons, neutrons, photons, quarks, neutrinos, bosons, and antimatter interact in strange non-Newtonian ways.  Life itself in its dizzying variety and complexity astounds.  Organisms strange and wonderful live in the most uninhabitable places, such as undersea volcanic vents and in the wind currents circling the earth.  
</p>
<p>
Interdependent causal chains of immense complexity underlie all of this.  We understand a small part of these chains, typically taken in isolation.  We see only parts of an immense swirling puzzle.  The sheer complexity of it all, that the universe should produce such a grand tapestry, and that we can know only a bit of it for such a short time should leave us awestruck.  As Christopher Hitchens says,
</p>
<p>
This is more than enough mystery and marvel for any mammal to be getting along with. 
</p>
<p>
Wonder is the other side of the humility coin.  Humility is the recognition of our insignificance; wonder is the appreciation of the magnitude, complexity, and beauty of the world around us. Stand at the edge of the Grand Canyon on a clear night with the Milky Way like a luminous cloud.  Ponder the beauty and complexity of the universe.  It does not get any better than that.
</p>

<p><a href="#Back">Back to top</a></p>
</div>
<div  id="Gratitude" class="TopicExplanation" >
  <div class="TopicHeading">Gratitude</div>
<p>
Gratitude is being thankful.  Does this survive determinism?  If someone does something for us, is it not because it has been determined?   Why should we be thankful?  And of the appreciation we may feel simply for being alive?  I think of the haunting song of Mercedes Sosa:
</p>
<p style="margin-left:20px;">
Gracias a la vida que me ha dado tanto <br />
Me dio dos luceros que cuando los abro <br />
Perfecto distingo lo negro del blanco <br />
Y en el alto cielo su fondo estrellado <br />
Y en las multitudes el hombre que yo amo
</p>
<p>
To be grateful is to be appreciative.  We can be grateful for a beautiful sunset or a warm summer’s day.  We can be grateful for something someone has done for us.  Of course, the sunset or the warm summer’s day are events that are caused by the forces unleashed a long time ago.  But so are acts of kindness.  Gratitude does not require that someone give us something of their own free will.  Gratitude makes sense in a deterministic world.
</p>
<p>
Feeling gratitude is one thing, but does it makes sense to express it to someone who has done something for us?  Take, for example, a fine meal prepared for you by a friend.  Are you appreciative?  Did the meal bring you pleasure?  If so, why not express it?  First, it will please your host.  Giving pleasure is a good thing.  Second, to the extent that your host is pleased by your expression of gratitude, it encourages future generous behavior.  Third, it conveys information to your host.  Knowing that the meal was pleasing should help your host understand what sorts of things are pleasing to others.  Finally, it probably makes us feel good as well.  Expressing gratitude makes sense in a deterministic world.
</p>
<p><a href="#Back">Back to top</a></p>
</div>
<div  id="Tolerance" class="TopicExplanation" >
  <div class="TopicHeading">Tolerance</div>
  <p>
We tend to judge other people.  Sometimes we judge people based on their actions; other times we judge people based on their intentions.  We often judge people on circumstances that we know to be wholly outside of their control.  For example, we might judge people because of their race, their gender, or their sexual orientation.
</p>
<p>
Afreeism emphasizes that who people are, how they act, and what intentions they have are all determined.  All of us know (or should know) that this is true for things like skin color, sex, and sexual orientation.  But the same is also true of actions.  Because the universe is deterministic, all actions were determined long before any of the actors were alive.  
</p>
<p>
As a result, we should dispense with blame, anger, and condemnation.  Without free will, people are not morally responsible for how they acted or for their intentions when they acted.  Moral responsibility of this sort does not exist in a deterministic universe.   
</p>
<p>
This does not mean that people should not be punished.  It does not suggest that there should be no consequences for actions.  Deterrence, for example, makes perfect sense in the deterministic in which we live, if it is intelligently and compassionately applied.  But there is no room for blame, retribution, ridicule, condemnation, righteous anger or shaming.   
</p>
<p>
But we can go further than this.  Afreeism reminds us that everything is contextual.  Everything is causal.  Afreeism encourages us to look for reasons.  Rather than blaming, we should ask, why did that person act that way?  Why did she feel that way?  Why did she want to do what she did?  The causal universe prompts us to look for causes.  Trying to figure out the causes can lead to greater understanding, which in turn can help us react better to the situation.  It can also engender greater empathy.  Goethe once wrote:
</p>
<p>
With only the slightest shift in the balance of my character I believe there is no crime I could not commit. 
</p>
<p>
In other words: there but for the grace of the universe go I.  All of us are driven to what we do by causal forces unleashed eons ago.
</p>
<p>
Life can be more joyful if we can shed some of the anger that we have about other people, about the way they act, about their intentions, about the way that they have treated us.  A Buddhist sage once analogized an angry deed with grabbing hot coals to throw at someone.  It is the thrower who gets burned.  Life just feels better when we treat our fellow humans as companions in life’s journey, rather than as adversaries or miscreants.  It feels good to stop judging.
</p>
<p>
<b>Love, Actually</b>
</p>
<p>
Even romantic love makes sense in a deterministic universe.  Indeed, a rich emotional life can contribute to our happiness.  Most humans have developed a sense of empathy.  Empathy, like other emotions is a neurological phenomenon.  It serves both to make us happy and to make others in our society happy.  In general, we all benefit when the members of society act with empathy, kindness, and love.  Understanding that the universe is deterministic does not change this.  Indeed, as indicated above, understanding that the universe is deterministic removes many of the impediments to these positive emotions.  We can love without debating whether someone deserves love.  We can be kind without pondering whether someone deserves kindness.
</p>
<p>
In short, afreeism teaches tolerance for other people, for who they are and for how they act.  It also teaches us to look for reasons for why people act as they do.  Both these aspects of tolerance can only make our society work better and make us happier.
</p>
<p><a href="#Back">Back to top</a></p>
</div>
<div  id="Self-Acceptance" class="TopicExplanation" >
<div class="TopicHeading">Self-Acceptance</div>
<p>
It is hard to be alive without messing up, often significantly.  The more one lives, the more opportunity one has to make mistakes.  We often have feelings of guilt, regret, and remorse for these actions or inactions.  Feelings of guilt pervade our society.  One article that appeared in the Guardian in 2017 was entitled, “Why Do We Feel So Guilty All The Time?”  Its author laments:
</p>
<p style="margin-left:20px;">
Filial guilt, fraternal guilt, spousal guilt, maternal guilt, peer guilt, work guilt, middle-class guilt, white guilt, liberal guilt, historical guilt, Jewish guilt: I’m guilty of them all.   
</p>
<p>
Guilt has been a major focus of psychological studies and theorizing at least since the time of Freud, who had a lot to say on the subject.  A Google search for “scholarly articles on guilt” turns up over 2.5 million hits.  Therapists routinely deal with feelings of guilt in their practices.
</p>
<p>
One of the great inventions of the Catholic Church is confession.  In the Catholic Church you can go into the confessional, confess your sins, do your penance (typically saying a handful of prayers), and then you are forgiven.  You can move on with your life.  And this includes the worst possible sins.  Of course, not all of our errors are sins.  However, for those that are sins, the sacrament of confession confers forgiveness on the sinner and can alleviate feelings of guilt, regret, and remorse.
</p>
<p>
But afreeism is even better.  In our deterministic universe, guilt, regret, and remorse are irrational.  Since the world is determined, then we made the only decisions we could have made.  True, we made choices, but those choices were based on preferences and values that were caused.  How can we blame ourselves for past actions when those actions were determined?  Someone who really understands the deterministic nature of the universe should be free of guilt, regret, remorse, and self-blame.  Even if you ended up where you are because of poor values, poor judgment, uncontrolled emotions or unhealthy desires, all of these were determined by a chain of causation dating back to long before you were born.    
</p>
<p>
Pain in life is unavoidable.  We sometimes hurt and we sometimes hurt other people.  It is quite natural to feel pain and sadness when we see others, both loved ones and strangers, in pain.  But it does not help to add regret, remorse, shame or guilt to our pain and sadness.  We should learn from the past.  We should analyze the chain of causation that led to undesirable ends – doing so will help us act more wisely in the future – but we should not beat ourselves up over past choices.  
</p>
<p>
<b>An Exercise</b>
</p>
<p>
People can be full of regret and remorse.  They made the wrong career choice.  They married the wrong person, and stayed in the unhappy marriage for far too many years.  They had an affair, which destroyed their marriage and ruined their relationship with their children.  They made the wrong financial decisions.  They put their money in foolish investments or they lost it gambling.  They avoided going to the doctor for too long, allowing the cancer to progress.  They put their kids into the wrong schools.  They were absent as parents.  They trusted the wrong people.  
</p>
<p>
Afreeism teaches us that it makes no sense to feel regret for these actions.  But regret is a powerful emotion and we have been socially programmed to feel it.  How do we overcome it?
</p>
<p>
One way is through visualization.  Imagine that you are a free-floating bodiless soul.  (This is just an exercise.  You do not actually have to believe in the existence of souls.)  What would happen if you were randomly placed into the body of someone you did not know?  (Suppose that the previous soul had to vacate the body for unknown reasons and that you are taking its place.)  The body that you have come to inhabit has a history, which is now your history.  What do you do?
</p>
<p>
In whatever body you have been placed, you must decide how to move forward with the new life that you have just inherited.  For a start, you make an assessment of your present situation.  Are you married or single, what is your financial situation, do you have children, what are your children’s situations, etc.  Clearly you will have challenges.  There are things from your inherited history that you will have to deal with.  Perhaps the body that you are in committed some crime or insulted someone or had a bad relationship with her mother.  True, there may be some stories from this history that make you smile and feel good.  Others might make you cringe.  Others will teach you things.  You might prefer that the person who formally occupied the body had not done some of the things she did, but you cannot feel any personal responsibility for them or any personal regret for having done them, because you were not even there.
</p>
<p>
In a sense, this is actually the situation we are in.  Sure, we did some things that we wish we had not been caused to do, but we cannot regret them because they simply had to happen.  We now have to assess our situation and deal with what we have going forward.  
</p>
<p>
This leads to the following morning exercise:  Get up, have your cup of coffee or tea and then sit quietly for a moment imagining that you have simply been put into this body and into this life this very morning.  No regrets, no guilt.  You are not responsible for what has happened.  Now assess where you are and move on.  
</p>
<p>
Not only will this exercise help rid your psyche of feelings of guilt, regret, and remorse, it might also give you an appreciation for the good fortune that you have had.  Of all the bodies that you could have inhabited, you somehow ended up with this one.  For many of us, this is far better than most of the other bodies in the world that we could have gotten stuck in.  If we have had this good fortune, then it is important to remember that this is not true for everyone.  Some people have inherited histories, character traits, family situations and health conditions far worse than ours.  They are not responsible for this.  Their lives were determined just as much as ours.  This brings us back again to that old (modified) chestnut: there but for the grace of the universe go I.  This should give us a bit of empathy.
</p>

<p><a href="#Back">Back to top</a></p>
</div>
<div  id="Engagement" class="TopicExplanation" >
<div class="TopicHeading">Engagement</div>
<P>
Engagement is our willingness and commitment to get involved, that is, to engage with the universe and the beings that inhabit it.  Resilience is our ability to take what the universe throws at us.  Here are some aspects of engagement and resilience:
</p>
<p style="margin-left:20px;">
1.	Connectedness.  Being engaged is understanding that we are all connected.  We are connected to each other and to everything animate and inanimate through the complex causal web that is the universe.
</p>
<p style="margin-left:20px;">
2.	Presence.  Being engaged involves living in the present.  It means not being fixated on the past or paralyzed by the future.  The past is useful for learning, but we are not responsible for it.  We can affect the future, but we should not be overwhelmed by it.  We live in the present moment.
</p>
<p style="margin-left:20px;">
3.	Inquisitiveness.  Being engaged is being inquisitive.  There are both aesthetic and practical sides to this.  Aesthetically, the universe is so vast, so splendid in its detail and variety, so full of unexpected beauty, that it invites our curiosity.  On the practical side, what we do affects the future.  To understand how best to affect the future, we need to understand as much as we can about how the world works.  In order to engage productively with the universe, we need knowledge.  What makes our world work?  What makes our society function for the benefit of all?  What makes our fellow humans tick?
</p>
<p style="margin-left:20px;">
4.	Involvement.  What we do matters.  Afreeism invites us to get involved.  The foundation of afreeism is the understanding that the universe is causal.  Because it is causal, we have the ability to affect the future.  
</p>
<p>
Let us look at each of these aspects of engagement and resilience.
</p>

<p><b>Connectedness</b></p>

<p>
Being part of the universe means that we are connected to it.  Because of the web of causation, everything connects with, affects, and is affected by everything else.  Determinism reminds us that we are not islands.  
</p>
<p>
Buddhism, whose writings evidence a deterministic worldview, observes that the world is so connected and seamless that one cannot even tell where a person ends and the rest of the universe begins.  This, in Buddhism, is the denial of the self.  As such, it does not make sense even to talk about individuals as if they were separate entities.  In Buddhism, we are part of the web of the universe and there is no real boundary between the set of causes that we sometimes refer to as “me” and those that we sometimes refer to as “not me.”  This profound sense of connectedness is completely consistent with the deterministic universe.
</p>
<p>
Even if we do not accept the Buddhist denial of self, we can acknowledge that the boundary between the self and the rest of the universe is fuzzy.  Who we are is not determined just by what we are inside.  Rather, we swim in a sea of expectations.  The expectations of others affect how we think, how we emote, and what we consider to be appropriate behavior.  Have you ever moved to a new city to start a new life, a city where you know no one and no one knows you?  This probably happens once or twice in one’s lifetime, and often when one is young.  I have talked to people about this experience.  The overwhelming feeling most people seem to have when they do this is exhilaration, a feeling that anything is possible.  This comes from throwing off the web of expectations which box us in and define who we are.  It is also a reminder about how connected we are.
</p>
<p>
<b>Presence</b>
</p>
<p>
People often forget to live in the moment.  They are either mired in the past, about what should have or could have been, or worried about the future.  As we saw in Chapter 14, afreeism teaches us to let go of the past.  Feelings of guilt, regret, remorse, and self-blame, do not make sense.  Afreeists look to the past for only two things, good memories and good lessons.  Other than that, we should let go.
</p>
<p>
As for the future, since we can affect it, we do need to spend some time considering it.  What we do today will affect what happens tomorrow.  So we should try to make the best choices possible.  
</p>
<p>
But do we have to agonize over the future?  Agonizing about the future is often the result of projected regrets.  That is, we are afraid that in the future we will regret the choice we are making now.  We are afraid that we will be kicking ourselves.  Such fears can be paralyzing.
</p>
<p>
In a deterministic universe, it does not make sense to have regrets either now or in the future.  This will help us to make whatever decisions we need to make now, and then get back to enjoying today.  
</p>
<p>
The Stoics had this perspective.  Here is the Roman Stoic Marcus Aurelius:
</p>
<p style="margin-left:20px;">
Keep this in mind, that each of us lives only this present and indivisible moment. Everything else has either already been lived or is uncertain. 
</p>
<p>
The Stoics believed that most people spend too much time fixated on both the past and the future.  Rather we should make the best decisions we can and then stop worrying.  The past is over and the future will work out as it will.  Here is Marcus Aurelius again:
</p>
<p style="margin-left:20px;">
Do not disturb yourself by imagining your whole life at once. Don’t always be thinking about what sufferings, and how many, might possibly befall you. Ask instead, in each present circumstance: “What is there about this that is unendurable and unbearable?” You will be embarrassed to answer.  
</p>
<p>
Seneca agrees:
</p>
<p style="margin-left:20px;">
Memory recalls the torments of fear, and foresight anticipates them. It is only the present that makes no one wretched. 
</p>
<p>
Again, Seneca was not saying that we should ignore either the past or the future.
</p>
<p style="margin-left:20px;">
Both the future and the past can delight us – one in anticipation, the other in memory – but one is uncertain and may not happen, while the other cannot fail to have been. What madness it is, therefore, to lose our grip on that which is the surest thing of all!  
</p>
<p>
The surest thing of all is the present.  If we rest too much of our happiness on what has been and what will be, we will be missing out on the most important source of happiness: that which is happening now.  Seneca again:
</p>
<p style="margin-left:20px;">
Think about individuals; consider men in general; there is not one whose life is not focused on tomorrow. What harm is there in that, you ask? Infinite harm. They are not really living. They are about to live.  
</p>
<p>
And again:
</p>
<p style="margin-left:20px;">
Two things we must therefore root out: fear of distress in the future and the memory of distress in the past. The one concerns me no longer. The other concerns me not yet.  
</p>
<p>
The Buddha concurs:
</p>
<p style="margin-left:20px;">
Let not a person revive the past 
<br />
Or on the future build his hopes 
<br />
For the past has been left behind 
<br />
And the future has not been reached 
<br />
Instead with insight, let him see 
<br />
Each presently arisen state
<br />
 Let him know that and be sure of it 
<br />
Invincibly and unshakably 
<br />
Today the effort must be made; 
<br />
Tomorrow, death may come, who knows? 
</p>
<p>
The modern day practice of mindfulness (a practice highly influenced by Buddhism), largely adopts this perspective.
</p>
<p>
<b>Inquisitiveness</b>
</p>
<p>
Afreeism emphasizes the deterministic causal nature of the universe, the idea that the universe is governed by laws, not by gods or demons.  It eschews the supernatural and demands evidence.  The more we understand the causes that determine the universe, the better we can shape the world and ourselves in order to live and thrive.  We should be inquisitive, questioning, curious, skeptical.   We should educate ourselves.  
</p>
<p>
One does not have to be an afreeist to understand the power and potential of knowledge.  Yet many are susceptible to making exceptions.  A scientist may be rigorously scientific at work, but willingly accept the mystical transubstantiation of bread into flesh on Sundays.  Likewise, a doctor may understand why a tumor causes tremors in a patient at the hospital but in the jury box may condemn a criminal to brutal imprisonment as retribution for an act done in “free will,” an equally mythical concept.  There is no shortage of examples.  People parse horoscopes, employ spiritual mediums, and look to karma.  
</p>
<p>
Afreeism teaches us that the universe is causal.  Rather than relegate answers to priests and shamans, we need to strive for a genuine understanding of the way the world works.  This applies to basic science, but it also applies to our personal relationships and everyday life.  Rather than trying to explain the behavior of others simplistically (“she is just a bad person”), we should really try to understand what caused a person to do what she did and what molded her character.  Greater understanding of the universe and of people can only make our lives better.  
</p>
<p>
<b>Action</b>
</p>
<p>
Determinism is not fatalism.  Fatalism, as it is often defined, is the belief that a certain outcome will occur irrespective of any actions taken.  If you are destined for hell, nothing you can do can change that.  According to fatalism, you can do A or you can do B, but you will always end up at C.  That is not what determinism implies.  Doing A or doing B produces different outcomes.  What you choose is determined, but different actions bring different results.  In other words, we are all part of the causal web of the universe.  As such, what we do ripples across that causal web.  Our actions have consequences.  If I stick myself with a pin I will feel pain.  So I do not do it.  
</p>
<p>
Likewise, if I throw myself into social activism, I could make changes in society that could improve the lot of thousands of people.  True, my actions are caused, but I am also a cause.  Indeed, the Stoics (our Greek determinists) were people of action.  Seneca was a philosopher, playwright, Roman senator, and advisor to the emperor Nero.  Marcus Aurelius was the emperor of Rome from 61 CE until his death in 80 CE.   Because the universe is causal, and because we are one of the causes, we can make a difference.
</p>

<p><a href="#Back">Back to top</a></p>
</div>
<div  id="Resilience" class="TopicExplanation" >
<div class="TopicHeading">Resilience</div>
<p>
Bad things happen.  Some are the result of things other people do.  Others are the result of what we ourselves have done.  And sometimes bad things just happen, things that are not the result of what we or anyone else has done.  The death of a child from cancer or from a seemingly random genetic defect are examples of this.  And sometimes we are just in the wrong place at the wrong time.
</p>
<p>
Afreeism teaches us to be tolerant of other people, not just of who they are, but also of what they do.  Tolerance is a form of resilience.  It helps us to understand and accept what other people do, even if it affects us adversely.  Self-acceptance is also a form of resilience.  Understanding that we are not morally responsible for what we have done or for what we have become, helps us to accept the past, learn from it, and move on.  
</p>
<p>
Finally, even unfortunate events that just happen for no apparent reason are still caused, still inevitable.  Understanding that these occurrences are determined from the beginning of time may help us withstand the blow and move on.  
</p>
<p>
<b>An Excercise</b>
</p>
<p>
The Stoics believed that we could better learn to accept the past, to prepare for the future, and to enjoy the present. They developed an exercise to help us accomplish this.  The modern term for this ancient practice is negative visualization.   Negative visualization is the present contemplation of future loss or failure.  There are a number of reasons to engage in this exercise.  One is to enhance the enjoyment of the things we have now, to keep us  from succumbing to hedonic adaptation.  Hedonic adaptation occurs when we get so used to the good things we have that they no longer bring us pleasure.  
</p>
<p>
Another reason to engage in negative visualization is to help us take measures to prevent some loss or failure in the first place.  Psychologist Gary Klein applied this technique to business whereby managers, before a project is accepted or launched, are encouraged to visualize the project failing and then to give a “premortem” on why it failed.  Contemplating what can go wrong, whether in business or in our personal lives, helps us to prevent a negative outcome from occurring.
</p>
<p>
The third reason to engage in negative visualization is to prepare us emotionally if the loss or failure actually occurs.  As Seneca says,
</p>
<p style="margin-left:20px;">
He robs present ills of their power who has perceived their coming beforehand. 
</p>
<p>
In his book on Stoic philosophy, Professor William B. Irvine writes about the Greek Stoic Epictetus along the same lines:
</p>
<p style="margin-left:20px;">
[Epictetus] counsels us, for example, when we kiss our child, to remember that she is mortal and not something we own—that she has been given to us “for the present, not inseparably nor forever.” His advice: In the very act of kissing the child, we should silently reflect on the possibility that she will die tomorrow. [Epictetus, “Discourses,” II.xxiv.86,88]   In his Meditations, Marcus Aurelius approvingly quotes this advice. [Marcus, XI.34]  
</p>
<p>
This negative visualization not only increases our enjoyment of our child today, it helps us protect her going forward and prepares us for what could happen tomorrow.  Note that in this formulation there is both action as to the future and acceptance as to the past.  Negative visualization helps us with both.
</p>

<p><a href="#Back">Back to top</a></p>
</div>
<div  id="Meaning" class="TopicExplanation" >
<div class="TopicHeading">Meaning</div>
<p>
What indeed is the meaning of life, particularly in a deterministic world?  Philosophers have engaged this question since the beginning of recorded history and almost certainly before that.  Indeed, the search for meaning is perhaps the single most important inquiry of philosophy.  
</p>
<p>
You will not find the answer to the meaning of life here.  If anything, the realization that the universe is deterministic makes that question more difficult.  What meaning could life possibly have if the universe unfolds deterministically, if all human actions have been determined since the beginning of time?  Nevertheless, although no universal answers are forthcoming, we may be able to clarify our thinking on this important question in some useful ways. 
</p>
<p>
What Does Meaning Mean?
</p>
<p>
Theological descriptions of meaning and purpose often derive meaning and purpose from an all-powerful, all-knowing, all-good deity.  In this conception, the deity creates humans (and everything else) for the deity’s reasons and purposes.  These reasons and purposes are not necessarily known to, or even knowable by, humans.  The purpose of an individual is simply to obey (and perhaps fear or love) the deity.  By obeying the deity, the person is furthering the deity’s purpose, however inscrutable it may be.  This obedience is purpose enough for humans, although there may be the additional benefit of a reward, such as heaven, a favorable reincarnation, or perhaps good fortune here on earth.
</p>
<p>
Note that this description addresses two notions of meaningfulness:
</p>
<p style="margin-left:20px;">
1.	Why are we here?
</p>
<p style="margin-left:20px;">
2.	What constitutes a meaningful life?
</p>
<p>
The theistic answers to these questions are typified by the Christian responses to these questions.  We are here because God created us for his purposes.  A meaningful life is one lived by the rules that God has set out for us.  God’s plan is what gives our life meaning.  As Nietzsche recognized, in reference to Christianity, meaning requires, 
</p>
<p style="margin-left:20px;">
A kind of unity, some form of "monism":' and as a result of this belief man becomes obsessed by a feeling of profound relativity and dependence in the presence of an All. . . At bottom, man loses the belief in his own worth when no infinitely precious entity manifests itself through him . . . 
</p>
<p>
Other monotheistic systems, such as Judaism and Islam, have similar doctrines around meaning.
</p>
<p>
Belief systems do not have to be theistic to convey meaning.  Buddhism, Taoism, Confucianism, all create metaphysical systems that define meaning.  These systems typically skip the first question of why we exist.  As to the second, these belief systems provide that a meaningful life is one that is lived according to the precepts of the system.  
</p>
<p>
The above description of nontheistic systems applies broadly.  Soviet communism and Nazi nationalism both were belief systems that gave their adherents purpose, defined what the good life was, and prescribed how to find meaning in life.  Both had their canonical texts, their charismatic leaders, their gardens of Eden, and their demands for complete loyalty.  Indeed, we can even find similar characteristics in the writings of some of the advocates of capitalism, socialism and other economic and social systems.
</p>
<p>
These dogmatic viewpoints have advantages and disadvantages.  The disadvantage is that they depend on faith - that is, on an adherence to beliefs without recourse to evidence or experimentation.  One simply believes.  As a result, any belief can be justified, from the benevolent to the heinous.  The advantage of dogmatic viewpoints is that, since they do not have to justify their beliefs, they can describe fairly easily what is a meaningful life.  A meaningful life is one led in accordance with the rules of the deity (or, in the case of nontheistic religions, with the rules of the system.)  
</p>
<p>
<b>Afreeism and Meaning</b>
</p>
<p>
Afreeism is not necessarily inconsistent with a belief in a deity or a belief in a metaphysical system.  Indeed, some religious traditions embrace determinism, although many do not.  Afreeism may conflict with religious or metaphysical systems in two ways.  First, if the religious or metaphysical system embraces the belief in free will, then this is clearly incompatible with afreeism.  Second, afreeism is not faith-based.  Instead, it is based on empirical observation and logical reasoning.  This may make it difficult for the afreeist to embrace faith-based arguments even if they do not directly contradict afreeism.
</p>
<p>
Afreeism has contrasting advantages and disadvantages to religious belief.  Afreeism does not accept things on faith.  Skepticism is one of its foundational values.  The rejection of free will and desert all come from the notion that the universe is causal, an observation borne out by evidence.  In contrast, as to the question of why we are here, the afreeist response is simply, we don’t know.  Indeed, there does not appear to be any reason why we are here beyond the fortunate coming together of physical forces.
</p>
<p>
These same physical forces will lead to our destruction.  The sun will someday become a supernova and engulf the solar system.  The world will perish and so will the human race.  Even if we somehow manage to escape the solar system in time, and establish a thriving society elsewhere, those suns too will supernova or collapse.  Nothing lasts forever.  The human race is no exception.  
</p>
<p>
The realization that the universe is deterministic may further add to the skepticism as to whether life has meaning.  Even if we were not doomed to oblivion, what meaning could possibly exist in a universe where every action, every thought, every gesture, is determined by causal factors in place since the beginning of time?
</p>
<p>
Nietzsche recognized that, without the dogmatic claims of religion, we are staring into the abyss of nihilism. Nihilism, most simply defined, is the absence of meaning in life.  Nietzche exclaimed,
</p>
<p style="margin-left:20px;">
Nihilism stands at the door: whence comes this uncanniest of all guests?
</p>
<p>
His answer:
</p>
<p style="margin-left:20px;">
At bottom, man has lost the faith in his own value when no infinitely valuable whole works through him; i.e., he conceived such a whole in order to be able to believe in his own value.
</p>
<p>
Without some universally accepted dogma (some “infinitely valuable whole”), nihilism, the utter lack of meaning to life, is at our doorstep.  Beyond this observation, Nietzsche had no answers (or at least none that he was willing to commit to pen and paper) for the possibility that there was no meaning at all.  In Europe, where Nietzsche was writing, this “infinitely valuable whole” was Christianity.  “God is Dead,” Nietzche had previously observed.  Hence the descent into nihilism.
</p>
<p>
I should say that nihilism does have some redeeming features.  The fall of a universal Christian conception in the West of what is a good and meaningful life opened up the world for those living outside the contours of the Christian ideal.  As philosopher Sean Kelly has written:
</p>
<p style="margin-left:20px;">
. . . when the structure of a worthwhile and well-lived life is no longer agreed upon and taken for granted, then a new sense of freedom may open up. Ways of living life that had earlier been marginalized or demonized may now achieve recognition or even be held up and celebrated. Social mobility ─ for African Americans, gays, women, workers, people with disabilities or others who had been held down by the traditional culture ─ may finally become a possibility. 
</p>
<p>
But there is a downside.  In the same article, Kelly remarks, 
</p>
<p style="margin-left:20px;">
Without any clear and agreed upon sense for what to be aiming at in a life, people may experience the paralyzing type of indecision depicted by T.S. Eliot in his famously vacillating character Prufrock; or they may feel, like the characters in a Samuel Beckett play, as though they are continuously waiting for something to become clear in their lives before they can get on with living them; or they may feel the kind of “stomach level sadness” that David Foster Wallace described, a sadness that drives them to distract themselves by any number of entertainments, addictions, competitions, or arbitrary goals, each of which leaves them feeling emptier than the last.  
</p>
<p>
Without a faith-based metaphysical system that proclaims what a meaningful life is, and facing the fact of a universe governed by determinism, the afreeist must confront the problem of nihilism.
</p>
<p>
<b>Meaning in a Deterministic World</b>
</p>
<p>
Afreeism rejects dogmatic assertions of meaning yet offers no simple answer to the challenge of nihilism.  Perhaps we will simply have to learn to live without the sort of unifying meaning that religious dogmas provide.  That said, we can take a few moments to speculate about whether, in a deterministic world, life can have any meaning and whether it is possible to live with purpose.  
</p>
<p>
First, as to the question of why we are here, afreeism counsels humility.  We just do not know.  It is likely that there is no reason at all.  And if there is a reason, we are likely never to know it.  This does not mean that we should not look for reasons.  It just means that we should not create reasons where none are apparent.  
</p>
<p>
Thus, as to the first question of meaning, why are we here, afreeism has no answer.  In that, it is like nontheistic religions, such as Buddhism.    
</p>
<p>
What about the second, perhaps more important, question: what is it to lead a meaningful life?  Of course, this question is not unique to afreeism.  Anyone who has overthrown dogma, anyone who lives her life through inquiry and skepticism, must face this question.  The fact that the universe is deterministic changes nothing in this regard.  
</p>
<p>
Since the problem of meaning is one afreeists share with atheists and agnostics, we can perhaps get some insight from how these non-believers approach this problem.  Interestingly, empirical evidence suggests that atheists do not have any more difficulty in finding meaning in life than do religious adherents.  A recent study of data involving 1200 subjects found that atheists and the religiously unaffiliated had no higher incidence of nihilism than religious adherents.  They all found meaning in roughly equal percentages.  Where they found meaning, however, differed significantly.  The religiously affiliated found their meaning in external sources, whereas for atheists and the religiously-unaffiliated, meaning was self-produced. 
</p>
<p>
Of course, atheists are not necessarily afreeists.  The determinism of afreeism may create additional challenges to the discovery or creation of meaning.  Nevertheless, the case of atheism is instructive.  And, again, we can harken back to the deterministic stoic philosophers of ancient Greece and Rome.  As was noted earlier, these were people who led active purpose-driven lives.  
</p>
<p>
<b>The Source of Meaning</b>
</p>
<p>
So here are some thoughts on meaning and whence it comes.  Through biological and social evolution, we have developed into beings that are highly social and highly interdependent.  As such, there are activities that give us pleasure as individuals and others that give us pleasure as social animals.  Some pleasures are simple and atavistic, such as the pleasure of having sex or having a great meal.  Others are perhaps more complex, such as the pleasure of a good relationship, an intriguing conversation, or a friendly competition.  
</p>
<p>
Not all of our pleasures are good for us or good for society.  We may overeat, drink too much, or overindulge in recreational drugs.  At times, we may find pleasure in harming those we do not like or in expropriating their goods.  In order to counteract some of these anti-social pleasures, social and biological evolution favored us with empathy.  Empathy cannot eliminate all of our negative social tendencies, so institutions evolved to pick up the slack.  We have laws and other mechanisms for enforcing social norms.  And we have the ability to reason.  Through these mechanisms we have learned to curb many of our negative impulses.  The process of social evolution continues.  For example, I have suggested in this book that through reason we can overcome our natural tendency towards vindictiveness and retribution.   
</p>
<p>
All of our pleasures, the good and the bad, are at base neurological phenomena.  Our brains have developed in certain ways, through the operation of both biological and social evolution, to enjoy certain things and to dislike others.
</p>
<p>
To the afreeist, meaning is just another neurological phenomenon, formed through biological and social evolutionary processes.  The feeling that one’s life has meaning or purpose comes from a particular configuration in the brain.  That is not to diminish its significance.  Empirically, people report that having a meaningful or purpose-driven life is immensely satisfying.  
</p>
<p>
In this book I have identified a number of neurological phenomena.  These phenomena are the result of biological and social evolution.  Some of these, I have suggested, we as humans and as members of society have outgrown.  Indeed, I have suggested that some of these now hinder our development as a society and our happiness as members of that society.  These include the belief in free will, the propensity to blame, the desire to exact retribution, and the belief in worthiness.  Other phenomena function to make our lives better.  These include love, humility, tolerance, self-acceptance, and empathy.   
</p>
<p>
Meaningfulness is one of those neurological phenomena that makes our lives better and more joyful.  On the individual level, meaningfulness is tied to individual survival and thriving.  Thus, we find meaning in developing ourselves to our fullest potential.  But meaningfulness also has a social aspect, tied to the survival of society.  It benefits society and its members when we develop strong social bonds with each other and also when we think and act outside of ourselves for the benefit of society.  Put another way, we have evolved to care about and internalize the larger concerns of society.  We have evolved to find meaning in actions that benefit others.  We have evolved to be empathetic. 
</p>
<p>
This does not answer the question for any particular person as to what sorts of things will bring meaning to that person’s life.  It does suggest some possible directions, however.  Looking to both the personal and social aspects of meaning, we can identify some possible avenues of exploration.  Here are some possible aspects of a meaningful life:
</p>
<p style="margin-left:20px;">
1.	Personal development:  Advancing ourselves to our fullest potential.  
</p>
<p style="margin-left:20px;">
2.	Social engagement:  Interacting with family, friends, and society.
</p>
<p style="margin-left:20px;">
3.	Other-Directed Purpose:  Finding or creating a purpose outside of ourselves.
</p>
<p>
Again, these general categories do not answer the question for any given person as to what types of activities will give her life meaning.  Particularly as to other-directed purposes, afreeism offers very little guidance as to what one’s purpose should be.  Perhaps one’s other-directed purpose is simply providing for one’s family.  Perhaps it is writing the great American novel.  Perhaps it is working in the healing arts.  Perhaps it helping people with their plumbing.  Sometimes the answer to the question of what should be my other-directed purpose is simply this:  just pick something.  
</p>
<p>
In all, I believe that these three aspects of meaning encompass the things that get us out of bed in the morning.  These are what makes life worth living.  Naturally, these observations are not unique to afreeism.    
</p>
<p>
One final observation.  An other-directed purpose can include working directly towards a better society, towards better social policies.  This could include working within an NGO, advocating in the workplace, or even working on a political campaign.  Afreeism cannot define with great specificity what a good society is, but as I have indicated previously, it does have some suggestions.  The Equality Principle introduced in Chapter 6 flows directly from the afreeist observation that nothing is ever deserved.  Afreeist ideas support a more humane criminal justice system, a more just economic system, and a more humane and fair immigration system.  These ideas and others can be cobbled together to suggest a vision of a good society, perhaps even an inspiring vision.  Working towards these can contribute to a meaningful life.
</p>
<p>
Of course, the choices we make in this regard (and all others) have all been determined.  If we are fortunate, our decision-making algorithm will incorporate the notions of a meaningful life.  We will seek self-fulfillment, deep personal relationships, and other-directed purpose.   An afreeist can embrace these aspects of meaning without contradiction.   
</p>

<p><a href="#Back">Back to top</a></p>
</div>
<div  id="Deservedness" class="TopicExplanation" >

<p><a href="#Back">Back to top</a></p>
</div>

<div  id="Gratitude" class="TopicExplanation" >

<p><a href="#Back">Back to top</a></p>
</div>
        </div>
      </div>
      <div class="RSidebar" style="padding:20px;">
        <div style="margin:10px; padding:20px; background-color:white;"><routerLink :to="{name: 'JoinUs'}">JoinUs</routerLink></div>
        <div style="margin:10px; padding:20px; background-color:white;"><routerLink :to="{name: 'Newsletter'}">Newsletter</routerLink></div>
        <div style="margin:10px; padding:20px; background-color:white;"><routerLink :to="{name: 'Blog'}">Blog</routerLink></div>
      </div>
      <div class="Bottom">
        <BottomMenuCode />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LogoCode from '@/views/LogoCode.vue'
import BottomMenuCode from '@/views/BottomMenuCode.vue'
import TopMenCode from '@/views/TopMenCode.vue'

export default {
  name: 'Home',
  components:{
    TopMenCode,LogoCode,BottomMenuCode,
  },
}
</script>
<style scoped>
p {text-align:left; color:#000000;}
</style>
