import { type Article } from '@/types';

export const articles: Record<string, Article> = {
  'can-dogs-eat-bacon': {
    title: 'Can Dogs Eat Bacon?',
    category: 'Pets',
    snippet: "No, dogs shouldn't eat bacon (sorry pooches of the world). It's not advised even as a treat because bacon is very fatty with sky-high salt content.",
    featuredImage: {
      url: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e",
      alt: "Cute dog looking at camera with hopeful expression",
      caption: "While dogs love bacon, it's not the healthiest treat for them"
    },
    content: `
      <p>Yes, we know it's delicious, and dogs love it just as much as we humans do, but there are alternative meaty treats that you can feed to your ravenous dog without the guilt or risks (read to the end!).</p>

      <p>Read on for all your questions answered on whether bacon is bad for dogs, what the health risks are, and what to feed your dog instead of bacon.</p>

      <h2 id="is-bacon-bad">Is bacon bad for dogs?</h2>
      <p>It kind of is, yes. Bacon is basically a cured, processed meat full of fat and salt - a treat for humans, so definitely detrimental to a dog's health. The high salt content means it could dehydrate dogs or cause toxicity over time; while the high fat content could lead to weight gain or cause havoc to dogs with diabetes or pancreatitis.</p>

      <h3 id="health-benefits">Are there any health benefits?</h3>
      <p>No, not really. Though there is some protein present in bacon as it's sourced from pork, it's not really enough to offset the amount of fat and salt - especially for dogs, who have a more delicate digestive system than humans.</p>

      <h2 id="puppies-bacon">Can puppies eat bacon?</h2>
      <p>No, puppies shouldn't eat bacon. Puppies need lots of protein-rich, nutritious foods as they're growing so much during this early stage of life - bacon will just cause discomfort in their tiny tummies.</p>

      <h2 id="when-unsafe">When is bacon unsafe for dogs?</h2>
      <ul>
        <li>Bacon isn't toxic to dogs, so it won't poison them if they snaffle a piece off your plate when you aren't looking. That said, it's unsuitable for dogs even as a treat - the salt and fat content is simply too high, so in that respect it's always unsafe.</li>
        <li>If your dog's eaten a lot of bacon, keep an eye on them. They'll likely be sick or experience diarrhoea, but if they experience any dodgy symptoms to the extreme, take them to a vet straight away.</li>
        <li>If your pooch has a health condition such as pancreatitis, or a heart condition, it's very risky to feed them bacon.</li>
      </ul>
    `,
    headings: [
      { id: 'is-bacon-bad', text: 'Is bacon bad for dogs?', level: 2 },
      { id: 'health-benefits', text: 'Are there any health benefits?', level: 3 },
      { id: 'puppies-bacon', text: 'Can puppies eat bacon?', level: 2 },
      { id: 'when-unsafe', text: 'When is bacon unsafe for dogs?', level: 2 }
    ]
  },
  'how-to-start-running': {
    title: 'How to Start Running: A Complete Guide for Beginners',
    category: 'Health',
    snippet: 'Starting a running routine can be intimidating, but with the right approach, anyone can become a runner. Learn how to begin safely and build your endurance gradually.',
    featuredImage: {
      url: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5",
      alt: "Person running on a trail during sunrise",
      caption: "Start your running journey with proper guidance and technique"
    },
    content: `
      <h2 id="getting-started">Getting Started with Running</h2>
      <p>Before you start running, it's important to have the right gear and mindset. Begin with a good pair of running shoes and comfortable clothing.</p>

      <h2 id="proper-form">Proper Running Form</h2>
      <p>Maintaining good form helps prevent injuries and improves efficiency. Keep your head up, shoulders relaxed, and arms at a 90-degree angle.</p>

      <h2 id="training-plan">Beginner's Training Plan</h2>
      <p>Start with a walk-run program. Alternate between 1 minute of running and 2 minutes of walking. Gradually increase your running intervals as you build endurance.</p>

      <h2 id="common-mistakes">Common Beginner Mistakes</h2>
      <ul>
        <li>Starting too fast</li>
        <li>Skipping warm-up</li>
        <li>Not staying hydrated</li>
        <li>Ignoring rest days</li>
      </ul>
    `,
    headings: [
      { id: 'getting-started', text: 'Getting Started with Running', level: 2 },
      { id: 'proper-form', text: 'Proper Running Form', level: 2 },
      { id: 'training-plan', text: "Beginner's Training Plan", level: 2 },
      { id: 'common-mistakes', text: 'Common Beginner Mistakes', level: 2 }
    ]
  },
  'houseplant-care-guide': {
    title: 'Essential Guide to Houseplant Care',
    category: 'Lifestyle',
    snippet: 'Learn how to keep your indoor plants thriving with proper watering, lighting, and care techniques. Perfect for both beginners and experienced plant parents.',
    featuredImage: {
      url: "https://images.unsplash.com/photo-1463320726281-696a485928c7",
      alt: "Various houseplants in decorative pots",
      caption: "Create your own indoor jungle with proper plant care knowledge"
    },
    content: `
      <h2 id="basic-needs">Basic Plant Care Needs</h2>
      <p>Understanding the fundamental needs of houseplants is crucial for their survival. This includes proper light, water, and humidity levels.</p>

      <h2 id="watering-tips">Watering Guidelines</h2>
      <p>Different plants have different watering needs. Learn to check soil moisture and establish a watering schedule that works for each plant.</p>

      <h2 id="light-requirements">Light Requirements</h2>
      <ul>
        <li>Direct sunlight: 6+ hours of sun</li>
        <li>Bright indirect light: Near window but no direct sun</li>
        <li>Low light: Few feet from window</li>
      </ul>

      <h2 id="common-problems">Common Problems and Solutions</h2>
      <p>Learn to identify and treat common issues like yellowing leaves, root rot, and pest infestations.</p>
    `,
    headings: [
      { id: 'basic-needs', text: 'Basic Plant Care Needs', level: 2 },
      { id: 'watering-tips', text: 'Watering Guidelines', level: 2 },
      { id: 'light-requirements', text: 'Light Requirements', level: 2 },
      { id: 'common-problems', text: 'Common Problems and Solutions', level: 2 }
    ]
  },
  'can-dogs-eat-cucumbers': {
  title: 'Can dogs eat Cucumbers?',
  category: 'Pets',
  snippet: "Yes, dogs can eat cucumbers! They are a fantastic, refreshing snack for dogs. Not only are they low calorie and great for hydration, they’re a rich source of vitamins and nutrients to keep your pooch’s body functioning and strong. Read on for all the answers on feeding cucumber to your dog.",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/BLOG_CAN_DOGS_EAT_CUCUMBER_500x_crop_center.jpg?v=1708365313",
    alt: "Can dogs eat Cucumbers?",
    caption: "Is cucumber good for dogs?"
  },
  content: `
<h2 id="is-cucumber-good-for-dogs">Is cucumber good for dogs?</h2>
      <p>Yes, cucumber is very healthy for dogs. It’s made up of 90% water so is brilliant for hydration, and is low calorie and low fat. Basically, having your pooch chow down on a refreshing portion of cucumber will bring almost no risks, only benefits.</p>
      <h3 id="what-are-the-health-benefits">What are the health benefits?</h3>
      <p>Let’s get into the health benefits of cucumbers for dogs.</p>
      <ul>
        <li>90% water - We’ve said it and we’ll say it again - as cucumbers are mostly water, that transfers into your dog’s digestive system and helps hydrate them throughout the day.</li>
        <li>Low calorie, low sodium, fat-free  - Cucumbers are super low fat, so a great choice if you’re managing your pooch’s weight or cholesterol. In fact, one half-cup of cucumber is only 8 calories, compared to 40 in a standard dog biscuit.</li>
        <li>Soluble fibre - Cucumber flesh is packed with soluble fibre which easily absorbs into a dog’s body, keeps the gut microbiome healthy and boosts their digestive processes.</li>
        <li>Vitamin K - Helps to clot blood and heal bones. Dogs don’t produce this nifty vitamin on its own, so must get it from food, such as cucumbers. There’s also some vitamins A, C and B5 found in cucumber.</li>
        <li>Potassium - Fuels the ‘electrical charge’ to a dog’s nerves and muscles, helping them walk, jump and run.</li>
        <li>Manganese - Helps build and maintain a dog’s bones and cartilage in joints. It also helps absorb proteins and carbs, and stimulate enzyme function to boost their overall energy.</li>
        <li>Copper - Contributes to a pooch’s healthy skin, fur and connective tissue, as well as absorbing iron and regenerating red blood cells.</li>
        <li>Phytonutrients and phytochemicals - Neutralise free radicals, boost antioxidants and even freshen your dog’s breath.</li>
      </ul>
      <h2 id="when-is-cucumber-unsafe-for-dogs">When is cucumber unsafe for dogs?</h2>
      <p>As with anything you feed your dog, don’t overdo it. Though they’re one of the more harmless healthy snacks for dogs, cucumbers are full of water and too much of it can cause a stomach upset in your pooch.</p>
      <p>Also, serve cucumbers plain. Some cucumber in Chinese dishes comes cooked and slathered in sugar or soy sauce. Avoid this form of cucumber; fresh is always best.</p>
      <h2 id="can-puppies-eat-cucumbers">Can puppies eat cucumbers?</h2>
      <p>Sure - cucumber is a healthy, crunchy snack for a growing pooch. Just be sure to remove skin and seeds (these may be too much for puppy teeth), and serve plain, chopped into small pieces for puppy mouths.</p>
      <h3 id="can-dogs-be-allergic-to-cucumbers">Can dogs be allergic to cucumbers?</h3>
      <p>It’s unlikely, but dogs can develop allergies to cucumbers. Give your pooch a small piece if they’ve not eaten it before, and watch for any adverse reactions, such as the following:</p>
      <ul>
        <li>Bouts of diarrhoea or vomiting</li>
        <li>Skin reactions such as reddening, itchiness or a rash</li>
        <li>Swelling</li>
        <li>Stomach pain or bloatedness</li>
        <li>Ear infections</li>
        <li>Breathing issues (wheezing, etc.)</li>
      </ul>
      <h3 id="can-cucumbers-make-dogs-sick">Can cucumbers make dogs sick?</h3>
      <p>As above, cucumbers can make dogs sick if they’ve developed an allergy to it. Of course, if the cucumber is past its freshest, then it might cause a stomach upset, so make sure you always feed fruit and vegetables that are ripe and crisp. Cucumber should also be eaten as a snack or treat, and fed in moderation - not used as a meal replacement - to avoid making your dog unwell.</p>
      <h2 id="how-to-safely-give-cucumbers-to-your-dog">How to safely give cucumbers to your dog?</h2>
      <p>So long as the cucumber is ripe, it will be safe to give to your hungry pooch. You can give your dog a half cucumber so they can chew on it like a carrot or dog chew toy, or chop into bite-sized pieces. Leaving the skin on is not only safe, but recommended  - the skin is where all the nutrients are!</p>
      <h3 id="how-much-is-safe-to-give-your-dog">How much is safe to give your dog?</h3>
      <p>The amount of cucumber you feed your dog will depend on their breed, size and health condition, but you should treat cucumber as if it were a snack or treat. Snacks and treats should ideally take up about 10% of your dog’s regular diet.</p>
      <h2 id="what-types-of-cucumbers-can-dogs-eat">What types of cucumbers can dogs eat?</h2>
      <p>Cucumbers are pretty standard in the way they’re served - raw and fresh is always best! Here are some breakdowns as to the different parts of cucumber you can feed your dog:</p>
      <h3 id="can-dogs-eat-cucumber-raw">Can dogs eat cucumber raw?</h3>
      <p>Yes, it’s preferable! A raw cucumber retains all its nutrients and goodness, such as potassium, vitamin K and soluble fibre, and is the healthiest and safest way to feed cucumber to your dog.</p>
      <h3 id="can-dogs-eat-cucumber-skin">Can dogs eat cucumber skin?</h3>
      <p>Dogs can and should eat the cucumber skin, if their teeth allow it! The skin is where a cucumber’s nutrients are densest, and where most of the fibre is. Just be sure it’s cleaned thoroughly, so there is no dirt or pesticides on the skin.</p>
      <h3 id="can-dogs-eat-cucumber-seeds">Can dogs eat cucumber seeds?</h3>
      <p>It depends. A lot of dogs can eat the whole cucumber - skin, seeds, the lot! If your dog has digestive issues however, or if they’re a puppy, it’s best to remove the seeds as they can be tricky to digest unless your pooch is in full health.</p>
      <h3 id="can-dogs-eat-pickles">Can dogs eat pickles?</h3>
      <p>A pickled cucumber won’t harm a dog as an occasional snack, especially if it’s plain. Don’t give your pooch any pickles that are marinated in garlic, chilli or other sauces or seasonings; these are all ingredients that are very toxic to dogs.</p>
      <h3 id="conclusion">Conclusion</h3>
      <p>Cucumbers are a hydrating, nutritious snack for dogs - especially as a summer treat! It’s fine to serve a cucumber with seeds and skin, as all of it is rich in vitamins and soluble fibre that help keep your dog healthy.</p>
      <p>Just feed in moderation as a snack, not a meal replacement, and be sure the cucumber is fresh and chopped into a manageable portion.</p>
      <h3 id="what-other-foods-can-dogs-safely-eat">What other foods can dogs safely eat?</h3>
      <p>If you’d love to feed your dog crunchy cucumber but are wondering about alternatives, why not consider the following?</p>
      <ul>
        <li>Watermelon, another hydrating fruit treat rich in Vitamin C</li>
        <li>Banana, a healthy snack full of fibre and potassium</li>
        <li>Pumpkin, or pumpkin treats for dogs</li>
        <li>Long-lasting fish chews for another satisfying, crunchy treat</li>
      </ul>
      <p>If you’re looking for healthy dog snacks or easy ways to diversify your dog’s diet, check out our range of healthy grain-free treats for dogs.</p>
`,
  headings: [
    { id: 'is-cucumber-good-for-dogs', text: 'Is cucumber good for dogs?', level: 2 },
    { id: 'what-are-the-health-benefits', text: 'What are the health benefits?', level: 3 },
    { id: 'when-is-cucumber-unsafe-for-dogs', text: 'When is cucumber unsafe for dogs?', level: 2 },
    { id: 'can-puppies-eat-cucumbers', text: 'Can puppies eat cucumbers?', level: 2 },
    { id: 'can-dogs-be-allergic-to-cucumbers', text: 'Can dogs be allergic to cucumbers?', level: 3 },
    { id: 'can-cucumbers-make-dogs-sick', text: 'Can cucumbers make dogs sick?', level: 3 },
    { id: 'how-to-safely-give-cucumbers-to-your-dog', text: 'How to safely give cucumbers to your dog?', level: 2 },
    { id: 'how-much-is-safe-to-give-your-dog', text: 'How much is safe to give your dog?', level: 3 },
    { id: 'what-types-of-cucumbers-can-dogs-eat', text: 'What types of cucumbers can dogs eat?', level: 2 },
    { id: 'can-dogs-eat-cucumber-raw', text: 'Can dogs eat cucumber raw?', level: 3 },
    { id: 'can-dogs-eat-cucumber-skin', text: 'Can dogs eat cucumber skin?', level: 3 },
    { id: 'can-dogs-eat-cucumber-seeds', text: 'Can dogs eat cucumber seeds?', level: 3 },
    { id: 'can-dogs-eat-pickles', text: 'Can dogs eat pickles?', level: 3 },
    { id: 'conclusion', text: 'Conclusion', level: 3 },
    { id: 'what-other-foods-can-dogs-safely-eat', text: 'What other foods can dogs safely eat?', level: 3 },
  ]

},
'can-dogs-eat-peppers': {
  title: 'Can dogs eat Peppers?',
  category: 'Pets',
  snippet: "Yes - dogs can absolutely eat peppers. All colours of peppers offer a healthy choice of snack for a peckish pooch, however red peppers are the most nutritious. Let’s answer some more of your questions over whether dogs can eat peppers..",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/BLOG_CAN_DOGS_EAT_PEPPERS_500x_crop_center.jpg?v=1708434447",
    alt: "Can dogs eat Peppers?",
    caption: "Are peppers good for dogs?"
  },
  content: `
<h2 id="are-peppers-good-for-dogs">Are peppers good for dogs?</h2>
      <p>Yes! Peppers are technically a fruit (though we tend to use them in savoury dishes), and they provide a healthy dose of vitamins and minerals for a dog, as well as being low calorie and low fat.</p>
      <h3 id="what-are-the-health-benefits">What are the health benefits?</h3>
      <p>Crunchy bell peppers have a host of health benefits for dogs. Here’s what makes them a sensible doggy snack option:</p>
      <p>Full of Vitamins A, C and E This power trio of vitamins in peppers contributes to your dog’s eyesight, collagen production, skin condition and immunity.</p>
      <p>Crunchy A food your dog can munch on, like peppers, will help strengthen and clean their teeth.</p>
      <p>Low calorie and low fat In moderation, peppers can be given as a healthy treat as part of their diet, to manage your dog’s weight.</p>
      <p>Antioxidants, anti-inflammatory Helps fight inflammation in your pooch’s body, as well as oxidative stress.</p>
      <p>Red peppers are nutrient rich The healthiest are red peppers - they’re crammed full of higher levels of nutrients than other colours and have nine times the levels of beta carotene than yellow and green peppers, which helps beneficial vitamin A do its best work.</p>
      <h2 id="when-are-peppers-unsafe-for-dogs">When are peppers unsafe for dogs?</h2>
      <p>All colours of peppers are safe for dogs, but avoid chilli peppers, such as jalapenos - they’re simply too spicy! Dogs aren’t keen on spicy foods and it could cause them tummy problems.</p>
      <p>Peppers are a treat for dogs, therefore shouldn’t be used as a meal replacement, but fed in moderation to complement meals. They should be chopped into pieces they won’t choke on - so don’t give a pooch pepper crudites, but cut them into halves or more chunky pieces.</p>
      <p>You should only feed your pooch the flesh of the pepper, never the green stem or seeds, and make sure the pepper is fresh and ripe, and served plain.</p>
      <h3 id="can-dogs-be-allergic-to-peppers">Can dogs be allergic to peppers?</h3>
      <p>Dogs can be allergic to any food, so if your pup hasn’t eaten them before, feed them a small piece of pepper and keep an eye on their reaction. If your dog starts showing any of the following signs, you probably shouldn’t include bell pepper in their usual snack rotation:</p>
      <ul>
        <li>Reddening skin, itching or a rash</li>
      </ul>
      <ul>
        <li>Swelling</li>
      </ul>
      <ul>
        <li>Breathing issues (wheezing, etc.)</li>
      </ul>
      <ul>
        <li>Severe or extended sickness or diarrhoea</li>
      </ul>
      <ul>
        <li>General change in behaviour (low energy, lethargic, etc.)</li>
      </ul>
      <h3 id="can-peppers-make-dogs-sick">Can peppers make dogs sick?</h3>
      <p>If your pooch is allergic, they may become sick from eating bell peppers (be sure to stop feeding them peppers completely). Dogs can also get sick from peppers if they eat too large a portion, if the peppers were spoiled or past their freshest, or if they were a spicy type of pepper, such as jalapeno or chillies.</p>
      <p>If they are served safely, however, peppers are a tasty, healthy food for dogs to snack on.</p>
      <h2 id="how-to-safely-give-peppers-to-your-dog">How to safely give peppers to your dog?</h2>
      <p>Peppers are a great, nutritious snack for pooches so long as they’re served safely. Be sure they’re-</p>
      <ul>
        <li>Fresh and ripe! They should be brightly coloured and firm with no softness or wrinkling of the skin.</li>
        <li>Rinsed under the tap to remove any potential pesticides.</li>
        <li>Remove the stem and seeds and chop into bite-sized pieces.</li>
        <li>Serve on its own as a snack, or sprinkle on top of grain-free dog food.</li>
        <li>Avoid hot or spicy chilli strains.</li>
        <li>If you’re serving peppers cooked, they should be served plain, with no added salt, seasoning or sauces.</li>
      </ul>
      <h3 id="how-much-is-safe-to-give-your-dog">How much is safe to give your dog?</h3>
      <p>A pepper is a snack or treat for your pooch, not a replacement for their regular dog food. The correct portion size will depend on your dog’s breed, size or health condition, but treats should count for 10% of their overall diet, so be sure to stick to that measurement as a guideline.</p>
      <h2 id="can-puppies-eat-peppers">Can puppies eat peppers?</h2>
      <p>Puppies can eat peppers as they’re healthy and great for teeth. Just cut fresh, ripe and clean peppers into tiny pieces that a puppy can chew easily. Introduce pepper in a small amount first, so you can assess whether it suits your puppy and they can digest it easily.</p>
      <h2 id="what-types-of-peppers-can-dogs-eat">What types of peppers can dogs eat?</h2>
      <p>In short, your dog can eat peppers as part of a healthy, balanced diet - but what kind of peppers can they eat, and how safe are they when served in different ways?</p>
      <h3 id="can-dogs-eat-raw-peppers">Can dogs eat raw peppers?</h3>
      <p>Yes! Raw peppers are the most nutrient-rich. Be sure the pepper is fresh and ripe, rinse it under the tap, chop into bite-sized pieces and serve. Raw red peppers contain the most goodness, lots of vitamin A, C and E and a powerful boost of antioxidants.</p>
      <h3 id="can-dogs-eat-cooked-peppers">Can dogs eat cooked peppers?</h3>
      <p>Cooked peppers are fine for a dog, so long as they’re plain and served without any added salt, seasoning or sauces. A dog will likely prefer to eat them raw, as they’re crunchier and more satisfying. Raw pepper also contains more nutrients and vitamins than when they’re cooked. And it saves you the cooking time!</p>
      <h3 id="can-dogs-eat-red-pepper">Can dogs eat red pepper?</h3>
      <p>Absolutely - in fact they’re the healthiest kind of pepper there is. Raw red pepper contains lots of vitamins A, C and E as well as having anti-inflammatory properties.</p>
      <h3 id="can-dogs-eat-green-peppers">Can dogs eat green peppers?</h3>
      <p>Yes. Green peppers are the most bitter-tasting of all the three bell peppers, however they’re still perfectly healthy for a dog to eat as a snack. The red coloured pepper is the most nutrient-rich.</p>
      <h3 id="can-dogs-eat-yellow-peppers">Can dogs eat yellow peppers?</h3>
      <p>Yep - yellow peppers are a perfectly nutritious snack for a dog. Red peppers have the most nutrients, but yellow and green peppers are still healthy when served raw, plain and chopped into bite-sized pieces.</p>
      <h3 id="can-dogs-eat-chilli-peppers">Can dogs eat chilli peppers?</h3>
      <p>No. Do not feed dogs chilli peppers such as jalapenos or other spicy varieties. Dogs don’t like spice! They could cause your poor pooch to have an irritated mouth and tongue, as well as sickness or stomach upset later.</p>
      <h3 id="conclusion">Conclusion</h3>
      <p>In summary, bell peppers are a delicious, nutrient-rich treat for a dog.</p>
      <ul>
        <li>The red peppers have the highest concentration of vitamins such as A, C and E, however green and yellow peppers are also safe, healthy and tasty.</li>
        <li>Be sure the peppers are ripe, clean and served plain, chopped into pieces that won’t be a choking hazard.</li>
        <li>Avoid spicy varieties of peppers completely.</li>
      </ul>
      <h3 id="what-other-foods-can-dogs-safely-eat">What other foods can dogs safely eat?</h3>
      <p>If you’re keen on feeding your dog peppers, but you’re looking for nutritious alternatives, why don’t you try the following?</p>
      <ul>
        <li>Fresh pumpkin or pumpkin-flavoured dog treats</li>
        <li>Hydrating chunks of cucumber</li>
        <li>Apple is full of fibre</li>
        <li>Dog food with sweet potato, another anti-inflammatory</li>
        <li>Salmon Oil for Dogs packs a punch of anti-inflammatories among tons of other health benefits.</li>
      </ul>
      <p>If you’re looking for healthy ways to give your dog a snack, check out Pooch & Mutt’s range of nutritious treats for dogs crammed with vitamins, minerals, proteins and supplements.</p>
`,
  headings: [
    { id: 'are-peppers-good-for-dogs', text: 'Are peppers good for dogs?', level: 2 },
    { id: 'what-are-the-health-benefits', text: 'What are the health benefits?', level: 3 },
    { id: 'when-are-peppers-unsafe-for-dogs', text: 'When are peppers unsafe for dogs?', level: 2 },
    { id: 'can-dogs-be-allergic-to-peppers', text: 'Can dogs be allergic to peppers?', level: 3 },
    { id: 'can-peppers-make-dogs-sick', text: 'Can peppers make dogs sick?', level: 3 },
    { id: 'how-to-safely-give-peppers-to-your-dog', text: 'How to safely give peppers to your dog?', level: 2 },
    { id: 'how-much-is-safe-to-give-your-dog', text: 'How much is safe to give your dog?', level: 3 },
    { id: 'can-puppies-eat-peppers', text: 'Can puppies eat peppers?', level: 2 },
    { id: 'what-types-of-peppers-can-dogs-eat', text: 'What types of peppers can dogs eat?', level: 2 },
    { id: 'can-dogs-eat-raw-peppers', text: 'Can dogs eat raw peppers?', level: 3 },
    { id: 'can-dogs-eat-cooked-peppers', text: 'Can dogs eat cooked peppers?', level: 3 },
    { id: 'can-dogs-eat-red-pepper', text: 'Can dogs eat red pepper?', level: 3 },
    { id: 'can-dogs-eat-green-peppers', text: 'Can dogs eat green peppers?', level: 3 },
    { id: 'can-dogs-eat-yellow-peppers', text: 'Can dogs eat yellow peppers?', level: 3 },
    { id: 'can-dogs-eat-chilli-peppers', text: 'Can dogs eat chilli peppers?', level: 3 },
    { id: 'conclusion', text: 'Conclusion', level: 3 },
    { id: 'what-other-foods-can-dogs-safely-eat', text: 'What other foods can dogs safely eat?', level: 3 },
  ]

},

'can-dogs-eat-marshmallows': {
  title: 'Can dogs eat Marshmallows?',
  category: 'Pets',
  snippet: "Short answer - no, your dog can’t eat marshmallows. Marshmallows are fluffy, sticky and super sweet - but as you may have guessed, they have no nutritional value for a dog, and some varieties could make them really unwell. Read on for all the answers on why marshmallows aren’t recommended for a dog’s diet…",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/BLOG_CAN_DOGS_EAT_MARSHMELLOWS_500x_crop_center.jpg?v=1708435307",
    alt: "Can dogs eat Marshmallows?",
    caption: "Are marshmallows bad for dogs?"
  },
  content: `
<h2 id="are-marshmallows-bad-for-dogs">Are marshmallows bad for dogs?</h2>
      <p>Marshmallows are a powdery sweet treat for humans, and they aren’t great for a dog’s health. They may feel light and airy, but with the main ingredients in a batch of marshmallows being sugar, gelatin, glucose syrup and water, they definitely contain no nutritional benefit. The high levels of sugar can cause stomach pains or gastrointestinal issues in dogs, or long-term can cause weight gain or illnesses like diabetes.</p>
      <h2 id="what-to-do-if-your-dog-eats-marshmallows">What to do if your dog eats marshmallows</h2>
      <p>If your dog has eaten a single marshmallow it’s unlikely to harm them - at worst, they might suffer from gas or a dodgy tummy. If they’ve eaten a lot of marshmallows, or gotten into a bag of them, this is more of a cause for concern. Keep a close eye on your pooch and if they show any signs of sickness, get in touch with a vet immediately.</p>
      <h3 id="how-much-is-safe-for-dogs">How much is safe for dogs?</h3>
      <p>As above, one plain marshmallow isn’t a cause for emergency - though it’s not recommended you feed marshmallows to your dog at all. With so much sugar and glucose and no nutritional value, they are only likely to cause your pooch an unnecessary stomach ache.</p>
      <h3 id="can-they-make-your-dog-sick">Can they make your dog sick?</h3>
      <p>Yes, eating a bunch of marshmallows is very likely to make your dog sick (one will probably be fine). A big risk, however, is if the marshmallows contain artificial sweeteners, such as Xylitol (common in sugar-free marshmallows, for example). This is highly toxic to dogs and can even prove lethal by causing a drop in sugar levels that can lead to liver failure.</p>
      <h3 id="when-to-visit-the-vet">When to visit the vet</h3>
      <p>If the marshmallows your dog has eaten contain Xylitol, get them to a vet straight away. If your pooch has eaten a few marshmallows and they appear to have a stomach ache, severe diarrhoea, are vomiting or otherwise displaying strange behaviour, definitely get some medical advice from a vet.</p>
      <h3 id="how-to-stop-your-dog-eating-marshmallows">How to stop your dog eating marshmallows?</h3>
      <p>The clearest way to stop your dog eating marshmallows is firstly, never give them to your dog in the first place. If they’ve never eaten a marshmallow, they won’t know what they’re missing!</p>
      <p>If you have a dog that eats anything they come across, just be sure to keep human treats such as marshmallows well out of reach of a dog, in a highly placed, secure cupboard. Training your dog not to beg for human sweets with commands such as “leave it” and “not for you” can also help.</p>
      <p>If you want to give your dog a treat, there are lots of alternative snacks that are healthy for them (read on for suggestions).</p>
      <h2 id="can-dogs-eat-other-types-of-marshmallows">Can dogs eat other types of marshmallows?</h2>
      <p>The overall answer is no, marshmallows are generally a no-go for a dog’s snack! Here are some more specifics surrounding various marshmallows:</p>
      <h3 id="can-dogs-eat-mini-marshmallows">Can dogs eat mini marshmallows?</h3>
      <p>Nope - it doesn’t matter the size, marshmallows aren’t recommended for dogs because they’re so high in sugar, with no nutritional value. Some dog owners use a mini marshmallow to hide a pill if their dog needs to take medication. If your dog struggles to swallow pills, try hiding it in a different treat, such as cheese. Marshmallows are also sticky and chewy, so can get stuck in a dog’s teeth.</p>
      <h3 id="can-dogs-eat-vegan-marshmallows">Can dogs eat vegan marshmallows?</h3>
      <p>Maybe. Dogs can eat vegan marshmallows so long as they don’t contain Xylitol. But even then, they’re still likely to contain high levels of sugar and glucose syrup and therefore won’t have much benefit to a dog, so an alternative snack (a piece of apple maybe) is probably best instead.</p>
      <h3 id="can-dogs-eat-roasted-marshmallows">Can dogs eat roasted marshmallows?</h3>
      <p>Definitely don’t give a roasted marshmallow to your dog. Marshmallows are high in sugar and empty of nutrients even when ‘raw’, but when roasted, they’re gooey and hot, and likely to get stuck in your pooch’s teeth. If they manage to snaffle a roasted marshmallow when you aren’t looking, it’s not a big deal - just be sure not to give them one intentionally.</p>
      <h3 id="conclusion">Conclusion</h3>
      <p>To summarise, you shouldn’t include marshmallows in your dog’s diet, even as an occasional treat. Marshmallows offer no nutritional value to a dog, and are high in sugar - though one is unlikely to do them any harm. ‘Sugar-free’ marshmallows could be an even worse option, as artificial sweeteners such as Xylitol can be lethal to a dog. Stick to more nutritious dog treats.</p>
      <h3 id="what-other-foods-can-dogs-safely-eat">What other foods can dogs safely eat?</h3>
      <p>Here are some alternative ways to offer your dog a tasty, nutritious treat:</p>
      <ul>
        <li>Beef jerky for dogs. If your dog likes snacks (don’t they all), this protein-rich jerky is satisfying and tasty.</li>
        <li>Peanut butter dog dental sticks, delicious chewy treats that are healthy and good for a dog’s teeth, too.</li>
        <li>Sweet fruit such as banana, apple or strawberries.</li>
      </ul>
      <p>If you’re looking for healthy treats for your dog packed with whole ingredients and nutrients to keep them happy, calm and care-free, check out our range of grain-free dog treats.</p>
      <section>References</section>
`,
  headings: [
    { id: 'are-marshmallows-bad-for-dogs', text: 'Are marshmallows bad for dogs?', level: 2 },
    { id: 'what-to-do-if-your-dog-eats-marshmallows', text: 'What to do if your dog eats marshmallows', level: 2 },
    { id: 'how-much-is-safe-for-dogs', text: 'How much is safe for dogs?', level: 3 },
    { id: 'can-they-make-your-dog-sick', text: 'Can they make your dog sick?', level: 3 },
    { id: 'when-to-visit-the-vet', text: 'When to visit the vet', level: 3 },
    { id: 'how-to-stop-your-dog-eating-marshmallows', text: 'How to stop your dog eating marshmallows?', level: 3 },
    { id: 'can-dogs-eat-other-types-of-marshmallows', text: 'Can dogs eat other types of marshmallows?', level: 2 },
    { id: 'can-dogs-eat-mini-marshmallows', text: 'Can dogs eat mini marshmallows?', level: 3 },
    { id: 'can-dogs-eat-vegan-marshmallows', text: 'Can dogs eat vegan marshmallows?', level: 3 },
    { id: 'can-dogs-eat-roasted-marshmallows', text: 'Can dogs eat roasted marshmallows?', level: 3 },
    { id: 'conclusion', text: 'Conclusion', level: 3 },
    { id: 'what-other-foods-can-dogs-safely-eat', text: 'What other foods can dogs safely eat?', level: 3 },
  ]

},

'can-dogs-eat-mackerel': {
  title: 'Can dogs eat Mackerel?',
  category: 'Pets',
  snippet: "Yes - you’ll be glad to know that in moderation, dogs can eat mackerel. Mackerel is a delectable and nutritious food for dogs, great as a snack or as part of a balanced meal. There are recommended ways to serve mackerel to your pooch, however - so let’s go into some more detail about the oily fish.",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/BLOG_CAN_DOGS_EAT_MACKEREL_500x_crop_center.jpg?v=1708435861",
    alt: "Can dogs eat Mackerel?",
    caption: "Is mackerel good for dogs?"
  },
  content: `
<h2 id="is-mackerel-good-for-dogs">Is mackerel good for dogs?</h2>
      <p>Absolutely - mackerel is one of the healthiest fish a dog can eat. It should be fed in moderation, as with any food, but when served as part of a balanced diet, it can provide dogs with a host of powerful benefits.</p>
      <h3 id="what-are-the-health-benefits-of-mackerel">What are the health benefits of mackerel?</h3>
      <p>Rich in Fatty Acids. As an oily fish, mackerel is packed with fatty acid omega-3 which is greatly beneficial to a dog’s health. Fatty acids contribute to a dog’s healthy skin and coat, cardiovascular health, joint protection and reduced inflammation. They also boost immunity and brain function.</p>
      <p>High in Protein. Fish is a great protein source for pooches, which is essential for muscle development and strength.</p>
      <p>Vitamin D. Dogs don’t get much vitamin D from the sun, and instead get it from food such as mackerel. This vitamin balances minerals in the body and ensures healthy skin and bone growth.</p>
      <p>Vitamin B12 enables your dog to absorb iron, a lack of which can cause anaemia and low energy levels. It’s also an important brain nutrient.</p>
      <p>Super tasty. Dogs love the taste of fish, so it’s a great way of boosting their health while giving them a delicious treat.</p>
      <h2 id="can-puppies-eat-mackerel">Can puppies eat mackerel?</h2>
      <p>Yes - the nutrients in mackerel are particularly good for a puppy’s growth and development. It’s a good source of protein for building strength, and the essential fatty acids and vitamins are important for brain and bone growth. Be sure to feed in moderation to your pup, and serve cooked, without bones, cut into tiny puppy pieces.</p>
      <h2 id="is-mackerel-unsafe-for-dogs">Is mackerel unsafe for dogs?</h2>
      <p>Mackerel is only unsafe for dogs for the same reasons it might be unsafe for humans. It should be fresh and of good quality, with bones removed. It’s a good idea to feed only fresh fillets that are deboned and cooked, without any added marinades or sauces (read on for the best way to serve mackerel to your pooch!).</p>
      <p>There is a small chance your dog might have a mackerel allergy, in which case it might be unsafe for them to eat.</p>
      <h3 id="can-dogs-be-allergic-to-mackerel">Can dogs be allergic to mackerel?</h3>
      <p>Dogs can be allergic to anything, so it’s best to keep a close eye on them if you’re feeding it to your pooch for the first time. Feed a small amount to introduce it to them. If they show any of the following signs, don’t serve mackerel to them again, and perhaps test if they show the same symptoms to any other fish.</p>
      <ul>
        <li>Reddening skin, itching or a rash</li>
      </ul>
      <ul>
        <li>Swelling</li>
      </ul>
      <ul>
        <li>Breathing issues (wheezing, etc.)</li>
      </ul>
      <ul>
        <li>Severe or extended sickness or diarrhoea</li>
        <li>Bloating or pain</li>
      </ul>
      <ul>
        <li>General change in behaviour (low energy, lethargic, etc.)</li>
        <li>Ear infections</li>
      </ul>
      <h3 id="can-mackerel-make-dogs-sick">Can mackerel make dogs sick?</h3>
      <p>Mackerel can make dogs sick if it’s not fresh, if it comes in sauces and marinades, or if your pooch has an allergic reaction to it. Be sure to serve it safely to avoid your dog getting a tummy upset.</p>
      <h2 id="how-to-safely-give-mackerel-to-your-dog">How to safely give mackerel to your dog?</h2>
      <p>The best way to safely give mackerel to your dog is to make sure it’s fresh and cooked plain. Bear in mind the following advice to serve the perfect fishy mackerel portion:</p>
      <ul>
        <li>Choose fresh, sustainably-sourced fish.</li>
        <li>Ensure the fish is deboned or has soft bones (ask the shop assistant or fishmonger about this).</li>
        <li>Cook the fish fresh, or if you’ve frozen it, be sure it’s thoroughly defrosted.</li>
        <li>Don’t cover the fish in salt, pepper, sauces or seasonings. Plain fish, either pan-fried, oven-cooked or steamed is the safest way to cook mackerel for a pooch.</li>
        <li>Serve mackerel as part of a balanced meal or as an occasional treat.</li>
      </ul>
      <h3 id="how-much-is-safe-to-give-your-dog">How much is safe to give your dog?</h3>
      <p>If you’re feeding a pooch mackerel, be sure it’s in moderation. Too much mackerel has a high fat content (even though it’s healthy fat), so it needs to be balanced with other veggies, proteins and botanicals as part of a well-rounded doggy diet.</p>
      <p>Portion sizes will depend on your dog’s breed, size and health condition. Ask your vet if you’re not entirely sure.</p>
      <h4>Can dogs eat mackerel everyday?</h4>
      <p>Though a dog could eat mackerel every day, it’s a good idea to mix up the types of proteins your dog eats to ensure they get a full range of nutrients. You could feed your dog other fish such as salmon or cod, or other lean proteins such as turkey or chicken.</p>
      <h2 id="what-types-of-mackerel-can-dogs-eat">What types of mackerel can dogs eat?</h2>
      <p>We know that your pooch is safe to eat a well-prepared portion of mackerel! Next, let’s get into the different types of mackerel they can either tuck into safely, or should avoid:</p>
      <h3 id="can-dogs-eat-raw-mackerel-fillets">Can dogs eat raw mackerel fillets?</h3>
      <p>It’s not a great idea to feed your dog raw fish of any kind - it’s much safer to ensure the fish is cooked. This is because raw fish carries the risks of harmful bacteria like salmonella, or parasites such as flukes and roundworms that can cause serious illness to you or your dog.</p>
      <p>If you have some raw mackerel fillets, either steam, pan-fry or roast off the fillets and serve them to your pooch plain.</p>
      <h3 id="can-dogs-eat-smoked-mackerel">Can dogs eat smoked mackerel?</h3>
      <p>No - unfortunately not. Smoked or cured mackerel has too high a salt content. These vacuum packed mackerel fillets often come with lots of added flavourings such as pepper, lemon and chilli marinades, which should also be avoided. Stick to fresh mackerel that has been cooked plain.</p>
      <h3 id="can-dogs-eat-tinned-canned-mackerel">Can dogs eat tinned/canned mackerel?</h3>
      <p>This depends on what the mackerel comes in. Generally, fresh mackerel is always better than canned due to potential preservatives that could be present. When mackerel is canned or tinned, a lot of its powerful nutrients diminish.</p>
      <p>Dogs should not eat the following canned mackerel due to harmful salt content, additives or flavourings:</p>
      <b>Mackerel in tomato sauce</b>
      <b>Mackerel in brine</b>
      <b>Mackerel in sunflower oil</b>
      <p>Dogs can eat mackerel in olive oil; that’s likely to have the most nutrients - however it should be deemed a treat and fed in moderation. The olive oil adds extra fat to the mackerel that could lead to obesity in your pooch.</p>
      <h3 id="can-dogs-eat-mackerel-skin">Can dogs eat mackerel skin?</h3>
      <p>Yes - mackerel skin is delicious to dogs and very nutrient-dense. Skins can be fatty though, so make sure they’re fed in moderation, like the rest of the mackerel. Remember, the skin should also be cooked and served plain with no added seasoning.</p>
      <h3 id="can-dogs-eat-whole-mackerel-including-heads">Can dogs eat whole mackerel including heads?</h3>
      <p>Dogs can eat the head of a fish but only if it’s soft and fresh. The fish has a lot of nutrients in it, like the rest of a mackerel - but if it’s too hard or has bones in it, definitely leave it out of their bowl. Only feed a whole mackerel to a dog if it has been deboned or you know that the bones are soft. The safest serving choice is to feed a deboned and cooked mackerel fillet to your pooch.</p>
      <h3 id="can-dogs-eat-mackerel-bones">Can dogs eat mackerel bones?</h3>
      <p>It’s recommended you only feed dogs mackerel without the bones, however, some mackerel have very soft bones and shouldn’t do too much harm. Check with your fishmonger if the mackerel has been deboned or has soft bones when you’re buying the fish.</p>
      <h3 id="conclusion">Conclusion</h3>
      <p>Overall, mackerel is a delicious, nutrient-dense food for your dog to eat either as a snack or part of a well-balanced meal. It’s packed full of omega-3 fatty acids as well as protein and vitamins.</p>
      <p>However, be sure it’s served cooked, ideally without bones. Serve plain, without any added salt, sauces or seasonings, and feed in moderation, as it can be very high in fat (even if it’s healthy fat!).</p>
      <h3 id="what-other-foods-can-dogs-safely-eat">What other foods can dogs safely eat?</h3>
      <p>If you’re keen on feeding mackerel to your dog but want to look for alternatives, why not try the following?</p>
      <ul>
        <li>Salmon, another oily fish rich in protein and fatty acids</li>
        <li>Cod, long-lasting chews with cod, or dog food with cod - another nutritious fish, gentle on digestion</li>
        <li>Salmon Oil for dogs - containing all the goodness of oily fish, which you can drizzle over their regular food.</li>
        <li>Dog food with salmon - we have two tasty options including Health & Digestion and Joint Care</li>
        <li>Herring, or dog food with herring -  a novel protein source that helps support sensitive digestion.</li>
      </ul>
      <p>Take a look at Pooch & Mutt’s full range of healthy food for dogs - lots of our recipes contain nutrient-rich oily fish as a lean protein, alongside vegetables, carbohydrates and other powerful supplements.</p>
`,
  headings: [
    { id: 'is-mackerel-good-for-dogs', text: 'Is mackerel good for dogs?', level: 2 },
    { id: 'what-are-the-health-benefits-of-mackerel', text: 'What are the health benefits of mackerel?', level: 3 },
    { id: 'can-puppies-eat-mackerel', text: 'Can puppies eat mackerel?', level: 2 },
    { id: 'is-mackerel-unsafe-for-dogs', text: 'Is mackerel unsafe for dogs?', level: 2 },
    { id: 'can-dogs-be-allergic-to-mackerel', text: 'Can dogs be allergic to mackerel?', level: 3 },
    { id: 'can-mackerel-make-dogs-sick', text: 'Can mackerel make dogs sick?', level: 3 },
    { id: 'how-to-safely-give-mackerel-to-your-dog', text: 'How to safely give mackerel to your dog?', level: 2 },
    { id: 'how-much-is-safe-to-give-your-dog', text: 'How much is safe to give your dog?', level: 3 },
    { id: 'what-types-of-mackerel-can-dogs-eat', text: 'What types of mackerel can dogs eat?', level: 2 },
    { id: 'can-dogs-eat-raw-mackerel-fillets', text: 'Can dogs eat raw mackerel fillets?', level: 3 },
    { id: 'can-dogs-eat-smoked-mackerel', text: 'Can dogs eat smoked mackerel?', level: 3 },
    { id: 'can-dogs-eat-tinned-canned-mackerel', text: 'Can dogs eat tinned/canned mackerel?', level: 3 },
    { id: 'can-dogs-eat-mackerel-skin', text: 'Can dogs eat mackerel skin?', level: 3 },
    { id: 'can-dogs-eat-whole-mackerel-including-heads', text: 'Can dogs eat whole mackerel including heads?', level: 3 },
    { id: 'can-dogs-eat-mackerel-bones', text: 'Can dogs eat mackerel bones?', level: 3 },
    { id: 'conclusion', text: 'Conclusion', level: 3 },
    { id: 'what-other-foods-can-dogs-safely-eat', text: 'What other foods can dogs safely eat?', level: 3 },
  ]

},

'can-dogs-eat-porridge': {
  title: 'Can dogs eat Porridge?',
  category: 'Pets',
  snippet: "Yes, dogs can eat porridge! They can be a great addition to a dog’s healthy, well-balanced diet. But how should you serve porridge to your hungry pooch? We’ve answered all your answers around pooches who are peckish for porridge oats…",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/BLOG_CAN_DOGS_EAT_PORRIDGE_500x_crop_center.jpg?v=1708444150",
    alt: "Can dogs eat Porridge?",
    caption: "Is porridge good for dogs?"
  },
  content: `
<h2 id="is-porridge-good-for-dogs">Is porridge good for dogs?</h2>
      <p>Yep, porridge oats can be a great source of fibre, vitamins and minerals for dogs. Oats can be used as a weight loss aid, and they’re also brimming with antioxidants.</p>
      <h3 id="what-are-the-health-benefits-of-oats">What are the health benefits of oats?</h3>
      <p>Let’s get into more detail over the numerous health benefits of oats…</p>
      <b>Rich in dietary fibre which helps dogs feel full, promotes digestion and results in healthier poops.</b>
      <b>Vitamins B1 and B5, important for metabolising energy, proper nerve function, and the synthesising of hormones.</b>
      <b>Minerals such as iron, phosphorus and zinc; essential for blood flow, bone health, boosted immune function and healthy skin and coat.</b>
      <b>Packed with antioxidants and beta-glucans to fight inflammation and boost immunity, providing protection against diseases.</b>
      <b>Low fat - porridge is a low fat food that helps a dog stay lean and feel full.</b>
      <h2 id="can-puppies-eat-porridge">Can puppies eat porridge?</h2>
      <p>Puppies can eat a small amount of oats, so long as they’re served without added sugar or flavourings, and cooked so they’re digestible. Mix up some plain oats with water and cook in a pan until soft. Also be sure it’s not too hot when served.</p>
      <h2 id="when-is-porridge-unsafe-for-dogs">When is porridge unsafe for dogs?</h2>
      <p>Porridge is generally safe for dogs when served plain and cooked in water, but avoid raw oats, as they aren’t tasty and can be difficult for your dog to digest. Don’t add lots of sugar or flavourings to the porridge, and serve in moderation, never as a replacement for regular dog food.</p>
      <h3 id="can-dogs-be-allergic-to-oats">Can dogs be allergic to oats?</h3>
      <p>Yes - dogs can be allergic to oats, but it’s particularly rare. A dog allergy to wheat, for instance, would be much more common. If you haven’t fed your pooch oats before, feed a small amount and watch out for the following symptoms:</p>
      <ul>
        <li>Extended or severe diarrhoea or vomiting</li>
        <li>Swelling, redness or itchiness of the skin</li>
        <li>Change in behaviour (lethargic, low mood etc.)</li>
        <li>Ear infections</li>
        <li>Breathing issues (wheezing, etc.)</li>
        <li>Bloating or pain in stomach</li>
      </ul>
      <p>If you spot any of the above symptoms, don’t feed oats to your dog in future and if necessary, get in touch with your vet.</p>
      <h3 id="can-porridge-make-dogs-sick">Can porridge make dogs sick?</h3>
      <p>Dogs can be sick from porridge if they eat too much of it, if it’s fed as a meal replacement rather than just an occasional snack, or if they’re allergic to it.</p>
      <p>It’s important to feed oats cooked to dogs, as they may have issues digesting raw oats. Sugary flavourings or syrups, especially containing Xylitol, should absolutely be avoided.</p>
      <h2 id="how-to-safely-give-oats-to-your-dog">How to safely give oats to your dog?</h2>
      <p>The best way to serve a portion of oats to your pooch is to gently cook a small amount in a pan with water, and serve plain without any added sugar or flavourings.  Avoid flavoured brands of oats, and choose organic oats if possible.</p>
      <h3 id="how-much-is-safe-to-give-your-dog">How much is safe to give your dog?</h3>
      <p>Porridge oats should be a snack or a ‘side’ of sorts to your dog’s regular food. Perhaps try pouring some on top of their usual dog food, or just giving them some plain in a small bowl.</p>
      <p>How much they eat will be dependent on their breed, size or health condition. In general, the rule is to dedicate 10% of a dog’s diet to snacks and treats, so use that guideline, and never replace regular meals (which should be made of mostly lean proteins) with oats.</p>
      <h2 id="what-types-of-oats-can-dogs-eat">What types of oats can dogs eat?</h2>
      <p>The general rule is that plain cooked oats are the best, but let’s go into a bit more detail over what kinds of oats are safe for dogs…</p>
      <h3 id="can-dogs-eat-oats-raw">Can dogs eat oats raw?</h3>
      <p>Raw oats aren’t recommended for a dog, as they’re harder to digest, and not that appetising for a pooch. They also contain phytic acid which can interact with certain minerals already in a dog’s body, making them harder to absorb. Cooked oats are the best way to serve them - either as plain porridge with water, or even baked into dog-friendly treats. They still contain all their nutritious benefits when cooked.</p>
      <h3 id="can-dogs-eat-porridge-made-with-milk">Can dogs eat porridge made with milk?</h3>
      <p>Overall, remember that porridge cooked with water is always the best option when it comes to your dog. Humans tend to love a bit of porridge with milk, but this isn’t recommended for a dog, who is more likely to have a lactose intolerance due to not consuming milk all that regularly.</p>
      <h3 id="can-dogs-eat-porridge-with-honey">Can dogs eat porridge with honey</h3>
      <p>Porridge oats cooked with honey isn’t necessarily unsafe for a dog - both ingredients are natural and nutritious. However, honey adds a lot of calories to porridge, and it’s not really needed to sweeten a dog’s food. If you do opt for honeyed porridge oats, serve it cooked with water as a special treat.</p>
      <h3 id="can-dogs-eat-porridge-with-water">Can dogs eat porridge with water?</h3>
      <p>Absolutely! Porridge cooked in a pan with water and served plain is the ideal way for a dog to eat porridge. This way it’s more appetising and easier for a pooch to digest, yet still contains all the goodness - such as B vitamins, minerals and dietary fibre - that makes it a healthy and nutritious snack.</p>
      <h3 id="can-dogs-eat-porridge-with-syrup">Can dogs eat porridge with syrup?</h3>
      <p>It’s not recommended you add syrup to your dog’s porridge portion. It’s very sweet, calorific and could contain lots of artificial additives and preservatives. Syrup-covered or sugary foods are likely to lead a dog to gain weight.</p>
      <p>Plain porridge is tasty enough for a dog, there’s no need to add a sweetener - and definitely avoid anything which may contain Xylitol, which is toxic to dogs.</p>
      <h3 id="can-dogs-eat-porridge-with-banana">Can dogs eat porridge with banana?</h3>
      <p>In moderation, yes. Both oats and bananas are a tasty, healthy option for pooches, but adding banana as a topping also piles on those extra calories. Maybe consider this as an extra special treat, and not something that’s regularly fed as a combination.</p>
      <h2 id="are-oats-or-rice-better-for-dogs">Are oats or rice better for dogs?</h2>
      <p>Both oats or rice can be included in a dogs’ diet, though which is safer depends on whether the dog has certain intolerances. Both oat and rice allergies are very uncommon, however we recommend rice for pooches with an upset stomach.</p>
      <p>Oats are probably slightly more nutrient dense than rice, though they should be used as a snack or addition to a dog’s regular food.</p>
      <h3 id="conclusion">Conclusion</h3>
      <p>The bottom line regarding oats and porridge for dogs - it’s a-ok! Just be sure to cook it gently in water and serve plain (not too hot!), without added sugar or flavourings. Use a plain brand of oats, not the pre-flavoured kinds.</p>
      <h3 id="what-other-foods-can-dogs-safely-eat">What other foods can dogs safely eat?</h3>
      <p>If you like the idea of feeding your pooch oats but are looking for alternative healthy snacks, why not try the following?</p>
      <ul>
        <li>Apple, another digestible source of fibre</li>
        <li>Pumpkin, for fibre and digestion</li>
        <li>Grain-free dog food for a sensitive stomach</li>
      </ul>
      <b>Browse the full range at Pooch & Mutt for more tasty,</b>
      <a>healthy treats for dogs</a>
      <b>as well as nutritious</b>
      <a>grain-free dog foods</a>
      <b>to keep your pooch strong, happy and care-free.</b>
`,
  headings: [
    { id: 'is-porridge-good-for-dogs', text: 'Is porridge good for dogs?', level: 2 },
    { id: 'what-are-the-health-benefits-of-oats', text: 'What are the health benefits of oats?', level: 3 },
    { id: 'can-puppies-eat-porridge', text: 'Can puppies eat porridge?', level: 2 },
    { id: 'when-is-porridge-unsafe-for-dogs', text: 'When is porridge unsafe for dogs?', level: 2 },
    { id: 'can-dogs-be-allergic-to-oats', text: 'Can dogs be allergic to oats?', level: 3 },
    { id: 'can-porridge-make-dogs-sick', text: 'Can porridge make dogs sick?', level: 3 },
    { id: 'how-to-safely-give-oats-to-your-dog', text: 'How to safely give oats to your dog?', level: 2 },
    { id: 'how-much-is-safe-to-give-your-dog', text: 'How much is safe to give your dog?', level: 3 },
    { id: 'what-types-of-oats-can-dogs-eat', text: 'What types of oats can dogs eat?', level: 2 },
    { id: 'can-dogs-eat-oats-raw', text: 'Can dogs eat oats raw?', level: 3 },
    { id: 'can-dogs-eat-porridge-made-with-milk', text: 'Can dogs eat porridge made with milk?', level: 3 },
    { id: 'can-dogs-eat-porridge-with-honey', text: 'Can dogs eat porridge with honey', level: 3 },
    { id: 'can-dogs-eat-porridge-with-water', text: 'Can dogs eat porridge with water?', level: 3 },
    { id: 'can-dogs-eat-porridge-with-syrup', text: 'Can dogs eat porridge with syrup?', level: 3 },
    { id: 'can-dogs-eat-porridge-with-banana', text: 'Can dogs eat porridge with banana?', level: 3 },
    { id: 'are-oats-or-rice-better-for-dogs', text: 'Are oats or rice better for dogs?', level: 2 },
    { id: 'conclusion', text: 'Conclusion', level: 3 },
    { id: 'what-other-foods-can-dogs-safely-eat', text: 'What other foods can dogs safely eat?', level: 3 },
  ]

},
'can-dogs-eat-beetroot': {
  title: 'Can dogs eat Beetroot?',
  category: 'Pets',
  snippet: "Yes - dogs can eat fresh beetroot, the root vegetable famous for its intensely purple colour! Not only is beetroot safe to feed a pooch, it’s actually very healthy, and crammed full of nutritional benefits to keep a dog’s body strong and well-functioning. Let’s answer all your burning questions about whether dogs can eat beetroot…",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/BLOG_CAN_DOGS_EAT_BEETROOT_500x_crop_center.jpg?v=1708458801",
    alt: "Can dogs eat Beetroot?",
    caption: "Is beetroot good for dogs?"
  },
  content: `
<h2 id="is-beetroot-good-for-dogs">Is beetroot good for dogs?</h2>
      <p>Beetroot is a very healthy food for your dog, when it’s prepared in the right way. A lot of us think of beetroot as the pickled kind you get in jars - but this should actually be avoided when it comes to dogs, as it could contain salt and additives that will mess with their sensitive digestive system. Fresh or raw beetroot, however, is packed full of goodness and is great for digestion.</p>
      <h3 id="what-are-the-health-benefits-of-beetroot">What are the health benefits of beetroot?</h3>
      <p>Here’s why feeding beetroot to your dog can boost their health:</p>
      <ul>
        <li>Loaded with Fibre to aid digestion and boost gut health.</li>
        <li>Packed with Minerals such as calcium, potassium and magnesium; vital for your dog’s bone strength, muscle function and electrolyte balance.</li>
        <li>The skin contains Betalain Pigments, which are full of antioxidants and anti-inflammatory properties. These do an important job in improving a dog’s skin and coat, reducing gut stress and supporting their immune system</li>
        <li>Great source of Vitamin C, also great for immunity and promotes a dog’s collagen production.</li>
      </ul>
      <h2 id="when-are-beets-unsafe-for-dogs">When are beets unsafe for dogs?</h2>
      <p>Fresh beetroot is the best kind to feed dogs, as the beetroot you get in jars are pickled in vinegar - and are generally considered unsafe. Definitely avoid any beetroot that comes soaked in sauces, oils or other seasonings, it won’t sit well with your dog’s tum and could cause irritation.</p>
      <p>Important: If your dog has a calcium deficiency or is prone to bladder or kidney stones, get in touch with your vet before feeding them beets, as they could be a riskier snack than for healthy dogs (read on for more on this.)</p>
      <p>As with any snack, beets should be fed in moderation to your pooch, and served plain and chopped into pieces - perhaps scattered over their food, or on its own. Don’t use beetroot alone as a replacement for their regular dog food.</p>
      <h3 id="can-dogs-be-allergic-to-beetroot">Can dogs be allergic to beetroot?</h3>
      <p>Dogs can be allergic to any food, beetroot included. If you’ve never fed it to your pooch before, start out with a small serving and keep an eye on them for the rest of the day. If they show any adverse reactions, listed below, you should assume they don’t respond well to beetroot.</p>
      <ul>
        <li>Reddening, itching or a rash on the skin</li>
        <li>Swelling</li>
        <li>Breathing issues (wheezing, etc.)</li>
        <li>Ear infections or irritation</li>
        <li>Severe or consistent vomiting and diarrhoea</li>
        <li>Stomach pain and bloating</li>
        <li>Change in behaviour (seeming down, less energetic than usual)</li>
      </ul>
      <h3 id="can-beetroot-make-dogs-sick">Can beetroot make dogs sick?</h3>
      <p>Yes, if you serve a dog too much beetroot they may become sick with it. This is because its high oxalate content is linked to developing crystals which create kidney stones. High oxalates can also create calcium deficiencies. Because of this, it’s extra important to only feed beets in moderation - and if your pooch already has an issue with kidney stones, chat to your vet before adding them to their diet.</p>
      <p>If beets aren’t fresh, or they’re served up with added seasonings, this could cause your pup harm. If your pooch is allergic to beetroot, they might also become sick. If you’re concerned about how your dog responds when you feed them beetroot, don’t give them any more and if symptoms persist, get in touch with a vet.</p>
      <h2 id="how-to-safely-give-beetroot-to-your-dog">How to safely give beetroot to your dog?</h2>
      <p>Fresh, raw beetroot looks like a deep purple-coloured root vegetable, shaped like an onion, often with leaves attached. This is the kind of beetroot to feed your dog, not the classic jarred or tinned kind, or any that is vacuum packed in vinegar or seasoning.</p>
      <p>Always wash the bulbs before preparing, as they may have dirt or pesticide residue still stuck to them and you want them to be as clean as possible.</p>
      <p>Cooking the beetroot is the best option as it will be softer for your peckish pooch to munch on. You could oven roast or boil the beetroot, then chop it and sprinkle onto their food. If you serve it raw, you should cut it into easily digestible pieces, or maybe grate it onto their regular food.</p>
      <h3 id="how-much-is-safe-to-give-your-dog">How much is safe to give your dog?</h3>
      <p>A tasty portion of beetroot is very healthy for a dog, but it should still be considered a snack or treat. The ideal serving size will depend on your dog’s breed, age and health condition, but in general, treats should take up around 10% of a dog’s diet. Use these guidelines when whipping up this purple snack for your pup.</p>
      <h2 id="can-puppies-eat-beets">Can puppies eat beets?</h2>
      <p>Yes, though raw beetroot will be tricky for their young tummies to digest. Cook some fresh beetroot, and cut it into tiny pieces for their puppy mouths to munch easily. It should go down a treat and as it’s full of vitamins and antioxidants, provide lots of lovely health benefits for a puppy’s growth and development.</p>
      <h2 id="what-types-of-beets-can-dogs-eat">What types of beets can dogs eat?</h2>
      <p>There are a good few types of beetroot your dog could get their teeth into, so let’s discuss which beets are safer for dogs to eat…</p>
      <h3 id="can-dogs-eat-cooked---boiled-beetroot">Can dogs eat cooked / boiled beetroot?</h3>
      <p>Absolutely - though raw beets are more nutrient dense, cooked beetroot is great as it’s easier for dogs to munch and digest. Serve up small pieces of boiled or oven roasted beetroot, plain with no added seasoning, and either sprinkle it over your dog’s food, or on its own as a snack. Be sure to wash the beets first to get rid of any pesticides… and buying organic beetroot is even better.</p>
      <h3 id="can-dogs-eat-pickled-beetroot-in-vinegar">Can dogs eat pickled beetroot in vinegar?</h3>
      <p>No - avoid canned or pickled beetroot for dogs. Though they seem to be whole and similar to fresh beets, they’re more likely to contain salt and other additives and preservatives, which are detrimental to a pooch’s sensitive digestive system. Fresh is best.</p>
      <h3 id="can-dogs-eat-raw-beetroot">Can dogs eat raw beetroot?</h3>
      <p>Fresh raw beetroot is the most nutritious way to serve beets to your dog - grated over their regular food, for instance, is a nifty way to get those beet nutrients into their diet.</p>
      <p>Cooked beets are easier for your dog to chew and digest, but as with all fruit and vegetables, raw beets retain their nutritional goodness which can sometimes deplete through cooking.</p>
      <h3 id="can-dogs-eat-beetroot-leaves">Can dogs eat beetroot leaves?</h3>
      <p>It depends. If your pooch has urinary issues or is prone to oxalate stone - they should be completely avoided! This is because the leaves contain the most oxalates, and can be dangerous to those pooches that are vulnerable. However, beet leaves are full of goodness for dogs without urinary problems. If you want to beat food wastage (no pun intended), use all parts of the beetroot including the greens. Rinse the whole beetroot thoroughly, cut off the greens and chop up into munchable pieces. Cook them off in a pan, similar to spinach - just avoid any butter, salt or seasoning. Hopefully your dog should devour them with the rest of the beets.</p>
      <h3 id="can-dogs-eat-beetroot-powder">Can dogs eat beetroot powder?</h3>
      <p>Maybe. Beetroot powder is a clever supplement that offers a condensed shot of the micronutrients you’d get from beetroot. In theory, adding beetroot powder to regular food should provide a boost to the immune system and aid digestion.</p>
      <p>However, it’s not recommended to offer a human supplement to dogs - it could contain ingredients that dogs don’t react well to. Unless the beetroot powder is made specifically for dogs, it’s a better idea to feed your pooch fresh beetroot.</p>
      <h3 id="can-dogs-eat-canned-beetroot">Can dogs eat canned beetroot?</h3>
      <p>No. Canned beets and beetroot that’s pickled in a jar aren’t recommended as part of a dog’s diet. These pickled beets tend to absorb lots of sodium, preservatives and extra hidden ingredients that aren’t good for a dog’s health, potentially causing gastrointestinal issues.</p>
      <h3 id="can-dogs-eat-beetroot-juice">Can dogs eat beetroot juice?</h3>
      <p>There’s not really any reason to give beetroot juice to your dog. Several beets are needed for one serving of beetroot juice, which is just an unnecessary quantity of beetroot that will probably go way over their recommended sugar and fibre levels. Stick to a fresh, whole beetroot so you can be sure of portion control.</p>
      <h3 id="conclusion">Conclusion</h3>
      <p>In summary, beetroots get a big thumbs up as a healthy snack for dogs - they’re packed full of fibre, vitamins and antioxidants. Whether they’re cooked or raw, fresh beetroot is the safest bet for your pooch; avoid pickled or tinned beetroot. Chop fresh beets into manageable pieces, and be sure to give them a good rinse before serving to get rid of any pesticides or dirt.</p>
      <h3 id="what-other-foods-can-dogs-safely-eat">What other foods can dogs safely eat?</h3>
      <p>If you like the idea of feeding your dog beetroots, there are some other great alternatives for healthy, nutrient-rich snacks and supplements too:</p>
      <ul>
        <li>Cucumber, another low calorie source of fibre</li>
        <li>Carrot, a crunchy snack packed with vitamins and minerals</li>
        <li>A digestive supplement for dogs such as Bionic Biotic</li>
        <li>Dog food with sweet potato, for digestion</li>
        <li>Adult Superfood or Puppy Superfood - both of which include beetroot and all sorts of other superfoods, to keep your pooch full of the healthy stuff</li>
      </ul>
      <p>Looking to supplement your dog’s diet with healthy, nutritious foods? Check out our range of natural, grain-free food for dogs, and healthy, grain-free dog treats. They’re packed full of whole ingredients to keep your pooch strong, happy and care-free.</p>
`,
  headings: [
    { id: 'is-beetroot-good-for-dogs', text: 'Is beetroot good for dogs?', level: 2 },
    { id: 'what-are-the-health-benefits-of-beetroot', text: 'What are the health benefits of beetroot?', level: 3 },
    { id: 'when-are-beets-unsafe-for-dogs', text: 'When are beets unsafe for dogs?', level: 2 },
    { id: 'can-dogs-be-allergic-to-beetroot', text: 'Can dogs be allergic to beetroot?', level: 3 },
    { id: 'can-beetroot-make-dogs-sick', text: 'Can beetroot make dogs sick?', level: 3 },
    { id: 'how-to-safely-give-beetroot-to-your-dog', text: 'How to safely give beetroot to your dog?', level: 2 },
    { id: 'how-much-is-safe-to-give-your-dog', text: 'How much is safe to give your dog?', level: 3 },
    { id: 'can-puppies-eat-beets', text: 'Can puppies eat beets?', level: 2 },
    { id: 'what-types-of-beets-can-dogs-eat', text: 'What types of beets can dogs eat?', level: 2 },
    { id: 'can-dogs-eat-cooked---boiled-beetroot', text: 'Can dogs eat cooked / boiled beetroot?', level: 3 },
    { id: 'can-dogs-eat-pickled-beetroot-in-vinegar', text: 'Can dogs eat pickled beetroot in vinegar?', level: 3 },
    { id: 'can-dogs-eat-raw-beetroot', text: 'Can dogs eat raw beetroot?', level: 3 },
    { id: 'can-dogs-eat-beetroot-leaves', text: 'Can dogs eat beetroot leaves?', level: 3 },
    { id: 'can-dogs-eat-beetroot-powder', text: 'Can dogs eat beetroot powder?', level: 3 },
    { id: 'can-dogs-eat-canned-beetroot', text: 'Can dogs eat canned beetroot?', level: 3 },
    { id: 'can-dogs-eat-beetroot-juice', text: 'Can dogs eat beetroot juice?', level: 3 },
    { id: 'conclusion', text: 'Conclusion', level: 3 },
    { id: 'what-other-foods-can-dogs-safely-eat', text: 'What other foods can dogs safely eat?', level: 3 },
  ]

},

'can-dogs-eat-tuna': {
  title: 'Can dogs eat tuna?',
  category: 'Pets',
  snippet: "Yes - dogs can eat tuna, but only in moderation. Tuna is a nutrient-rich fish, full of essential fatty acids and good amounts of protein, however, it can contain more harmful mercury than other fish, particularly when canned. In this article, we’ll answer all your questions about whether your dog can eat tuna.",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/BLOG_CAN_DOGS_EAT_TUNA_500x_crop_center.jpg?v=1708459190",
    alt: "Can dogs eat tuna?",
    caption: "Is tuna good for dogs?"
  },
  content: `
<h2 id="is-tuna-good-for-dogs">Is tuna good for dogs?</h2>
      <p>In small amounts, tuna can be a healthy treat for a dog. As an oily fish, it contains lots of beneficial omega-3, among other nutrients - however, there are other nutritious fish that are safer for a dog to eat regularly.</p>
      <h3 id="what-are-the-health-benefits">What are the health benefits?</h3>
      <p>Let’s go into some of the health benefits of tuna:</p>
      <ul>
        <li>High in omega-3. Omega-3 fatty acids are essential for a dog’s body - they contribute to a healthy coat and skin, a boosted immune system, improved heart and brain health, and can reduce inflammation.</li>
        <li>Good source of protein. Protein is a vital nutrient for muscle development, repair and growth.</li>
        <li>Vitamins B12, selenium and niacin. Important for metabolising energy, boosting the immune system, and improving skin health and nerve function.</li>
      </ul>
      <h2 id="can-puppies-eat-tuna">Can puppies eat tuna?</h2>
      <p>Sometimes, depending on the type of tuna. It’s okay to feed puppies tuna in small amounts if you stick to Skipjack tuna, which has lower mercury levels. Albacore tuna tends to have higher mercury and should be avoided, as your puppy could be at risk from mercury poisoning. If you want to feed fish to a puppy, mackerel or salmon are generally safer options - and are still super tasty.</p>
      <h2 id="when-is-tuna-unsafe-for-dogs">When is tuna unsafe for dogs?</h2>
      <p>Tuna is unsafe for dogs in large amounts, and should only be deemed a treat to be fed occasionally. Of course, it’s also unsafe if it’s spoiled or out of date, or if your pooch has an allergy. Canned tuna is only safe for dogs when it comes in spring water - the kind soaked in brine or oils should be avoided.</p>
      <h3 id="can-dogs-be-allergic-to-tuna">Can dogs be allergic to tuna?</h3>
      <p>Dogs can have an allergy to tuna. Introduce a small amount of tuna to your dog, and if they have any of the following reactions, don’t feed it to your pooch again:</p>
      <ul>
        <li>Reddening skin, itching or a rash</li>
        <li>Swelling</li>
        <li>Breathing issues (wheezing, etc.)</li>
        <li>Severe or extended sickness or diarrhoea</li>
        <li>Bloating, stomach pain</li>
        <li>General change in behaviour (low energy, lethargic, etc.)</li>
        <li>Ear infections</li>
      </ul>
      <h3 id="can-tuna-make-dogs-sick">Can tuna make dogs sick?</h3>
      <p>Tuna has higher levels of mercury than other fish, so though it contains a lot of nutrients that benefit dogs, it’s not safe enough to have as a regular food in their diet. Mercury poisoning can make a dog very sick, leading to kidney damage or in severe cases, blindness - and it can even be lethal to puppies.</p>
      <p>If your pooch gets mercury poisoning, they may show the following symptoms:</p>
      <ul>
        <li>Vomiting or diarrhoea</li>
        <li>Loss of appetite</li>
        <li>Lethargy, unusually low energy</li>
        <li>Tremors</li>
        <li>Difficulty walking</li>
      </ul>
      <p>Spoiled tuna, or tuna that is soaked in brine or flavourings can also make a dog sick - they might also get sick as an allergic reaction to tuna. If your pooch shows any adverse reaction to tuna, it’s a good idea to take them to a vet.</p>
      <h2 id="how-to-safely-give-tuna-to-your-dog">How to safely give tuna to your dog?</h2>
      <p>Tuna is safest when fed in a small amount as an occasional treat. Feed either fresh tuna that has been cooked and served plain, or a small amount of tinned tuna that comes in spring water.</p>
      <h2 id="what-types-of-tuna-can-dogs-eat">What types of tuna can dogs eat?</h2>
      <p>Let’s go into more detail over the kinds of tuna safest for a dog’s snack…</p>
      <h3 id="can-dogs-eat-tinned-tuna">Can dogs eat tinned tuna?</h3>
      <p>Tinned tuna is perhaps the most common tuna to exist in human homes, so it makes sense if you’ve wondered whether your hungry pooch can have some. This depends what the tuna comes served in:</p>
      <p>X Tuna in sunflower oil - No. Sunflower oil adds a lot of unnecessary fat to a portion of tuna and puts pooches at a higher risk of a stomach upset and pancreatitis.</p>
      <p>X Tuna in brine - No. Brine is much too high in sodium to feed to a dog, so avoid tuna that has been soaked in it.</p>
      <p>✔ Tuna in spring water - Yes, this is the safest way for your pooch to get a bite of tuna, but again, make sure it’s only fed as a treat, not a regular part of your dog’s meal rotation.</p>
      <h3 id="can-dogs-eat-tuna-steak">Can dogs eat tuna steak?</h3>
      <p>Only feed your dog a small amount of tuna steak if it has been cooked plain without any added salt, sauces or flavourings. Though it will contain healthy omega-3 fatty acids and protein, tuna steak may still contain mercury, so should be fed to dogs only very occasionally.</p>
      <h3 id="can-dogs-eat-tuna-pasta">Can dogs eat tuna pasta?</h3>
      <p>No - it’s best to avoid pasta with tuna. Pasta is a very starchy carbohydrate with little nutritional benefit to a dog, while tuna should only be fed plain as an occasional treat.</p>
      <h3 id="can-dogs-eat-tuna-mayo">Can dogs eat tuna mayo?</h3>
      <p>Avoid feeding your dog anything mixed with mayonnaise. Though some plain tuna in spring water is fine as a treat for a dog, tuna mayo has much too high a fat content and is very calorific for a pooch.</p>
      <h3 id="conclusion">Conclusion</h3>
      <p>Tuna is, in general, safe for a dog - it contains essential omega-3 fatty acids, vitamins and protein. However, due to its high mercury levels, it should be fed in small amounts as an occasional treat for dogs - not included as part of their regular diet. Ideally, there are other fish options that are safer.</p>
      <p>If you give your dog some tuna, make sure it’s either cooked tuna steak, served plain; or tinned tuna served in spring water, not brine or oil.</p>
      <h3 id="what-other-foods-can-dogs-safely-eat">What other foods can dogs safely eat?</h3>
      <p>If you want to feed your pooch a nutrient-rich fish, there are other tasty options that are safer than tuna.</p>
      <ul>
        <li>Salmon, another oily fish rich in protein and omega-3.</li>
        <li>Mackerel, another nutritious fish full of essential fatty acids.</li>
        <li>Dog food with cod, for fishy goodness that is gentle on digestion.</li>
        <li>Salmon Oil for Dogs can be drizzled over a dog’s regular food for a condensed shot of omega-3 and 6.</li>
      </ul>
      <p>If you’re looking for healthy and nutritious food for your dog, Pooch & Mutt’s grain-free dog food and healthy snacks for dogs are made with natural, whole ingredients and a host of veggies and supplements.</p>
`,
  headings: [
    { id: 'is-tuna-good-for-dogs', text: 'Is tuna good for dogs?', level: 2 },
    { id: 'what-are-the-health-benefits', text: 'What are the health benefits?', level: 3 },
    { id: 'can-puppies-eat-tuna', text: 'Can puppies eat tuna?', level: 2 },
    { id: 'when-is-tuna-unsafe-for-dogs', text: 'When is tuna unsafe for dogs?', level: 2 },
    { id: 'can-dogs-be-allergic-to-tuna', text: 'Can dogs be allergic to tuna?', level: 3 },
    { id: 'can-tuna-make-dogs-sick', text: 'Can tuna make dogs sick?', level: 3 },
    { id: 'how-to-safely-give-tuna-to-your-dog', text: 'How to safely give tuna to your dog?', level: 2 },
    { id: 'what-types-of-tuna-can-dogs-eat', text: 'What types of tuna can dogs eat?', level: 2 },
    { id: 'can-dogs-eat-tinned-tuna', text: 'Can dogs eat tinned tuna?', level: 3 },
    { id: 'can-dogs-eat-tuna-steak', text: 'Can dogs eat tuna steak?', level: 3 },
    { id: 'can-dogs-eat-tuna-pasta', text: 'Can dogs eat tuna pasta?', level: 3 },
    { id: 'can-dogs-eat-tuna-mayo', text: 'Can dogs eat tuna mayo?', level: 3 },
    { id: 'conclusion', text: 'Conclusion', level: 3 },
    { id: 'what-other-foods-can-dogs-safely-eat', text: 'What other foods can dogs safely eat?', level: 3 },
  ]

},

'can-dogs-eat-salmon': {
  title: 'Can dogs eat Salmon?',
  category: 'Pets',
  snippet: "Yes - dogs can eat salmon! This pink, fleshy fish is one of the healthiest foods a dog can eat; but it must be prepared correctly and included as part of a balanced, nutritious diet. Let’s go into the array of health benefits of salmon and discuss the best way to serve it to your hungry pooch…",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/BLOG_CAN_DOGS_EAT_SALMON_500x_crop_center.jpg?v=1708459634",
    alt: "Can dogs eat Salmon?",
    caption: "Is salmon good for dogs?"
  },
  content: `
<h2 id="is-salmon-good-for-dogs">Is salmon good for dogs?</h2>
      <p>Salmon is a healthy option for most dogs. Salmon is not only super tasty for pooches, it’s also packed with nutrients that offer a party of health benefits in a dog’s body. There are exceptions, however, depending on how well your pooch digests oily fish.</p>
      <h3 id="what-are-the-health-benefits-of-salmon">What are the health benefits of salmon?</h3>
      <p>Let’s unpack all the ways eating salmon is beneficial to a dog’s health:</p>
      <ul>
        <li>Rich in Omega-3 Fatty Acids. These essential fatty acids contribute to good skin and coat condition, boost the nervous system, heart function and brain health, and act as an anti-inflammatory (to reduce pain in a dog’s joints, for instance). A dog’s body can’t produce these fatty acids on their own, so must receive them from food, such as oily fish.</li>
        <li>Lean Protein. Salmon is a nutritious source of lean protein, which is fundamental to muscle development, repair and strength. Lean proteins are the cornerstone of a healthy canine diet - so if your pooch is allergic to chicken or beef, salmon is a great alternative.</li>
        <li>Vitamins D & B12, Niacin and Pyridoxine; critical for skin and bone health, boosting the immune system and metabolising energy.</li>
        <li>Super tasty. Dogs love the taste of juicy salmon, which means they’ll feel satisfied and full when it’s part of their meal.</li>
      </ul>
      <h2 id="can-puppies-eat-salmon">Can puppies eat salmon?</h2>
      <p>Puppies can definitely eat salmon, so long as it’s freshly prepared, cooked and served in tiny pieces without any bones or seasoning. Salmon is a great protein source for puppies that will help develop their strength as they grow.</p>
      <h2 id="when-is-salmon-unsafe-for-dogs">When is salmon unsafe for dogs?</h2>
      <p>Though it’s full of healthy nutrients, there are a few ways in which salmon can be unsafe.</p>
      <ul>
        <li>The most obvious is if the salmon isn’t fresh, as fish can easily spoil and carry bacteria. Be sure to choose fresh salmon from a reputable fishmonger or supermarket - if frozen, defrost it thoroughly and cook well before serving.</li>
      </ul>
      <ul>
        <li>Salmon can be unsafe when served with bones, or when covered in seasoning or flavourings. Sushi, smoked or cured salmon is also not advisable.</li>
      </ul>
      <ul>
        <li>If your pooch has pancreatitis or any other digestive issue, salmon might not be the best food for them. Be sure to check with your vet first.</li>
      </ul>
      <ul>
        <li>There’s a small chance your dog may have an allergy to salmon, which also can make it an unsafe food.</li>
      </ul>
      <h3 id="can-dogs-be-allergic-to-salmon">Can dogs be allergic to salmon?</h3>
      <p>Your dog may have a salmon, fish or seafood allergy, so it’s important to introduce the food slowly if they haven’t eaten it before. Serve a small portion of salmon and watch over your pooch in the hours following. If they show any of the following signs, don’t include salmon in their diet:</p>
      <ul>
        <li>Extended or severe diarrhoea or vomiting</li>
        <li>Swelling, redness or itchiness of the skin</li>
        <li>Change in behaviour (lethargic, low mood etc.)</li>
        <li>Ear infections</li>
        <li>Breathing issues (wheezing, etc.)</li>
        <li>Bloating or pain in stomach</li>
      </ul>
      <h3 id="can-salmon-make-dogs-sick">Can salmon make dogs sick?</h3>
      <p>Salmon will usually make a dog very happy, but as with all foods, it can make a pooch sick if prepared incorrectly or if their digestive systems don’t respond to it. If the salmon isn’t fresh, is marinated in sauces or flavourings, or if you feed your pooch only salmon, it could negatively impact their digestive system and make them unwell.</p>
      <p>If your dog has issues digesting fats (for example if they have pancreatitis) you may be better off feeding your dog a protein option that’s lower in fat.</p>
      <h2 id="how-to-safely-give-salmon-to-your-dog">How to safely give salmon to your dog?</h2>
      <p>The general rule with salmon is to prepare a fresh piece of fish without bones, cook it plain (either pan-fried, steamed or in the oven) and serve without seasoning or flavourings. This way it remains healthy and nutritious with the lowest risk of upsetting your pooch’s tum. If you decide to feed your dog a home-cooked diet with salmon as the base ingredient, it’s important to consult with a nutritionist first, to ensure your pooch is getting all the nutrients they need.</p>
      <h3 id="how-much-is-safe-to-give-your-dog">How much is safe to give your dog?</h3>
      <p>Salmon can be fed to your dog as part of a balanced diet, and can make up the protein portion of a meal (the majority!). You can safely feed your dog salmon every day if they don’t have any allergic reactions and enjoy it (lucky pooch).</p>
      <h3 id="can-dogs-with-pancreatitis-eat-salmon">Can dogs with pancreatitis eat salmon?</h3>
      <p>It’s not recommended. Dogs with pancreatitis suffer with difficulty digesting fats, and salmon is an oily fish with a high amount of fatty acids. Though these are highly beneficial to most dogs, it might cause harm to a dog with pancreatitis, who could struggle to digest it and become ill. Speak to your vet for advice first if you’re worried about feeding salmon to your dog.</p>
      <h2 id="what-types-of-salmon-can-dogs-eat">What types of salmon can dogs eat?</h2>
      <p>Let’s go into more detail over the best types of salmon to feed your pooch…</p>
      <h3 id="can-dogs-eat-salmon-fillet">Can dogs eat salmon fillet?</h3>
      <p>Yes! A fresh salmon fillet, de-boned and cooked plain is one of the healthiest ways to feed salmon to your pooch. Just be sure the fillet isn’t marinated in sauce or flavourings or coated in salt. Cook it either in a pan, oven-roasted or steamed.</p>
      <h3 id="can-dogs-eat-smoked-salmon">Can dogs eat smoked salmon?</h3>
      <p>No - smoked salmon isn’t recommended, whether it’s cold-smoked or hot-smoked salmon. As it’s cured, the sodium content is greatly increased, which will only have negative impacts on your dog’s heart rate and digestive system. It’s probably not going to harm your pooch if they accidentally eat a piece of smoked salmon, but don’t feed it to them intentionally.</p>
      <h3 id="can-dogs-eat-salmon-skin">Can dogs eat salmon skin?</h3>
      <p>Yes, salmon skin, or salmon scales, is a safe food for dogs. Just be sure it’s cooked along with the rest of the salmon, and isn’t covered in any salt or seasoning. Fried salmon skin is ok for dogs to eat, again so long as it’s not coated in anything. Served plain, salmon skin will contain a lot of the beneficial nutrients that salmon fillet does.</p>
      <h3 id="can-dogs-eat-raw-salmon">Can dogs eat raw salmon?</h3>
      <p>No, it’s preferable to serve the salmon cooked. Raw or uncooked salmon is more at risk of being contaminated by harmful bacteria, which can be killed off in the cooking process.</p>
      <h3 id="can-dogs-eat-cooked-salmon">Can dogs eat cooked salmon</h3>
      <p>Yes - cooked is the preferred way to serve salmon to your pooch. Lightly cooking a piece of fresh salmon, such as pan-frying, poaching or baking, without any added salt or flavourings, is the safest way for your dog to eat salmon.  Try to remove all the bones before cooking, too, to avoid unnecessary choking hazards.</p>
      <h3 id="can-dogs-eat-tinned---canned-salmon">Can dogs eat tinned / canned salmon?</h3>
      <p>No - it’s not a great idea to feed tinned salmon to your pooch. Tinned fish tends to be soaked in brine, oil or other flavourings which can raise the salmon’s sodium and fat content. It also won’t contain all the delicious nutrients of fresh salmon.</p>
      <p>It might be ok to feed a small amount of tinned salmon in spring water, but freshly cooked salmon is always the better option.</p>
      <h3 id="can-dogs-eat-red---pink-salmon">Can dogs eat red / pink salmon?</h3>
      <p>Yes. The varying colour of salmon depends on the fish’s diet, and means red salmon has a firmer texture and stronger flavour. Both pink and red salmon are suitable for a dog to eat, and both are full of nutritious omega fatty acids. Just be sure the salmon is de-boned, cooked well and served plain without seasonings.</p>
      <h3 id="can-dogs-eat-salmon-paste">Can dogs eat salmon paste?</h3>
      <p>No - commercial salmon paste isn’t recommended as it’s usually full of salt and additives which reduce its nutritional value to a pooch. If your dog wants a taste of delicious salmon, feed them some healthy dog food with salmon, or some fresh salmon you’ve prepared yourself.</p>
      <h3 id="can-dogs-eat-salmon-heads">Can dogs eat salmon heads?</h3>
      <p>The flesh of a salmon is preferable to the full heads, due to choking hazards - but if the heads are cleaned, cooked and soft enough to eat, you can offer them to your pooch.  They’re full of beneficial nutrients just like the rest of a salmon. If they were frozen, make sure they’re fully defrosted before cooking.</p>
      <h3 id="can-dogs-eat-salmon-bones">Can dogs eat salmon bones?</h3>
      <p>It’s not recommended to feed any fish with bones to your pooch, even if the bones seem quite soft. There could be bigger, tricker bones within a full fish or fillet that pose a dangerous choking hazard. Ask a fishmonger to debone a piece of salmon, or debone it yourself, before serving.</p>
      <h3 id="can-dogs-eat-frozen-salmon">Can dogs eat frozen salmon?</h3>
      <p>Yes - freezing fish keeps it fresh and retains its goodness! But frozen salmon must be fully defrosted and cooked before your pooch takes a bite. Frozen fish won’t be kind to your dog’s digestion and could make them ill.</p>
      <p>If the salmon has been frozen just to preserve, and is then cooked, it should still contain lots of its goodness, such as omega fatty acids and protein.</p>
      <h3 id="can-dogs-eat-salmon-oil">Can dogs eat salmon oil?</h3>
      <p>Yes - salmon oil is hugely beneficial to a lot of dogs. As a lot of the goodness from salmon comes from its oil which is full of essential fatty acids omega 3 and 6, fish oil is a popular supplement for dogs. Salmon oil for dogs can contribute to good skin and coat condition, brain and heart function, a boosted immune system and it can reduce inflammation (in a dog’s joints, for instance).</p>
      <p>Just be wary if your pooch has pancreatitis - fish oil may not be suitable for them. Talk to a vet first if you have any concerns about feeding your dog a fish oil supplement.</p>
      <h3 id="can-dogs-eat-raw-salmon-sushi-sashimi">Can dogs eat raw salmon sushi/sashimi?</h3>
      <p>Though raw salmon for sushi, or sashimi, is prepared for safe human consumption, it’s still not recommended to feed it to your dog.</p>
      <p>Sashimi grade salmon may have been salted or cured, and the salmon used in sushi may have been soaked in soy sauce or another condiment unsuitable for pooches to eat. There may be hidden wasabi, or some other seasoning that dogs will find distressing on the palate!</p>
      <p>If the sushi uses raw fish, this may contain parasites or bacteria that are unsafe for a pooch. Best keep the sushi as a human treat.</p>
      <h3 id="is-my-dog-at-risk-of-poisoning-from-salmon">Is my dog at risk of poisoning from salmon?</h3>
      <p>No, it’s highly unlikely. Salmon that’s available in the UK is typically caught locally or in Scandinavia - meaning we don’t need to worry about the presence of Rickettsial organisms in raw fish like they do in other parts of the world, like the USA. However, cooked salmon is always the safest way to feed your pooch.</p>
      <h3 id="conclusion">Conclusion</h3>
      <ul>
        <li>Overall, salmon is a nutrient-rich food for dogs, full of helpful omega fatty acids and lean protein. Salmon can be included as part of a balanced, well-rounded doggy diet.</li>
      </ul>
      <ul>
        <li>That said, it’s important to speak to a vet before feeding your pooch too much salmon. As it’s an oily fish, it may not be suitable for all dogs, particularly if they have pancreatitis or other issues digesting fats.</li>
      </ul>
      <ul>
        <li>Fresh salmon, de-boned and well cooked without added salt or seasoning is the safest way to serve it to your pooch. Avoid smoked salmon, or raw salmon, to be sure your dog is getting the safest dose of fishy goodness.</li>
      </ul>
      <h3 id="what-other-foods-can-dogs-safely-eat">What other foods can dogs safely eat?</h3>
      <p>If you’re keen on feeding your dog salmon, but you’re looking for other nutritious alternatives, why not try these?</p>
      <b>We have two tasty options of dry dog food with salmon; Health & Digestion and Joint Care</b>
      <ul>
        <li>Herring, or dog food with herring -  a novel protein source that helps support sensitive digestion.</li>
        <li>Mackerel, another beneficial oily fish.</li>
        <li>Cod, long-lasting chews with cod, or dog food with cod - another nutritious fish, gentle on digestion</li>
        <li>Salmon Oil for dogs, for a dose of fishy nutrients to be drizzled over their regular food</li>
        <li>Chicken, or Grain-free dog food with chicken, for a lean protein that’s lower in fat.</li>
      </ul>
      <p>If you think your pooch could benefit from the multiple nutrients provided by oily fish, Pooch & Mutt has a range of supplements for dogs that use salmon or salmon oil. Get in touch with us if you have any further questions about feeding salmon to dogs.</p>
`,
  headings: [
    { id: 'is-salmon-good-for-dogs', text: 'Is salmon good for dogs?', level: 2 },
    { id: 'what-are-the-health-benefits-of-salmon', text: 'What are the health benefits of salmon?', level: 3 },
    { id: 'can-puppies-eat-salmon', text: 'Can puppies eat salmon?', level: 2 },
    { id: 'when-is-salmon-unsafe-for-dogs', text: 'When is salmon unsafe for dogs?', level: 2 },
    { id: 'can-dogs-be-allergic-to-salmon', text: 'Can dogs be allergic to salmon?', level: 3 },
    { id: 'can-salmon-make-dogs-sick', text: 'Can salmon make dogs sick?', level: 3 },
    { id: 'how-to-safely-give-salmon-to-your-dog', text: 'How to safely give salmon to your dog?', level: 2 },
    { id: 'how-much-is-safe-to-give-your-dog', text: 'How much is safe to give your dog?', level: 3 },
    { id: 'can-dogs-with-pancreatitis-eat-salmon', text: 'Can dogs with pancreatitis eat salmon?', level: 3 },
    { id: 'what-types-of-salmon-can-dogs-eat', text: 'What types of salmon can dogs eat?', level: 2 },
    { id: 'can-dogs-eat-salmon-fillet', text: 'Can dogs eat salmon fillet?', level: 3 },
    { id: 'can-dogs-eat-smoked-salmon', text: 'Can dogs eat smoked salmon?', level: 3 },
    { id: 'can-dogs-eat-salmon-skin', text: 'Can dogs eat salmon skin?', level: 3 },
    { id: 'can-dogs-eat-raw-salmon', text: 'Can dogs eat raw salmon?', level: 3 },
    { id: 'can-dogs-eat-cooked-salmon', text: 'Can dogs eat cooked salmon', level: 3 },
    { id: 'can-dogs-eat-tinned---canned-salmon', text: 'Can dogs eat tinned / canned salmon?', level: 3 },
    { id: 'can-dogs-eat-red---pink-salmon', text: 'Can dogs eat red / pink salmon?', level: 3 },
    { id: 'can-dogs-eat-salmon-paste', text: 'Can dogs eat salmon paste?', level: 3 },
    { id: 'can-dogs-eat-salmon-heads', text: 'Can dogs eat salmon heads?', level: 3 },
    { id: 'can-dogs-eat-salmon-bones', text: 'Can dogs eat salmon bones?', level: 3 },
    { id: 'can-dogs-eat-frozen-salmon', text: 'Can dogs eat frozen salmon?', level: 3 },
    { id: 'can-dogs-eat-salmon-oil', text: 'Can dogs eat salmon oil?', level: 3 },
    { id: 'can-dogs-eat-raw-salmon-sushi-sashimi', text: 'Can dogs eat raw salmon sushi/sashimi?', level: 3 },
    { id: 'is-my-dog-at-risk-of-poisoning-from-salmon', text: 'Is my dog at risk of poisoning from salmon?', level: 3 },
    { id: 'conclusion', text: 'Conclusion', level: 3 },
    { id: 'what-other-foods-can-dogs-safely-eat', text: 'What other foods can dogs safely eat?', level: 3 },
  ]

},

'can-dogs-eat-liver': {
  title: 'Can Dogs Eat Liver?',
  category: 'Pets',
  snippet: "Yes, dogs can eat liver - liver is a tasty and nutritious food for dogs. However it should only be fed in moderation, as high amounts of liver can have negative effects on your hungry pooch.",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/BLOG_CAN_DOGS_EAT_LIVER_500x_crop_center.jpg?v=1710763212",
    alt: "Can Dogs Eat Liver?",
    caption: "Is liver good for dogs?"
  },
  content: `
<p>Read on for the answers to all your questions over whether dogs can eat liver, the health benefits of liver for dogs, and how often you can serve liver as a dog’s dinner time treat.</p>
      <h2 id="is-liver-good-for-dogs">Is liver good for dogs?</h2>
      <p>Liver is a very nutrient-dense organ, so yes it is good for dogs to eat, but only in moderation. Not only does liver provide a host of vitamins and minerals for dogs, they also absolutely love the taste, so sneaking a small serving of liver in your dog’s bowl is sure to get their tail wagging.</p>
      <h3 id="what-are-the-health-benefits">What are the health benefits?</h3>
      <p>Liver is very rich in iron, as well as other nutrients like copper, zinc and essential fatty acids. Let’s go into why the attributes of liver are so beneficial to a dog’s health:</p>
      <ul>
        <li>Rich in iron, crucial for a dog’s haemoglobin production and oxygenating the blood.</li>
        <li>Copper and zinc, for boosted immunity and healthy enzyme function.</li>
        <li>Lots of vitamins - including B vitamins, important for cells and the nervous system; and vitamin A to encourage healthy skin, coat condition and vision.</li>
        <li>Essential fatty acids for a host of benefits, including cognitive function, joint health and a healthy heart.</li>
        <li>Source of protein, vital for muscle growth and maintenance.</li>
        <li>Tastes delicious so will get your pooch eating without hesitation.</li>
      </ul>
      <h2 id="when-is-liver-unsafe-for-dogs">When is liver unsafe for dogs?</h2>
      <p>The biggest risk factor with liver is that it’s rich in Vitamin A, so if they eat too much, dogs can suffer from vitamin A toxicity. This can lead to bone and joint issues, stomach upset or even signs of nervous system dysfunction.</p>
      <p>Liver, and any other organ meat is very high in purines, so also needs to be avoided by pooches that are prone to purine stones (urate or xanthine).</p>
      <p>To be extra safe, liver should be served cooked rather than raw. It should also be fed in moderation to dogs, as an occasional treat rather than a regular food. Remember to feed as part of a nutritious, well-rounded diet; alongside a mix of lean proteins, delicious fruit and vegetables, and supplements.</p>
      <h2 id="can-puppies-eat-liver">Can puppies eat liver?</h2>
      <p>Liver is safe to feed a puppy in small amounts - however it’s best to feed your young pup food that’s specific to their needs. Choose a healthy, grain-free puppy food to be certain your pup’s getting the nutrition they need.</p>
      <h3 id="can-dogs-be-allergic-to-liver">Can dogs be allergic to liver?</h3>
      <p>Some dogs can be allergic to liver. To be sure your pooch can stomach some tasty liver, feed a tiny amount if they’ve not tried it before. Keep an eye on them after feeding to see if there are any adverse reactions, such as vomiting, diarrhoea, skin rashes or breathing difficulties.</p>
      <h3 id="can-liver-make-dogs-sick">Can liver make dogs sick?</h3>
      <p>The biggest risk of feeding liver to your pooch is if they receive too much vitamin A. Vitamin A toxicity can lead to distressing symptoms such as stomach issues, nervous system problems, or in the long term, bone growth dysfunction. So long as you don’t feed your dog liver every day, they shouldn’t have any issues.</p>
      <p>Of course, if your pooch is allergic to liver, liver will likely make them sick. Look to feed your dog other sources of protein if this is the case.</p>
      <h2 id="how-to-safely-give-liver-to-your-dog">How to safely give liver to your dog?</h2>
      <p>The safest way of feeding liver to your dog is to assure it’s fresh and well cooked - the most nutritious way is to boil or oven bake it. If you pan-fry it, use a low fat oil. Cut the liver into bite-sized pieces for your pooch before serving.</p>
      <p>Be sure the liver is plain and doesn’t contain any other flavourings or additions such as onion or garlic, as these are toxic to dogs.</p>
      <h3 id="how-much-is-safe-to-give-your-dog">How much is safe to give your dog?</h3>
      <p>As mentioned, it’s important to regard liver as an occasional treat as part of a healthy, well-balanced diet, so don’t give a large amount or feed it to your dog every day. If you consider it a treat, then liver (and other treats) should make up no more than 10% of your dog’s diet. The portion size will depend on the breed and size of your dog - get in touch with your vet for specifics.</p>
      <h2 id="what-kinds-of-liver-can-dogs-eat">What kinds of liver can dogs eat?</h2>
      <p>Liver comes in all varieties, so let’s go into more detail over which kinds of liver are recommended for your dog.</p>
      <h3 id="can-dogs-eat-raw-liver">Can dogs eat raw liver?</h3>
      <p>It’s not the best idea to feed your dog raw liver. Though some dog owners swear by a raw food diet, vets generally advise that cooking meat and offal makes it less likely to carry bacteria or contaminants. Cook it either by boiling, oven-roasting or frying in a small amount of low-fat oil, and make sure it’s plain, without flavourings.</p>
      <h3 id="can-dogs-eat-lamb’s-liver">Can dogs eat lamb’s liver?</h3>
      <p>Yes. Just like other kinds of liver, lamb’s liver is a great source of protein, and is rich in vitamins and minerals such as iron, so is safe for dogs to eat. Feed in moderation as an occasional treat alongside a mix of other tasty lean proteins.</p>
      <h3 id="can-dogs-eat-chicken-liver">Can dogs eat chicken liver?</h3>
      <p>Yes, chicken liver is a nutritious food for dogs. Just as with other kinds of liver, chicken liver contains a lot of protein, vitamins and minerals that have many health benefits for dogs - but it should be fed in moderation.</p>
      <h3 id="can-dogs-eat-pig’s-liver">Can dogs eat pig’s liver?</h3>
      <p>It’s safe for your dog to eat pork liver, but there are a few things to note. Firstly, it has less fat content than chicken liver, so could be considered a leaner source of protein - but importantly, there are also fewer nutrients. If you’re going for nutrition, chicken or lamb’s liver might be a better choice.</p>
      <h3 id="can-dogs-eat-liver-pate">Can dogs eat liver pate?</h3>
      <p>Liver pate isn’t recommended for a pooch. Pate rarely comes in an unflavoured format - there are usually lots of flavourings and additives to give it that delectable, creamy texture. It’s also usually much higher in fat, and less nutrient dense. For a dog to get all the benefits of liver (protein, iron, essential fatty acids), go for the liver itself rather than in a pate format.</p>
      <h3 id="conclusion">Conclusion</h3>
      <p>In summary, dogs can eat iron-rich liver as a nutritious treat alongside a healthy well-balanced diet. Be sure the liver is fed in moderation, safely cooked, and avoid added flavourings such as you’d find in liver pate.</p>
      <h3 id="what-other-foods-can-dogs-safely-eat">What other foods can dogs safely eat?</h3>
      <p>If you like the sound of liver but you’re considering other nutritious foods for dogs, why not try the following?</p>
      <p>Salmon as a lean protein and a source of nutritious fatty acids. As a powerful supplement version, try omega-rich Salmon Oil for Dogs.</p>
      <p>Chicken, a nutritious lean protein that can be fed regularly to your dog as opposed to just occasionally.</p>
      <p>High-protein dog food, with the meaty goodness of ostrich and lamb for dogs who need extra protein.</p>
      <p>Kidneys or heart are other beneficial organ meats to feed to your dog in moderation.</p>
      <p>Try our natural, grain-free dog food in a range of tasty recipes using nutritious, whole ingredients - the perfect choice for your pooch’s physical and mental wellbeing.</p>
`,
  headings: [
    { id: 'is-liver-good-for-dogs', text: 'Is liver good for dogs?', level: 2 },
    { id: 'what-are-the-health-benefits', text: 'What are the health benefits?', level: 3 },
    { id: 'when-is-liver-unsafe-for-dogs', text: 'When is liver unsafe for dogs?', level: 2 },
    { id: 'can-puppies-eat-liver', text: 'Can puppies eat liver?', level: 2 },
    { id: 'can-dogs-be-allergic-to-liver', text: 'Can dogs be allergic to liver?', level: 3 },
    { id: 'can-liver-make-dogs-sick', text: 'Can liver make dogs sick?', level: 3 },
    { id: 'how-to-safely-give-liver-to-your-dog', text: 'How to safely give liver to your dog?', level: 2 },
    { id: 'how-much-is-safe-to-give-your-dog', text: 'How much is safe to give your dog?', level: 3 },
    { id: 'what-kinds-of-liver-can-dogs-eat', text: 'What kinds of liver can dogs eat?', level: 2 },
    { id: 'can-dogs-eat-raw-liver', text: 'Can dogs eat raw liver?', level: 3 },
    { id: 'can-dogs-eat-lamb’s-liver', text: 'Can dogs eat lamb’s liver?', level: 3 },
    { id: 'can-dogs-eat-chicken-liver', text: 'Can dogs eat chicken liver?', level: 3 },
    { id: 'can-dogs-eat-pig’s-liver', text: 'Can dogs eat pig’s liver?', level: 3 },
    { id: 'can-dogs-eat-liver-pate', text: 'Can dogs eat liver pate?', level: 3 },
    { id: 'conclusion', text: 'Conclusion', level: 3 },
    { id: 'what-other-foods-can-dogs-safely-eat', text: 'What other foods can dogs safely eat?', level: 3 },
  ]

},

'can-dogs-eat-cheese': {
  title: 'Can dogs eat Cheese?',
  category: 'Pets',
  snippet: "yes, dogs can eat cheese but only small pieces and in moderation as a special treat.",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/BLOG_CAN_DOGS_EAT_CHEESE_500x_crop_center.jpg?v=1710765272",
    alt: "Can dogs eat Cheese?",
    caption: "Is cheese good for dogs?"
  },
  content: `
<p>Dogs love cheese so lots of dog trainers use it as a yummy treat to incentivise them, and it’s also great for hiding pills or tablets. That said, of course it should be fed in moderation, and some cheeses are off-limits to dogs.</p>
      <p>In this article we’ll go into detail over whether dogs can eat cheese, whether cheese has health benefits to dogs, and which cheese is bad for dogs to eat.</p>
      <h2 id="is-cheese-good-for-dogs">Is cheese good for dogs?</h2>
      <p>Cheese isn’t necessarily a healthy food for dogs as it has a very high fat content, so it’s definitely a treat. When fed in moderation, however, cheese does contain a few health benefits. It’s also really tasty to dogs (most of them love it), so it’s great for hiding things dogs might turn their nose up at, such as tablets or pills.</p>
      <h3 id="what-are-the-health-benefits">What are the health benefits?</h3>
      <p>Cheese offers a few health benefits when fed to a dog every now and then:</p>
      <p>Protein is crucial for a dog, great for muscle and tissue maintenance and repair.</p>
      <p>Calcium helps keep teeth and bones strong, and is particularly important for puppies and senior pooches.</p>
      <p>Fatty acids in cheese containing omega-3 and omega-6 are important for immunity, heart health and a lovely skin and coat condition.</p>
      <p>Vitamin A works towards good vision, immunity and skin.</p>
      <p>Complex B vitamins are crucial for red blood cell activity, metabolising energy and a healthy nervous system.</p>
      <p>Super tasty so encourages pooches to eat, or acts as a great training treat.</p>
      <h2 id="can-puppies-eat-cheese">Can puppies eat cheese?</h2>
      <p>Puppies can eat tiny amounts of cheese as a treat, alongside their regular puppy food. As the puppy stage is the perfect time to train a pooch, cheese makes for a very effective training treat. Cheese also contains calcium, which is super important for a dog’s bone and teeth growth at puppy stage.</p>
      <h2 id="when-is-cheese-unsafe-for-dogs">When is cheese unsafe for dogs?</h2>
      <p>Cheese can be unsafe for a dog when fed too often, as it’s very high in fat and sodium. Don’t feed a dog cheese every day or as a regular food - it’s a treat. Also be wary of what type of cheese you feed your pooch. Cheddar is a classic choice, but something rogue like a stilton, or very processed like cheese spread should be avoided (more on types of cheese later).</p>
      <p>Your dog also may have a lactose intolerance or cheese allergy. If you notice your dog has adverse reactions after eating cheese, definitely don’t feed it to them.</p>
      <h3 id="can-dogs-be-allergic-to-cheese">Can dogs be allergic to cheese?</h3>
      <p>Sure, if they’re lactose intolerant or have a food allergy. If you notice any of the following signs after your pooch has scoffed cheese, don’t feed them cheese any more and chat it over with your vet.</p>
      <ul>
        <li>Reddening, itchiness, rash of the skin</li>
        <li>Vomiting</li>
        <li>Diarrhoea</li>
        <li>Stomach pain or bloating</li>
        <li>Breathing difficulties or wheezing</li>
        <li>Lethargy, change in behaviour</li>
      </ul>
      <h3 id="can-cheese-make-dogs-sick">Can cheese make dogs sick?</h3>
      <p>Yep, as above - lactose intolerance can make a dog sick after eating cheese, but eating too much cheese can also make a dog vomit. If your pooch has gotten into a whole block of cheese, it’s very likely they’ll be sick.</p>
      <p>Certain kinds of cheeses can also cause sickness, specifically blue cheeses with mould running through them. Don’t feed these cheeses to your pooch.</p>
      <h2 id="how-to-safely-give-cheese-to-your-dog">How to safely give cheese to your dog?</h2>
      <p>Give your dog a small piece of standard cheese (like Cheddar) every now and then as a treat. You could grate a bit of cheese over their regular food if you’re having trouble getting them to eat. Remember, treats for dogs should count for 10% of their diet, so count it alongside any other treats you’re giving them.</p>
      <h2 id="are-there-any-health-conditions-where-a-dog-shouldn’t-eat-cheese">Are there any health conditions where a dog shouldn’t eat cheese?</h2>
      <p>As cheese in all forms is generally fatty, you should avoid feeding to pooch’s with pancreatitis. This could cause further issues and definitely won’t do anything to help the problem!</p>
      <p>Dogs that are overweight and obese should also stay clear, as it’s sure to add extra weight which in turn can lead to weight-related health issues.</p>
      <h2 id="what-kinds-of-cheese-can-dogs-eat">What kinds of cheese can dogs eat?</h2>
      <p>There are unbelievable amounts of cheese varieties out there, and they all have different properties. Some are fine for dogs to eat as a treat, others could make them ill. Let’s go into what kinds of cheese dogs can eat, and can’t eat.</p>
      <h3 id="can-dogs-eat-cottage-cheese">Can dogs eat cottage cheese?</h3>
      <p>Yes. Cottage cheese isn’t the most palatable cheese for dogs but it won’t cause them harm. A small spoonful in their dog bowl to coax them into eating their food could work a treat.</p>
      <h3 id="can-dogs-eat-blue-cheese">Can dogs eat blue cheese?</h3>
      <p>No - don’t feed dogs a blue cheese, such as Stilton or Roquefort. The characteristic mould that develops in a blue cheese can give dogs a stomach upset and probably make them sick.</p>
      <h3 id="can-dogs-eat-feta-cheese">Can dogs eat feta cheese?</h3>
      <p>Yes, in fact it could be a suitable alternative cheese for dogs who have a lactose intolerance. Feta is made from sheep’s milk, so rather than containing lactose, it has galactose. That said, feta does contain small amounts of lactose, so it could still be risky to give it to a dog who doesn’t handle cheese too well. As with all cheeses, only feed a small amount as a treat.</p>
      <h3 id="can-dogs-eat-cream-cheese">Can dogs eat cream cheese?</h3>
      <p>Dogs can eat a tiny bit of cream cheese as a treat, but be sure that the type you choose is plain. No flavoured cream cheeses are suitable for a pooch - particularly ones with onion, chives or garlic flavouring.</p>
      <h3 id="can-dogs-eat-cheese-spread">Can dogs eat cheese spread?</h3>
      <p>No, cheese spread in general has less nutritional value than the source cheese, and is usually very high in fat, salt and preservatives, so unsafe for a dog. If your dog likes softer cheeses they could have a small amount of plain cream cheese, or maybe some cottage cheese.</p>
      <h3 id="can-dogs-eat-cauliflower-cheese">Can dogs eat cauliflower cheese?</h3>
      <p>Though cauliflower is a nutritious veggie snack for dogs, the cheese sauce that accompanies cauliflower cheese isn’t suitable for a pooch. It has too high a salt content, as well as hydrogenated fats, and has little nutritional value. It’s safer to feed pooches some boiled or steamed cauliflower with a small grating of melted cheddar on it, if you want to improvise.</p>
      <h3 id="can-dogs-eat-parmesan-cheese">Can dogs eat parmesan cheese?</h3>
      <p>Parmesan cheese is ok for dogs in moderation, but not in the powdered form. It’s quite a hard cheese so your pooch might prefer a softer version as a treat, such as Cheddar.</p>
      <h3 id="can-dogs-eat-brie-cheese">Can dogs eat brie cheese?</h3>
      <p>In moderation. Brie is safe if your dog responds well to cheese, but it’s a particularly high fat cheese so should definitely only be given to a dog now and then as a treat. Choose a lower fat cheese if you want to use it for training your pooch.</p>
      <h3 id="can-dogs-eat-babybel-cheese">Can dogs eat Babybel cheese?</h3>
      <p>No. As it’s a processed cheese, it’s best to avoid feeding your pooch Babybel and choose fresher, more nutritious cheeses instead.</p>
      <h3 id="can-dogs-eat-cheese-puffs">Can dogs eat cheese puffs?</h3>
      <p>No - avoid feeding your dog salty, artificial snacks such as cheese puffs or cheesy crisps. They don’t contain the nutritious value of cheese and are packed with preservatives.</p>
      <h3 id="can-dogs-eat-cheese-biscuits">Can dogs eat cheese biscuits?</h3>
      <p>No - don’t feed your dog cheese biscuits. If you’re eating cheese and crackers and your pooch comes begging, just feeding them a tiny bit of a plain cheese (like Cheddar) is fine, but avoid letting them munch cheese biscuits or crackers.</p>
      <h3 id="can-dogs-eat-mac-and-cheese">Can dogs eat mac and cheese?</h3>
      <p>No. Mac and cheese is a very rich human food, high in fat and dairy content, and doesn’t have any nutritional benefit to a dog. Pasta, cheeses and white sauce are a great combo for a human comfort meal but none of these ingredients add much value to a dog’s diet, and in fact, could make them very sick.</p>
      <h3 id="can-dogs-eat-vegan-cheese">Can dogs eat vegan cheese?</h3>
      <p>It’s a rogue choice for dogs but as vegan cheese is made mostly of plant-based oils (such as coconut) and cashew nuts, it shouldn’t technically harm a dog. Try feeding your dog a small amount to see how they respond to the vegan cheese. If they have no adverse effects and seem to like the taste, consider it a treat for your dog, the same as you would dairy cheese.</p>
      <h3 id="can-dogs-eat-halloumi-cheese">Can dogs eat halloumi cheese?</h3>
      <p>No - halloumi has a very high salt content, and isn’t suitable for a dog’s delicate tummy. Consider that squeaky, barbecued halloumi as a human treat.</p>
      <h3 id="conclusion">Conclusion</h3>
      <p>In summary, we know dogs love a piece of cheese, and feeding it as a treat or training incentive is safe for a dog. That said, stick to a classic cheese such as Cheddar, avoiding the flavoured or overly processed cheeses. Cheesy foods like crisps or pasta should definitely be avoided.</p>
      <p>If your dog reacts badly to cheese, they could have a sensitive tum, be lactose intolerant or have a food allergy. Definitely avoid cheese if this applies to your dog.</p>
      <h3 id="what-other-foods-can-dogs-safely-eat">What other foods can dogs safely eat?</h3>
      <p>If you like the sound of cheese but you want alternative, healthy treats for your dog, why not try the following?</p>
      <p>Peanut butter dental sticks for dogs - dogs love the taste of peanut butter, and chewing a dental stick calms them down while cleaning their teeth.</p>
      <p>Meaty probiotic treats for dogs - delicious flavours packed with beneficial probiotics for a healthy gut.</p>
      <p>Calming dog treats - tasty dog treats with the natural relaxants of hemp and L-tryptophan.</p>
      <p>Try our range of grain-free healthy dog treats - made with tasty, natural ingredients, they’re irresistible to a pooch while being great for their body and mind.</p>
`,
  headings: [
    { id: 'is-cheese-good-for-dogs', text: 'Is cheese good for dogs?', level: 2 },
    { id: 'what-are-the-health-benefits', text: 'What are the health benefits?', level: 3 },
    { id: 'can-puppies-eat-cheese', text: 'Can puppies eat cheese?', level: 2 },
    { id: 'when-is-cheese-unsafe-for-dogs', text: 'When is cheese unsafe for dogs?', level: 2 },
    { id: 'can-dogs-be-allergic-to-cheese', text: 'Can dogs be allergic to cheese?', level: 3 },
    { id: 'can-cheese-make-dogs-sick', text: 'Can cheese make dogs sick?', level: 3 },
    { id: 'how-to-safely-give-cheese-to-your-dog', text: 'How to safely give cheese to your dog?', level: 2 },
    { id: 'are-there-any-health-conditions-where-a-dog-shouldn’t-eat-cheese', text: 'Are there any health conditions where a dog shouldn’t eat cheese?', level: 2 },
    { id: 'what-kinds-of-cheese-can-dogs-eat', text: 'What kinds of cheese can dogs eat?', level: 2 },
    { id: 'can-dogs-eat-cottage-cheese', text: 'Can dogs eat cottage cheese?', level: 3 },
    { id: 'can-dogs-eat-blue-cheese', text: 'Can dogs eat blue cheese?', level: 3 },
    { id: 'can-dogs-eat-feta-cheese', text: 'Can dogs eat feta cheese?', level: 3 },
    { id: 'can-dogs-eat-cream-cheese', text: 'Can dogs eat cream cheese?', level: 3 },
    { id: 'can-dogs-eat-cheese-spread', text: 'Can dogs eat cheese spread?', level: 3 },
    { id: 'can-dogs-eat-cauliflower-cheese', text: 'Can dogs eat cauliflower cheese?', level: 3 },
    { id: 'can-dogs-eat-parmesan-cheese', text: 'Can dogs eat parmesan cheese?', level: 3 },
    { id: 'can-dogs-eat-brie-cheese', text: 'Can dogs eat brie cheese?', level: 3 },
    { id: 'can-dogs-eat-babybel-cheese', text: 'Can dogs eat Babybel cheese?', level: 3 },
    { id: 'can-dogs-eat-cheese-puffs', text: 'Can dogs eat cheese puffs?', level: 3 },
    { id: 'can-dogs-eat-cheese-biscuits', text: 'Can dogs eat cheese biscuits?', level: 3 },
    { id: 'can-dogs-eat-mac-and-cheese', text: 'Can dogs eat mac and cheese?', level: 3 },
    { id: 'can-dogs-eat-vegan-cheese', text: 'Can dogs eat vegan cheese?', level: 3 },
    { id: 'can-dogs-eat-halloumi-cheese', text: 'Can dogs eat halloumi cheese?', level: 3 },
    { id: 'conclusion', text: 'Conclusion', level: 3 },
    { id: 'what-other-foods-can-dogs-safely-eat', text: 'What other foods can dogs safely eat?', level: 3 },
  ]

},
'can-dogs-eat-bread': {
  title: 'Can dogs eat Bread?',
  category: 'Pets',
  snippet: "Yes, dogs can eat plain, unbuttered bread without any real risk. However, bread really has no nutritional benefit for a hungry pooch, so it’s best to find alternatives!",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/BLOG_CAN_DOGS_EAT_BREAD_500x_crop_center.jpg?v=1710779853",
    alt: "Can dogs eat Bread?",
    caption: "Is bread good for dogs?"
  },
  content: `
<p>In this article, we’ll go through all of your bread-based questions and discuss the potential risks of feeding bread to your dog.</p>
      <h2 id="is-bread-good-for-dogs">Is bread good for dogs?</h2>
      <p>No, bread isn’t good for dogs, there are no health benefits. Though there may be some benefits for humans if the bread is made with multigrains, it’s very high in carbohydrates for a dog, can be very bloating, and their digestive system can’t really handle it. Bread in all its various forms could also contain extra ingredients which might not sit well with a dog’s tum.</p>
      <h2 id="when-is-bread-unsafe-for-dogs">When is bread unsafe for dogs?</h2>
      <p>It’s unsafe to feed a dog large quantities of bread. If you feed them a small amount, it’s unlikely to cause harm. However, as bread is so diverse, it could contain ingredients (wheat, onion, garlic, chilli, etc.) that wreak havoc on a dog’s delicate digestive system. It’s best to avoid bread for your dog altogether if you can, and feed them more nutritious and filling options.</p>
      <h2 id="can-puppies-eat-bread">Can puppies eat bread?</h2>
      <p>No, puppies shouldn’t eat bread. There’s no nutritional benefit to puppies, so stick to nutritious ingredients that will support their growth - such as those found in healthy, grain-free food for puppies.</p>
      <h3 id="can-dogs-be-allergic-to-bread">Can dogs be allergic to bread?</h3>
      <p>Yep - dogs can be allergic to bread because of the high gluten content, or because it contains grains such as wheat or rye. Some bread contains garlic or onions, which is toxic to dogs.</p>
      <h2 id="can-bread-make-dogs-sick">Can bread make dogs sick?</h2>
      <p>A small piece of white or brown bread might cause a dog no problems, but in general yes, bread can make dogs sick if you feed it to them regularly. They could become unwell because of the ingredients in the bread, or because you’ve given them too much and they’re finding it hard to digest.</p>
      <ul>
        <li>Diarrhoea or vomiting</li>
        <li>Bloating, gas or stomach pain</li>
        <li>Difficulty breathing, wheezing</li>
        <li>Lethargy or behavioural changes</li>
        <li>Swelling, redness, rashes or itchy skin</li>
      </ul>
      <h2 id="how-to-safely-give-bread-to-your-dog">How to safely give bread to your dog?</h2>
      <p>You shouldn’t give bread to your dog, but if you do, make sure it’s plain bread without butter or toppings. If they’ve eaten a small piece of white or brown bread, it shouldn’t be toxic or dangerous, but keep an eye on them for any adverse digestive reactions.</p>
      <h2 id="what-kinds-of-bread-can-dogs-eat">What kinds of bread can dogs eat?</h2>
      <p>Dogs shouldn’t really eat bread, however some bread varieties are riskier than others. Here are some answers to your questions about dogs eating different types of bread.</p>
      <h3 id="can-dogs-eat-brown-bread">Can dogs eat brown bread?</h3>
      <p>Some vets recommend feeding brown bread for a short while if, for example, your pooch has eaten something sharp or needs some extra fibre. It isn't the worst food in the world, but isn't something to be giving your dog daily (unless suggested for specific health reasons by a professional).</p>
      <h3 id="can-dogs-eat-garlic-bread">Can dogs eat garlic bread?</h3>
      <p>No. Definitely avoid feeding your pooch buttery garlic bread - garlic is an ingredient that dogs’ tummies simply can’t digest. Garlic is toxic to dogs as it’s part of the allium family, along with chives and onions.</p>
      <h3 id="can-dogs-eat-seeded-bread">Can dogs eat seeded bread?</h3>
      <ul>
        <li>Naan bread* (plain)</li>
        <li>Rye bread* (plain)</li>
        <li>Pitta bread* (plain)</li>
      </ul>
      <p>*Note all of the above breads should be served plain, do not feed any flavoured breads to dogs.</p>
      <h3 id="can-dogs-eat-sourdough-bread">Can dogs eat sourdough bread?</h3>
      <p>It’s not recommended that dogs eat sourdough bread. Sourdough contains extra live ingredients that contribute to yeast cultures, and this process can continue in a dog’s digestive system. A small piece of sourdough is unlikely to do harm, but it’s better to feed plain white bread to a dog, or no bread at all.</p>
      <h3 id="can-dogs-eat-banana-bread">Can dogs eat banana bread?</h3>
      <p>Banana bread is generally not recommended for dogs as it usually contains a high amount of sugar and butter, as well as potential added ingredients such as nuts or chocolate (which is toxic to dogs, we’re sure you know). If they eat a small piece of organic banana bread made with safe ingredients it’s unlikely to cause harm, but don’t feed it as a regular food - it’s more of a human treat.</p>
      <h3 id="can-dogs-eat-bread-crust">Can dogs eat bread crust?</h3>
      <p>A couple of crusts thrown into your dog’s bowl won’t do your dog harm, but it won’t give them any nutrition either. If you want to be sure your dog’s on a wholesome, nutritious diet, avoid feeding them bread products.</p>
      <h3 id="can-dogs-eat-toast">Can dogs eat toast?</h3>
      <p>Again, there’s unlikely to be any harm in feeding your dog a small piece of plain toast, but it doesn’t benefit your dog. Toast covered in jam or butter should be avoided, it’s too high in sugar and fat. Opt for something healthy and filling for your dog’s snacks instead (suggestions later in the article!).</p>
      <h3 id="can-dogs-eat-bread-sticks">Can dogs eat bread sticks?</h3>
      <p>Plain bread sticks put into your dog’s food for some crunch won’t do them harm, but again, it’s empty of nutrients. If you want your pooch to get some crunchy goodness, opt for carrot sticks or a handful of dry food.</p>
      <h3 id="can-dogs-eat-stale-bread">Can dogs eat stale bread?</h3>
      <p>The safest bread for dogs is actually a few days old. The freshest bread may cause bloating and is stodgier to eat, so if your dog has eaten slightly stale bread, it’s not too much of an issue. This is not the case, of course, if the bread is mouldy and well past its best.</p>
      <h3 id="can-dogs-eat-gluten-free-bread">Can dogs eat gluten-free bread?</h3>
      <p>In general, bread isn’t a recommended food for dogs, but if they’ve snaffled some gluten-free bread (plain, without butter), it shouldn’t cause them any immediate harm.</p>
      <h3 id="conclusion">Conclusion</h3>
      <p>Overall, bread isn’t toxic to dogs if it’s unbuttered and plain, but it’s not recommended as a regular snack for dogs either. Bread can cause issues with a dog’s digestion, particularly if it contains grains. If you’re looking to give your dog a filling meal, look to feed lean proteins and nutritious veggies instead.</p>
      <h3 id="what-other-foods-can-dogs-safely-eat">What other foods can dogs safely eat?</h3>
      <ul>
        <li>Carrots are full of vitamins and minerals, and are an easily digestible snack.</li>
        <li>Apple is a sweet treat, full of fibre and vitamins.</li>
        <li>Grain-free food with fish, potato and peas is a delicious, nutrient-rich meal that a dog can digest like a dream.</li>
        <li>Grain-free food with chicken and pumpkin is a dog-friendly meal packed with fibre and lean protein.</li>
      </ul>
      <p>Fuel your beloved pooch with tasty, grain-free dog food packed with whole ingredients and natural supplements. Our delicious recipes are specially formulated to boost your dog’s physical and mental wellbeing.</p>
`,
  headings: [
    { id: 'is-bread-good-for-dogs', text: 'Is bread good for dogs?', level: 2 },
    { id: 'when-is-bread-unsafe-for-dogs', text: 'When is bread unsafe for dogs?', level: 2 },
    { id: 'can-puppies-eat-bread', text: 'Can puppies eat bread?', level: 2 },
    { id: 'can-dogs-be-allergic-to-bread', text: 'Can dogs be allergic to bread?', level: 3 },
    { id: 'can-bread-make-dogs-sick', text: 'Can bread make dogs sick?', level: 2 },
    { id: 'how-to-safely-give-bread-to-your-dog', text: 'How to safely give bread to your dog?', level: 2 },
    { id: 'what-kinds-of-bread-can-dogs-eat', text: 'What kinds of bread can dogs eat?', level: 2 },
    { id: 'can-dogs-eat-brown-bread', text: 'Can dogs eat brown bread?', level: 3 },
    { id: 'can-dogs-eat-garlic-bread', text: 'Can dogs eat garlic bread?', level: 3 },
    { id: 'can-dogs-eat-seeded-bread', text: 'Can dogs eat seeded bread?', level: 3 },
    { id: 'can-dogs-eat-sourdough-bread', text: 'Can dogs eat sourdough bread?', level: 3 },
    { id: 'can-dogs-eat-banana-bread', text: 'Can dogs eat banana bread?', level: 3 },
    { id: 'can-dogs-eat-bread-crust', text: 'Can dogs eat bread crust?', level: 3 },
    { id: 'can-dogs-eat-toast', text: 'Can dogs eat toast?', level: 3 },
    { id: 'can-dogs-eat-bread-sticks', text: 'Can dogs eat bread sticks?', level: 3 },
    { id: 'can-dogs-eat-stale-bread', text: 'Can dogs eat stale bread?', level: 3 },
    { id: 'can-dogs-eat-gluten-free-bread', text: 'Can dogs eat gluten-free bread?', level: 3 },
    { id: 'conclusion', text: 'Conclusion', level: 3 },
    { id: 'what-other-foods-can-dogs-safely-eat', text: 'What other foods can dogs safely eat?', level: 3 },
  ]

},

'can-dogs-eat-avocado': {
  title: 'Can dogs eat Avocado?',
  category: 'Pets',
  snippet: "Sadly, the answer is no - dogs can’t eat avocado. Though it might be deemed a nutritious ‘superfood’ for humans, it’s somewhat toxic to dogs and dangerously high in fat, so don’t sneak them a spoon of smashed avo without thinking twice.",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/BLOG_CAN_DOGS_EAT_AVACADO_500x_crop_center.jpg?v=1710783035",
    alt: "Can dogs eat Avocado?",
    caption: "Why is avocado bad for dogs?"
  },
  content: `
<p>Let’s delve a little deeper into why dogs can’t eat avocado…</p>
      <h2 id="why-is-avocado-bad-for-dogs">Why is avocado bad for dogs?</h2>
      <p>Avocado isn’t a safe food for dogs, as all parts of the fruit - the flesh, skin and stone - are toxic to a dog’s body. Alongside this, the high fat content of avocado could cause issues for dogs susceptible to pancreatitis.</p>
      <p>The pit/stone is a really problematic part of the avocado fruit. When eaten, it’s indigestible and almost always leads to a gut obstruction if vomiting isn't induced quickly.</p>
      <p>Though a small bit of avocado accidentally eaten is unlikely to do too much harm, it should never be considered a safe food for dogs.</p>
      <h3 id="what-makes-avocado-toxic-to-dogs">What makes avocado toxic to dogs?</h3>
      <p>Avocados are toxic to dogs because of a compound called persin - which is found in all parts of the avocado. Though it’s safe for humans to consume, it has toxic effects in dogs and other animals, and could cause stomach problems such as diarrhoea and vomiting, as well as heart issues.</p>
      <h2 id="what-to-do-if-your-dog-eats-avocado">What to do if your dog eats avocado</h2>
      <p>If your pooch slurps up a small bit of avocado flesh, it’s unlikely to harm them. If they’ve wolfed down a whole fruit, however, this is more a cause for concern.</p>
      <p>Keep an eye on your dog, and if they show any signs of persin poisoning (below), get them to a vet immediately.</p>
      <h3 id="symptoms-of-persin-poisoning">Symptoms of persin poisoning</h3>
      <p>If you spot one or more of the following symptoms of persin toxicity after your pooch has consumed avocado, you should contact a vet straight away:</p>
      <ul>
        <li>Breathing difficulties. Your dog might cough or wheeze as if they can’t get air, or experience shortness of breath.</li>
        <li>Swelling. Swelling may occur in the face, neck area or on other parts of the body.</li>
        <li>Diarrhoea. Diarrhoea that concerns you should be noted.</li>
        <li>Vomiting. If your pooch is being sick after eating avocado, take them to a vet.</li>
        <li>Fatigue. Take note if your dog’s suffering from fatigue or aren’t their usual self after eating avocado.</li>
      </ul>
      <h3 id="how-much-avocado-is-safe-for-dogs">How much avocado is safe for dogs?</h3>
      <p>It’s not safe to feed your pooch any avocado at all. However, if they accidentally eat a small amount, it’s not likely to cause them any serious harm. Keep a watchful eye on them to be sure.</p>
      <h2 id="how-to-stop-your-dog-eating-avocado">How to stop your dog eating avocado</h2>
      <p>The best way to deter your dog from eating avocado is to never offer it to them, that way they’ll have no experience of tasting it or even knowing what it is! If you eat avocado with a meal, be sure to prepare it well out of reach of your dog, and throw away all the discarded skin, stone and leftovers into a secure bin that can’t be snooped in.</p>
      <h2 id="other-avocado-products">Other avocado products</h2>
      <p>Here are some extra details about other avocado-based products that a dog might want to eat…</p>
      <h3 id="can-dogs-eat-avocado-oil">Can dogs eat avocado oil?</h3>
      <p>Ideally, no. For humans, avocado oil is sometimes used as an alternative in place of olive oil or rapeseed oil, for instance. There isn’t the toxicity in avocado oil that there is in the fruit itself - that said, the high fat content of avocado oil means it isn’t recommended for dogs. It could be especially unhealthy for pooches prone to pancreatitis.</p>
      <h3 id="can-dogs-eat-avocado-flesh-skin">Can dogs eat avocado flesh/skin?</h3>
      <p>No - dogs shouldn’t eat avocado flesh or skin. All the parts of an avocado contain persin, which could be toxic to dogs if eaten, and is very high in fat too.</p>
      <h3 id="what-other-foods-are-toxic-to-dogs">What other foods are toxic to dogs?</h3>
      <p>If you’re worried about other foods that are toxic to dogs, here are a few others to remember!</p>
      <ul>
        <li>Chocolate</li>
      </ul>
      <p>Probably the most well-known no-no for dogs, chocolate is very toxic due to its theobromine content and should be avoided at all costs.</p>
      <ul>
        <li>Grapes and raisins</li>
      </ul>
      <p>Avoid grapes and raisins, their sundried cousin. They are mysteriously toxic to some dogs and can cause kidney issues, though some may eat them without issues.</p>
      <ul>
        <li>Tomatoes</li>
      </ul>
      <p>Tomatoes contain a compound toxic to dogs called solanine, though this is present in much lower amounts in ripe tomatoes.</p>
      <ul>
        <li>Onions and garlic</li>
      </ul>
      <p>Allium is the toxic substance found in onions and garlic - it impacts red blood cells in dogs which can lead to anaemia or even cause a dog to collapse.</p>
      <ul>
        <li>Xylitol/artificial sweetener</li>
      </ul>
      <p>The artificial sweeteners found in a lot of human foods are poisonous to dogs - specifically Xylitol. Eating it can cause blood sugar levels to fall dangerously low, which can result in kidney dysfunction in dogs.</p>
      <h3 id="what-can-i-feed-my-dog-instead-of-avocado">What can I feed my dog instead of avocado?</h3>
      <p>If you’re looking to feed your dog a nutritious snack, there are plenty of other tasty options:</p>
      <p>Apple is a crunchy fruit full of fibre and vitamins, yet much lower in fat than avocado.</p>
      <p>Blueberries are similarly nutritious as avocado, without the high fat content.</p>
      <p>Cooked eggs are a great source of protein and don’t contain any toxic compounds.</p>
      <p>Pumpkin is a squidgy source of vitamins and fibre, that’s gentle on digestion too.</p>
      <p>Salmon Oil for Dogs is a safer option than avocado oil for being nutrient dense and a source of essential fatty acids. However, you should avoid this if your pooch is prone to pancreatitis.</p>
      <p>To feed your dog nutritious, whole foods that are gentle on their digestion try our Pooch & Mutt grain-free dog food, powerful dog supplements and healthy dog treats.</p>
      <section>References</section>
`,
  headings: [
    { id: 'why-is-avocado-bad-for-dogs', text: 'Why is avocado bad for dogs?', level: 2 },
    { id: 'what-makes-avocado-toxic-to-dogs', text: 'What makes avocado toxic to dogs?', level: 3 },
    { id: 'what-to-do-if-your-dog-eats-avocado', text: 'What to do if your dog eats avocado', level: 2 },
    { id: 'symptoms-of-persin-poisoning', text: 'Symptoms of persin poisoning', level: 3 },
    { id: 'how-much-avocado-is-safe-for-dogs', text: 'How much avocado is safe for dogs?', level: 3 },
    { id: 'how-to-stop-your-dog-eating-avocado', text: 'How to stop your dog eating avocado', level: 2 },
    { id: 'other-avocado-products', text: 'Other avocado products', level: 2 },
    { id: 'can-dogs-eat-avocado-oil', text: 'Can dogs eat avocado oil?', level: 3 },
    { id: 'can-dogs-eat-avocado-flesh-skin', text: 'Can dogs eat avocado flesh/skin?', level: 3 },
    { id: 'what-other-foods-are-toxic-to-dogs', text: 'What other foods are toxic to dogs?', level: 3 },
    { id: 'what-can-i-feed-my-dog-instead-of-avocado', text: 'What can I feed my dog instead of avocado?', level: 3 },
  ]

},

'can-dogs-eat-chips': {
  title: 'Can dogs eat Chips?',
  category: 'Pets',
  snippet: "If you’re talking about your standard ‘chip shop’ portion of salt and vinegar soaked chips, then the answer is no! A steaming plate of chips is definitely a treat for humans, so as you’d probably guess, they’re not beneficial to dogs.",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/BLOG_CAN_DOGS_EAT_CHIPS_500x_crop_center.jpg?v=1710851717",
    alt: "Can dogs eat Chips?",
    caption: "Are chips good for dogs?"
  },
  content: `
<p>For this blog post, ‘chips’ refers to chipped potatoes/fries/any hot potato side that you’d serve at dinnertime.  Of course, there are different kinds of chips you could mean when you ask this question (banana chips, crisps, tortilla chips!), so we’ll advise on different kinds of chips later in the article.</p>
      <h2 id="are-chips-good-for-dogs">Are chips good for dogs?</h2>
      <p>Sadly, chips aren’t all that beneficial for a dog’s health due to their high fat and carbohydrate content. In lots of cases, they’re also probably covered in salt. Though there isn’t any harm in sharing one or two chips with your pooch (providing they aren’t drenched in salt and vinegar), chips won’t provide any nutritional benefits, and definitely shouldn’t be regarded as a regular treat. It’s best to stick to healthier foods, mentioned later in the article.</p>
      <h2 id="when-are-chips-unsafe-for-dogs">When are chips unsafe for dogs?</h2>
      <p>Chips are high in fat and carbohydrates and often flavoured with salt, so though plain chips aren’t toxic to dogs, they’re considered unsafe if fed regularly. The fat content from chips can lead to weight gain and digestive issues in dogs, while too many salty foods can lead to dehydration or even kidney damage.</p>
      <h2 id="can-puppies-eat-chips">Can puppies eat chips?</h2>
      <p>No, don’t feed chips to your growing puppy. At this early stage they need nutritious, protein-rich foods to support their rapid growth. Some healthy, grain-free food for puppies is a much safer bet.</p>
      <h3 id="can-dogs-be-allergic-to-chips">Can dogs be allergic to chips?</h3>
      <p>It’s unlikely your dog will be allergic to plain potato chips, however the high fat content in chips can cause your pooch to have digestive problems, akin to a food allergy. If you notice diarrhoea or vomiting, bloating, stomach pain or lethargy after feeding your dog chips, it’s best to avoid giving them as a snack in future.</p>
      <h3 id="can-chips-make-dogs-sick">Can chips make dogs sick?</h3>
      <p>Yes, especially if they’re covered in salt or other flavourings, which should definitely be avoided. If chips are fed to your dog often, the high fat and carbohydrate content will definitely cause unwanted effects in your dog like weight gain, lethargy, slowness and bowel issues. Though one or two won’t harm them, they’re not a healthy choice for a dog.</p>
      <h2 id="how-to-safely-give-chips-to-your-dog">How to safely give chips to your dog?</h2>
      <p>The only way to safely give chips to your dog is to share one or two chips, which are plain and not salted. Do this rarely as opposed to regularly, as chips carry no nutritional value to your pooch.</p>
      <h3 id="what-kinds-of-chips-can-dogs-eat">What kinds of chips can dogs eat?</h3>
      <p>We know that the word ‘chips’ can refer to all kinds of foods, so here are some variants you might be wondering about…</p>
      <h3 id="can-dogs-eat-banana-chips">Can dogs eat banana chips?</h3>
      <p>It depends. It’s not a standard snack for a pooch (you might like to feed fresh banana instead), but banana chips aren’t toxic to dogs, so long as they’re natural without any dodgy additives or preservatives. Check the ingredients to be sure about this. Avoid the coated banana chips, such as the chocolate or yoghurt-covered variety - these can definitely be dangerous for dogs.</p>
      <h3 id="can-dogs-eat-crisps">Can dogs eat crisps?</h3>
      <p>No. You might be eating a packet of tasty crisps next to your pup and thinking ‘can dogs eat prawn cocktail crisps?’ or ‘are salt and vinegar crisps okay for dogs to eat?’ Though these are a common treat for humans, crisps are high in sodium and saturated fat, so they don’t offer any nutritional value for our beloved pooches. Don’t offer it to your dog even as a treat; it’s best they don’t get a taste for crisps, whether they’re chicken flavour or cheese and onion.</p>
      <h3 id="can-dogs-eat-tortilla-chips">Can dogs eat tortilla chips?</h3>
      <p>Ideally no. The odd tortilla chip shouldn’t do your dog much harm, but it won’t do them much good either. Tortilla chips are usually high in salt and fat, without many nutrients besides! They’re a treat for humans, so dogs should generally avoid them.</p>
      <h3 id="can-dogs-eat-fish-and-chips">Can dogs eat fish and chips?</h3>
      <p>No, not in the way humans eat them. It’s ok to give them a small piece of the fish without batter, and one or two plain chips (without salt), as mentioned above. However, the usual portion of human fish and chips is high in fat, carbohydrates and salt, so shouldn’t be in your dog’s food bowl.</p>
      <p>If you want your dog to be involved in your fish supper, you could serve up a dog-friendly version of the meal with white fish, potato, and peas. This is a highly nutritious meal for a dog that’s much easier on their digestion than our fatty treat versions.</p>
      <h3 id="can-dogs-eat-chips-without-salt">Can dogs eat chips without salt?</h3>
      <p>One or two. If you don’t have salt on your chips, one or two plain chips from your plate isn’t going to do too much harm. However, it also doesn’t give much benefit to a dog, so don’t do this often to avoid weight gain in your pooch.</p>
      <h3 id="can-dogs-eat-frozen-chips">Can dogs eat frozen chips?</h3>
      <p>If you’re wondering ‘can my dog eat oven chips?’, as in the kind you put in the freezer, the answer is also ‘not really’. Frozen oven chips don’t provide any nutritional value - so though it won’t do much harm to give them a plain, cooked oven chip, it’s best to choose a different kind of potato that’s much kinder to their delicate doggy tums.</p>
      <p>It might seem obvious, but never give a dog a frozen chip. Finally, if the oven chips are a variety covered in spices or seasonings, definitely avoid those, too.</p>
      <h3 id="conclusion">Conclusion</h3>
      <p>Overall, chips aren’t a recommended snack for our beloved pooches - they’re simply too high in fat, usually have a high salt content, and contain barely any nutritional value. That said, one or two plain chips are unlikely to cause them much harm - just don’t do this often to avoid weight gain and bad snacking habits in your dog.</p>
      <h3 id="what-other-foods-can-dogs-safely-eat">What other foods can dogs safely eat?</h3>
      <p>If you want to feed your pooch a chip-like snack that’s much higher in nutritional benefits, you could try the following…</p>
      <p>Carrot makes for a nutritious veggie for dogs. Given peeled and raw, they’re also great for chewing to calm your dog, and help clean their teeth.</p>
      <p>Sweet potato has the same fluffy texture as potato but with lots of vitamins and fibre.</p>
      <p>Pumpkin is a more nutrient-dense veggie that has a similar texture to potato.</p>
      <p>For other dog food and treats for dogs that are delicious and full of nutritional benefits, check out our grain-free range of wet and dry food, dog treats and supplements intended to keep your dog happy and healthy.</p>
`,
  headings: [
    { id: 'are-chips-good-for-dogs', text: 'Are chips good for dogs?', level: 2 },
    { id: 'when-are-chips-unsafe-for-dogs', text: 'When are chips unsafe for dogs?', level: 2 },
    { id: 'can-puppies-eat-chips', text: 'Can puppies eat chips?', level: 2 },
    { id: 'can-dogs-be-allergic-to-chips', text: 'Can dogs be allergic to chips?', level: 3 },
    { id: 'can-chips-make-dogs-sick', text: 'Can chips make dogs sick?', level: 3 },
    { id: 'how-to-safely-give-chips-to-your-dog', text: 'How to safely give chips to your dog?', level: 2 },
    { id: 'what-kinds-of-chips-can-dogs-eat', text: 'What kinds of chips can dogs eat?', level: 3 },
    { id: 'can-dogs-eat-banana-chips', text: 'Can dogs eat banana chips?', level: 3 },
    { id: 'can-dogs-eat-crisps', text: 'Can dogs eat crisps?', level: 3 },
    { id: 'can-dogs-eat-tortilla-chips', text: 'Can dogs eat tortilla chips?', level: 3 },
    { id: 'can-dogs-eat-fish-and-chips', text: 'Can dogs eat fish and chips?', level: 3 },
    { id: 'can-dogs-eat-chips-without-salt', text: 'Can dogs eat chips without salt?', level: 3 },
    { id: 'can-dogs-eat-frozen-chips', text: 'Can dogs eat frozen chips?', level: 3 },
    { id: 'conclusion', text: 'Conclusion', level: 3 },
    { id: 'what-other-foods-can-dogs-safely-eat', text: 'What other foods can dogs safely eat?', level: 3 },
  ]

},

'can-dogs-eat-olives': {
  title: 'Can dogs eat Olives?',
  category: 'Pets',
  snippet: "Yes, dogs can eat olives in moderation. Olives are a nutritious snack for humans, not to mention the health wonders of high quality olive oil - but although olives do have benefits for dogs, their canine needs are slightly different.",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/BLOG_CAN_DOGS_EAT_OLIVES_1_500x_crop_center.jpg?v=1713532560",
    alt: "Can dogs eat Olives?",
    caption: "Are olives good for dogs?"
  },
  content: `
<h2 id="are-olives-good-for-dogs">Are olives good for dogs?</h2>
      <p>Yes, in moderation they can be. Though not suitable as a regular dog food, olives do have some benefits to dogs. That said, these benefits can be derived from other foods, so olives or olive oils aren’t an essential food in a dog’s diet.</p>
      <p>It goes without saying, olive stones can be a choking hazard for pooches - so never feed olives to a dog unless they’ve been de-stoned.</p>
      <h3 id="what-are-the-health-benefits">What are the health benefits?</h3>
      <p>Let’s go into some of the nutrients in olives that might be beneficial to a dog’s diet:</p>
      <ul>
        <li>Heart-healthy fats. The monounsaturated fat in olives is good for heart health, so long as it’s given in moderation.</li>
        <li>Rich in antioxidants such as vitamin E, which improve the immune system and fight free radicals in a dog’s body.</li>
        <li>Minerals such as copper and iron, useful for maintaining energy levels and boosting the immune system and nerve function.</li>
      </ul>
      <h2 id="can-puppies-eat-olives">Can puppies eat olives?</h2>
      <p>Olives aren’t really a suitable snack for puppies due to their high sodium content. It’s not going to harm them if they eat an olive (cut up, without its stone) but try to stick to other nutritious snacks suitable for puppies.</p>
      <h2 id="when-are-olives-unsafe-for-dogs">When are olives unsafe for dogs?</h2>
      <p>Olives can sometimes be unsafe for dogs. For one thing they’re high in sodium, which can cause symptoms of dehydration, or be detrimental to pooches with kidney or heart problems. This is why it’s essential that olives are fed in moderation.</p>
      <p>Olives are often served in olive oil, which is high in fat and unsuitable for dogs with pancreatitis. These oils can also contain flavourings such as chilli or garlic, which dogs shouldn’t eat at all.</p>
      <p>Of course, olives that haven’t been pitted pose a choking hazard to dogs. Always be sure to keep olives with stones well out of reach of dogs’ curious snouts.</p>
      <h3 id="can-dogs-be-allergic-to-olives">Can dogs be allergic to olives?</h3>
      <p>Yes, your pooch could have an olive allergy. If they’ve not eaten olives before, just feed them a small piece or one pitted olive, and note their reaction. If they show any of the following symptoms, don’t feed them olives anymore and if symptoms are severe, get them to a vet immediately:</p>
      <ul>
        <li>Reddening, itchiness or swelling of the skin</li>
        <li>Wheezing or difficulty breathing</li>
        <li>Diarrhoea or vomiting</li>
        <li>Stomach pain, bloating</li>
        <li>Lethargy, change in behaviour</li>
      </ul>
      <h3 id="can-olives-make-dogs-sick">Can olives make dogs sick?</h3>
      <p>Yes, if you feed a dog too many olives, the high sodium content can make them sick. If your pooch has an olive allergy, or if they eat olives covered in flavourings such as chilli or garlic oil, this will also make them very unwell.</p>
      <h2 id="how-to-safely-give-olives-to-your-dog">How to safely give olives to your dog?</h2>
      <p>If you want to give your dog an olive or two, ensure they’re the pitted kind, and that they aren’t served in brine or stewed in flavourings. Plain olives are the safest, and they should be of the highest quality (this also applies to olive oil).</p>
      <h3 id="how-much-is-safe-to-give-your-dog">How much is safe to give your dog?</h3>
      <p>Olives are okay as part of a well-balanced diet, but they shouldn’t be seen as an everyday food. How many you feed depends on the size and breed of your pooch, but be sure it’s alongside a well-rounded bowl of food containing lots of lean proteins, nutritious veggies and dog supplements. A few olives a week should be okay.</p>
      <h2 id="what-kinds-of-olives-can-dogs-eat">What kinds of olives can dogs eat?</h2>
      <p>There are lots of varieties of olives in the world! Let’s go into details over which olive products are safe for dogs.</p>
      <h3 id="can-dogs-eat-green-olives">Can dogs eat green olives?</h3>
      <p>Yes, they can. Classic green olives are fine for a dog, in moderation - so long as they’re served plain with no stones or added flavourings such as garlic, chilli etc.</p>
      <h3 id="can-dogs-eat-black-olives">Can dogs eat black olives?</h3>
      <p>Yes, dogs can eat both black and green olives with no issues. The same rules apply for both - they should have no pips nor any added flavourings, just serve plain. Also don’t feed too many olives; they are high in sodium and this can make your pooch unwell.</p>
      <h3 id="can-dogs-eat-olives-in-brine">Can dogs eat olives in brine?</h3>
      <p>No. Avoid olives that come in brine - it’s a super salty liquid that only increases the already high sodium content in olives. If they’ve eaten one or two it shouldn’t cause too much drama, however if you want to intentionally feed your dog olives, choose the plain varieties that come in water or olive oil.</p>
      <h3 id="can-dogs-eat-pitted-olives">Can dogs eat pitted olives?</h3>
      <p>Yes - in fact, dogs should always eat pitted olives over the ones with stones, which can be a choking hazard. Be sure the olives you’re about to feed your dog have no stones, or remove the stones before giving them the flesh. If the pitted olives are soaked in brine or flavourings however, these aren’t good for dogs. Stick to the plain, pitted variety.</p>
      <h3 id="can-dogs-eat-olives-with-pimento">Can dogs eat olives with pimento?</h3>
      <p>It depends. Though pimento peppers and olives alone are non-toxic to dogs, it’s probably not worth the risk to feed your dog olives with pimento peppers. If you check the label the olives might contain completely safe ingredients, however there are plenty of pimento-stuffed olives that contain very flavoured oils, such as chilli or garlic oil. When it comes to dogs’ delicate tums, it should be a plain olive without seasoning or extras.</p>
      <h3 id="can-dogs-have-olive-oil">Can dogs have olive oil?</h3>
      <p>Olive oil is okay for a dog in moderation as it’s very nutrient dense -the monounsaturated fats can be beneficial to the heart, skin and coat of your pooch. However it shouldn’t be seen as a regular food for dogs as it’s very high in fat. If you feed them a drizzle of olive oil, be sure to choose olive oil that’s very high quality to get your dog the most nutrition possible.</p>
      <p>Note: Dogs with pancreatitis should avoid olive oil, as it will make them ill.</p>
      <h3 id="conclusion">Conclusion</h3>
      <p>Overall, nutritious olives can be a healthy treat in your dog’s diet, so long as they eat them in moderation, as they’re high in sodium and fat. Choose olives that are pitted and plain, with no added flavourings or extra ingredients (i.e. avoid the chilli olives or the ones drenched in brine!).</p>
      <h3 id="what-other-foods-can-dogs-safely-eat">What other foods can dogs safely eat?</h3>
      <p>If you like the idea of a nutritious bite-sized food for your dog but you’re not a fan of giving them olives, why not try these alternatives?</p>
      <p>Blueberries can offer a similar pop of vitamins and antioxidants without the high sodium content.</p>
      <p>Pumpkin is full of vitamins as well as fibre, which is great for digestion.</p>
      <p>Banana is a tasty, squishy treat for dogs full of potassium.</p>
      <p>Healthy dog treats such as those that come with added probiotics offer a tasty crunch, with a side of gut-friendly health benefits for dogs.</p>
      <p>If you’re looking for tasty, healthy food for your dog, our grain-free dog treats are full of lean proteins, powerful supplements and delicious natural ingredients to keep your pooch satisfied in both mind and body.</p>
`,
  headings: [
    { id: 'are-olives-good-for-dogs', text: 'Are olives good for dogs?', level: 2 },
    { id: 'what-are-the-health-benefits', text: 'What are the health benefits?', level: 3 },
    { id: 'can-puppies-eat-olives', text: 'Can puppies eat olives?', level: 2 },
    { id: 'when-are-olives-unsafe-for-dogs', text: 'When are olives unsafe for dogs?', level: 2 },
    { id: 'can-dogs-be-allergic-to-olives', text: 'Can dogs be allergic to olives?', level: 3 },
    { id: 'can-olives-make-dogs-sick', text: 'Can olives make dogs sick?', level: 3 },
    { id: 'how-to-safely-give-olives-to-your-dog', text: 'How to safely give olives to your dog?', level: 2 },
    { id: 'how-much-is-safe-to-give-your-dog', text: 'How much is safe to give your dog?', level: 3 },
    { id: 'what-kinds-of-olives-can-dogs-eat', text: 'What kinds of olives can dogs eat?', level: 2 },
    { id: 'can-dogs-eat-green-olives', text: 'Can dogs eat green olives?', level: 3 },
    { id: 'can-dogs-eat-black-olives', text: 'Can dogs eat black olives?', level: 3 },
    { id: 'can-dogs-eat-olives-in-brine', text: 'Can dogs eat olives in brine?', level: 3 },
    { id: 'can-dogs-eat-pitted-olives', text: 'Can dogs eat pitted olives?', level: 3 },
    { id: 'can-dogs-eat-olives-with-pimento', text: 'Can dogs eat olives with pimento?', level: 3 },
    { id: 'can-dogs-have-olive-oil', text: 'Can dogs have olive oil?', level: 3 },
    { id: 'conclusion', text: 'Conclusion', level: 3 },
    { id: 'what-other-foods-can-dogs-safely-eat', text: 'What other foods can dogs safely eat?', level: 3 },
  ]

},
'can-dogs-eat-beans': {
  title: 'Can dogs eat Beans?',
  category: 'Pets',
  snippet: "Yes - dogs can eat beans. We’re not talking about baked beans here, as they’re a definite no-go. But other beans and legumes are an important part of a nutritious human diet, and though not essential, they’re beneficial to dogs too.",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/BLOG_CAN_DOGS_EAT_BEANS_500x_crop_center.jpg?v=1713533785",
    alt: "Can dogs eat Beans?",
    caption: "Are beans good for dogs?"
  },
  content: `
<p>However, there are SO many varieties of beans, so which beans can you safely feed to your dog, and how should you serve them safely? Read on for all the answers to your bean-based questions…</p>
      <h2 id="are-beans-good-for-dogs">Are beans good for dogs?</h2>
      <p>Yes, some beans are beneficial for dogs. Beans aren’t an essential part of a pooch diet, but when served correctly they do offer a tasty boost of lean protein and some fibre, along with vitamins and minerals.</p>
      <h3 id="what-are-the-health-benefits">What are the health benefits?</h3>
      <p>Here are all the health benefits of adding beans to your dog’s diet…</p>
      <p>Protein in beans is brilliant for a dog’s muscle growth, maintenance and energy.</p>
      <p>Low fat, so great for dogs who are needing to manage their weight.</p>
      <p>Fibre for improving digestion, gut health and bowel function.</p>
      <p>Vitamins and minerals, such as vitamin K and C, are great for the immune system, blood clotting and bone maintenance.</p>
      <h2 id="can-puppies-eat-beans">Can puppies eat beans?</h2>
      <p>Though beans are okay for puppies to eat, at this early stage they may cause some tummy upset. If you want to feed them a small amount of plain beans, be sure they’re cooked, and keep an eye on your pup afterwards to ensure they digest the beans properly and don’t become sick or bloated.</p>
      <h2 id="when-are-beans-unsafe-for-dogs">When are beans unsafe for dogs?</h2>
      <p>Uncooked or raw beans can cause real issues for a dog’s sensitive tum. They’re very hard to digest and could cause them to become sick - so always cook beans before serving.</p>
      <p>Also, be sure the beans are plain. Beans that come in rich sauces, covered in salt or with added ingredients such as chilli, garlic or onion are not safe for dogs to munch on.</p>
      <h3 id="can-dogs-be-allergic-to-beans">Can dogs be allergic to beans?</h3>
      <p>Yes, some dogs could have a bean allergy. If you’ve not fed beans to your pooch before, give them only a small amount, and watch their behaviour afterwards. If they present any of the following symptoms, they could have an allergy to the beans:</p>
      <ul>
        <li>Reddening, itching or rashing of the skin</li>
        <li>Vomiting and/or diarrhoea</li>
        <li>Wheezing or breathing difficulties</li>
        <li>Bloating, pain in stomach</li>
        <li>Lethargy, changes in behaviour</li>
      </ul>
      <p>If the symptoms are severe, get your pooch to see a vet immediately to rule out anything serious.</p>
      <h3 id="can-beans-make-dogs-sick">Can beans make dogs sick?</h3>
      <p>Yes, beans can make dogs sick for a number of reasons:</p>
      <ul>
        <li>Too many beans can cause a cacophony of activity in a dog’s gut - just like they can for humans! It’s important to moderate the portion of beans you feed your pooch for this reason.</li>
      </ul>
      <ul>
        <li>Beans often come served in flavoured oils, sauces, salt and seasonings. These can all be harmful for a dog and make them sick.</li>
      </ul>
      <ul>
        <li>If dogs have an allergy or intolerance to beans, this might mean they get sick or feel discomfort if they eat them.</li>
      </ul>
      <h2 id="how-to-safely-give-beans-to-your-dog">How to safely give beans to your dog</h2>
      <p>Lots of beans come in sauces or oils that can be toxic or harmful to dogs, so if you want to feed beans to your pooch be sure they’re plain and cooked. Don’t add any salt or other seasonings. Check this article again to see if the types of beans you’re cooking are suitable for a pooch (most beans are if they’re plain, but it’s best to be sure).</p>
      <h3 id="how-many-beans-are-safe-to-give-your-dog">How many beans are safe to give your dog?</h3>
      <p>The amount of beans you give to your pooch will depend on their breed and size, but a handful of beans alongside their regular food should be fine. Don’t give them a whole tin of beans or overfeed your pooch, as they can cause problems with digestion.</p>
      <h3 id="can-dogs-eat-beans-everyday">Can dogs eat beans everyday?</h3>
      <p>It’s not recommended to feed your dog beans every day, though once a week or so should be fine. Though they’re healthy, they might cause digestive issues for a pooch if fed too often (gas, for instance!).</p>
      <h2 id="what-kinds-of-beans-can-dogs-eat">What kinds of beans can dogs eat?</h2>
      <p>Dogs can eat plain, cooked beans in many varieties! So there’s plenty of beans for a pooch to enjoy as part of a nutritious, well-rounded diet. Read below for questions on which beans dogs can eat.</p>
      <h3 id="can-dogs-eat-baked-beans">Can dogs eat baked beans?</h3>
      <p>This is a no - dogs shouldn’t eat classic tinned baked beans, as the rich sauce they’re usually served in is full of sugar and salt. Baked beans can also contain ingredients dogs shouldn’t eat, such as onions and garlic. Keep baked beans on human toast rather than dog bowls.</p>
      <h3 id="can-dogs-eat-green-beans-i.e-broad--runner-french">Can dogs eat green beans i.e broad /runner/French?</h3>
      <p>Yes - green beans are a great source of nutrients for a dog, and vets even recommend them! This includes French beans, runner beans and broad beans. Just make sure they’re cooked (boiled, for instance) and not served with any added salt or seasonings.</p>
      <h3 id="can-dogs-eat-red-kidney-beans">Can dogs eat red kidney beans?</h3>
      <p>Kidney beans are safe for dogs, but it might be an idea for your dog to try them first, so you can see how they react. They can cause digestive problems in some pooches. Also, be sure they’re cooked, as raw kidney beans can be toxic.</p>
      <h3 id="can-dogs-eat-butter-cannellini-beans">Can dogs eat butter/cannellini beans?</h3>
      <p>Yes - butter beans (also lima beans) and cannellini beans are a tasty source of protein for pooches. Just be sure they’re cooked without any sauces, flavourings or salt, and feed in moderation to reduce any crazy digestive activity.</p>
      <h3 id="can-dogs-eat-black-beans">Can dogs eat black beans?</h3>
      <p>Yes. If you’re cooking up a Mexican feast with black beans, you might want your dog to have a sample. Just be sure they eat the black beans after they’ve been cooked and before you’ve added any extra seasoning. The black beans must be plain; avoid the kind that comes with chilli or garlic already added.</p>
      <h3 id="can-dogs-eat-edamame-beans">Can dogs eat edamame beans?</h3>
      <p>Yes - edamame beans are a delicious protein boost for a pooch. These are one of the few beans you can serve raw or cooked to your dog - just be sure there’s no added salt or flavourings for a green, nutritious snack.</p>
      <h3 id="conclusion">Conclusion</h3>
      <p>Nearly all beans are safe for a dog to eat and can be a delicious protein source for your hungry dog. The main rules are that the beans should always be cooked, and served plain - with no added salt, sauces or flavourings. That means no Heinz baked beans!</p>
      <h3 id="what-other-foods-can-dogs-safely-eat">What other foods can dogs safely eat?</h3>
      <p>If you’re looking for tasty protein sources for your dog, but don’t fancy feeding them beans, try these alternatives:</p>
      <p>Meaty Treats for dogs - These ones are infused with tasty proteins such as turkey or duck, with an added shot of gut-friendly probiotics for health and digestion.</p>
      <p>Cooked eggs - boiling an egg and adding it to your dog’s meal is another great source of protein for them.</p>
      <p>Grain-free food with chicken - for a well-balanced meal with all the protein your pooch needs to stay healthy.</p>
      <p>If you’re looking for healthy yet delicious foods your dog will love, try our range of nutritious dog treats and grain-free food for dogs - with tasty recipes created to support their mind and body.</p>
`,
  headings: [
    { id: 'are-beans-good-for-dogs', text: 'Are beans good for dogs?', level: 2 },
    { id: 'what-are-the-health-benefits', text: 'What are the health benefits?', level: 3 },
    { id: 'can-puppies-eat-beans', text: 'Can puppies eat beans?', level: 2 },
    { id: 'when-are-beans-unsafe-for-dogs', text: 'When are beans unsafe for dogs?', level: 2 },
    { id: 'can-dogs-be-allergic-to-beans', text: 'Can dogs be allergic to beans?', level: 3 },
    { id: 'can-beans-make-dogs-sick', text: 'Can beans make dogs sick?', level: 3 },
    { id: 'how-to-safely-give-beans-to-your-dog', text: 'How to safely give beans to your dog', level: 2 },
    { id: 'how-many-beans-are-safe-to-give-your-dog', text: 'How many beans are safe to give your dog?', level: 3 },
    { id: 'can-dogs-eat-beans-everyday', text: 'Can dogs eat beans everyday?', level: 3 },
    { id: 'what-kinds-of-beans-can-dogs-eat', text: 'What kinds of beans can dogs eat?', level: 2 },
    { id: 'can-dogs-eat-baked-beans', text: 'Can dogs eat baked beans?', level: 3 },
    { id: 'can-dogs-eat-green-beans-i.e-broad--runner-french', text: 'Can dogs eat green beans i.e broad /runner/French?', level: 3 },
    { id: 'can-dogs-eat-red-kidney-beans', text: 'Can dogs eat red kidney beans?', level: 3 },
    { id: 'can-dogs-eat-butter-cannellini-beans', text: 'Can dogs eat butter/cannellini beans?', level: 3 },
    { id: 'can-dogs-eat-black-beans', text: 'Can dogs eat black beans?', level: 3 },
    { id: 'can-dogs-eat-edamame-beans', text: 'Can dogs eat edamame beans?', level: 3 },
    { id: 'conclusion', text: 'Conclusion', level: 3 },
    { id: 'what-other-foods-can-dogs-safely-eat', text: 'What other foods can dogs safely eat?', level: 3 },
  ]

},

'can-dogs-eat-butternut-squash': {
  title: 'Can dogs eat Butternut Squash?',
  category: 'Pets',
  snippet: "Yes, absolutely dogs can eat butternut squash. This orange root veggie (or fruit!) is packed full of useful nutrients that promote good health in a dog’s body, and it’s low in fat too.",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/BLOG_CAN_DOGS_EAT_BUTTERNUT_SQUASH_500x_crop_center.jpg?v=1713535229",
    alt: "Can dogs eat Butternut Squash?",
    caption: "Is butternut squash good for dogs?"
  },
  content: `
<p>Read on to get all your answers on why butternut squash is such a healthy addition to a well-balanced doggo diet.</p>
      <h2 id="is-butternut-squash-good-for-dogs">Is butternut squash good for dogs?</h2>
      <p>Yes! It’s one of the healthiest veggies a dog can eat, with lots of nutrients to benefit a dog’s body - plus they love the sweet flavour. When prepared correctly it’s also great for digestion and for helping a dog feel full.</p>
      <h3 id="what-are-the-health-benefits">What are the health benefits?</h3>
      <p>Let’s dive into the various nutrients of butternut squash and how they can benefit your dog’s health:</p>
      <p>Good source of dietary fibre, so is excellent for smooth digestion in dogs and promotes healthy bowel movements.</p>
      <p>Rich in vitamins A and C, integral for boosted immunity, as well as overall eye and skin health.</p>
      <p>Minerals like potassium and manganese, important for healthy blood, enzyme and metabolic function.</p>
      <p>Lots of antioxidants such as beta carotene, to fight off free radicals and keep the physical body healthy.</p>
      <p>Low in fat and delicious, so a useful addition to a weight management diet for your pooch.</p>
      <h2 id="can-puppies-eat-butternut-squash">Can puppies eat butternut squash?</h2>
      <p>Yes - butternut squash is definitely safe for puppies. Just be sure to feed only the flesh, cooked so it’s soft, without any added salt or seasonings. Puppies should love the taste and will benefit from its fibre, vitamin and mineral content.</p>
      <h2 id="when-is-butternut-squash-unsafe-for-dogs">When is butternut squash unsafe for dogs</h2>
      <p>As with any food, it can be unsafe when fed in too high a portion or when it’s not nutritionally balanced with other kinds of foods. Be sure to feed butternut squash alongside other nutritious proteins, veggies and fruits.</p>
      <p>It can also be unsafe if it’s not prepared correctly. Raw butternut squash is not recommended, and it’s important to remove the skin and seeds before serving to your dog, too.</p>
      <h3 id="can-dogs-be-allergic-to-butternut-squash">Can dogs be allergic to butternut squash?</h3>
      <p>Yes, it’s rare but a dog could have a butternut squash allergy. Feed your dog a small portion if they haven’t had it before and watch out for the following symptoms of an allergic reaction:</p>
      <ul>
        <li>Reddening, itching, rashing on the skin</li>
        <li>Breathing difficulties, wheezing</li>
        <li>Vomiting and/or diarrhoea</li>
        <li>Bloating, pain in stomach</li>
        <li>Lethargy, change in behaviour</li>
      </ul>
      <h3 id="can-butternut-squash-make-dogs-sick">Can butternut squash make dogs sick?</h3>
      <p>It’s unlikely if it’s prepared correctly, but butternut squash can make a dog sick if they’re fed too much of it, or if it wasn’t cooked. Of course, spoiled butternut squash that’s past its best is dangerous to feed a pooch as it could give them a stomach upset.</p>
      <p>Butternut squash served in heavy sauces, seasoning or creams could make a dog sick - it should always be given to them cooked and plain.</p>
      <p>It could also make a dog sick if they have an allergy to butternut squash.</p>
      <h2 id="how-to-safely-give-butternut-squash-to-your-dog">How to safely give butternut squash to your dog?</h2>
      <p>To safely serve your pooch this nutritious, squashy snack, be sure it’s cooked (steaming, boiling or oven-baking is the best method), and serve only the flesh with all the skin and seeds removed. Don’t add any salt or seasonings, it should be served plain to avoid causing any digestive issues. Squash cooked in things like garlic or onions should be avoided entirely, as these are toxic ingredients to dogs.</p>
      <h3 id="how-often-can-dogs-eat-butternut-squash">How often can dogs eat butternut squash?</h3>
      <p>Dogs can regularly eat squash so long as it’s part of a nutritionally balanced diet, full of varied proteins, fibre sources, veggies and fruits. As with all foods, it shouldn’t be served as a meal on its own as this will limit the amount of nutrition your dog receives.</p>
      <h2 id="what-kind-of-squash-can-dogs-eat">What kind of squash can dogs eat?</h2>
      <p>Let’s go into more detail over what kind of butternut squash your dog can and can’t eat…</p>
      <h3 id="can-dogs-eat-raw-butternut-squash">Can dogs eat raw butternut squash?</h3>
      <p>No - it’s not a good idea to feed raw squash to your dog. Not only is it hard and not that tasty, it can cause a lot of tummy problems for them as it’s tough to digest. Cook a butternut squash and they’ll enjoy eating that a lot more!</p>
      <h3 id="can-dogs-eat-butternut-squash-skin">Can dogs eat butternut squash skin?</h3>
      <p>No - squash skin is for removing before prepping to cook it. The skin is too tough and not pleasant for them to eat.</p>
      <h3 id="can-dogs-eat-butternut-squash-seeds">Can dogs eat butternut squash seeds?</h3>
      <p>No - don’t feed your dog the seeds of a butternut squash. They can be tough for them to eat, or be a choking hazard - and they’re not the most digestible food for a dog either. When serving squash, remove the skin and seeds before serving only the flesh. That said, it’s not a big deal if your dog munches on some seeds accidentally.</p>
      <h3 id="can-dogs-eat-butternut-squash-soup">Can dogs eat butternut squash soup?</h3>
      <p>A dog can eat squash soup, but only if you’ve made it yourself using just butternut squash and water.  As it’s unlikely you’ve made or bought a soup with these ingredients alone, and without added ingredients such as salt, seasoning and cream, it’s not recommended to feed a dog soup at all. It’s also more pleasant for them to eat squash as chunks, dogs enjoy munching food rather than slurping.</p>
      <h3 id="can-dogs-eat-frozen-butternut-squash">Can dogs eat frozen butternut squash?</h3>
      <p>Frozen squash is fine so long as it’s been fully thawed and ideally heated a bit before serving to your pooch. The same rules apply that the squash should be plain, without added seasoning, and only the flesh.</p>
      <h3 id="conclusion">Conclusion</h3>
      <p>Butternut squash is a delicious, healthy food for a dog as part of a healthy, balanced diet. It’s full of fibre, vitamins and minerals that benefit a dog’s body and mind. Be sure to always remove the skin and seeds, cook the squash and serve plain flesh without any added salt, seasonings or sauces.</p>
      <h3 id="what-other-foods-can-dogs-safely-eat">What other foods can dogs safely eat?</h3>
      <p>If you’re keen to feed butternut squash to your dog but are looking for alternatives, why not try the following?</p>
      <ul>
        <li>Sweet potatoes offer the same dietary fibre and vitamins as squash and are actually a very similar root vegetable.</li>
        <li>Carrots are another mashable orange veggie with lots of fibre and powerful vitamins, like squash.</li>
        <li>Courgette is another fibre-rich vegetable that can satisfy dogs while offering a host of health benefits, such as extra hydration.</li>
      </ul>
      <p>Check out our range of healthy snacks for dogs as well as grain-free dog food that’s gentle on digestion. All of our delicious, grain-free recipes are specially formulated to work wonders on your dog’s body and mind.</p>
`,
  headings: [
    { id: 'is-butternut-squash-good-for-dogs', text: 'Is butternut squash good for dogs?', level: 2 },
    { id: 'what-are-the-health-benefits', text: 'What are the health benefits?', level: 3 },
    { id: 'can-puppies-eat-butternut-squash', text: 'Can puppies eat butternut squash?', level: 2 },
    { id: 'when-is-butternut-squash-unsafe-for-dogs', text: 'When is butternut squash unsafe for dogs', level: 2 },
    { id: 'can-dogs-be-allergic-to-butternut-squash', text: 'Can dogs be allergic to butternut squash?', level: 3 },
    { id: 'can-butternut-squash-make-dogs-sick', text: 'Can butternut squash make dogs sick?', level: 3 },
    { id: 'how-to-safely-give-butternut-squash-to-your-dog', text: 'How to safely give butternut squash to your dog?', level: 2 },
    { id: 'how-often-can-dogs-eat-butternut-squash', text: 'How often can dogs eat butternut squash?', level: 3 },
    { id: 'what-kind-of-squash-can-dogs-eat', text: 'What kind of squash can dogs eat?', level: 2 },
    { id: 'can-dogs-eat-raw-butternut-squash', text: 'Can dogs eat raw butternut squash?', level: 3 },
    { id: 'can-dogs-eat-butternut-squash-skin', text: 'Can dogs eat butternut squash skin?', level: 3 },
    { id: 'can-dogs-eat-butternut-squash-seeds', text: 'Can dogs eat butternut squash seeds?', level: 3 },
    { id: 'can-dogs-eat-butternut-squash-soup', text: 'Can dogs eat butternut squash soup?', level: 3 },
    { id: 'can-dogs-eat-frozen-butternut-squash', text: 'Can dogs eat frozen butternut squash?', level: 3 },
    { id: 'conclusion', text: 'Conclusion', level: 3 },
    { id: 'what-other-foods-can-dogs-safely-eat', text: 'What other foods can dogs safely eat?', level: 3 },
  ]

},

'can-dogs-eat-eggs': {
  title: 'Can dogs eat Eggs?',
  category: 'Pets',
  snippet: "Yes, dogs can eat eggs! Eggs are super nutritious for both humans and dogs. There are plenty of ways dogs can get protein-rich eggs into their diet, but some are safer than others.",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/BLOG_CAN_DOGS_EAT_EGG_500x_crop_center.jpg?v=1713535983",
    alt: "Can dogs eat Eggs?",
    caption: "Are eggs good for dogs?"
  },
  content: `
<p>In this article, let’s get into the ways in which eggs are good for dogs, and the best ways to serve them to your hungry hound.</p>
      <h2 id="are-eggs-good-for-dogs">Are eggs good for dogs?</h2>
      <p>Yes, eggs are bursting with nutrients for dogs. They’re high in fat, however, so should also be fed in moderation.</p>
      <h3 id="what-are-the-health-benefits">What are the health benefits?</h3>
      <p>Let’s unpack the humble egg and its benefits for a dog’s health.</p>
      <p>High in protein. Eggs are an excellent source of protein, which is important for muscle growth and maintenance, and for energy.</p>
      <p>Vitamin A is brilliant for a dog’s skin and coat, good vision and a healthy immune system.</p>
      <p>Complex B vitamins in eggs contribute to skin and coat health as well as brain function. They also boost immunity, help enzyme production and improve the nervous system.</p>
      <h2 id="can-puppies-eat-eggs">Can puppies eat eggs?</h2>
      <p>Puppies can have egg in moderation, as part of a balanced diet that’s specially formulated for puppies. Be sure it’s cooked well (maybe hard-boiled), as raw eggs are of higher risk to them. If they don’t digest egg very well, of course avoid feeding them in future.</p>
      <h2 id="when-are-eggs-unsafe-for-dogs">When are eggs unsafe for dogs?</h2>
      <p>Eggs that are spoiled or raw carry a high risk of upsetting your pooch’s stomach with bacteria such as E.Coli or salmonella. Be sure to feed eggs to your dog that are within their sell-by date - the fresher the better. Serve eggs in a safely cooked way (hard or soft-boiled, ideally), without any seasoning or flavourings - and keep an eye on them afterwards to see how their body reacts.</p>
      <h3 id="can-dogs-be-allergic-to-eggs">Can dogs be allergic to eggs?</h3>
      <p>Dogs can have an egg allergy. If they develop any of the following symptoms after feeding, assume they have an allergy or intolerance and don’t include eggs in their diet.</p>
      <ul>
        <li>Reddening, swelling or itching of the skin</li>
        <li>Diarrhoea or vomiting</li>
        <li>Stomach pains, bloating</li>
        <li>Wheezing, difficulty breathing</li>
        <li>Change in behaviour, lethargy</li>
      </ul>
      <p>If these symptoms persist, your pooch may have become sick from bacteria in the eggs - so you should get them to a vet for immediate medical attention.</p>
      <h3 id="can-dogs-with-pancreatitis-eat-eggs">Can dogs with pancreatitis eat eggs?</h3>
      <p>Pancreatitis is a condition which affects the pancreas and its ability to break down/filter fats. Therefore, if owners of dogs with pancreatitis are keen to keep fat levels low,  just the white of the egg could be served up. Alternatively, there are other ways your pancreatic pooch can get protein, like in lean chicken.</p>
      <h3 id="can-eggs-make-dogs-sick">Can eggs make dogs sick?</h3>
      <p>Eggs can make dogs sick, especially if they carry bacteria such as E.Coli or salmonella, which is more prolific in raw or spoiled eggs.</p>
      <p>If your dog has an egg intolerance or allergy, this can also make them sick. They are also high in fat, while being nutrient dense - which means dogs with pancreatitis could get sick from eggs.</p>
      <h2 id="how-to-safely-give-eggs-to-your-dog">How to safely give eggs to your dog</h2>
      <p>Eggs are versatile, that’s part of their appeal - but what’s the safest way to serve eggs to your pooch? The best way is to hard-soft or soft-boil fresh eggs in a pan of water, and add it chopped to their regular food without any added salt or seasonings.</p>
      <p>You can also serve poached eggs, or scrambled so long as there isn’t butter or salt added.</p>
      <h3 id="how-many-eggs-is-safe-to-give-your-dog">How many eggs is safe to give your dog?</h3>
      <p>How many eggs to feed your dog really depends on their size and breed. In general, one or two eggs per week is considered adequate - one egg for smaller dogs, and two eggs for bigger dogs. Feeding eggs to your dog every day isn’t recommended, due to their high fat content.</p>
      <h2 id="what-kinds-of-eggs-can-dogs-eat">What kinds of eggs can dogs eat?</h2>
      <p>Now that we know eggs can be a healthy addition to a dog’s diet, which eggs are safest to give your pooch?</p>
      <h3 id="can-dogs-eat-raw-eggs">Can dogs eat raw eggs?</h3>
      <p>It’s not recommended. There are raw food advocates who would feed raw eggs to their dogs as they’re still protein rich, however raw eggs carry too high a risk of transferring harmful bacteria to your dog. Cooked eggs are much safer.</p>
      <h3 id="should-dogs-eat-scrambled-poached-or-fried-eggs">Should dogs eat scrambled, poached or fried eggs?</h3>
      <p>We recommend feeding soft-boiled or hard-boiled eggs, however, poached, scrambled or fried are all ok, too. Fried will have more oil, so will be higher fat and less healthy. If you scramble eggs, don’t add extra butter in order to retain its nutrition as a suitable dog snack.</p>
      <h3 id="can-dogs-eat-eggs-shells">Can dogs eat eggs shells?</h3>
      <p>It won’t exactly harm your dog if they eat some egg in the shell - the shells are a nutritious source of calcium. It’s not as palatable for your dog to eat egg shells, but there’s no harm in them trying it. If you do this, be sure the whole egg is cooked with the shell attached - don’t feed your pooch discarded eggshells on their own.</p>
      <h3 id="can-dogs-eat-scotch-eggs">Can dogs eat scotch eggs?</h3>
      <p>Don’t feed your dog scotch eggs - the breaded sausage exterior is high fat and likely to contain ingredients your dog won’t digest well. It’s unlikely to cause them harm if they do snaffle a scotch egg, but don’t consider it a regular snack for a dog.</p>
      <h3 id="can-dogs-eat-duck-or-quail-eggs">Can dogs eat duck or quail eggs?</h3>
      <p>There’s no harm in feeding your dog duck or quail eggs, as they’re still very nutrient rich. Serve them in the way you would chicken’s eggs - cooked, plain and without any additional flavourings.</p>
      <h3 id="can-dogs-eat-pickled-eggs">Can dogs eat pickled eggs?</h3>
      <p>Pickled eggs are much too heavy in vinegar for dogs - it could cause them issues in digestion. This also goes for any other eggs that have been prepared ahead of time - devilled eggs, huevos rancheros or shakshuka. When it comes to dogs, plain eggs are the way to go.</p>
      <h3 id="can-dogs-eat-out-of-date-eggs">Can dogs eat out-of-date eggs?</h3>
      <p>No. Your pooch should eat eggs that are as fresh as possible - and at least within the sell-by date. Spoiled eggs could make your dog sick, or carry bacteria that could cause them harm.</p>
      <h3 id="conclusion">Conclusion</h3>
      <p>Eggs are a tasty, nutrient-dense snack for hungry dogs, packed full of protein and vitamins. They are however, high in fat, so unsuitable for pooches with diabetes or pancreatitis. Be sure to feed eggs in moderation, no more than one or two eggs a week, and serve them cooked and plain with no additional seasoning.</p>
      <h3 id="what-other-foods-can-dogs-safely-eat">What other foods can dogs safely eat?</h3>
      <p>If you’re looking to add more protein into your dog’s diet but you’re not into eggs, try these alternatives…</p>
      <p>High protein dog food to get a boost of protein alongside fresh ingredients such as pumpkin, chickpeas and supplements.</p>
      <p>Pumpkin - a source of tasty fibre as well as vitamins A, C and E, and it’s low in fat.</p>
      <p>Banana - a sweet fruity treat that provides energy while being full of fibre and potassium.</p>
      <p>Meaty Treats for dogs - irresistible dog treats packed with shrimp, turkey and duck with added probiotics to improve gut health.</p>
      <p>If you’re looking for protein-rich foods for your dog, our grain-free dog food and healthy dog treats are packed full of lean proteins and fresh fruit and veggies, to satisfy your pooch in both body and mind.</p>
`,
  headings: [
    { id: 'are-eggs-good-for-dogs', text: 'Are eggs good for dogs?', level: 2 },
    { id: 'what-are-the-health-benefits', text: 'What are the health benefits?', level: 3 },
    { id: 'can-puppies-eat-eggs', text: 'Can puppies eat eggs?', level: 2 },
    { id: 'when-are-eggs-unsafe-for-dogs', text: 'When are eggs unsafe for dogs?', level: 2 },
    { id: 'can-dogs-be-allergic-to-eggs', text: 'Can dogs be allergic to eggs?', level: 3 },
    { id: 'can-dogs-with-pancreatitis-eat-eggs', text: 'Can dogs with pancreatitis eat eggs?', level: 3 },
    { id: 'can-eggs-make-dogs-sick', text: 'Can eggs make dogs sick?', level: 3 },
    { id: 'how-to-safely-give-eggs-to-your-dog', text: 'How to safely give eggs to your dog', level: 2 },
    { id: 'how-many-eggs-is-safe-to-give-your-dog', text: 'How many eggs is safe to give your dog?', level: 3 },
    { id: 'what-kinds-of-eggs-can-dogs-eat', text: 'What kinds of eggs can dogs eat?', level: 2 },
    { id: 'can-dogs-eat-raw-eggs', text: 'Can dogs eat raw eggs?', level: 3 },
    { id: 'should-dogs-eat-scrambled-poached-or-fried-eggs', text: 'Should dogs eat scrambled, poached or fried eggs?', level: 3 },
    { id: 'can-dogs-eat-eggs-shells', text: 'Can dogs eat eggs shells?', level: 3 },
    { id: 'can-dogs-eat-scotch-eggs', text: 'Can dogs eat scotch eggs?', level: 3 },
    { id: 'can-dogs-eat-duck-or-quail-eggs', text: 'Can dogs eat duck or quail eggs?', level: 3 },
    { id: 'can-dogs-eat-pickled-eggs', text: 'Can dogs eat pickled eggs?', level: 3 },
    { id: 'can-dogs-eat-out-of-date-eggs', text: 'Can dogs eat out-of-date eggs?', level: 3 },
    { id: 'conclusion', text: 'Conclusion', level: 3 },
    { id: 'what-other-foods-can-dogs-safely-eat', text: 'What other foods can dogs safely eat?', level: 3 },
  ]

},
'can-dogs-eat-courgette': {
  title: 'Can dogs eat Courgette?',
  category: 'Pets',
  snippet: "Yes - dogs can eat courgette, or zucchini as it’s also known. These green, nutrient-dense veggies are actually really safe for dogs, as well as healthy.",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/BLOG_CAN_DOGS_EAT_CUOURGETTE_500x_crop_center.jpg?v=1713536592",
    alt: "Can dogs eat Courgette?",
    caption: "Is courgette good for dogs?"
  },
  content: `
<p>Let’s go into all the benefits of courgette for dogs, and how to serve it to them safely.</p>
      <h2 id="is-courgette-good-for-dogs">Is courgette good for dogs?</h2>
      <p>Yes! Courgette is versatile as it can be fed as a snack or part of a main meal for dogs. It can be served raw or cooked, it’s full of nutrients and generally really safe for a pooch to eat.</p>
      <h3 id="what-are-the-health-benefits">What are the health benefits?</h3>
      <p>Let’s unpack all the benefits of a tasty courgette snack for dogs:</p>
      <p>Packed with dietary fibre to aid a dog’s digestion, improve bowel movements and firm up poops.</p>
      <p>Low calorie, so an excellent choice for dogs on a plan to manage their weight.</p>
      <p>High water content to hydrate your pooch and give a sense of fullness.</p>
      <p>Vitamins C and K are great for boosting the immune system, as well as skin, blood and bone health.</p>
      <p>Potassium is integral for balancing electrolytes, nerve and cellular function.</p>
      <p>Lots of antioxidants to fight off free radicals and protect the immune system.</p>
      <h2 id="can-puppies-eat-courgette">Can puppies eat courgette?</h2>
      <p>Yes, puppies can eat courgette too. The dietary fibre will improve their digestion and antioxidants will boost their immune system. As with any new food, keep an eye on your pup after they’ve eaten it to make sure they don’t suffer any digestive issues. Don’t overfeed courgette to a young puppy, and cut it into tiny pieces to avoid the risk of choking.</p>
      <h2 id="when-is-courgette-unsafe-for-dogs">When is courgette unsafe for dogs?</h2>
      <p>Courgette can be deemed unsafe if you’re feeding too much of it, or if you’re not offsetting it with a balanced range of other fruits, veggies and proteins. Just feeding one of any type of food makes it unsafe - include it in a well-rounded pooch diet and you’re good to go.</p>
      <p>As ever, you shouldn’t feed courgette to your dog if it’s been seasoned or coated in sauces or spices; it should always be served plain.</p>
      <h3 id="can-dogs-be-allergic-to-courgette">Can dogs be allergic to courgette?</h3>
      <p>There’s a chance your dog might have an allergic reaction to courgette, in which case you should stop feeding it to them straight away. When feeding your pooch courgette for the first time, watch them in the hours following to be sure they don’t develop any of these symptoms…</p>
      <ul>
        <li>Reddening, itching, swelling of the skin</li>
        <li>Vomiting or diarrhoea</li>
        <li>Bloating, pain in stomach</li>
        <li>Wheezing, difficulty breathing</li>
        <li>Lethargy, change in behaviour</li>
      </ul>
      <h3 id="can-courgette-make-dogs’-sick">Can courgette make dogs’ sick?</h3>
      <p>It’s unlikely courgette will make your dog sick - it’s a nutritious, tasty veggie and one of the best things to feed your pooch to keep them happy and healthy. If it does, it’ll likely be for one of these reasons:</p>
      <b>It was spoiled/rotten. Just like humans, dogs require fresh food that’s clean and at its best, or they could become ill.</b>
      <b>It was coated in seasoning/spices/sauces that could irritate your dog’s delicate digestive system or trigger a reaction.</b>
      <b>Too much courgette will potentially give your pooch a stomach ache. Be sure they get a suitable portion for their breed and size, and they get a good range of other foods throughout the day.</b>
      <b>If your pooch has an allergy to courgette, this could present as sickness.</b>
      <h2 id="how-to-safely-give-courgette-to-your-dog">How to safely give courgette to your dog?</h2>
      <p>To safely serve your pooch a delicious courgette portion, be sure the courgette was washed and fresh, has been chopped into manageable pieces, and don’t add any seasoning, oils or sauces. The courgette can be served raw or cooked - if it’s cooked, then lightly roasted, grilled or steamed is the best method.</p>
      <h3 id="how-much-is-safe-to-give-your-dog">How much is safe to give your dog?</h3>
      <p>How much courgette your dog eats is dependent on their breed or size - but make sure it’s just a fraction of their regular food, not the main bulk of a meal. Variety is key when it comes to a dog’s healthy diet. Chat to your vet if you aren’t sure how much courgette your dog should eat.</p>
      <h2 id="what-kind-of-courgette-can-dogs-eat">What kind of courgette can dogs eat?</h2>
      <p>Courgettes are pretty samey across the board, but here are a few questions about different courgette serving suggestions for dogs so you can be sure you’re giving it your pooch in the safest way.</p>
      <h3 id="can-dogs-eat-raw-courgette">Can dogs eat raw courgette?</h3>
      <p>Yes they can, as raw courgette is super healthy for dogs. When it’s raw, it packs the biggest nutritional punch, however it is also harder to digest than cooked courgette. For this reason, chop it up into munchable, digestible pieces, don’t add any seasoning and don’t give too big a portion, so your dog’s tum can process it easily.</p>
      <h3 id="can-dogs-eat-cooked-courgette">Can dogs eat cooked courgette?</h3>
      <p>Yes, courgette is safe for dogs either cooked or raw. If you want to cook courgette for your pooch, it’s best to only lightly cook it to retain its clever nutritional benefits. Try lightly steaming it, oven-baking it, or frying it lightly with a smidge of low-fat oil. Don’t add any salt or other seasonings.</p>
      <h3 id="can-dogs-eat-courgette-skin">Can dogs eat courgette skin?</h3>
      <p>Yes, in fact it’s preferable. The courgette’s skin holds a lot of its nifty health benefits, such as dietary fibre, great for helping your dog digest and poop; as well as lots of antioxidants, vitamins and minerals.</p>
      <h3 id="can-dogs-eat-courgette-leaves">Can dogs eat courgette leaves?</h3>
      <p>They can eat the leaves of the courgette. Remove and chop the leaves, serving them up alongside the raw flesh and your dog will get all the tasty benefits of the entire vegetable.</p>
      <h3 id="can-dogs-eat-courgette-fritters">Can dogs eat courgette fritters?</h3>
      <p>Any kind of deep fried courgette should be avoided, as these snacks tend to have a high fat and salt content, while the nutritional value of the courgette becomes diminished. Stick to fresh courgette either raw or cooked.</p>
      <h3 id="conclusion">Conclusion</h3>
      <p>In conclusion, courgette is a delicious, nutrient-rich vegetable and a fantastic choice of healthy food for dogs. You can serve it to your dog raw or cooked - just be sure it’s plain, without sauces or seasonings, and chopped into munchable pieces and included as part of a balanced diet so your dog gets the maximum benefits.</p>
      <h3 id="what-other-foods-can-dogs-safely-eat">What other foods can dogs safely eat?</h3>
      <p>If you like the sound of courgette for dogs but would like to know of alternatives, try the following healthy dog-friendly foods:</p>
      <p>Carrot is a crunchy treat for a pooch, packed with dietary fibre and vitamins and useful for dental care.</p>
      <p>Apple is full of healthy fibre for a dog while being a tasty, low fat treat.</p>
      <p>Broccoli has lots of vitamin C and antioxidants as well as other vitamins and minerals.</p>
      <p>For nutritious, irresistible food that dogs love, try our range of grain-free dog foods and healthy natural dog treats; specially formulated to be gentle on a dog’s body and keep them happy, energised and healthy.</p>
`,
  headings: [
    { id: 'is-courgette-good-for-dogs', text: 'Is courgette good for dogs?', level: 2 },
    { id: 'what-are-the-health-benefits', text: 'What are the health benefits?', level: 3 },
    { id: 'can-puppies-eat-courgette', text: 'Can puppies eat courgette?', level: 2 },
    { id: 'when-is-courgette-unsafe-for-dogs', text: 'When is courgette unsafe for dogs?', level: 2 },
    { id: 'can-dogs-be-allergic-to-courgette', text: 'Can dogs be allergic to courgette?', level: 3 },
    { id: 'can-courgette-make-dogs’-sick', text: 'Can courgette make dogs’ sick?', level: 3 },
    { id: 'how-to-safely-give-courgette-to-your-dog', text: 'How to safely give courgette to your dog?', level: 2 },
    { id: 'how-much-is-safe-to-give-your-dog', text: 'How much is safe to give your dog?', level: 3 },
    { id: 'what-kind-of-courgette-can-dogs-eat', text: 'What kind of courgette can dogs eat?', level: 2 },
    { id: 'can-dogs-eat-raw-courgette', text: 'Can dogs eat raw courgette?', level: 3 },
    { id: 'can-dogs-eat-cooked-courgette', text: 'Can dogs eat cooked courgette?', level: 3 },
    { id: 'can-dogs-eat-courgette-skin', text: 'Can dogs eat courgette skin?', level: 3 },
    { id: 'can-dogs-eat-courgette-leaves', text: 'Can dogs eat courgette leaves?', level: 3 },
    { id: 'can-dogs-eat-courgette-fritters', text: 'Can dogs eat courgette fritters?', level: 3 },
    { id: 'conclusion', text: 'Conclusion', level: 3 },
    { id: 'what-other-foods-can-dogs-safely-eat', text: 'What other foods can dogs safely eat?', level: 3 },
  ]

},

'can-dogs-eat-black-pudding': {
  title: 'Can Dogs eat Black Pudding?',
  category: 'Pets',
  snippet: "No - black pudding isn’t a recommended food for dogs. With the potential for garlic, onion, lots of seasonings and a high level of fat, black pudding is simply too risky even as a treat",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/BLOG_CAN_DOGS_EAT_BLACK_PUDDING_500x_crop_center.jpg?v=1713537955",
    alt: "Can Dogs eat Black Pudding?",
    caption: "Are dogs allowed black pudding as a treat?"
  },
  content: `
<p>The truth is, black pudding is an indulgence for us humans, so it could wreak havoc with a dog’s sensitive digestive system and possibly make them ill. Read on for the full lowdown on why black pudding isn’t good for dogs</p>
      <h2 id="are-dogs-allowed-black-pudding-as-a-treat">Are dogs allowed black pudding as a treat?</h2>
      <p>No - it isn’t really considered a safe treat for dogs as it has high levels of fat and sodium, not to mention any extra ingredients that are often included in the process of making. If a pooch eats a small piece when you’re not looking, it could have no effect on them - but just make sure they don’t eat it again.</p>
      <h2 id="why-is-black-pudding-bad-for-dogs">Why is black pudding bad for dogs?</h2>
      <p>Black pudding is considered a treat for humans, an indulgence we usually reserve for the full ‘fry up’ breakfast plate. Dogs have sensitive tummies in comparison, so aren’t able to digest such a rich food.</p>
      <ul>
        <li>Its high fat content is bad for a dog’s internal organs, leading to weight gain, sickness or triggering health conditions such as pancreatitis or diabetes.</li>
        <li>High salt. Ingesting too much salt can be harmful to dogs, causing dehydration, sickness and diarrhoea or worse.</li>
        <li>Risky extra ingredients. Black pudding might contain garlic or onions, which is likely to trigger a reaction in your dog’s sensitive tum.</li>
      </ul>
      <h2 id="what-to-do-if-your-dog-eats-black-pudding">What to do if your dog eats black pudding?</h2>
      <p>If your dog snaffles a small piece of black pudding from your plate, it should hopefully not cause them much harm. They may suffer from a tummy upset, potentially diarrhoea or toilet trouble later. Keep an eye on them for any more severe reactions - if they seem very sick, or out of sorts, get in touch with a vet.</p>
      <h3 id="how-much-black-pudding-is-safe-for-dogs">How much black pudding is safe for dogs?</h3>
      <p>Black pudding isn’t safe for dogs to eat. Don’t let them have any black pudding, even for a treat, as it offers no nutritional benefit to your dog and could make them very ill. If they’ve sneaked a piece though, they’ll probably be okay - just keep an eye on them.</p>
      <h3 id="when-to-visit-the-vet">When to visit the vet</h3>
      <p>As said above, if your pooch somehow gets their snout into black pudding and exhibits signs of sickness or an unusual change in behaviour, call your vet right away. If they’ve eaten a large amount of black pudding, it could be worth getting to your vet for advice, even if they haven’t yet shown signs of sickness.</p>
      <h2 id="how-to-stop-your-dog-eating-black-pudding">How to stop your dog eating black pudding?</h2>
      <p>To stop your dog eating black pudding, don’t ever let them try it. If they’ve never tried it, they won’t associate the sight and smell of it with anything tasty. If you’re eating a meal with black pudding, keep it well out of sight and reach of your pooch, and store it safely when it isn’t being cooked or served.</p>
      <h2 id="other-types-of-black-pudding">Other types of black pudding</h2>
      <p>Here are a few examples of the different kinds of black pudding your dog might be interested in munching:</p>
      <h3 id="can-dogs-eat-black-pudding-raw">Can dogs eat black pudding raw?</h3>
      <p>Nope - raw black pudding isn’t healthier than cooked black pudding. In fact, it’s even more of a risk. Black pudding’s made of animal products which, when raw, are at a higher risk of carrying bacteria. Don’t feed your dog black pudding either cooked or raw.</p>
      <h3 id="can-dogs-eat-cooked-black-pudding">Can dogs eat cooked black pudding?</h3>
      <p>No - black pudding isn’t healthy for dogs due to its high level of salt, fat, and risky added ingredients such as onion. Keep cooked black pudding to your human plates, and keep out of reach of curious paws.</p>
      <h3 id="can-dogs-eat-white-pudding">Can dogs eat white pudding?</h3>
      <p>White pudding is made with grains, so isn’t deemed totally safe for dogs who have sensitive stomachs, as it’ll be hard for them to digest. Although it doesn’t contain blood, white pudding is similar to black pudding in that it’s high fat and high sodium. It’s best to avoid and stick to healthy dog treats.</p>
      <h2 id="what-other-foods-are-toxic-to-dogs">What other foods are toxic to dogs?</h2>
      <p>If you didn’t know about black pudding and are wondering what else might be toxic to dogs, the following foods should always be kept away from the dog’s bowl:</p>
      <ul>
        <li>Avocado. Though a superfood for humans, avocado contains a compound called persin which is toxic for dogs.</li>
        <li>Chocolate. Probably the most well-known no-no for dogs, chocolate is extremely toxic due to its theobromine content and should be avoided at all costs.</li>
        <li>Grapes and raisins. Avoid grapes and raisins, their sundried cousin. They contain tartaric acid which can be toxic to some dogs and can cause kidney issues, though some may eat them without issue.</li>
        <li>Tomatoes. Tomatoes contain a compound toxic to dogs called solanine, though this is present in much lower amounts in ripe tomatoes.</li>
        <li>Onions and garlic. Allium is the toxic substance found in onions and garlic - it impacts red blood cells in dogs which can lead to anaemia or even cause a dog to collapse.</li>
        <li>Xylitol/artificial sweetener. The artificial sweeteners found in a lot of human foods are poisonous to dogs - specifically Xylitol. Eating it can cause a sharp drop in blood sugar which can result in liver dysfunction in dogs.</li>
      </ul>
      <p>Try our healthy treats for dogs that they won’t be able to resist, packed full of nutritious ingredients intended to support their physical and mental health.</p>
`,
  headings: [
    { id: 'are-dogs-allowed-black-pudding-as-a-treat', text: 'Are dogs allowed black pudding as a treat?', level: 2 },
    { id: 'why-is-black-pudding-bad-for-dogs', text: 'Why is black pudding bad for dogs?', level: 2 },
    { id: 'what-to-do-if-your-dog-eats-black-pudding', text: 'What to do if your dog eats black pudding?', level: 2 },
    { id: 'how-much-black-pudding-is-safe-for-dogs', text: 'How much black pudding is safe for dogs?', level: 3 },
    { id: 'when-to-visit-the-vet', text: 'When to visit the vet', level: 3 },
    { id: 'how-to-stop-your-dog-eating-black-pudding', text: 'How to stop your dog eating black pudding?', level: 2 },
    { id: 'other-types-of-black-pudding', text: 'Other types of black pudding', level: 2 },
    { id: 'can-dogs-eat-black-pudding-raw', text: 'Can dogs eat black pudding raw?', level: 3 },
    { id: 'can-dogs-eat-cooked-black-pudding', text: 'Can dogs eat cooked black pudding?', level: 3 },
    { id: 'can-dogs-eat-white-pudding', text: 'Can dogs eat white pudding?', level: 3 },
    { id: 'what-other-foods-are-toxic-to-dogs', text: 'What other foods are toxic to dogs?', level: 2 },
  ]

},

'can-dogs-eat-asparagus': {
  title: 'Can dogs eat Asparagus?',
  category: 'Pets',
  snippet: "Yes - dogs can eat asparagus. Then again, there are a few safety points to bear in mind when it comes to these nutritious green spears. Let’s go into more detail over the best ways to feed your dog asparagus.",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/BLOG_CAN_DOGS_EAT_ASPARAGUS_500x_crop_center.jpg?v=1713539394",
    alt: "Can dogs eat Asparagus?",
    caption: "Is asparagus good for dogs?"
  },
  content: `
<h2 id="is-asparagus-good-for-dogs">Is asparagus good for dogs?</h2>
      <p>Asparagus has a lot of nutritious value for dogs, just as it does for humans. The risk of feeding asparagus to your pooch isn’t in the nutritional content but its toughness to chew and digest - read on for more about this.</p>
      <h3 id="what-are-the-health-benefits">What are the health benefits?</h3>
      <p>Here are some of the ways eating asparagus could benefit your dog’s health:</p>
      <p>Vitamins A, C and K to improve a dog’s vision, skin and coat condition, boost the immune system and contribute to blood health.</p>
      <p>Complex B vitamins, essential for nerve function, energy metabolism, growth and development.</p>
      <p>Source of dietary fibre, vital for a healthy digestive process, firm stools and regular bowel movements.</p>
      <p>Low calorie so can be included as part of a healthy diet or a weight management plan for dogs.</p>
      <p>Full of antioxidants to fight off infections and free radicals in the body.</p>
      <h2 id="can-puppies-eat-asparagus">Can puppies eat asparagus?</h2>
      <p>Asparagus isn’t a good choice for tiny pups due to its ‘spear-like’ nature and toughness - it’s too much of a choking hazard risk for a pup. If you do want to give your puppy asparagus, you’d have to cook it down to make it soft and chop into chewable pieces, which is likely to greatly reduce its nutritional value (so a bit pointless in the end).</p>
      <h2 id="when-is-asparagus-unsafe-for-dogs">When is asparagus unsafe for dogs?</h2>
      <p>Asparagus can be risky to give to your pooch for a few reasons…</p>
      <ul>
        <li>They’re spears - quite literally, and this stick-like form makes them somewhat of a choking hazard. They’re safest when cooked and chopped into small pieces, and the tough bottom of the stalk is cut off and discarded.</li>
        <li>When served raw. Unlike other raw vegetables that are crunchy but fine for a dog to munch on, asparagus is very tough and difficult for a dog to break down unless it’s cooked.</li>
        <li>Too much asparagus is bad for a dog, it should only be fed in moderation to avoid digestive problems.</li>
        <li>When cooked in oils or seasoning, asparagus can irritate a dog’s stomach or even prove toxic (if it’s cooked in garlic or onion, for instance).</li>
        <li>If they’re prone to calcium oxalate crystals or stones. Asparagus is moderately high in oxalates, so should be avoided by pooches who have a history of calcium oxalate crystals or stones.</li>
      </ul>
      <p>Can dogs be allergic to asparagus?</p>
      <p>Yes, though it’s rare, dogs can have an allergic reaction to asparagus. If you’ve never fed your dog asparagus before and they display any of the following symptoms, don’t feed it to your pooch again:</p>
      <ul>
        <li>Reddening, itching, rash on the skin</li>
        <li>Vomiting and/or diarrhoea</li>
        <li>Bloating, stomach pain</li>
        <li>Difficulty breathing, wheezing</li>
        <li>Lethargy, change in behaviour</li>
      </ul>
      <h3 id="can-asparagus-make-dogs-sick">Can asparagus make dogs sick?</h3>
      <p>Asparagus can make dogs unwell if they have an intolerance or allergy to it (as above). Also if you feed a dog too much asparagus, that can cause sickness or digestive issues as it’s a vegetable that should be fed in moderation.</p>
      <p>Raw asparagus is more likely to irritate your dog’s digestive system than cooked. Also, never give whole asparagus to your dog, or serve them the tough ends. These can cause choking hazards (cooked asparagus is the safest!).</p>
      <h2 id="how-to-safely-give-asparagus-to-your-dog">How to safely give asparagus to your dog?</h2>
      <p>Asparagus is trickier to feed to dogs than other nutritious veggies, but if you’d like to get these tasty spears into their diet, just be sure to serve it up safely. This means cutting off the tough bottoms of the asparagus spears, cooking it either by steaming or boiling, and serving it up to your pooch chopped into munchable pieces. Avoid adding any salt or seasonings, oils or sauces. Cooked and plain is best.</p>
      <h3 id="how-much-is-safe-to-give-your-dog">How much is safe to give your dog?</h3>
      <p>The correct portion size of asparagus depends on your dog’s breed, size and age, but just bear in mind that it should be a side to your dog’s regular meals. Don’t replace your dog’s daily food with asparagus - be sure they’re getting a wide range of protein, veggies and fruit as part of a balanced doggo diet. Ask your vet if you’re confused over specifics around portion sizes.</p>
      <h2 id="what-kind-of-asparagus-can-dogs-eat">What kind of asparagus can dogs eat?</h2>
      <p>Now we’ve covered the basics, here’s an overview of the kind of asparagus dogs can safely munch on.</p>
      <h3 id="can-dogs-eat-raw-asparagus">Can dogs eat raw asparagus?</h3>
      <p>Dogs can eat raw asparagus but it’s not recommended - when served raw, this delicious veggie is slightly too tough to chew and digest. It’s a much better idea to cook the asparagus.</p>
      <h3 id="can-dogs-eat-cooked-asparagus">Can dogs eat cooked asparagus?</h3>
      <p>Yes - it’s preferable that a dog eats asparagus cooked in some way so that it’s easier for them to chew on and digest. The safest way is to remove the tough ends, boil or steam the spears, then chop them up. The only issue is that cooking reduces the nutritional value of asparagus - so there are veggies out there that are safer to eat and could offer a dog more health benefits.</p>
      <h3 id="can-dogs-eat-asparagus-stalks-stems">Can dogs eat asparagus stalks/stems?</h3>
      <p>The stalks are fine to eat so long as the woody ends (not the heads) are removed in advance of cooking. The cooked stems should then be chopped into pieces to remove choking hazards - this should make them tasty and easy for a dog to feast on.</p>
      <h3 id="can-dogs-eat-asparagus-ends-tips">Can dogs eat asparagus ends/tips?</h3>
      <p>If you’re referring to the base of the spears, no, dogs cannot eat this and nor can humans. To get rid of the tough ends of asparagus, you can break them right off with your fingers (they should snap where the stalk gets softer) or cut them with a knife before cooking. The heads (the floret-like, arrow part of the asparagus) is fine for a dog to eat.</p>
      <h3 id="can-dogs-eat-canned-asparagus">Can dogs eat canned asparagus?</h3>
      <p>Don’t feed your dog canned asparagus, as it likely comes in salted water, seasonings or oils that will irritate a dog’s tummy and reduce the health benefits of them eating it. Fresh is always best.</p>
      <h3 id="conclusion">Conclusion</h3>
      <p>Asparagus is healthy for a dog, with lots of vitamins and antioxidants - but the effort of preparing it and the nutrients that are reduced through cooking might negate these benefits. If you do want your dog to eat asparagus…</p>
      <ul>
        <li>Snap or cut off the tough ends of the spears.</li>
        <li>Cook the spears, either through boiling or steaming, and without adding salt or seasoning.</li>
        <li>Serve to your pooch plain, and chopped into munchable pieces.</li>
      </ul>
      <h3 id="what-other-foods-can-dogs-safely-eat">What other foods can dogs safely eat?</h3>
      <p>If you like the sound of asparagus but seek alternatives, why not try the following?</p>
      <p>Courgette has tons of dietary fibre and vitamins, and is safe for a pooch to munch, either raw or cooked.</p>
      <p>Broccoli is a tasty source of vitamin C and other nutrients, to be served raw or cooked.</p>
      <p>Pumpkin is a soft, delicious fibre source for a pooch which is also nutrient dense. Learn more about feeding pumpkin to dogs.</p>
      <p>Try our full range of delicious healthy treats for dogs, powerful dog supplements or grain-free dog food recipes - specially formulated with whole, natural ingredients to nourish a dog’s body and mind.</p>
`,
  headings: [
    { id: 'is-asparagus-good-for-dogs', text: 'Is asparagus good for dogs?', level: 2 },
    { id: 'what-are-the-health-benefits', text: 'What are the health benefits?', level: 3 },
    { id: 'can-puppies-eat-asparagus', text: 'Can puppies eat asparagus?', level: 2 },
    { id: 'when-is-asparagus-unsafe-for-dogs', text: 'When is asparagus unsafe for dogs?', level: 2 },
    { id: 'can-asparagus-make-dogs-sick', text: 'Can asparagus make dogs sick?', level: 3 },
    { id: 'how-to-safely-give-asparagus-to-your-dog', text: 'How to safely give asparagus to your dog?', level: 2 },
    { id: 'how-much-is-safe-to-give-your-dog', text: 'How much is safe to give your dog?', level: 3 },
    { id: 'what-kind-of-asparagus-can-dogs-eat', text: 'What kind of asparagus can dogs eat?', level: 2 },
    { id: 'can-dogs-eat-raw-asparagus', text: 'Can dogs eat raw asparagus?', level: 3 },
    { id: 'can-dogs-eat-cooked-asparagus', text: 'Can dogs eat cooked asparagus?', level: 3 },
    { id: 'can-dogs-eat-asparagus-stalks-stems', text: 'Can dogs eat asparagus stalks/stems?', level: 3 },
    { id: 'can-dogs-eat-asparagus-ends-tips', text: 'Can dogs eat asparagus ends/tips?', level: 3 },
    { id: 'can-dogs-eat-canned-asparagus', text: 'Can dogs eat canned asparagus?', level: 3 },
    { id: 'conclusion', text: 'Conclusion', level: 3 },
    { id: 'what-other-foods-can-dogs-safely-eat', text: 'What other foods can dogs safely eat?', level: 3 },
  ]

},

'can-dogs-eat-ginger-biscuits': {
  title: 'Can dogs eat Ginger Biscuits?',
  category: 'Pets',
  snippet: "No - sadly your pooch can’t snack on these sweet human treats. Ginger biscuits aren’t necessarily toxic to dogs, but are crammed with sugar and may cause your dog to have a stomach upset.",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/BLOG_CAN_DOGS_EAT_GINGER_BISCUITS_500x_crop_center.jpg?v=1716914982",
    alt: "Can dogs eat Ginger Biscuits?",
    caption: "Why are ginger nut biscuits bad for dogs?"
  },
  content: `
<p>Read on for more information about whether your dog can ever eat ginger biscuits, and what other kinds of biscuits might have an impact on your dog.</p>
      <h2 id="why-are-ginger-nut-biscuits-bad-for-dogs">Why are ginger nut biscuits bad for dogs?</h2>
      <p>Ginger biscuits, or ‘gingernuts’ don’t necessarily contain any ingredients that are toxic to dogs - so long as they don’t have any artificial sweeteners or come dipped in chocolate (definitely avoid these).</p>
      <p>The issue with ginger biscuits is they have a very high sugar content and are high in fat. This has no nutritional benefit to a pooch and could exacerbate digestive issues. Over time, too many sneaked biscuits can cause weight gain and health problems in your dog.</p>
      <h2 id="what-about-ginger-in-general">What about ginger in general?</h2>
      <p>Yes, peeled ginger is safe for a dog. However, there’s not really any need to feed a dog root ginger unless it’s as a supplement or natural remedy for health issues (ginger can ease inflammation and have anti-nausea properties). A small bit of chopped, peeled ginger might help your pooch if they’re unwell, but it’s not really something they’d eat for tastiness or nutrition.</p>
      <h2 id="what-to-do-if-your-dog-eats-ginger-biscuits">What to do if your dog eats ginger biscuits</h2>
      <p>If your pooch has sneaked a ginger biscuit or two, it shouldn’t do them any harm. Keep an eye on them for any unwanted digestive issues, and be sure the ginger biscuits are kept out of reach in future. Don’t feed ginger biscuits to your dog intentionally, they’re not a healthy food and have no nutritional value.</p>
      <h3 id="how-many-ginger-biscuits-are-safe-for-dogs">How many ginger biscuits are safe for dogs?</h3>
      <p>One or two ginger biscuits as a one-off aren’t dangerous for a dog to eat. If you’ve found your dog has emptied a packet of biscuits, however, that might be more of a cause for concern! Keep a close eye on your pooch to ensure they don’t suffer sickness, stomach pain or behavioural changes.</p>
      <h3 id="when-to-visit-the-vet">When to visit the vet</h3>
      <p>If you’re worried about the amount of gingernuts your dog has eaten, they’re suffering sickness or diarrhoea, or you notice a significant change in their behaviour after eating ginger biscuits, get in touch with your vet so they can check them over.</p>
      <h2 id="how-to-stop-your-dog-eating-ginger-biscuits">How to stop your dog eating ginger biscuits</h2>
      <p>There’s a simple solution to stopping your dog eating ginger biscuits - never feed them to your dog! If they get used to seeing a ginger biscuit as a treat, they’ll beg for them each time they see them and start to expect it. Keep biscuits and other sweet human treats well out of reach of dogs, and don’t leave an open packet lying on the sofa or a low table, for instance.</p>
      <h2 id="other-types-of-biscuits-dogs-can-eat">Other types of biscuits dogs can eat</h2>
      <p>We Brits love a biscuit, and there are all kinds of biscuit varieties your pooch might end up sneaking as a snack. It’s mostly a ‘no’ across the board when it comes to biscuits for dogs, however some are more dangerous than others.</p>
      <h3 id="can-dogs-eat-digestive-biscuits">Can dogs eat digestive biscuits?</h3>
      <p>Ideally, no - a digestive isn’t necessarily toxic to a dog but it has a lot of sugar and butter, and is a very calorific food with no nutritional value. What’s more, if your dog has a grain or wheat intolerance, it could trigger a reaction in their sensitive digestive system. If they eat a digestive biscuit it’s no big deal, but don’t give them as an intentional snack. If you’re pondering ‘Can dogs eat rich tea biscuits?’ or ‘Can dogs eat malted milk biscuits?’, the answer is the same.</p>
      <h3 id="can-dogs-eat-bourbon-biscuits">Can dogs eat bourbon biscuits?</h3>
      <p>No - bourbon biscuits are riskier than other kinds of biscuits as they contain chocolate, which is renowned for being toxic to dogs. Bourbon biscuits are a dangerous food for dogs and could make them very ill, so keep them well out of reach of peckish paws.</p>
      <h3 id="can-dogs-eat-shortbread-biscuits">Can dogs eat shortbread biscuits?</h3>
      <p>No, shortbread biscuits are very sugary and full of butter, so are too calorific for dogs to eat. If they do manage to eat one, it’s not necessarily dangerous, but be sure your pooch doesn’t get into the shortbread again by keeping them securely in the human biscuit tin.</p>
      <h3 id="can-dogs-eat-coconut-biscuits">Can dogs eat coconut biscuits?</h3>
      <p>Coconut isn’t a toxic ingredient for dogs, however coconut biscuits are best avoided. They’re usually full of sugar and butter, so choosing a tasty biscuit made specifically for dogs is a better option. For tasty biscuits that will boost your dog’s digestion rather than irritate it, you could try some probiotic dog treats.</p>
      <h3 id="what-other-foods-are-toxic-to-dogs">What other foods are toxic to dogs?</h3>
      <p>If you didn’t consider that bourbon biscuits aren’t safe for dogs, remember that these foods should also be kept away from the dog’s bowl:</p>
      <ul>
        <li>Avocado. Though a superfood for humans, avocado contains a compound called persin which is toxic for dogs.</li>
        <li>Chocolate. Probably the most well-known no-no for dogs, chocolate is very toxic due to its theobromine content and should be avoided at all costs.</li>
        <li>Grapes and raisins. Avoid grapes and raisins, their sundried cousin. They contain Tartaric acid that’s toxic to some dogs, and can cause kidney issues, though some may eat them without issue.</li>
        <li>Tomatoes. Tomatoes contain a compound toxic to dogs called solanine, though this is present in much lower amounts in ripe tomatoes.</li>
        <li>Onions and garlic. Part of the allium family, onions and garlic contain n-propyl disulfide - a toxic oxidant that impacts red blood cells in dogs, which can lead to anaemia or even cause a dog to collapse.</li>
        <li>Xylitol/artificial sweetener. The artificial sweeteners found in a lot of human foods are poisonous to dogs - specifically Xylitol. Eating it can cause a sharp drop in blood sugar which can result in liver dysfunction in dogs.</li>
      </ul>
      <p>Take a look at our range of nutritious treats for dogs or our tasty dental sticks to give your dog a tasty treat, as well as a boost to their overall health and wellbeing.</p>
`,
  headings: [
    { id: 'why-are-ginger-nut-biscuits-bad-for-dogs', text: 'Why are ginger nut biscuits bad for dogs?', level: 2 },
    { id: 'what-about-ginger-in-general', text: 'What about ginger in general?', level: 2 },
    { id: 'what-to-do-if-your-dog-eats-ginger-biscuits', text: 'What to do if your dog eats ginger biscuits', level: 2 },
    { id: 'how-many-ginger-biscuits-are-safe-for-dogs', text: 'How many ginger biscuits are safe for dogs?', level: 3 },
    { id: 'when-to-visit-the-vet', text: 'When to visit the vet', level: 3 },
    { id: 'how-to-stop-your-dog-eating-ginger-biscuits', text: 'How to stop your dog eating ginger biscuits', level: 2 },
    { id: 'other-types-of-biscuits-dogs-can-eat', text: 'Other types of biscuits dogs can eat', level: 2 },
    { id: 'can-dogs-eat-digestive-biscuits', text: 'Can dogs eat digestive biscuits?', level: 3 },
    { id: 'can-dogs-eat-bourbon-biscuits', text: 'Can dogs eat bourbon biscuits?', level: 3 },
    { id: 'can-dogs-eat-shortbread-biscuits', text: 'Can dogs eat shortbread biscuits?', level: 3 },
    { id: 'can-dogs-eat-coconut-biscuits', text: 'Can dogs eat coconut biscuits?', level: 3 },
    { id: 'what-other-foods-are-toxic-to-dogs', text: 'What other foods are toxic to dogs?', level: 3 },
  ]

},
'can-dogs-eat-oats': {
  title: 'Can dogs eat Oats?',
  category: 'Pets',
  snippet: "The answer is yes, dogs can eat oats in moderation, and they must be served in the most digestible way.",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/BLOG_CAN_DOGS_EAT_OATS_500x_crop_center.jpg?v=1716916902",
    alt: "Can dogs eat Oats?",
    caption: "The difference between oats and oatmeal"
  },
  content: `
<p>Before we go into the details of oats and oatmeal, we’ll remind you that at Pooch & Mutt, we’re advocates for a grain-free diet for dogs. Lots of dogs have trouble digesting grain, or even have an allergy or intolerance, therefore, we believe grain-free dog food is a safer option.</p>
      <p>However, there could be a scenario in which you’d want to feed your dog oats or oatmeal, so in this article, we’ve unpacked the answers to all your questions about when, and how, oats are safe for dogs to eat.</p>
      <h2 id="the-difference-between-oats-and-oatmeal">The difference between oats and oatmeal</h2>
      <p>First, a bit about oats and oatmeal, and when the terms are used.</p>
      <p>Oats are basically the raw form of oatmeal. They’re a type of cereal grain that comes from the Avena sativa plant. Cut from the plant and dehusked, they end up as little kernels which can then be rolled or steel cut for consumption.</p>
      <p>Oatmeal is the word for the warming bowl of food made from oats - steel cut or rolled oats with hot water or milk added to it. In the UK it’s more commonly known as porridge.</p>
      <p>We’ll refer to both oats and oatmeal (porridge) when relevant throughout the article.</p>
      <h2 id="are-oats-good-for-dogs">Are oats good for dogs?</h2>
      <p>Oats do have nutritional benefits to dogs, however it’s important to work out whether your dog can tolerate grain in their diet, by introducing it slowly. It should also be served correctly to aid digestion.</p>
      <h3 id="what-are-the-health-benefits">What are the health benefits?</h3>
      <p>Let’s go into some of the ways oats can be nutritious for a dog:</p>
      <p>High in fibre to promote a healthy digestive process, firm poops and bowel regularity.</p>
      <p>Slow release energy keeps a dog fuller and more energised for longer.</p>
      <p>Vitamin E encourages skin and coat health and also boosts a dog’s immunity.</p>
      <p>Complex B vitamins for all kinds of benefits including supporting metabolism, nerve function and blood health.</p>
      <p>Minerals including iron, magnesium and zinc, for nerve, muscle and skin health, as well as healthy enzyme activity and boosted immunity.</p>
      <p>Low in fat so great as part of a diet in support of a dog’s weight management.</p>
      <h2 id="can-puppies-eat-oats">Can puppies eat oats?</h2>
      <p>Puppies can eat oats when they’re prepared correctly - cooked to soften and served with water, and with no added sugar or flavourings. However, young puppies should be fed cautiously as their digestive system at this time is extremely sensitive. As a grain diet can be triggering for dogs, it might be worth sticking with grain-free puppy food which is specially formulated to support their young bodies and rapid development at this stage.</p>
      <h2 id="when-are-oats-unsafe-for-dogs">When are oats unsafe for dogs?</h2>
      <ul>
        <li>Oats can be unsafe for dogs if they suffer a grain allergy or intolerance. If you think your dog might react badly to grain, it’s best to avoid oats.</li>
      </ul>
      <ul>
        <li>Readymade oatmeal (porridge) which comes with sweeteners and flavourings already added should avoid the dog bowl completely, as this could irritate a dog’s delicate gut or even prove toxic if it contains artificial sweeteners.</li>
      </ul>
      <ul>
        <li>If you feed dogs oats that are raw, or in too high a portion, this can be unsafe for dogs as it’s a lot for their digestive systems to process (not to mention it’ll taste bad).</li>
      </ul>
      <h3 id="can-dogs-be-allergic-to-oats">Can dogs be allergic to oats?</h3>
      <p>Yes, dogs can be allergic to oats. Dogs who are sensitive to grain or have a grain intolerance may also react badly to eating oats as part of a meal. Introduce oats slowly into a dog’s diet if you choose to do so, and be aware of the following symptoms as it could indicate an allergic reaction:</p>
      <ul>
        <li>Reddening, itching, rashing of the skin</li>
        <li>Pain in stomach, bloating</li>
        <li>Vomiting and/or diarrhoea</li>
        <li>Lethargy, change in behaviour</li>
        <li>Difficulty breathing, wheezing</li>
      </ul>
      <h3 id="can-oats-make-dogs-sick">Can oats make dogs sick?</h3>
      <p>Oats can make dogs unwell, specifically if they have a grain allergy. You also shouldn’t feed dogs raw oats, or a big amount of oats, as they find this very hard to digest and could end up with sickness or gastrointestinal issues.</p>
      <p>Don’t feed dogs any form of oatmeal or porridge with added sweeteners or flavourings, as these can be too sugary for a dog and irritate their delicate digestive system.</p>
      <h2 id="how-to-safely-give-oats-to-your-dog">How to safely give oats to your dog?</h2>
      <p>If you’re keen to feed oats to your dog, make sure they’re steel cut or rolled oats, softened in hot water, not milk, and serve a small amount to eat without any added sugar.</p>
      <h3 id="can-dogs-eat-oats-everyday">Can dogs eat oats everyday?</h3>
      <p>No, it’s not a good idea to feed oats to your dog regularly. Seeing them as an occasional treat can work, if you know your dog’s stomach can tolerate oats.</p>
      <h2 id="what-kinds-of-oatmeal-can-dogs-eat">What kinds of oatmeal can dogs eat?</h2>
      <p>Let’s go into the different types of oats and oatmeal/porridge, so you know exactly which is safest for your dog.</p>
      <h3 id="can-dogs-eat-porridge-oats">Can dogs eat porridge oats?</h3>
      <p>Sometimes oatmeal is called porridge, specifically in the UK. Dogs can eat porridge as a treat, so long as it’s softened with water and doesn’t include any added sugar or flavourings.</p>
      <h3 id="can-dogs-eat-raw-oats">Can dogs eat raw oats?</h3>
      <p>Raw oats are tough for dogs to chew and digest, not to mention they’re dry and not the tastiest for a doggy snack. If you want to give oats to your dog, give a small amount in a porridge/oatmeal form, with hot water to soften them. Remember if your pooch has a grain allergy or intolerance, they should definitely avoid oats, even in porridge form, as they’re a cereal grain.</p>
      <h3 id="can-dogs-eat-rolled-oats">Can dogs eat rolled oats?</h3>
      <p>Yes, rolled oats are the preferred type of oats over readymade oatmeal which often comes with lots of added flavourings. The rolled oats should be cooked by warming them up with water, as they’re soft enough for the body to properly digest.</p>
      <h3 id="can-dogs-eat-cooked-oats">Can dogs eat cooked oats?</h3>
      <p>Yes, dogs can eat cooked oats relatively safely. Just be certain your dog doesn’t have a grain intolerance or allergy, as this can trigger a dog’s delicate digestive system and cause them to become unwell. Also, avoid the readymade oatmeal/porridge sachets; they often come packed with preservatives and sweeteners.</p>
      <h3 id="can-dogs-eat-overnight-oats">Can dogs eat overnight oats?</h3>
      <p>No. Overnight oats tend to be stewed in milk or yoghurt with added seeds, fruit and flavourings. Dogs don’t need this in their diet, especially if it contains ingredients that are toxic to dogs such as raisins or grapes. Oats aren’t a necessary part of a dog’s diet but if you want to feed them, just simply cook rolled oats in water and serve without added sugar.</p>
      <h3 id="can-dogs-eat-oats-with-milk">Can dogs eat oats with milk?</h3>
      <p>Avoid milk if you want to feed oats or porridge to your dog. As most dogs are lactose intolerant, it can cause a lot of disruption to their delicate digestive system. Mixing oats with hot water to soften them up is a better idea. Without any added sugar or flavourings, oats can be a source of fibre, iron and B vitamins.</p>
      <h3 id="can-dogs-eat-oats-with-water">Can dogs eat oats with water?</h3>
      <p>If you want to feed oats to your dog, it’s a better idea to feed your dog oats cooked with hot water instead of milk - milk can cause turbulence in a dog’s delicate tummy as most dogs are lactose intolerant.</p>
      <h3 id="conclusion">Conclusion</h3>
      <ul>
        <li>Though oats contain nutrients such as fibre, vitamins and minerals, they aren’t a necessary part of a dog’s diet - especially as a lot of dogs have a grain intolerance or allergy.</li>
        <li>If you want your dog to eat oats, cook rolled or steel-cut oats gently in hot water until soft, and serve without sugar.</li>
        <li>Introduce oats gradually into your dog’s diet to see how they react, and if they suffer any untoward digestive effects, don’t include oats on your pooch’s menu.</li>
      </ul>
      <h3 id="what-other-foods-can-dogs-safely-eat">What other foods can dogs safely eat?</h3>
      <p>If you want the filling goodness of oats but are looking for alternatives, try the following:</p>
      <ul>
        <li>Sweet potatoes offer lots of complex carbohydrates, fibre and vitamins while being slow release.</li>
        <li>Carrots have lots of fibre and powerful vitamins without any health risk to dogs.</li>
        <li>Butternut squash is a super healthy root veggie that can satisfy dogs while offering a host of health benefits.</li>
      </ul>
      <p>For nutritious, irresistible food that dogs love, try our range of grain-free dog foods and healthy natural dog treats; specially formulated to be gentle on a dog’s body and keep them happy, energised and healthy.</p>
`,
  headings: [
    { id: 'the-difference-between-oats-and-oatmeal', text: 'The difference between oats and oatmeal', level: 2 },
    { id: 'are-oats-good-for-dogs', text: 'Are oats good for dogs?', level: 2 },
    { id: 'what-are-the-health-benefits', text: 'What are the health benefits?', level: 3 },
    { id: 'can-puppies-eat-oats', text: 'Can puppies eat oats?', level: 2 },
    { id: 'when-are-oats-unsafe-for-dogs', text: 'When are oats unsafe for dogs?', level: 2 },
    { id: 'can-dogs-be-allergic-to-oats', text: 'Can dogs be allergic to oats?', level: 3 },
    { id: 'can-oats-make-dogs-sick', text: 'Can oats make dogs sick?', level: 3 },
    { id: 'how-to-safely-give-oats-to-your-dog', text: 'How to safely give oats to your dog?', level: 2 },
    { id: 'can-dogs-eat-oats-everyday', text: 'Can dogs eat oats everyday?', level: 3 },
    { id: 'what-kinds-of-oatmeal-can-dogs-eat', text: 'What kinds of oatmeal can dogs eat?', level: 2 },
    { id: 'can-dogs-eat-porridge-oats', text: 'Can dogs eat porridge oats?', level: 3 },
    { id: 'can-dogs-eat-raw-oats', text: 'Can dogs eat raw oats?', level: 3 },
    { id: 'can-dogs-eat-rolled-oats', text: 'Can dogs eat rolled oats?', level: 3 },
    { id: 'can-dogs-eat-cooked-oats', text: 'Can dogs eat cooked oats?', level: 3 },
    { id: 'can-dogs-eat-overnight-oats', text: 'Can dogs eat overnight oats?', level: 3 },
    { id: 'can-dogs-eat-oats-with-milk', text: 'Can dogs eat oats with milk?', level: 3 },
    { id: 'can-dogs-eat-oats-with-water', text: 'Can dogs eat oats with water?', level: 3 },
    { id: 'conclusion', text: 'Conclusion', level: 3 },
    { id: 'what-other-foods-can-dogs-safely-eat', text: 'What other foods can dogs safely eat?', level: 3 },
  ]

},
'can-dogs-eat-parsnips': {
  title: 'Can dogs eat Parsnips?',
  category: 'Pets',
  snippet: "Yes - dogs can eat parsnips. Parsnips are full of nutrients to benefit a dog, and when served in the right way can be a tasty snack for a peckish pooch.",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/BLOG_CAN_DOGS_EAT_PARSNIPS_500x_crop_center.jpg?v=1716917529",
    alt: "Can dogs eat Parsnips?",
    caption: "Are parsnips good for dogs?"
  },
  content: `
<p>If you’re serving up a roast dinner at home and wondering whether your dog can get a chopped slice of parsnip or two, read on for the lowdown on whether dogs can eat parsnips.</p>
      <h2 id="are-parsnips-good-for-dogs">Are parsnips good for dogs?</h2>
      <p>Sure they are - parsnips have a bunch of vitamins and nutrients to benefit dogs, just as they do humans. The key is to serve it in the correct way, avoiding roasting them in butter or oils so that your dog doesn’t suffer any tummy trouble.</p>
      <h3 id="what-are-the-health-benefits">What are the health benefits?</h3>
      <p>Parsnips are full of health benefits for dogs; let’s unpack just some of the nutrients packed into each bite of these root veggies…</p>
      <p>Good source of dietary fibre, which supports digestion, healthy bowel function and firms up poops.</p>
      <p>Vitamins C, E, K, essential for immunity and wound healing, healthy skin, bones and blood.</p>
      <p>Folate (vitamin B9) plays a vital role in cell division and DNA synthesis.</p>
      <p>Low calorie, so excellent as part of a nutritious diet to maintain healthy weight.</p>
      <p>Full of antioxidants which fight off free radicals and infections in the body.</p>
      <h2 id="can-puppies-eat-parsnips">Can puppies eat parsnips?</h2>
      <p>Yes - puppies can eat parsnips but it’s best if they’re cooked first, as the raw flesh of parsnips is a bit too tough for their developing teeth. Also be sure the parsnip is plain, without salt or added flavourings. Perhaps mash the parsnip, or at least cut into tiny pieces.</p>
      <h2 id="when-is-parsnip-unsafe-for-dogs">When is parsnip unsafe for dogs?</h2>
      <p>Parsnip is generally pretty safe snack for a pooch, but could be deemed unsafe in the following situations:</p>
      <ul>
        <li>Though not technically unsafe, uncooked parsnip is very firm, and can be much tougher to eat and digest than when gently cooked. If you feed a dog uncooked parsnip, maybe chop it into bite-sized pieces for easier chewing and swallowing.</li>
      </ul>
      <ul>
        <li>When smothered in seasonings, spices or oils, parsnips can be unsafe for dogs, as salt, butter etc. can irritate their stomach and make digestion difficult.</li>
      </ul>
      <h3 id="can-dogs-be-allergic-to-parsnips">Can dogs be allergic to parsnips?</h3>
      <p>Yes, dogs can be allergic to anything, so it’s important to introduce it gradually into your dog’s diet if they’ve not eaten it before. Be aware of the following signs of an allergic reaction. If you see any, stop feeding them parsnip and if symptoms persist, get them to a vet.</p>
      <ul>
        <li>Reddening, rashes or itchiness of the skin</li>
        <li>Vomiting and/or diarrhoea</li>
        <li>Difficulty breathing, wheezing</li>
        <li>Bloating, pain in stomach</li>
        <li>Lethargy, change in behaviour</li>
      </ul>
      <h3 id="can-parsnips-make-dogs-sick">Can parsnips make dogs sick?</h3>
      <p>Parsnips are generally a safe food for dogs, though they can make them sick in certain situations.</p>
      <ul>
        <li>Don’t feed your pooch only parsnip, or replace their regular food with just parsnip. In these cases, they could develop a stomach upset or digestive problems.</li>
      </ul>
      <ul>
        <li>Too much raw parsnip will be harder for your dog to digest than if it were cooked and plain.</li>
      </ul>
      <ul>
        <li>Parsnip covered in seasonings and spices or drenched in sauces, butter or oils will be more likely to upset your dog’s tummy and make them sick than plain, cooked parsnip.</li>
      </ul>
      <ul>
        <li>If your pooch has a parsnip allergy (see above) this might make them sick when they eat some.</li>
      </ul>
      <h2 id="how-to-safely-give-parsnips-to-your-dog">How to safely give parsnips to your dog?</h2>
      <p>The safest way to feed this delicious root veggie to your dog is to make sure the parsnip is fresh and washed. Gently cook the parsnip (by boiling or oven-roasting, for instance), then offer it up to your dog plain, chopped or mashed. Don’t add any salt, butter or other seasonings.</p>
      <p>If you want to feed parsnips to your dog raw, be sure they’re chopped into pieces with the touch end removed, and be aware that raw parsnips might be harder for them to digest.</p>
      <h3 id="how-much-is-safe-to-give-your-dog">How much is safe to give your dog?</h3>
      <p>The correct serving size for your pooch will depend on their breed, size and age, but be aware that parsnips should be a side, to be fed alongside their regular food. Never replace your dog’s regular food with only parsnip - it should be part of a varied, well-balanced diet made up of lots of veggies and proteins.</p>
      <h2 id="what-kinds-of-parsnips-can-dogs-eat">What kinds of parsnips can dogs eat?</h2>
      <p>Let’s go into the types of parsnips pooches can enjoy and get the maximum health benefits from…</p>
      <h3 id="can-dogs-eat-raw-parsnips">Can dogs eat raw parsnips?</h3>
      <p>Dogs can eat parsnip raw with relatively no issues, however it’s harder for them to digest raw food and as raw parsnip flesh is quite hard, it’ll be a more pleasant experience for them if the parsnips were gently cooked.</p>
      <h3 id="can-dogs-eat-boiled-parsnips">Can dogs eat boiled parsnips?</h3>
      <p>Yes - they’re a healthy veggie for dogs packed with vitamins and fibre. As parsnips are easier for a dog to eat when they’re gently cooked, boiling parsnips are a brilliant way to serve them. Once they’re slightly soft, you can either mash them or serve them chopped (without salt or seasonings).</p>
      <h3 id="can-dogs-eat-honey-roasted-parsnips">Can dogs eat honey roasted parsnips?</h3>
      <p>No, honey-roasted parsnips from your plate shouldn’t be slipped to your dog. Though honey is generally deemed healthy for humans, it adds a lot of extra sugar and calories to a dog’s diet, so isn’t recommended. It’s just fine to feed your dog roasted parsnips so long as they’re not coated in oil, salt or seasonings, but honey-roasted may cause issues with their digestion and end up being calorific.</p>
      <h3 id="conclusion">Conclusion</h3>
      <p>Parsnips are a delicious source of dietary fibre for dogs, as well as vitamins and minerals. Though they can be served raw, it’s better to serve them mildly cooked (oven-roasted or boiled, for example) to make them easier for a dog to munch on and digest. Don’t add any seasonings or flavourings such as salt, spices, butter or honey.</p>
      <h3 id="what-other-foods-can-dogs-safely-eat">What other foods can dogs safely eat?</h3>
      <p>If you like the sound of parsnips for your dog but are considering alternatives, why not try the following:?</p>
      <p>Carrots are a great, cheap veggie for dogs to munch on either raw or cooked. When served whole and raw, they can be beneficial for dogs’ teeth.</p>
      <p>Pumpkin is full of fibre, vitamins and minerals - and dogs think it tastes great too!</p>
      <p>Courgette is another great source of dietary fibre which is gently digestible and also boosts a dog’s hydration levels due to its high water content.</p>
      <p>Calming dental stick for dogs if you’re looking for something firm, such as parsnip, that a dog will enjoy chewing.</p>
      <p>To get your dog into healthy dog treats and nutritious food, try our specially formulated range of grain-free dog food, made with whole, natural ingredients to benefit their body and mind.</p>
`,
  headings: [
    { id: 'are-parsnips-good-for-dogs', text: 'Are parsnips good for dogs?', level: 2 },
    { id: 'what-are-the-health-benefits', text: 'What are the health benefits?', level: 3 },
    { id: 'can-puppies-eat-parsnips', text: 'Can puppies eat parsnips?', level: 2 },
    { id: 'when-is-parsnip-unsafe-for-dogs', text: 'When is parsnip unsafe for dogs?', level: 2 },
    { id: 'can-dogs-be-allergic-to-parsnips', text: 'Can dogs be allergic to parsnips?', level: 3 },
    { id: 'can-parsnips-make-dogs-sick', text: 'Can parsnips make dogs sick?', level: 3 },
    { id: 'how-to-safely-give-parsnips-to-your-dog', text: 'How to safely give parsnips to your dog?', level: 2 },
    { id: 'how-much-is-safe-to-give-your-dog', text: 'How much is safe to give your dog?', level: 3 },
    { id: 'what-kinds-of-parsnips-can-dogs-eat', text: 'What kinds of parsnips can dogs eat?', level: 2 },
    { id: 'can-dogs-eat-raw-parsnips', text: 'Can dogs eat raw parsnips?', level: 3 },
    { id: 'can-dogs-eat-boiled-parsnips', text: 'Can dogs eat boiled parsnips?', level: 3 },
    { id: 'can-dogs-eat-honey-roasted-parsnips', text: 'Can dogs eat honey roasted parsnips?', level: 3 },
    { id: 'conclusion', text: 'Conclusion', level: 3 },
    { id: 'what-other-foods-can-dogs-safely-eat', text: 'What other foods can dogs safely eat?', level: 3 },
  ]

},

'can-dogs-eat-potatoes': {
  title: 'Can dogs eat Potatoes?',
  category: 'Pets',
  snippet: "Yes - dogs can eat potatoes. The extremely versatile root veggie that is a mainstay of the human diet can also be a nutritious part of a dog’s main meals, just so long as it’s prepared correctly and fed in moderation alongside other healthy foods",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/BLOG_CAN_DOGS_EAT_POTATOES_500x_crop_center.jpg?v=1716968243",
    alt: "Can dogs eat Potatoes?",
    caption: "Are potatoes good for dogs?"
  },
  content: `
<p>Let’s go into more detail over when and how your dog can eat potatoes.</p>
      <h2 id="are-potatoes-good-for-dogs">Are potatoes good for dogs?</h2>
      <p>Yes - there’s a whole range of health benefits to potatoes, despite the fact that they can be deemed quite carbohydrate heavy. Like any food, they should be fed in moderation to your pooch as part of a well-balanced, nutritional diet, and prepared in the most dog-friendly way.</p>
      <h3 id="what-are-the-health-benefits">What are the health benefits?</h3>
      <p>Let's go into some of the ways potatoes can benefit your dog’s health…</p>
      <p>Complex carbohydrates. When cooked in the right way, dogs benefit from the complex carbohydrates in potatoes which give them sustained, slow-release energy.</p>
      <p>Source of fibre. Fibre improves stool quality, boosts digestion and promotes bowel regularity in your dog.</p>
      <p>Vitamins C and B6. Great for boosting a dog’s immune system and skin health, as well as metabolic processes and nerve function.</p>
      <p>Minerals such as potassium and phosphorus for your dog’s healthy bones and teeth, heart and muscle function.</p>
      <p>Gentle on digestion. When cooked correctly (read on for more), potatoes can be a highly digestible food for dogs, to fill them up without causing gut turbulence.</p>
      <h2 id="can-puppies-eat-potatoes">Can puppies eat potatoes?</h2>
      <p>Potatoes are a great food for puppies because they’re very gentle on digestion, so suitable for delicate puppy tummies. Just be sure they’re prepared safely - skinned and roasted or boiled, for instance, then mashed up without any added milk, salt or butter. Feed pups potato alongside other nutritious foods such as fish or broccoli (they should also be eating specialist food for puppies for their main meals).</p>
      <h2 id="when-is-potato-unsafe-for-dogs">When is potato unsafe for dogs?</h2>
      <p>There are a few ways in which potato can be an unsafe food for dogs:</p>
      <ul>
        <li>When served raw. Raw potatoes don’t taste great but they also contain solanine, which is toxic to dogs. Never serve a dog raw potatoes (this includes the green parts of potatoes) as it will make them very unwell.</li>
        <li>If a dog eats too much potato, or it isn’t balanced with other foods. Potato is a nutritious food but on its own, doesn’t carry enough nutrients to fuel a dog’s body. Be sure to feed in moderation, alongside other healthy proteins, fruits and veggies.</li>
        <li>Potatoes prepared incorrectly for dogs, such as in the form of chips, dauphinoise, buttery mash and other rich or fatty alternatives. This includes any form of potato slathered in butter, seasonings and sauces. A dog can easily get sick from potatoes prepared in this way.</li>
      </ul>
      <h3 id="can-dogs-be-allergic-to-potatoes">Can dogs be allergic to potatoes?</h3>
      <p>Yes, dogs can have an intolerance or allergy to potatoes. If you’ve fed your dog some mash or something similar and notice any of the following symptoms, take special care of your dog and don’t feed them potatoes again.</p>
      <ul>
        <li>Reddening, rashes or itchiness of the skin</li>
        <li>Pain in stomach, bloating</li>
        <li>Vomiting and/or diarrhoea</li>
        <li>Breathing difficulties, wheezing</li>
        <li>Lethargy, change in behaviour</li>
      </ul>
      <p>If these symptoms persist, talk to a vet to get further instruction.</p>
      <h2 id="how-to-safely-give-potatoes-to-your-dog">How to safely give potatoes to your dog?</h2>
      <p>As humans know, there are endless ways to prepare potatoes, but only a few that are safe for a dog to chow down on.</p>
      <p>The safest way is to peel, roast or boil, and mash the potatoes, without any added salt, butter or seasoning. To soften the mashed potatoes, add a bit of water rather than milk as a lot of dogs are lactose intolerant.</p>
      <h3 id="how-much-is-safe-to-give-your-dog">How much is safe to give your dog?</h3>
      <p>Potatoes should be served in moderation, as with all foods you give to your dog - as a side or accompaniment to other foods. A dog’s meal should be made of mostly lean protein, with a portion of vegetables, fruit and carbohydrates (such as potato) as a side. Chat to your vet for specifics, as portion sizes depend on your dog’s breed, age and size.</p>
      <p>Don’t serve only potatoes to your pooch as it doesn’t constitute a full meal and they won’t receive all the important nutrients they need. Too much potato can cause lethargy and constipation, just like it can for humans (!).</p>
      <h2 id="what-kinds-of-potatoes-can-dogs-eat">What kinds of potatoes can dogs eat?</h2>
      <p>Let’s unpack all the different types of potatoes your dog can and can’t eat, so you can be clued up on which are safest for your peckish pooch.</p>
      <h3 id="can-dogs-eat-sweet-potatoes">Can dogs eat sweet potatoes?</h3>
      <p>Yes - yummy sweet potatoes are a nutritious snack for dogs full of vitamins and complex carbs, and make a nice alternative to regular potatoes. Unlike regular potatoes, however, you can boil them up and mash them (without added sugar, salt or spices) for your dog to eat. Remove the skin, too, as it can be tough for a pooch to digest.</p>
      <h3 id="can-dogs-eat-mashed-potatoes">Can dogs eat mashed potatoes?</h3>
      <p>Yes, dogs can eat mashed potatoes. However, ‘mash’ that humans eat is often packed full of butter, salt and pepper and even cream, so you should definitely avoid all of these additions when making it for your dog.</p>
      <p>Plain potatoes that are roasted or boiled, then mashed with a bit of water is the canine-friendly way to serve them, so that your dog receives the nutrients of the potatoes while digesting them safely.</p>
      <h3 id="can-dogs-eat-cooked-potatoes">Can dogs eat cooked potatoes?</h3>
      <p>Yes, it’s essential to feed cooked potatoes to your pooch over raw potatoes. Raw potato contains solanine which is a toxic substance to dogs. Don’t feed your pooch green potatoes either, as these also contain solanine.</p>
      <h3 id="can-dogs-eat-roast-potatoes">Can dogs eat roast potatoes?</h3>
      <p>Yes, roasted potatoes are one of the safest ways for your dog to eat them. Ideally remove the skin, chop into pieces and roast in the oven without any added seasoning, spices or fats. Wait to cool slightly and mash before feeding to your pooch alongside other nutritious protein and veggies.</p>
      <p>If your pooch has gobbled down a roast potato from your roast dinner, it shouldn’t do them any harm - however don’t intentionally serve them roast potatoes prepared for humans. They’re too fatty for dogs’ delicate digestive systems, and usually covered in a lot of seasoning that can also cause them harm.</p>
      <h3 id="can-dogs-eat-raw-potatoes">Can dogs eat raw potatoes?</h3>
      <p>Nope - never feed raw potatoes to your dog. Not only are they tough and hard to digest, raw potatoes contain solanine which is toxic to dogs. This is also present in green potatoes, so avoid these, too.</p>
      <h3 id="can-dogs-eat-jacket-potatoes">Can dogs eat jacket potatoes?</h3>
      <p>A dog can eat a jacket potato if it’s been oven roasted and doesn’t contain any other additions such as butter, salt, pepper, etc. The potato skin might be tough for your pooch to digest, but it shouldn’t do them any harm if they do eat it. Ideally, remove the skin before serving.</p>
      <p>Remember to serve a small portion of potato - a whole baked potato isn’t recommended - and keep a close eye on your pooch after they’ve eaten it.</p>
      <h3 id="can-dogs-eat-new-potatoes">Can dogs eat new potatoes?</h3>
      <p>Dogs can eat new potatoes if they’re served plain and cooked without added seasoning. Don’t feed your dog any new potatoes that come ready stewed in garlic butter or flavourings, as garlic can make your dog very sick. Also avoid the tinned new potatoes, as they can contain salt or other preservatives that can give your pooch a stomach upset.</p>
      <h3 id="can-dogs-eat-fried-potatoes-(chips)">Can dogs eat fried potatoes (chips)?</h3>
      <p>If your dog sneaks a chip or two off your plate, that shouldn’t cause them harm per se; however chips or fried potatoes aren’t a recommended food for a dog as they’re very high in fat and are likely covered in salt and other seasonings.</p>
      <h3 id="can-dogs-eat-potato-skins">Can dogs eat potato skins?</h3>
      <p>A small piece of plain, cooked potato skin isn’t necessarily harmful for dogs, but it does contain solanine and can cause issues for your dog’s digestion. Overall, it’s better to peel a potato before roasting and serving it to your hungry pooch.</p>
      <h3 id="conclusion">Conclusion</h3>
      <ul>
        <li>In summary, keep it simple when serving potatoes to your dog.</li>
        <li>Wash and peel the potatoes, roast or boil them, and serve plain without any butter, sauces or seasoning.</li>
        <li>Raw potatoes and any with green parts should be avoided due to solanine, a substance which is toxic to dogs. Potato skins should also, ideally, be avoided.</li>
      </ul>
      <h3 id="what-other-foods-can-dogs-safely-eat">What other foods can dogs safely eat?</h3>
      <p>If you’re keen to feed potatoes to your dog but are looking for alternatives, why not try the following?</p>
      <ul>
        <li>Sweet potatoes offer the same complex carbohydrates, fibre and vitamins as potatoes but without the solanine that is toxic to dogs.</li>
        <li>Carrots have lots of fibre and powerful vitamins without any health risk to dogs.</li>
        <li>Butternut squash is another mashable root vegetable that can satisfy dogs while offering a host of health benefits.</li>
        <li>Fish, Potato & Pea Wet Food - Our Fish, Potato & Pea Wet Food is tasty, includes that sought-after source of potato and is great for pooches who need a lower fat diet.</li>
      </ul>
      <p>Check out our range of healthy snacks for dogs as well as grain-free dog food that’s gentle on digestion. All of our delicious, grain-free recipes are specially formulated to work wonders on your dog’s body and mind.</p>
      <section>References</section>
`,
  headings: [
    { id: 'are-potatoes-good-for-dogs', text: 'Are potatoes good for dogs?', level: 2 },
    { id: 'what-are-the-health-benefits', text: 'What are the health benefits?', level: 3 },
    { id: 'can-puppies-eat-potatoes', text: 'Can puppies eat potatoes?', level: 2 },
    { id: 'when-is-potato-unsafe-for-dogs', text: 'When is potato unsafe for dogs?', level: 2 },
    { id: 'can-dogs-be-allergic-to-potatoes', text: 'Can dogs be allergic to potatoes?', level: 3 },
    { id: 'how-to-safely-give-potatoes-to-your-dog', text: 'How to safely give potatoes to your dog?', level: 2 },
    { id: 'how-much-is-safe-to-give-your-dog', text: 'How much is safe to give your dog?', level: 3 },
    { id: 'what-kinds-of-potatoes-can-dogs-eat', text: 'What kinds of potatoes can dogs eat?', level: 2 },
    { id: 'can-dogs-eat-sweet-potatoes', text: 'Can dogs eat sweet potatoes?', level: 3 },
    { id: 'can-dogs-eat-mashed-potatoes', text: 'Can dogs eat mashed potatoes?', level: 3 },
    { id: 'can-dogs-eat-cooked-potatoes', text: 'Can dogs eat cooked potatoes?', level: 3 },
    { id: 'can-dogs-eat-roast-potatoes', text: 'Can dogs eat roast potatoes?', level: 3 },
    { id: 'can-dogs-eat-raw-potatoes', text: 'Can dogs eat raw potatoes?', level: 3 },
    { id: 'can-dogs-eat-jacket-potatoes', text: 'Can dogs eat jacket potatoes?', level: 3 },
    { id: 'can-dogs-eat-new-potatoes', text: 'Can dogs eat new potatoes?', level: 3 },
    { id: 'can-dogs-eat-fried-potatoes-(chips)', text: 'Can dogs eat fried potatoes (chips)?', level: 3 },
    { id: 'can-dogs-eat-potato-skins', text: 'Can dogs eat potato skins?', level: 3 },
    { id: 'conclusion', text: 'Conclusion', level: 3 },
    { id: 'what-other-foods-can-dogs-safely-eat', text: 'What other foods can dogs safely eat?', level: 3 },
  ]

},
'can-dogs-eat-sardines': {
  title: 'Can dogs eat Sardines?',
  category: 'Pets',
  snippet: "Yes, dogs can eat sardines! Sardines are super healthy for dogs, and it’s a good thing too - as dogs love the taste!",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/BLOG_CAN_DOGS_EAT_SARDINES_500x_crop_center.jpg?v=1716969002",
    alt: "Can dogs eat Sardines?",
    caption: "Are sardines good for dogs?"
  },
  content: `
<p>As always, it’s important that sardines are prepared and served to dogs in the correct way in order for them to be a safe snack.</p>
      <p>Let’s go into more detail about the best way to serve this nutritious, delicious fish to your dog.</p>
      <h2 id="are-sardines-good-for-dogs">Are sardines good for dogs?</h2>
      <p>Yes, sardines are a nutrient-dense oily fish that have lots of health benefits for a pooch. Fresh sardines are the most nutritious, and it’s important to choose the right kinds of sardines to give your dog so they get the full benefit. Tinned sardines are slightly different; we’ll go into that later in the article.</p>
      <h3 id="what-are-the-health-benefits">What are the health benefits?</h3>
      <p>Sardines are full of benefits for a dog’s health:</p>
      <p>Rich in omega-3 - a powerful fatty acid essential for cardiovascular health, joint health, brain function and promoting a healthy coat and skin.</p>
      <p>Great source of protein, important for energy, muscle maintenance and growth.</p>
      <p>Anti-inflammatory properties, key to supporting health conditions in dogs such as arthritis, a sensitive stomach and sensitive skin.</p>
      <p>Vitamin D, excellent for bone health, strong teeth and boosted immunity.</p>
      <p>Minerals such as calcium and phosphorus, integral for strong bones and teeth.</p>
      <h2 id="can-puppies-eat-sardines">Can puppies eat sardines?</h2>
      <p>Just like adult dogs, puppies can eat sardines so long as they’re prepared safely. Be sure to serve only fresh, cooked sardines with their bones removed, and without added salt, seasonings or sauces. Chop the sardines into small pieces that tiny puppy mouths can chew.</p>
      <h2 id="when-are-sardines-unsafe-for-dogs">When are sardines unsafe for dogs?</h2>
      <ul>
        <li>Sardines are unsafe when they’re served incorrectly for a dog to eat. Any sardines that are soaked in sauces, brine or oils should be avoided, as this can cause too much turbulence in a dog’s gut and become a stomach upset.</li>
      </ul>
      <ul>
        <li>Sardines are unsafe for dogs with pancreatitis, as they have high levels of healthy fats. This would be problematic for a dog with pancreatitis to process, and they would likely get ill.</li>
      </ul>
      <ul>
        <li>Fresh sardines that have tough, large bones are unsafe for dogs. Soft bones are okay and can even have health benefits, but be sure to check the sardines and remove any large bones before serving (chopping them up to see is the safest option).</li>
      </ul>
      <h3 id="can-dogs-be-allergic-to-sardines">Can dogs be allergic to sardines?</h3>
      <p>Yes, dogs can have an allergic reaction to sardines. If you’ve not fed them before, offer a small portion and monitor your dog in the hours following. If they present any of the symptoms below, don’t feed them any more and consult a vet.</p>
      <ul>
        <li>Reddening, itching, rashing of the skin</li>
        <li>Swelling of skin, face</li>
        <li>Breathing difficulties, wheezing</li>
        <li>Vomiting and/or diarrhoea</li>
        <li>Bloating, pain in stomach</li>
        <li>Lethargy, change in behaviour</li>
      </ul>
      <h3 id="can-sardines-make-dogs-sick">Can sardines make dogs sick?</h3>
      <ul>
        <li>There are some obvious reasons sardines can make dogs sick - if they’re not fresh, for example, so always make sure you’re feeding fresh, cooked sardines to your pooch as raw fish is more likely to carry bacteria.</li>
      </ul>
      <ul>
        <li>Sardines drenched in oils, brine or sauces can make your dog sick with vomiting or diarrhoea, or they may find them very hard to digest. Avoid flavoured sardines such as these and stick to plain.</li>
      </ul>
      <ul>
        <li>If your dog has pancreatitis, sardines may make them sick, as they’re a fatty fish that some sensitive stomachs may struggle to process.</li>
      </ul>
      <h2 id="how-to-safely-give-sardines-to-your-dog">How to safely give sardines to your dog?</h2>
      <p>The best way to serve your pooch some tasty sardines is to stick to fresh ones that have been cooked and had all large bones removed. Oven-baked or steamed is best, and don’t add any salt, seasonings or sauces.</p>
      <p>If you want to serve your dog tinned sardines, the safest ones are served in spring water. The varieties that come in brine, sauces and oils aren’t recommended to serve your pooch.</p>
      <h3 id="can-dogs-eat-sardines-every-day">Can dogs eat sardines every day?</h3>
      <p>It’s not a good idea to feed something to your dog every day, unless it’s a nutritionally balanced dog food that’s been formulated for daily feeds. Fresh, cooked sardines without any salt or flavourings can be fed to your pooch as part of a balanced diet that is full of various lean proteins, fruits and vegetables - but not on its own or as a daily food.</p>
      <h2 id="what-kinds-of-sardines-can-dogs-eat">What kinds of sardines can dogs eat?</h2>
      <p>Let’s go into more detail over the kinds of sardines dogs can munch on safely...</p>
      <h3 id="can-dogs-eat-sardines-in-tomato-sauce">Can dogs eat sardines in tomato sauce?</h3>
      <p>They can, but it’s not recommended. Tinned sardines don’t necessarily contain harmful ingredients, but the tomato sauce is likely to contain lots of salt and could potentially cause a stomach upset in your pooch.  It’s safer for your dog’s tum to try fresh sardines or the tinned sardines that come in spring water.</p>
      <h3 id="can-dogs-eat-tinned-canned-sardines">Can dogs eat tinned/canned sardines?</h3>
      <p>Maybe - depending on what they’re served in. Tinned sardines served in spring water are a big thumbs up, as sardines are a good source of omega 3, as well as protein and lots of vitamins and minerals. Tinned or canned sardines served in oil, tomato sauce or other flavourings should be avoided, however - oils are too high in fat for your pooch while flavoured sauces could cause havoc with their digestion and make them unwell.</p>
      <h3 id="can-dogs-eat-sardines-in-oil-(sunflower-olive)">Can dogs eat sardines in oil (sunflower, olive)?</h3>
      <p>No, it’s not recommended. Sardines are a nutrient-dense fish for dogs and have lots of benefits to their health, but the tinned kind that come in olive oil or sunflower oil aren’t safe for a doggy snack. They’re simply too high in fat, and as sardines are high in (healthy) fats already, this calorific fat content tends to tip the balance from healthy to unhealthy.</p>
      <h3 id="can-dogs-eat-sardines-in-brine">Can dogs eat sardines in brine?</h3>
      <p>No, it’s not a good idea to give your dog sardines soaked in brine. Brine is great for preserving fish but it’s very high in salt, too high for a dog’s delicate digestive system. If they sneak a sardine in brine somehow it shouldn’t be too much of a danger, but if you want to feed your dog sardines intentionally, stick to fresh fish or the sardines that come tinned in spring water.</p>
      <h3 id="can-dogs-eat-whole-raw-sardines-with-bones">Can dogs eat whole raw sardines with bones?</h3>
      <p>It depends. Many sardines have soft bones which aren’t harmful for a dog, in fact fish bones can provide some nutrients. However, larger bones can cause a choking hazard and shouldn’t be fed to them. If you’re getting your sardines from a fishmonger, ask them about the bones beforehand, perhaps ask for the bones to be removed. If you aren’t sure, it’s safer to not give the boned fish to your dog.</p>
      <h3 id="can-dogs-eat-sardines-in-spring-water">Can dogs eat sardines in spring water?</h3>
      <p>Yes! Sardines are packed with nutrients for dogs - omega fatty acids which have tons of health benefits, as well as protein, vitamins and minerals. Dogs love the taste of them, too. Sardines that come in spring water are safe, and much better than the tinned variety in tomato sauce or oil.</p>
      <h3 id="can-dogs-eat-frozen-sardines">Can dogs eat frozen sardines?</h3>
      <p>If the sardines were fresh and are now frozen, they should be safe for your dog to eat - just be sure to fully defrost them before serving to your pooch. If you aren’t sure about the bone content in the fish, examine them before serving and remove the bigger bones, if you can. Remember, fish should always be served to your dog plain, with no added salt or seasonings.</p>
      <b>Other FAQs</b>
      <p>Here are some final questions you might have over whether your pooch can munch on sardines…</p>
      <h4>Can dogs with pancreatitis eat sardines?</h4>
      <p>It’s not recommended that dogs with pancreatitis eat oily, fatty fish, as these dogs tend to have issues processing fats. Check with your vet to be certain, but if you’re not sure, definitely avoid feeding sardines to your pancreatic pooch.</p>
      <h4>Can pregnant dogs eat sardines?</h4>
      <p>Sardines are a great option for pregnant and nursing dogs, as they’re rich in calcium and nutrients which they’ll get a lot of health benefits from. However,  sardines that come canned in sauces or drenched in oils are not suitable for dogs, and definitely not pregnant dogs. Stick to fresh, plain sardines for your pregnant pooch.</p>
      <h3 id="conclusion">Conclusion</h3>
      <ul>
        <li>In summary, sardines can be a really healthy food for a dog - they’re full of protein and omega fatty acids as well as powerful vitamins and minerals that benefit a dog’s body and mind.</li>
        <li>Serving cooked, fresh sardines without sharp bones is key. Don’t feed dogs sardines that come canned in brine, oils or sauces, as they could cause digestive problems, and be sure they don’t have any added salt or seasoning.</li>
        <li>If your pooch has pancreatitis, it’s best that they avoid sardines.</li>
      </ul>
      <h3 id="what-other-foods-can-dogs-safely-eat">What other foods can dogs safely eat?</h3>
      <p>If you like the sound of feeding sardines to your dog but are looking for alternatives, why not try the following?</p>
      <p>Salmon is a highly nutritious fish that’s also full of lean protein and omega-3 and 6 fatty acids.</p>
      <p>White fish is a tasty fish for dogs that is gentle on digestion and great mixed with other foods like potato and peas.</p>
      <p>Salmon Oil for Dogs is a powerful supplement that condenses all the goodness of fish into an easy-to-administer oil you can drizzle over their regular food.</p>
      <p>Long-lasting Fish Chews give that irresistible fishy taste to dogs while also calming their mood and improving their dental health.</p>
      <p>Our tasty range of healthy, grain-free dog foods have plenty of fishy, highly digestible ingredients just like sardines, to keep your dog happy and healthy.</p>
`,
  headings: [
    { id: 'are-sardines-good-for-dogs', text: 'Are sardines good for dogs?', level: 2 },
    { id: 'what-are-the-health-benefits', text: 'What are the health benefits?', level: 3 },
    { id: 'can-puppies-eat-sardines', text: 'Can puppies eat sardines?', level: 2 },
    { id: 'when-are-sardines-unsafe-for-dogs', text: 'When are sardines unsafe for dogs?', level: 2 },
    { id: 'can-dogs-be-allergic-to-sardines', text: 'Can dogs be allergic to sardines?', level: 3 },
    { id: 'can-sardines-make-dogs-sick', text: 'Can sardines make dogs sick?', level: 3 },
    { id: 'how-to-safely-give-sardines-to-your-dog', text: 'How to safely give sardines to your dog?', level: 2 },
    { id: 'can-dogs-eat-sardines-every-day', text: 'Can dogs eat sardines every day?', level: 3 },
    { id: 'what-kinds-of-sardines-can-dogs-eat', text: 'What kinds of sardines can dogs eat?', level: 2 },
    { id: 'can-dogs-eat-sardines-in-tomato-sauce', text: 'Can dogs eat sardines in tomato sauce?', level: 3 },
    { id: 'can-dogs-eat-tinned-canned-sardines', text: 'Can dogs eat tinned/canned sardines?', level: 3 },
    { id: 'can-dogs-eat-sardines-in-oil-(sunflower-olive)', text: 'Can dogs eat sardines in oil (sunflower, olive)?', level: 3 },
    { id: 'can-dogs-eat-sardines-in-brine', text: 'Can dogs eat sardines in brine?', level: 3 },
    { id: 'can-dogs-eat-whole-raw-sardines-with-bones', text: 'Can dogs eat whole raw sardines with bones?', level: 3 },
    { id: 'can-dogs-eat-sardines-in-spring-water', text: 'Can dogs eat sardines in spring water?', level: 3 },
    { id: 'can-dogs-eat-frozen-sardines', text: 'Can dogs eat frozen sardines?', level: 3 },
    { id: 'conclusion', text: 'Conclusion', level: 3 },
    { id: 'what-other-foods-can-dogs-safely-eat', text: 'What other foods can dogs safely eat?', level: 3 },
  ]

},

'can-dogs-eat-sausage': {
  title: 'Can dogs eat Sausage?',
  category: 'Pets',
  snippet: "Dogs can eat sausages occasionally. Dogs and sausages might seem like a match made in heaven - but they should be fed in moderation as a treat.",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/BLOG_CAN_DOGS_EAT_SAUSAGE_1_500x_crop_center.jpg?v=1716969312",
    alt: "Can dogs eat Sausage?",
    caption: "Are sausages good for dogs?"
  },
  content: `
<p>As always, there are exceptions; some types of sausage should be avoided entirely.</p>
      <p>Read on for all your questions answered on whether dogs can eat sausages, which sausages are okay for dogs, and which are a no-go.</p>
      <h2 id="are-sausages-good-for-dogs">Are sausages good for dogs?</h2>
      <p>No, it can’t really be said that sausages offer any health benefits to dogs. They are made of processed meat that’s high in fat and salt, and they’re also likely to contain ingredients that dogs shouldn’t eat, such as onion. Small pieces of cooked, plain sausage can be fed to dogs as an occasional treat.</p>
      <h2 id="can-puppies-eat-sausage">Can puppies eat sausage?</h2>
      <p>It’s not recommended to give puppies any sausage, it’s simply too high in salt and fat. At this early stage in their development, it’s important to keep them on a diet of nutritious puppy food that supports their growth. If you want to use a treat for training, maybe try a piece of cheese or something else less risky.</p>
      <h3 id="can-dogs-eat-sausage-as-a-treat-">Can dogs eat sausage as a treat ?</h3>
      <p>Sure, sausage is a treat food, if it’s to be fed to dogs at all. However, the sausage should be cut into small pieces, cooked thoroughly and be a plain variety with no added ingredients or flavourings.</p>
      <h3 id="are-there-any-health-benefits">Are there any health benefits?</h3>
      <p>Though sausage meat contains some protein, it’s not really beneficial enough as it comes alongside a bunch of salt and fat. As it’s a processed meat, it’s also risky if not cooked - raw pork comes with the danger of carrying Trichinosis, as well as other contaminants which could cause nasty food poisoning in your pooch.</p>
      <h2 id="when-is-sausage-unsafe-for-dogs">When is sausage unsafe for dogs?</h2>
      <p>Be wary of treating your pooch, as sausage can be unsafe for dogs for a variety of reasons…</p>
      <ul>
        <li>When served raw or uncooked sausages are more likely to carry bacteria or contaminants, or contain trichinella (a type of roundworm) which can cause a disease called trichinosis.</li>
        <li>When in flavoured varieties, they might prove toxic to dogs (for example, sausages that contain onion, garlic or chilli).</li>
        <li>Cheap varieties that have a lower meat content may contain all kinds of junk and preservatives that could make your dog ill or lethargic.</li>
        <li>Too much sausage, too often can lead to health issues and weight gain in your pooch and be generally negative for their diet.</li>
        <li>If your pooch doesn’t tolerate processed meat, they may have issues digesting sausage and experience some discomfort or sickness.</li>
      </ul>
      <h3 id="can-dogs-be-allergic-to-sausage">Can dogs be allergic to sausage?</h3>
      <p>Dogs can definitely have an intolerance to processed meat such as sausages, which could be deemed a food allergy. If your dog has trouble digesting sausage, suffers from sickness or diarrhoea, develops a skin rash or irritation or has breathing difficulties, definitely don’t feed them sausage in future.</p>
      <h2 id="how-to-safely-give-sausage-to-your-dog">How to safely give sausage to your dog?</h2>
      <p>To feed your dog sausage as a treat now and then, be sure it’s cut up into small pieces, well cooked (pan-fried in a low fat oil, or oven cooked), and in a plain, high quality variety with no added flavourings or seasoning.</p>
      <h3 id="how-much-is-safe-to-give-your-dog">How much is safe to give your dog?</h3>
      <p>Sausages should be deemed an occasional treat. The amount depends on your dog’s breed and size, but be aware that treats should make up around 10% of your dog’s overall diet, so consider sausage alongside any other treats you feed your dog.</p>
      <h2 id="what-kinds-of-sausage-can-dogs-eat">What kinds of sausage can dogs eat?</h2>
      <p>As we know sausage can be an occasional treat food, let’s go into the different kinds and whether they’re a yes or no for your dog’s diet.</p>
      <h3 id="can-dogs-eat-sausage-rolls">Can dogs eat sausage rolls?</h3>
      <p>No. It’s best to avoid sausage rolls for your dog - the sausage is wrapped in buttery pastry that is high in saturated fat. No doubt your dog will find it tasty, but there is almost no nutritional benefit and it could make them ill.</p>
      <h3 id="can-dogs-eat-raw-sausage">Can dogs eat raw sausage?</h3>
      <p>Nope - don’t ever feed your dog raw sausage meat. Most raw meat is riskier for your dog than cooked meat, but sausage meat especially, as it could contain trichinella (a type of roundworm) which can cause a disease called trichinosis. Always feed cooked sausage only to your pooch.</p>
      <h3 id="can-dogs-eat-vegan-sausage">Can dogs eat vegan sausage?</h3>
      <p>It depends. Though it might not contain ingredients that are toxic to dogs, vegan meat is intended for humans and therefore is a bit of a risk to feed to your pooch. If they’ve eaten some and have no ill effects, that’s great - however it isn’t recommended to feed them vegan sausage meat on the regular.</p>
      <h3 id="can-dogs-eat-sausage-meat">Can dogs eat sausage meat?</h3>
      <p>If you’re making something with sausage meat, that’s fine to feed your dog in small amounts (again, as a treat) so long as it’s cooked and plain, without added salt, ingredients or seasoning.</p>
      <h3 id="can-dogs-eat-hot-dog-sausage">Can dogs eat hot dog sausage?</h3>
      <p>Don’t feed hot dog sausages to your pooch as they’re often full of preservatives, overly processed and actually quite low in nutritious meat. If you want to give sausage to your pooch, let them have some high quality sausage (they deserve it, and their delicate gut will thank you).</p>
      <p>If your dog has accidentally eaten a piece of hot dog as a one-off, however, it probably won’t harm them.</p>
      <h3 id="can-dogs-eat-chicken-sausage">Can dogs eat chicken sausage?</h3>
      <p>As is the case with pork sausage, chicken sausage is high in salt and fat, with little nutritional benefit to a pooch. Plain, cooked chicken is a much healthier option, rich in protein, vitamins and minerals. If your dog eats a piece of cooked chicken sausage, it shouldn’t harm them, however.</p>
      <h3 id="can-dogs-eat-liver-sausage">Can dogs eat liver sausage?</h3>
      <p>Though liver isn’t harmful to dogs when fed plain and cooked, liver sausage is a tad riskier. It could contain extra ingredients such as onions or garlic, and is very high fat. Feed your pooch some plain, regular sausage if you want to give it as a treat.</p>
      <h3 id="can-dogs-eat-battered-sausage">Can dogs eat battered sausage?</h3>
      <p>No. Don’t give your dog any battered sausage, it’s extremely high fat and salt and won’t benefit your pooch at all. It’s better to only give your dog a piece of sausage if you’ve cooked it at home yourself, so know exactly the quality of the sausage.</p>
      <h3 id="can-dogs-eat-chorizo-sausage">Can dogs eat chorizo sausage?</h3>
      <p>No. Chorizo is particularly high fat, contains strong flavours such as chilli and paprika, and as a cured meat, is also extremely high salt. Don’t give this particular sausage meat to your pooch - a regular, plain piece of cooked sausage is fine as a treat.</p>
      <h3 id="conclusion">Conclusion</h3>
      <p>We all know dogs love sausages, but they aren’t a healthy option for a pooch. To feed occasionally as a treat, be sure the sausage is of high quality, a plain variety with no added seasoning or flavouring, and cook it well.</p>
      <h3 id="what-other-foods-can-dogs-safely-eat">What other foods can dogs safely eat?</h3>
      <p>If you want to feed your dogs some meaty treats without the risks, why not try the following?</p>
      <p>Meaty probiotic treats for dogs - made with turkey, shrimp or duck, for the hit of meaty deliciousness but with nutritious, gut-balancing probiotics.</p>
      <p>Beef jerky for dogs - for a protein rich snack that is relaxing to chew and easy on the stomach.</p>
      <p>Take a look at our nutritious, grain-free treats for dogs if you want to spoil your dog without any of the risks (or guilt!) - made with whole, natural ingredients to support a dog’s healthy body and mind.</p>
`,
  headings: [
    { id: 'are-sausages-good-for-dogs', text: 'Are sausages good for dogs?', level: 2 },
    { id: 'can-puppies-eat-sausage', text: 'Can puppies eat sausage?', level: 2 },
    { id: 'can-dogs-eat-sausage-as-a-treat-', text: 'Can dogs eat sausage as a treat ?', level: 3 },
    { id: 'are-there-any-health-benefits', text: 'Are there any health benefits?', level: 3 },
    { id: 'when-is-sausage-unsafe-for-dogs', text: 'When is sausage unsafe for dogs?', level: 2 },
    { id: 'can-dogs-be-allergic-to-sausage', text: 'Can dogs be allergic to sausage?', level: 3 },
    { id: 'how-to-safely-give-sausage-to-your-dog', text: 'How to safely give sausage to your dog?', level: 2 },
    { id: 'how-much-is-safe-to-give-your-dog', text: 'How much is safe to give your dog?', level: 3 },
    { id: 'what-kinds-of-sausage-can-dogs-eat', text: 'What kinds of sausage can dogs eat?', level: 2 },
    { id: 'can-dogs-eat-sausage-rolls', text: 'Can dogs eat sausage rolls?', level: 3 },
    { id: 'can-dogs-eat-raw-sausage', text: 'Can dogs eat raw sausage?', level: 3 },
    { id: 'can-dogs-eat-vegan-sausage', text: 'Can dogs eat vegan sausage?', level: 3 },
    { id: 'can-dogs-eat-sausage-meat', text: 'Can dogs eat sausage meat?', level: 3 },
    { id: 'can-dogs-eat-hot-dog-sausage', text: 'Can dogs eat hot dog sausage?', level: 3 },
    { id: 'can-dogs-eat-chicken-sausage', text: 'Can dogs eat chicken sausage?', level: 3 },
    { id: 'can-dogs-eat-liver-sausage', text: 'Can dogs eat liver sausage?', level: 3 },
    { id: 'can-dogs-eat-battered-sausage', text: 'Can dogs eat battered sausage?', level: 3 },
    { id: 'can-dogs-eat-chorizo-sausage', text: 'Can dogs eat chorizo sausage?', level: 3 },
    { id: 'conclusion', text: 'Conclusion', level: 3 },
    { id: 'what-other-foods-can-dogs-safely-eat', text: 'What other foods can dogs safely eat?', level: 3 },
  ]

},

'can-dogs-eat-beef': {
  title: 'Can dogs eat Beef?',
  category: 'Pets',
  snippet: "Absolutely! Dogs can eat beef. Beef is a favourite food for most dogs, and a mainstay ingredient in many commercial dog foods. Lean, well-cooked beef is full of protein, minerals and other nutrients that keep a dog functioning and strong.",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/BLOG_CAN_DOGS_EAT_BEEF_500x_crop_center.jpg?v=1716969965",
    alt: "Can dogs eat Beef?",
    caption: "Is beef good for dogs?"
  },
  content: `
<p>There are plenty of ways to serve beef, however, so read on for more detailed answers on how to feed beef to your hungry pooch.</p>
      <h2 id="is-beef-good-for-dogs">Is beef good for dogs?</h2>
      <p>If it’s a quality cut of beef that’s served safely, then yes - beef is definitely good for dogs. A dog’s body thrives on protein-rich meats (it’s long been part of their ancestral diet) and so feeding your dog a meal that’s mostly lean protein, such as beef, is the first step to ensuring a well-rounded diet.</p>
      <h3 id="what-are-the-health-benefits-of-beef">What are the health benefits of beef?</h3>
      <p>Beef is full of benefits to a dog’s health, so long as it’s served up in a way that’s safe to a dog’s body (stay tuned for more on that).  Here are some of the perks of feeding beef to your dog:</p>
      <b>High in protein - Protein is essential for a dog’s muscle development, maintenance of the body, and contains amino acids.</b>
      <b>Amino acids - The building blocks of protein, amino acids perform important functions around muscles, tissues and hormones.</b>
      <b>Good fats - In moderation, beef fat helps keep a dog full as well as boosting skin and coat condition.</b>
      <b>Super tasty - Dogs love the taste of beef, so it will keep up a healthy appetite.</b>
      <b>Lots of B vitamins - B vitamins including B3, B6, B12, niacin and riboflavin are essential for a dog’s metabolism, formation of red blood cells and a healthy nervous system.</b>
      <b>Minerals such as iron, zinc and selenium - Important for oxygen transportation around a dog’s body, as well as immunity and skin health.</b>
      <h2 id="when-is-beef-unsafe-for-dogs">When is beef unsafe for dogs?</h2>
      <p>Beef is so versatile, it’s one of the reasons humans love it. With dogs, however, feeding beef in simple formats is best - for their digestion and overall safety.</p>
      <p>Beef can be unsafe for dogs when:</p>
      <ul>
        <li>Served raw (especially mince beef)</li>
        <li>Not fresh or fully defrosted</li>
        <li>Covered in seasoning, spices, sauces or marinades</li>
        <li>Served with lots of fat attached</li>
        <li>Your dog is allergic to beef</li>
      </ul>
      <h3 id="can-dogs-be-allergic-to-beef">Can dogs be allergic to beef?</h3>
      <p>Yes, some dogs do have a beef allergy; in fact it’s one of the most common allergies in dogs (though that’s likely just due to the fact that beef is so present in dog food, so there’s a high sample of cases).</p>
      <p>It’s likely you’ll discover a beef allergy at an early age, as so many commercial dog foods contain beef as a hero ingredient, so it’s hard to avoid it! If, for some reason your pooch hasn’t eaten beef before, introduce the meat slowly and keep an eye on how they react to it in the hours afterwards.</p>
      <p>A dog’s allergic reaction to beef could include:</p>
      <ul>
        <li>Itching and scratching due to a rash, or reddened or itchy skin</li>
        <li>Licking their face and paws excessively</li>
        <li>Vomiting and diarrhoea: severely, or for longer than a day</li>
        <li>Tummy pains or bloating</li>
        <li>Swelling</li>
        <li>Breathing problems or wheezing</li>
        <li>Ear problems or infections</li>
        <li>General changes in behaviour (lethargy, down in the dumps)</li>
      </ul>
      <h3 id="can-beef-make-dogs-sick">Can beef make dogs sick?</h3>
      <p>If your dog is allergic to beef, yes it can make them sick. In all cases, the same risks apply to beef as with humans; if it isn’t prepared or served safely, it carries the risk of causing harm to a dog’s health, possibly causing gastrointestinal issues which can make them very sick.</p>
      <h2 id="how-to-safely-give-beef-to-your-dog">How to safely give beef to your dog?</h2>
      <p>Beef is a delicious, nutritious food to give your dog when it’s prepared and served safely. Here is the preferred way to serve which is the most beneficial to your pooch:</p>
      <ul>
        <li>Make sure the beef is fresh and high quality. Get the leanest beef you can find.</li>
        <li>Cook it well (either by roasting, pan-frying or grilling), as raw beef</li>
      </ul>
      <p>is too risky to give to a dog.</p>
      <ul>
        <li>Don’t season the meat or serve with any sauces - keep it plain. Your pooch will find it tasty and juicy enough on its own.</li>
        <li>So long as it’s cooked, your dog can eat plain steak, mince, burgers and other cuts of fresh beef - but don’t serve processed or cured meat unless it’s specifically developed for dogs.</li>
        <li>Chop the meat into bite-sized pieces to avoid the chance of choking (dogs will wolf beef down very quickly!)</li>
      </ul>
      <h3 id="how-much-is-safe-to-give-your-dog">How much is safe to give your dog?</h3>
      <p>As with any food you give a dog, don’t serve just beef. If your dog’s meal is mostly lean protein, such as beef, that’s great! Lean proteins offer the most benefit to dogs. However, balance out their meals with a good amount of nutritious vegetables, fruits, botanicals and supplements to ensure their diet is well-rounded.</p>
      <p>How much beef you should feed your dog will depend on their breed, size and age. If the beef comes as part of a healthy, grain-free dog food, then the ideal serving size should be outlined on the pack.</p>
      <h4>Can dogs eat beef everyday</h4>
      <p>Yes they can! It’s not harmful to serve your pooch beef every day, in fact, we tend to recommend dogs stay on the same food if they tolerate it well.  Changing their diet can often lead to GI upset - so as long as their beef dog food is balanced with vegetables and other fresh foods (to ensure a wide range of nutrients, vitamins and minerals) - it’s all good.</p>
      <h2 id="can-puppies-eat-beef">Can puppies eat beef?</h2>
      <p>In theory, puppies can eat beef - it’s full of proteins which contribute towards muscle development and strength-building, which are essential for a puppy’s healthy growth. That said, if your regular puppy food contains beef, it may be better to stick to that rather than home-cooked beef, until your pup is ready to eat a broader range of foods.</p>
      <p>Check with your vet first if you’d like to try a new food with your pup. If you do give your puppy fresh beef, make sure it’s cooked well, served plain, and chopped into pieces suitable for little puppy mouths.</p>
      <h2 id="what-types-of-beef-can-dogs-eat">What types of beef can dogs eat?</h2>
      <p>Beef is not only delicious, but versatile! From burgers to short rib, a dog can potentially eat beef in a whole meat locker of ways - but some are safer and more nutrient-rich than others. Let’s go into more detail as to what kinds of beef are suitable for your pooch.</p>
      <h3 id="can-dogs-eat-raw-beef">Can dogs eat raw beef?</h3>
      <p>Dogs can eat raw beef in theory - and many do, particularly those with owners who are raw food advocates. Raw beef still contains the same proteins, vitamins and minerals that contribute to a dog’s health and wellbeing as cooked meat does. However, vets generally recommend cooked beef as there are fewer risks of carrying harmful bacteria - not just for a dog’s health but for dog-to-human contamination.</p>
      <h3 id="can-dogs-eat-mince">Can dogs eat mince?</h3>
      <p>Yes - cooked minced beef is a safe and healthy food for dogs, with high levels of protein and amino acids. Ideally, keep it the leanest mince possible, and cook it well. Raw minced beef is much higher risk than raw steak or fresh cut beef, so you want to be extra safe that it isn’t served raw. Also serve it plain to your pooch with no seasoning, sauce or salt.</p>
      <h3 id="can-dogs-eat-corned-beef">Can dogs eat corned beef?</h3>
      <p>Corned beef is a no for dogs. The classic tinned meat (which humans tend to eat with sandwiches or in a corned beef hash) is full of salt and fats which are of no nutritional value to a dog and could even cause harm. Put simply, it’s way too processed and too far from the source beef it came from to be suitable for a dog’s belly.</p>
      <h3 id="can-dogs-eat-steak">Can dogs eat steak?</h3>
      <p>Dogs can eat steak, it’s an excellent protein source! However, given its richness it should be seen as more of a treat than an everyday meal.</p>
      <p>Be sure it’s lean, cooked (either pan-fried or grilled), and served plain without salt, spices, butter or seasoning. Ideally, chop off thick fat rinds and cut the meat into bite-sized pieces; there are choking hazards with steak as it can be chewy.</p>
      <h3 id="can-dogs-eat-beef-bones">Can dogs eat beef bones?</h3>
      <p>Dogs can eat large beef bones - chewing really relaxes dogs and it’s great for their teeth, too. Just be sure to supervise your dog while they’re chewing, and be extra careful if it’s a cooked bone, as they’re more prone to splintering. If you’re wondering ‘Can dogs eat beef ribs  or short rib?’ then the same rules apply. As we’ve said, just be sure the meat isn’t seasoned or covered in sauce.</p>
      <h3 id="can-dogs-eat-beef-jerky">Can dogs eat beef jerky?</h3>
      <p>Dogs should avoid commercial beef jerky for humans as it will likely contain added salt and flavourings. Beef jerky for dogs, however, is the perfect option for a meaty, protein-rich snack as it won’t contain preservatives or junk.</p>
      <h3 id="can-dogs-eat-roast-beef">Can dogs eat roast beef?</h3>
      <p>Absolutely - beef that’s been roasted is a safe way to feed your dog beef. Just be wary when it comes to portion sizes, and don’t serve roast beef that’s been marinated or covered in salt and seasonings. Cutting some plain, cooked meat from the centre of a roast beef joint is a good option.</p>
      <h3 id="can-dogs-eat-beef-burgers">Can dogs eat beef burgers?</h3>
      <p>So long as they’re well cooked, dogs can eat beef burgers as a treat. Serve them plain without sauces or seasoning, and avoid the burgers with added onion or garlic in the beef mix.</p>
      <h3 id="can-dogs-eat-beef-fat">Can dogs eat beef fat?</h3>
      <p>In moderation. Though cuts of beef with a bit of fat attached won’t harm your dog and can actually help them feel full, it’s not healthy for your pooch to eat thick pieces of fat as a snack. Consuming fat in this way can lead to pancreatitis or weight gain, and it can also be a choking hazard.</p>
      <h3 id="can-dogs-eat-beef-liver">Can dogs eat beef liver?</h3>
      <p>Yes - beef liver is full of iron, copper, zinc, vitamin A and vitamin B12 - all super important for a dog’s healthy coat and skin, and in the smooth-running of their internal bodily functions. Beef liver is also really tasty to dogs - just make sure it’s cooked and served plain.</p>
      <h3 id="can-dogs-eat-beef-pate">Can dogs eat beef pate?</h3>
      <p>No. Pate is so delicious to us humans, but that’s because it’s very high in salt and fat. Your dog will definitely love the taste of beef pate, too - but it’s best to avoid it, or else risk your pooch having a dodgy stomach all evening.</p>
      <h3 id="can-dogs-eat-beef-stock-cubes">Can dogs eat beef stock cubes?</h3>
      <p>No - dogs should never eat beef stock cubes or other kinds of gravy thickeners. Not only do they provide no nutritional value to a pooch, they can be dangerous, as lots of stock cubes contain onion which could cause haemolytic anaemia in some dogs. Stick to cuts of cooked beef - it’s much more appetising!</p>
      <h3 id="conclusion">Conclusion</h3>
      <p>Overall, beef is a top ingredient in a healthy dog diet; it’s delicious, high in protein, vitamins and minerals, and nutritious enough to take up the best part of a dog’s meal.</p>
      <p>The general rule is that lean cuts of beef are best, either roasted, grilled or pan-fried; and be sure never to add salt, seasoning, spices or other sauces.</p>
      <h3 id="what-other-foods-can-dogs-safely-eat">What other foods can dogs safely eat?</h3>
      <p>If you’re keen on including fresh beef in your dog’s diet but are curious about alternatives, you could try the following:</p>
      <b>Wet dog food with chicken and beef for a readily balanced protein-rich diet for dogs</b>
      <b>Beef jerky for dogs for a meaty, protein treat</b>
      <b>Wet dog food with fish for protein and essential fats that’s easy on digestion</b>
      <p>Ready to browse our range of nutritious grain-free food for dogs? We include nutritious lean proteins such as beef, chicken, turkey and fish in our dog food, packed full of nutrients to keep a dog healthy and full of life.</p>
`,
  headings: [
    { id: 'is-beef-good-for-dogs', text: 'Is beef good for dogs?', level: 2 },
    { id: 'what-are-the-health-benefits-of-beef', text: 'What are the health benefits of beef?', level: 3 },
    { id: 'when-is-beef-unsafe-for-dogs', text: 'When is beef unsafe for dogs?', level: 2 },
    { id: 'can-dogs-be-allergic-to-beef', text: 'Can dogs be allergic to beef?', level: 3 },
    { id: 'can-beef-make-dogs-sick', text: 'Can beef make dogs sick?', level: 3 },
    { id: 'how-to-safely-give-beef-to-your-dog', text: 'How to safely give beef to your dog?', level: 2 },
    { id: 'how-much-is-safe-to-give-your-dog', text: 'How much is safe to give your dog?', level: 3 },
    { id: 'can-puppies-eat-beef', text: 'Can puppies eat beef?', level: 2 },
    { id: 'what-types-of-beef-can-dogs-eat', text: 'What types of beef can dogs eat?', level: 2 },
    { id: 'can-dogs-eat-raw-beef', text: 'Can dogs eat raw beef?', level: 3 },
    { id: 'can-dogs-eat-mince', text: 'Can dogs eat mince?', level: 3 },
    { id: 'can-dogs-eat-corned-beef', text: 'Can dogs eat corned beef?', level: 3 },
    { id: 'can-dogs-eat-steak', text: 'Can dogs eat steak?', level: 3 },
    { id: 'can-dogs-eat-beef-bones', text: 'Can dogs eat beef bones?', level: 3 },
    { id: 'can-dogs-eat-beef-jerky', text: 'Can dogs eat beef jerky?', level: 3 },
    { id: 'can-dogs-eat-roast-beef', text: 'Can dogs eat roast beef?', level: 3 },
    { id: 'can-dogs-eat-beef-burgers', text: 'Can dogs eat beef burgers?', level: 3 },
    { id: 'can-dogs-eat-beef-fat', text: 'Can dogs eat beef fat?', level: 3 },
    { id: 'can-dogs-eat-beef-liver', text: 'Can dogs eat beef liver?', level: 3 },
    { id: 'can-dogs-eat-beef-pate', text: 'Can dogs eat beef pate?', level: 3 },
    { id: 'can-dogs-eat-beef-stock-cubes', text: 'Can dogs eat beef stock cubes?', level: 3 },
    { id: 'conclusion', text: 'Conclusion', level: 3 },
    { id: 'what-other-foods-can-dogs-safely-eat', text: 'What other foods can dogs safely eat?', level: 3 },
  ]

},
'what-is-alabama-rot': {
  title: 'What is Alabama Rot?',
  category: 'Pets',
  snippet: "Alabama Rot is a rare but serious disease in dogs that damages blood vessels in the skin and kidneys. It causes ulcers or sores on the skin and can lead to kidney failure. The exact cause is unknown, but it may be linked to environmental factors. Early symptoms include skin lesions, redness, or swelling, often on the legs or paws. Prompt veterinary attention is critical if symptoms appear.",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/BLOG_AUTUMN_WALKS_IMAGE_1_500x_crop_center.jpg?v=1730202745",
    alt: "What is Alabama Rot?",
    caption: "Causes of Alabama Rot in dogs"
  },
  content: `
<p>Alabama Rot is a rare, but very serious disease of the skin and kidneys that affects dogs.</p>
      <p>It’s also known as ‘Cutaneous and Renal Glomerular Vasculopathy’, or CRGV. It originated in the US in the 1980s, however, since 2012 there's been some reported cases in the UK.</p>
      <p>Being educated on Alabama Rot is one of the most important steps towards keeping your dog safe, so read on for more about this serious condition, so you can take quick action on its symptoms and seek treatment early.</p>
      <h2 id="causes-of-alabama-rot-in-dogs">Causes of Alabama Rot in dogs</h2>
      <p>Alabama Rot is a rare condition but can be very serious. The exact way in which dogs contract Alabama Rot remains unknown -  but it seems to be picked up by dogs that have spent time in muddy and wet woodland conditions. This can be worrying for dog owners, as this is a common environment for your dog to be in, especially in the UK!</p>
      <h3 id="is-alabama-rot-contagious">Is Alabama Rot contagious?</h3>
      <p>Alabama Rot seems to be linked only to environmental factors, and isn’t spread from dog to dog, or dog to human. So, rest assured that just because your dog may have met or spent time with another dog with Alabama Rot, they shouldn’t be at risk of catching it themselves.</p>
      <h2 id="symptoms-of-alabama-rot-to-watch-out-for">Symptoms of Alabama Rot to watch out for</h2>
      <p>As the causes and origins of Alabama Rot are so elusive, it’s crucial to be vigilant when looking out for symptoms.</p>
      <p>Here are the most obvious signs that your dog may have Alabama Rot:</p>
      <h3 id="what-does-alabama-rot-look-like">What does Alabama Rot look like?</h3>
      <p>The primary symptoms of Alabama Rot are sores or lesions on the body, mostly on your pooch’s lower legs and paws, and sometimes on the face, chest or abdomen. These sores will look like open wounds, starting out like mosquito bites, but may also resemble patches of swollen or inflamed skin. 

Your dog will seem agitated by these sores and may lick or nuzzle them a lot.</p>
      <p>If these sores go unnoticed or untreated, the next symptoms will be:</p>
      <ul>
        <li>Vomiting</li>
        <li>Lethargy</li>
        <li>Loss of appetite</li>
        <li>Increased thirst as the kidneys become infected</li>
      </ul>
      <p>Itchy skin and constant nibbling and scratching are common symptoms in dogs, and won't always mean the presence of Alabama Rot.

Dogs are also prone to a myriad of skin conditions that can be brought on by genetics, other health conditions and even allergies. If your vet has confirmed that Alabama Rot is not ﻿the cause of your dog's itchy skin, then you could turn to our Skin & Coat range for help.</p>
      <p>From our Skin & Coat Dry Food packed with herring, linseed and collagen to help keep skin clear and fur glossy, to our Salmon Oil, Skin & Coat Probiotic Meaty Treats and our super-powered Bionic Biotic supplement, this bundle of goodies has been specifically crafted to provide a helping paw when keeping your pooch's skin clear and healthy, and their coat soft and shiny.</p>
      <p>If signs of itching and sores are something new for your dog and you're worried about Alabama Rot, then always seek advice from your vet.</p>
      <p>How quickly does Alabama Rot develop?</p>
      <p>The beginning stage of Alabama Rot is when sores develop.</p>
      <p>It’s crucial that you act on these immediately and don’t just brush them off as a rash or insect bites. As Alabama Rot develops, the kidneys can be affected within 1-3 days of the sores appearing.</p>
      <p>If left untreated, it can lead to kidney damage, then kidney failure and even prove fatal within one week.</p>
      <h2 id="is-there-alabama-rot-in-the-uk">Is there Alabama rot in the UK?</h2>
      <p>Alabama Rot has been detected in the UK since 2012, but it’s extremely rare.</p>
      <p>Since then, there's been 318 confirmed cases - 10 of those in 2024 (figures correct as of October 2024)*.</p>
      <p>In terms of geographical regions with Alabama Rot, it's been found mostly in the south of England; Surrey, Berkshire, Staffordshire, Buckinghamshire and Herefordshire, Dorset, Wiltshire and a case in London.</p>
      <p>Though it’s important to be vigilant and aware of the symptoms of Alabama Rot, the statistics clearly depict how rare it is. Thousands of people walk their dogs in UK woodland every day without them catching this disease, so there’s no need to panic or avoid walking in rural areas with your pooch - though be cautious when it’s extremely wet and muddy.</p>
      <h3 id="are-some-dog-breeds-more-susceptible-to-alabama-rot">Are some dog breeds more susceptible to Alabama Rot?</h3>
      <p>There's no evidence that certain breeds are more prone to getting Alabama Rot than others, however there are breeds that are more represented among those affected.

They tend to be long-legged breeds such as Whippets, Greyhounds, Labradors and Springer Spaniels. It could be however, that these sorts of dogs are more likely to be running across larger areas of wet, rural areas, rather than genetics playing a part.

To be clear, Alabama Rot can affect any breed of dog.</p>
      <h2 id="how-can-i-stop-my-dog-from-getting-alabama-rot">How can I stop my dog from getting Alabama Rot?</h2>
      <p>Though it’s not certain where Alabama Rot comes from, you can practice caution by not taking your dog into muddy woodland areas during rain or after heavy rainfall.</p>
      <p>Though you don’t have to avoid taking your dog into nature, think twice before letting them run through damp, dense forest or areas with thick mud. Keep them on the lead at these times, and instead let them run free in areas that are less risky, such as dry and open fields, the park or the beach.

Most importantly, check your dog after walks in nature. Examine their skin closely for lesions or rashes - and take note if they seem to be licking or nuzzling themselves more often.

Remember that loss of appetite, vomiting and urinating more are also symptoms.</p>
      <h2 id="what-do-i-do-if-my-dog-shows-symptoms">What do I do if my dog shows symptoms?</h2>
      <p>If you notice skin sores and lesions in your dog - the first sign of Alabama Rot - it’s integral that you take them to a vet immediately for treatment.</p>
      <p>Remember that Alabama Rot develops very quickly, so don’t wait around. Get it treated as a matter of urgency.</p>
      <h3 id="how-is-alabama-rot-in-dogs-treated">How is Alabama Rot in dogs treated?</h3>
      <p>If your vet confirms that your dog has contracted Alabama Rot, they'll often follow this treatment plan:</p>
      <ul>
        <li>They'll treat the sores, flushing them with an antiseptic or saline solution and apply healing cream. The sores may be dressed and your dog may have to wear a buster collar/cone to prevent licking or chewing.</li>
        <li>They'll also do checks on your dog to assess whether it's spread to the kidneys or not. This involves a blood and urine test.</li>
        <li>If it has, your dog may require intravenous fluids to help support kidney function and maintain hydration.</li>
        <li>If your dog has advanced Alabama Rot and the kidneys are severely affected, they may require dialysis (if available).</li>
      </ul>
      <p>Your vet might suggest a specialist treatment called Total Plasma Exchange (TPE). At this stage, longer term kidney damage is likely to occur.</p>
      <h3 id="do-dogs-recover-from-alabama-rot">Do dogs recover from Alabama Rot?</h3>
      <p>Unfortunately, Alabama Rot has a very high fatality rate, particularly when it reaches the kidneys. This is why it’s so important to catch the disease early for treatment.</p>
      <p>If you treat it within days and your pooch only has the sores to deal with, they should recover within 1-3 weeks.</p>
      <p>If your dog's suffered kidney damage from Alabama Rot, that can take longer to recover from, or may even incur long term kidney problems.</p>
      <p>If they do recover, they'll need frequent veterinary check-ups and ongoing treatment throughout their lives.</p>
      <h3 id="does-alabama-rot-affect-other-animals">Does Alabama Rot affect other animals?</h3>
      <p>There's been no evidence yet that Alabama Rot affects other animals, it seems to be a canine disease that only impacts dogs.</p>
      <h3 id="should-i-be-worried-about-alabama-rot">Should I be worried about Alabama Rot?</h3>
      <p>Overall, Alabama Rot is a very rare disease with only a few hundred cases found in the UK over the last decade. You shouldn’t let the threat of this illness prevent you from taking your dog into nature, or enjoying a walk in the local woods.</p>
      <p>However, as Alabama Rot has such a high fatality rate and develops very quickly, you should be extremely vigilant when it comes to checking your dog for sores - and if possible, avoid taking your dog out into very muddy conditions or densely forested areas when it's rained heavily(particularly between autumn and spring).</p>
      <p>Finally, keep informed over whether Alabama Rot cases have been reported in your area, and limit walks in high-risk wooded areas if they have.</p>
      <section>References</section>
`,
  headings: [
    { id: 'causes-of-alabama-rot-in-dogs', text: 'Causes of Alabama Rot in dogs', level: 2 },
    { id: 'is-alabama-rot-contagious', text: 'Is Alabama Rot contagious?', level: 3 },
    { id: 'symptoms-of-alabama-rot-to-watch-out-for', text: 'Symptoms of Alabama Rot to watch out for', level: 2 },
    { id: 'what-does-alabama-rot-look-like', text: 'What does Alabama Rot look like?', level: 3 },
    { id: 'is-there-alabama-rot-in-the-uk', text: 'Is there Alabama rot in the UK?', level: 2 },
    { id: 'are-some-dog-breeds-more-susceptible-to-alabama-rot', text: 'Are some dog breeds more susceptible to Alabama Rot?', level: 3 },
    { id: 'how-can-i-stop-my-dog-from-getting-alabama-rot', text: 'How can I stop my dog from getting Alabama Rot?', level: 2 },
    { id: 'what-do-i-do-if-my-dog-shows-symptoms', text: 'What do I do if my dog shows symptoms?', level: 2 },
    { id: 'how-is-alabama-rot-in-dogs-treated', text: 'How is Alabama Rot in dogs treated?', level: 3 },
    { id: 'do-dogs-recover-from-alabama-rot', text: 'Do dogs recover from Alabama Rot?', level: 3 },
    { id: 'does-alabama-rot-affect-other-animals', text: 'Does Alabama Rot affect other animals?', level: 3 },
    { id: 'should-i-be-worried-about-alabama-rot', text: 'Should I be worried about Alabama Rot?', level: 3 },
  ]
},
'how-to-soften-dog-tartar-and-remove-plaque-without-a-vet': {
  title: 'How to soften dog tartar and remove plaque - without a vet',
  category: 'Pets',
  snippet: "Snippet not found",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/Father_s_Day_-_BODY_1_500x_crop_center.jpg?v=1708688801",
    alt: "How to soften dog tartar and remove plaque - without a vet",
    caption: "tartar-vs-plaque"
  },
  content: `
<p>We all want our dogs’ gnashers to remain bright and squeaky clean - but what if your dog won’t let you anywhere near their grin with a toothbrush? It’s in these scenarios that, over time, dental care can slip - meaning plaque and tartar can build up and cause issues for your dog.</p>
      <p>Plaque and tartar are responsible for a bunch of doggy dental problems, including the onset of painful periodontal disease. What’s more, hardened tartar that is left too long will need to be professionally removed by a vet.</p>
      <p>So, how can you take steps at home to protect your dog from the pitfalls of dodgy dental care?</p>
      <p>In this article, we’ll go into the differences between plaque and tartar, the risks they pose to your pooch, and how you can avoid these pesky issues by establishing a decent dental routine for your dog at home.</p>
      <h2 id="tartar-vs-plaque">tartar-vs-plaque</h2>
      <p>Firstly, what’s the difference between tartar and plaque? Well, both substances are bad news for a dog’s dental health, and require peak dental care in order to be kept at bay - but there are slight differences between them.</p>
      <p>Plaque is a sticky white substance that accumulates around the gums and surface of the teeth over time, causing bacteria to flourish. Without brushing, plaque builds up and leads to tooth decay, gum disease and tartar.</p>
      <p>Tartar is the result of excess plaque, mineralising and becoming hard. It is also known as dental calculus, due to the minerals in saliva calcifying the build-up of plaque.</p>
      <p>If you’re wondering ‘what does tartar look like?’ - to the eye, it looks like a yellowish white substance that hardens along the gumline, behind the teeth, in the roof of the mouth and under the tongue. It smells nasty, too - and is a big cause of bad breath in dogs.</p>
      <h3 id="why-are-plaque-and-tartar-bad-for-dogs">why-are-plaque-and-tartar-bad-for-dogs</h3>
      <p>Untreated plaque and tartar is full of bacteria that can wear down enamel and in time, lead to cavities, gum disease, infections and eventual tooth loss - all symptoms of periodontal disease.</p>
      <p>Though periodontal disease is extremely common (around 8 in 10 dogs will suffer symptoms at some point in their lifetime), it can be very painful and uncomfortable for a pooch - as we all know, toothache is one of the worst pains there is. When these problems occur, chewing and eating becomes much more difficult for a dog, and their quality of life is reduced.</p>
      <p>Not only this, bad dental problems can even lead to much more serious health issues in dogs that affect the heart, kidneys and liver. In short, your dog’s teeth need special attention sooner in life rather than later.</p>
      <h3 id="how-do-i-know-if-my-dog-has-plaque">how-do-i-know-if-my-dog-has-plaque</h3>
      <p>Your dog likely has plaque if you haven’t brushed their teeth or had them chew a dental stick in a few days, as it doesn’t take long for plaque to appear. If you lift your dog’s lips slightly with your fingers, you may be able to spot plaque gathering around the gumline. It can appear as a white mucus, or a slight yellowing on the surface of the teeth.</p>
      <h2 id="dog-tartar-build-up-how-does-it-happen">dog-tartar-build-up-how-does-it-happen</h2>
      <p>Now that we’ve established the difference between tartar and plaque, let’s go into some of the ways tartar can cause serious health issues in a pooch, and how you can get rid of tartar, if and when it appears.</p>
      <h3 id="why-does-my-dog-have-tartar">why-does-my-dog-have-tartar</h3>
      <p>As said above, tartar builds up when a dog hasn’t received adequate dental care or tooth brushing to remove plaque. Plaque which hasn’t been cleaned is eventually calcified by the minerals in the dog’s saliva, creating tartar - a hardened, smelly substance that takes up home in parts of a dog’s mouth.</p>
      <h3 id="are-certain-breeds-more-prone-to-dog-tartar">are-certain-breeds-more-prone-to-dog-tartar</h3>
      <p>Yes, some dog breeds are more prone to dental issues due to their genetics. Small dog breeds, such as Shih Tzus, Chihuahuas, Toy Poodles and Pomeranians have crowded teeth where plaque and tartar can quickly build.</p>
      <p>Other dogs prone to dental problems include Greyhounds, Dachshunds and Cocker Spaniels, and dogs with flat-snouted faces such as Boxers, Pugs and Bulldogs. These dogs will need special attention on their dental care to avoid issues later in life.</p>
      <h2 id="tartar-and-its-implications">tartar-and-its-implications</h2>
      <p>It’s vital to clean your dog’s teeth to remove plaque, as tartar that’s left in a dog’s mouth has serious health implications for a pooch, beyond just dental problems. Here are some of the ways in which tartar can cause major issues in a dog’s body…</p>
      <h3 id="health-issues-due-to-tartar-build-up">health-issues-due-to-tartar-build-up</h3>
      <ul>
        <li>Bad breath. An obvious one, but tartar is stinky and a huge reason for bad breath in dogs.</li>
        <li>Gum disease is super common in dogs - but tartar will cause symptoms of gum disease (pain, bleeding or receding gums) much sooner.</li>
        <li>Periodontal disease is basically late stage gum disease, where infections and abscesses occur in the mouth and in severe cases, lead to tooth loss.</li>
        <li>Tooth decay. Tartar makes the perfect environment for teeth to decay and rot, causing severe pain and discomfort for a pooch.</li>
        <li>Heart issues. It’s not totally understood, but there is evidence to suggest ongoing inflammation and infections in the mouth can travel through the body, leading to an immune response that causes heart issues.</li>
        <li>Kidney and liver dysfunction. For the same reasons, prolonged infection and inflammation in the mouth can cause a bodily response that causes the kidneys and liver to dysfunction.</li>
        <li>Jaw fractures. Advanced, untreated periodontal disease (caused by tartar build-up) can lead to a weakened jaw, leaving your poor pooch vulnerable to jaw fractures.</li>
      </ul>
      <h2 id="advanced-techniques-to-soften-dog-tartar">advanced-techniques-to-soften-dog-tartar</h2>
      <p>Now we’ve covered the evils of tartar build-up, how do we remove this stuff from your dog’s toothy grin? Once tartar has started to accumulate past a certain point, you’ll likely need to get your dog’s teeth professionally cleaned.</p>
      <p>Luckily, there are a few ways to soften the tartar at home to encourage removal.</p>
      <h3 id="tartar-control-toothpaste">tartar-control-toothpaste</h3>
      <p>Using dog toothpaste that targets tartar control is an easy way to take action on tartar straight away. Typically the toothpaste contains abrasive ingredients and enzymes that break down the formation of tartar, making it easier to remove.</p>
      <h3 id="water-flossers">water-flossers</h3>
      <p>Water flossers use a strong stream of water to act as doggy floss. When sprayed between teeth, a water flosser will clean away plaque and soften any tartar build-up that’s occurred. This should be done alongside other dental care, however, as it won’t be that effective on its own.</p>
      <h3 id="dental-massage">dental-massage</h3>
      <p>If your dog allows it, massaging their gums will help stimulate blood flow, increase saliva and disturb any stuck plaque or tartar in their mouth. It can also reduce stress in a dog, and get them used to mouth activity, making it easier to perform other dental care or procedures in future.</p>
      <h3 id="professional-dental-cleaning">professional-dental-cleaning</h3>
      <p>When tartar appears, a lot of pooch parents choose to get their dog’s teeth professionally cleaned, and may even opt for dental lasers to stimulate gums and tackle tough plaque. If your pooch has severe tartar, there’s often no other option but to take them to a vet or doggy dentist to remove it.</p>
      <h3 id="how-much-does-dog-tartar-removal-cost">how-much-does-dog-tartar-removal-cost</h3>
      <p>To get tartar professionally removed, it can cost anything from £150 to £600 depending on where you live, and how thorough the procedure.</p>
      <h3 id="can-tartar-removal-be-painful-for-my-dog">can-tartar-removal-be-painful-for-my-dog</h3>
      <p>Often, a dog will be put under general anaesthetic to get tough tartar removed. This is because they might be under a lot of stress, discomfort and pain at this stage in their dental care and it’s easier if they’re completely docile for the treatment. Your pooch might be given painkillers for any mouth pain they experience afterwards.</p>
      <h2 id="preventing-plaque-build-up">preventing-plaque-build-up</h2>
      <p>Now let’s get into the ways plaque - the cause of tartar - can be removed from your dog’s precious pegs to improve their all-round dental health.</p>
      <h2 id="best-plaque-removers-for-dogs">best-plaque-removers-for-dogs</h2>
      <p>Here are some easy tools and methods to prevent plaque build-up in dogs…</p>
      <h3 id="regular-brushing">regular-brushing</h3>
      <p>The hero method for doggy dental care will always be regular brushing, using a dog toothbrush and special dog toothpaste. Getting a dog used to having their teeth brushed from a young age (around 6-months, ideally) means it’ll be much easier to brush them throughout their lives. You can start a brushing routine at any age, though - read more about introducing tooth brushing to your pooch.</p>
      <h3 id="dental-chews-and-chew-bones">dental-chews-and-chew-bones</h3>
      <p>The next best thing to brushing (but not a replacement for it) is dental chews. This includes healthy dental sticks for dogs, in tasty flavours such as peanut butter, and dental chew bones. At Pooch & Mutt, we also have long-lasting dog chews made of natural fish skin which are great for cleaning teeth. This is because the action of chewing helps stimulate a dog’s gums and breaks down plaque that could be building up on the teeth.</p>
      <h3 id="enzymatic-dental-treats">enzymatic-dental-treats</h3>
      <p>Some specialist dental treats contain enzymes such as protease, amylase, and glucose oxidase. These smart enzymes break down the components of plaque on the teeth while your pooch enjoys a chewing session.</p>
      <h3 id="fruit-and-veggies">fruit-and-veggies</h3>
      <p>Giving a dog a nutritious fruit or veggie to chew on, such as apple chunks or a peeled carrot, is an excellent way for a dog to strengthen and clean their own teeth, and stimulate gums.</p>
      <h3 id="water-additives">water-additives</h3>
      <p>Dental additives can be given to a dog via their water, containing active ingredients that break down plaque and wash away bacteria in the mouth.</p>
      <h3 id="oral-gels-and-rinses">oral-gels-and-rinses</h3>
      <p>An oral gel or rinse for dogs is a great way to get some antibacterial solution into a dog’s mouth to freshen up, similar to a mouthwash for humans.</p>
      <h3 id="dental-wipes-and-sprays">dental-wipes-and-sprays</h3>
      <p>Dental wipes are a good supplement to regular dental care, especially if your dog doesn’t like their teeth being brushed at all. The textured wipes are soaked in antibacterial solution and can be rubbed along a dog’s teeth and gums with your fingers - the texture helps rub plaque away. Dental sprays can also help.</p>
      <h3 id="professional-cleaning">professional-cleaning</h3>
      <p>As mentioned, getting your dog’s teeth cleaned professionally on a regular basis can do wonders for their overall dental health. How often to get your dog’s teeth professionally cleaned depends on how thorough your dog’s dental routine is, but vets recommend a check-up at least once a year to assess your dog’s teeth.</p>
      <h2 id="how-to-make-dog-teeth-cleaning-easy-and-fun">how-to-make-dog-teeth-cleaning-easy-and-fun</h2>
      <p>The issue with so many dog owners is that they want to brush their dog’s teeth, but their dog baulks at the mere glimpse of a toothbrush! We know how frustrating this can be when you want to do what’s best for your dog’s dental health and keep them safe from periodontal disease.</p>
      <p>There are ways to slowly introduce teeth cleaning into your dog’s schedule,, so that over time, they get used to the process.</p>
      <h3 id="whats-the-best-method-for-cleaning-my-dogs-teeth">whats-the-best-method-for-cleaning-my-dogs-teeth</h3>
      <p>Regular brushing is the best way to keep your dog’s teeth clean, alongside supplementary dental sticks, chew toys and annual dental check-ups. Here’s our in-depth advice for cleaning a dog’s teeth.</p>
      <h2 id="when-to-seek-expert-advice…">when-to-seek-expert-advice…</h2>
      <p>No matter how hard you try, sometimes you simply can’t get a toothbrush near a dog’s mouth. If you’re starting to worry about your dog’s dental hygiene, or if they don’t enjoy dental sticks or respond well to any alternative dental care methods, don’t shrug it off - be sure to ask a vet for advice.</p>
      <p>If you’ve spotted any other signs of plaque build-up, tartar or gum disease (mouth pain, reddening and/or bleeding gums, excessive drooling, bad breath), these are also signs you should get your pooch to a vet as soon as possible. FAQs We’re almost done with this plaque profile!</p>
      <p>Here are some final questions on removing plaque and tartar from a dog’s mouth and teeth...</p>
      <h3 id="how-can-coconut-oil-assist-in-tartar-removal">how-can-coconut-oil-assist-in-tartar-removal</h3>
      <p>There’s some anecdotal evidence that coconut oil can help remove a dog’s tartar. It contains lauric acid, which helps break down tough tartar, and the sweet taste can be pleasant for pooches. You can try rubbing coconut oil into your dog’s mouth as a supplementary treatment to see if it works, but this shouldn’t replace regular dental care.</p>
      <h3 id="can-i-use-human-toothpaste-for-my-dogs-teeth">can-i-use-human-toothpaste-for-my-dogs-teeth</h3>
      <p>No - it’s best to avoid any human products for dogs, as their bodies are more sensitive than ours and they have different needs. One reason to avoid human toothpaste is it tends to contain fluoride, which is potentially toxic to dogs if ingested. Special dog toothpastes are a safer option, and they often come in meaty flavours which are tastier for them.</p>
      <h3 id="can-dog-food-clean-my-dogs-teeth">can-dog-food-clean-my-dogs-teeth</h3>
      <p>Though evidence is limited, some vets recommend switching to dry dog food instead of wet food for dental care, as the crunchiness of dry food may help clean plaque off a dog’s teeth (in the same way that chewing dental sticks would). If your dog’s on a wet food diet, perhaps try introducing a handful of dry food to see if this helps?</p>
      <p>If you want to supplement your pooch’s tooth-brushing routine with nutritious dental treats, try our range of tasty dental sticks for dogs and our nifty long-lasting chews.</p>
      <section>References</section>
`,
  headings: [
    { id: 'tartar-vs-plaque', text: 'tartar-vs-plaque', level: 2 },
    { id: 'why-are-plaque-and-tartar-bad-for-dogs', text: 'why-are-plaque-and-tartar-bad-for-dogs', level: 3 },
    { id: 'how-do-i-know-if-my-dog-has-plaque', text: 'how-do-i-know-if-my-dog-has-plaque', level: 3 },
    { id: 'dog-tartar-build-up-how-does-it-happen', text: 'dog-tartar-build-up-how-does-it-happen', level: 2 },
    { id: 'why-does-my-dog-have-tartar', text: 'why-does-my-dog-have-tartar', level: 3 },
    { id: 'are-certain-breeds-more-prone-to-dog-tartar', text: 'are-certain-breeds-more-prone-to-dog-tartar', level: 3 },
    { id: 'tartar-and-its-implications', text: 'tartar-and-its-implications', level: 2 },
    { id: 'health-issues-due-to-tartar-build-up', text: 'health-issues-due-to-tartar-build-up', level: 3 },
    { id: 'advanced-techniques-to-soften-dog-tartar', text: 'advanced-techniques-to-soften-dog-tartar', level: 2 },
    { id: 'tartar-control-toothpaste', text: 'tartar-control-toothpaste', level: 3 },
    { id: 'water-flossers', text: 'water-flossers', level: 3 },
    { id: 'dental-massage', text: 'dental-massage', level: 3 },
    { id: 'professional-dental-cleaning', text: 'professional-dental-cleaning', level: 3 },
    { id: 'how-much-does-dog-tartar-removal-cost', text: 'how-much-does-dog-tartar-removal-cost', level: 3 },
    { id: 'can-tartar-removal-be-painful-for-my-dog', text: 'can-tartar-removal-be-painful-for-my-dog', level: 3 },
    { id: 'preventing-plaque-build-up', text: 'preventing-plaque-build-up', level: 2 },
    { id: 'best-plaque-removers-for-dogs', text: 'best-plaque-removers-for-dogs', level: 2 },
    { id: 'regular-brushing', text: 'regular-brushing', level: 3 },
    { id: 'dental-chews-and-chew-bones', text: 'dental-chews-and-chew-bones', level: 3 },
    { id: 'enzymatic-dental-treats', text: 'enzymatic-dental-treats', level: 3 },
    { id: 'fruit-and-veggies', text: 'fruit-and-veggies', level: 3 },
    { id: 'water-additives', text: 'water-additives', level: 3 },
    { id: 'oral-gels-and-rinses', text: 'oral-gels-and-rinses', level: 3 },
    { id: 'dental-wipes-and-sprays', text: 'dental-wipes-and-sprays', level: 3 },
    { id: 'professional-cleaning', text: 'professional-cleaning', level: 3 },
    { id: 'how-to-make-dog-teeth-cleaning-easy-and-fun', text: 'how-to-make-dog-teeth-cleaning-easy-and-fun', level: 2 },
    { id: 'whats-the-best-method-for-cleaning-my-dogs-teeth', text: 'whats-the-best-method-for-cleaning-my-dogs-teeth', level: 3 },
    { id: 'when-to-seek-expert-advice…', text: 'when-to-seek-expert-advice…', level: 2 },
    { id: 'how-can-coconut-oil-assist-in-tartar-removal', text: 'how-can-coconut-oil-assist-in-tartar-removal', level: 3 },
    { id: 'can-i-use-human-toothpaste-for-my-dogs-teeth', text: 'can-i-use-human-toothpaste-for-my-dogs-teeth', level: 3 },
    { id: 'can-dog-food-clean-my-dogs-teeth', text: 'can-dog-food-clean-my-dogs-teeth', level: 3 },
  ]
},



'what-colour-should-my-dog-s-gums-be': {
  title: 'What colour should my dog’s gums be? Healthy vs Unhealthy gum chart',
  category: 'Pets',
  snippet: "Snippet not found",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/BLOG_DENTAL_HEALTH_MONTH_GUMS_1_500x_crop_center.jpg?v=1708006878",
    alt: "What colour should my dog’s gums be? Healthy vs Unhealthy gum chart",
    caption: "what-colour-should-dogs-gums-be"
  },
  content: `
<p>Doggy dental issues can have the most hands-on dog owners dumbfounded - especially when it comes to gum health. How exactly should healthy gums look on a dog? What do different coloured gums mean? If your dog has pale gums, is this bad? What should you do next?</p>
      <p>Don’t sweat it, as the answers to all your questions about dog gums will be answered here - so read on, and be prepared to get gummy with your pooch. ‍</p>
      <h2 id="what-colour-should-dogs-gums-be">what-colour-should-dogs-gums-be</h2>
      <p>To start, let’s get into the ideal healthy gums for a dog. Ideally, dogs’ gums should be pink, almost like bubblegum or uncooked salmon. However, some dogs have mottled or dark gums, depending on their breed.</p>
      <p>When you press them with your finger, they should go pale for a second then flood back to pink (or mottled) almost immediately. They should also be shiny because they’re wet - this is an indicator that your dog is well hydrated.</p>
      <p>Get your pooch into a relaxed position and carefully pull their lips down or up with your fingers, and you should be able to see the condition their gums are in.</p>
      <h2 id="healthy-vs-unhealthy-gum-chart">healthy-vs-unhealthy-gum-chart</h2>
      <p>We’ve put together a nifty reference chart so you can clearly see what may be an indicator of unhealthy gums, as well as some more info around tip-top pooch gums.</p>
      <h3 id="healthy-dog-gum-colours">healthy-dog-gum-colours</h3>
      <p>As said above, healthy dog gums should be one of the below colours, wet and slick to the touch (not dry or sticky); and pink gums should quickly flood back to pink when you press them.</p>
      <ul>
        <li>Pink - a bubble gum or salmon pink</li>
        <li>Mottled - some dog breeds such as Chow-Chows or Shar Peis have gums that are partially pink with mottled black or dark patches</li>
        <li>Black - some dogs have completely black gums. If they’ve always been black since being a puppy, this is their healthy gum colour</li>
      </ul>
      <h3 id="unhealthy-dog-gum-colours">unhealthy-dog-gum-colours</h3>
      <p>Dogs who have the following gum colours may need special attention, as this can indicate underlying health conditions:</p>
      <ul>
        <li>Red gums could be a sign of gingivitis. Deep, cherry red gums are a cause for concern, as this could indicate carbon monoxide poisoning, other kinds of poisoning, heatstroke or hypertension. If the gums are just inflamed (a deep pink colour), this could be from your dog being excited or hot. You’ll know this, as the gums will soon return to their regular pink colour). However, if the red colour appears for no obvious reason, or doesn’t fade to pink again, you should take your pooch to the vet immediately.</li>
        <li>Yellow is another worrying gum colour for dogs. It could be a sign of liver dysfunction, or something else not quite right in the body. It will often be accompanied by yellowing of your dog’s eyes, so look out for that, too.</li>
        <li>Blue or Purple gums can indicate that an inadequate amount of oxygen is being pumped around your dog’s body, which could be a sign of a serious problem. Medically, it’s called cyanosis, and could mean your pooch has pneumonia, a heart condition or other respiratory issues.</li>
        <li>Dark Spots on the gums can just be a result of ageing, or it could indicate an infection, or something more serious like an autoimmune disorder. If you notice new dark spots on your dog’s gums, get in touch with a vet.</li>
        <li>Black gums (which weren’t black before) could be a sign of infection or periodontal disease.</li>
        <li>Pale or white gums could point to a number of serious health issues in your pooch. Below we’ll go into this in more depth…</li>
      </ul>
      <h3 id="pale-and-white-gums-in-dogs">pale-and-white-gums-in-dogs</h3>
      <p>Pale or white dog gums may be a concerning prospect for you as a dog owner. You might wonder, what’s the difference between pale gums and normal gums in a dog? The truth is that pale gums are a warning sign for pooch parents - they mean something is wrong, and it’s likely you’ll need to seek emergency vet care.</p>
      <h3 id="what-causes-white-or-pale-gums-in-dogs">what-causes-white-or-pale-gums-in-dogs</h3>
      <p>Here are some of the serious health issues which might lead to pale gums in your dog:</p>
      <ul>
        <li>Anaemia, meaning a lack or malfunctioning of red blood cells</li>
        <li>Blood loss / internal bleeding perhaps due to an injury, organ dysfunction or serious gastrointestinal issues</li>
        <li>Shock, usually accompanied by a drastic change in behaviour such as trembling</li>
        <li>Blood clotting disorders such as haemophilia or liver disease</li>
        <li>Heavy metal toxicity, i.e. an excess of metals such as lead or copper building up in the dog’s body</li>
        <li>Rat poison, which your dog may have accidentally ingested Bloat, usually accompanied by a swollen stomach, pain and discomfort</li>
        <li>Heart disease can cause bad circulation, presenting as pale gums</li>
        <li>Pain or anxiety perhaps from surgery, trauma or an injury</li>
        <li>Parasite infections such as ticks, or infection of tick-borne diseases</li>
        <li>Cold temperatures that are much lower than normal</li>
        <li>Sedentary behaviour in your dog for an extended amount of time</li>
        <li>Dehydration, as this leads to an overall depletion of blood in the body</li>
        <li>Cancer, as some cancers can lead to internal bleeding or anaemia</li>
      </ul>
      <h3 id="how-to-check-your-dog-for-pale-gums">how-to-check-your-dog-for-pale-gums</h3>
      <p>Check your dog’s gums regularly, so that you’re made aware of pale gums as soon as possible. You should also check them as routine if your dog is showing any other signs of illness, pain or distress.</p>
      <p>To do this, ensure your dog is calm enough to have their mouth touched. Get them into a safe position and gently push their lips away from their teeth with clean fingers. You should be able to clearly see the colour of your dog’s gums. Push lightly against the gums with your fingers, and test if the former pinkness of the gums floods back. If the gums stay pale, i.e. the colour doesn’t return quickly or at all, this is an emergency situation.</p>
      <h2 id="what-to-do-if-your-dog-has-pale-gums">what-to-do-if-your-dog-has-pale-gums</h2>
      <p>If your pooch has pale gums, immediately get in touch with a vet. As pale gums can be an indication of many different things, take note of any other symptoms in your dog, and be prepared to give a full rundown to a vet.</p>
      <h3 id="how-do-vets-treat-pale-gums-in-dogs">how-do-vets-treat-pale-gums-in-dogs</h3>
      <p>Once your dog with pale gums is at the vet, they’ll conduct a few tests. Taking into consideration your notes on your dog’s symptoms and behaviour, they’ll physically examine your pooch, and possibly take some blood tests including blood pressure, urine tests or an x-ray.</p>
      <p>Further tests may be carried out based on the results, so that your vet can identify the underlying issue in your dog and prescribe suitable treatment. ‍</p>
      <h3 id="how-can-i-prevent-my-dogs-gums-from-becoming-pale">how-can-i-prevent-my-dogs-gums-from-becoming-pale</h3>
      <p>Since there are so many conditions that lead a dog to have pale gums; an internal injury, ingestion of rat poison, or even cancer - sometimes pale gums aren’t something to prevent, but are more an indication of something that needs urgent attention. In that sense, you could say pale gums are a helpful warning.</p>
      <p>That said, there are plenty of ways to keep your dog as safe as possible and ensure they live a healthy lifestyle. This includes taking them for regular check-ups at the vets, supervising them at all times (especially when outside), dog-proofing your house, feeding a nutritionally balanced diet, keeping them well-groomed (including brushing their teeth), and ensuring they get varied, daily exercise.</p>
      <h2 id="other-signs-of-unhealthy-dog-gums">other-signs-of-unhealthy-dog-gums</h2>
      <p>Aside from strange colours, there are other signs of unhealthy gums to really pay attention to. The following factors could indicate internal health issues in your dog, or might be signs of periodontal disease:</p>
      <ul>
        <li>Tacky / dry gums, which usually indicate dehydration</li>
        <li>Swollen / inflamed gums perhaps due to tooth infection or abscess</li>
        <li>Bleeding gums during brushing or when your pooch is chewing or eating</li>
        <li>Bad breath, much worse than usual</li>
        <li>Gum overgrowth - a common issue when dogs have gum disease, but some dog breeds are predisposed to it. It could also indicate hormonal changes, or be a reaction to medication</li>
        <li>Receding gums are usually a sign of gum disease</li>
        <li>Growths / warts / ulcers on the gums are very common, but should still be treated quickly to avoid pain or discomfort If you notice any of the above signs, get your pooch to a vet or for a dental check-up quickly</li>
      </ul>
      <h2 id="ways-to-keep-your-dogs-gums-healthy">ways-to-keep-your-dogs-gums-healthy</h2>
      <p>By this point, you’re probably looking for ways to prevent unhealthy gums in your dog. Here are some tips for dog dental care that you can put into action with your pooch straight away…</p>
      <ul>
        <li>Schedule regular, professional dental cleaning. Just like you, your pooch needs to get their mouth regularly looked at by a dog dentist or vet - they can analyse any burgeoning issues and get ahead of dental problems with the right treatment.</li>
        <li>Brush your dog's teeth. We know. For a lot of dogs, this is a palaver! However, you can slowly train your dog to accept teeth-cleaning, and the earlier you start the better. Here are some step-by-step tips on brushing your dog’s teeth.</li>
        <li>Dog tooth-brushing alternatives. If brushing is a nightmare, you can at least supplement your dog’s dental routine with dental sticks for dogs, chewy veggies (carrots, anyone?) or even dog mouth sprays.</li>
        <li>The right diet. Getting the right nutrition is the route to a healthy dog mouth, including teeth, tongue and gums. Invest in a nutritionally-balanced diet for your dog, full of fresh ingredients and supplements… and no sugary treats!</li>
        <li>Give your dog dental treats and toys. You can get dental treats for dogs, long-lasting dog chews and chew toys that are all great for doggy dental care. Did you know that chewing releases endorphins for dogs, as well as cleaning their teeth?</li>
      </ul>
      <h2 id="dog-gum-health-checklist">dog-gum-health-checklist</h2>
      <p>We’re almost done on dog gums! For easy reference, let’s summarise the signs of healthy gums in a dog:</p>
      <p>✔ Salmon or bubblegum pink in colour (or black, or pink with dark patches if they’ve always been this way)</p>
      <p>✔ Colour quickly floods back to pink after being pressed</p>
      <p>✔ Slippery and wet to indicate hydration</p>
      <p>✔ Gums free of abscesses, receding and tartar buildup. If they do have these things, don’t worry as this is very common - but take them to a doggy dentist for a check-up</p>
      <h2 id="faqs">faqs</h2>
      <h3 id="how-often-should-you-check-your-dogs-gums">how-often-should-you-check-your-dogs-gums</h3>
      <p>You should be very familiar with your dog’s mouth, as dental care should be part of a regular grooming routine for your pooch. Gently pull down your dog’s lips with clean fingers, if you can, to check the condition of your dog’s gums regularly - even as often as every week. If your dog is poorly or behaving strangely, check their gums then too.</p>
      <h3 id="should-my-dogs-gums-be-black">should-my-dogs-gums-be-black</h3>
      <p>If your dog’s gums have always been black, for instance if they’re a breed predisposed to black gums such as a Chow-Chow, then black gums are healthy.</p>
      <p>However, if your pooch had pink gums at some point, or just pink with dark patches, and the gums have gone entirely black, this is something you’ll need to report to a vet.</p>
      <h3 id="how-can-i-tell-if-my-dog-has-gum-disease">how-can-i-tell-if-my-dog-has-gum-disease</h3>
      <p>Gum disease is extremely common in dogs, but that doesn’t mean you shouldn’t pay special attention to get it treated. Signs of gum disease in dogs will include swelling or inflamed gums, gums that bleed easily, receding gums, bad breath, or a lot of plaque and tartar buildup.</p>
      <h3 id="what-if-im-not-sure-if-my-dogs-gums-are-pale">what-if-im-not-sure-if-my-dogs-gums-are-pale</h3>
      <p>If your dog’s gums are usually bright pink and seem paler than usual, that’s a sign enough that you should get your dog to a vet to rule out anything serious going on. It’s better to be safe than sorry when it comes to pale gums.</p>
      <p>Aside from this, be sure to get familiar with your dog’s mouth and the usual colour of their gums, so you can spot anything strange going on as soon as it happens.</p>
      <h3 id="are-there-any-home-remedies-for-dogs-with-pale-gums">are-there-any-home-remedies-for-dogs-with-pale-gums</h3>
      <p>No - pale gums aren’t a condition in themselves, but a sign of something serious going on in your dog. Don’t look for home remedies, and get your pooch to a vet straight away.</p>
      <h3 id="are-pale-gums-a-sign-of-cancer-in-dogs">are-pale-gums-a-sign-of-cancer-in-dogs</h3>
      <p>It’s a possibility that they could be a sign of cancer - so if you spot pale gums in your pooch, get them to a vet right away to be sure. Pale gums are a sign of lots of things, not only cancer - but are still a cause for concern, so shouldn’t be ignored.</p>
      <h3 id="how-does-diet-affect-my-dogs-gums">how-does-diet-affect-my-dogs-gums</h3>
      <p>Diet impacts all parts of a dog’s body and physical condition - including the gums. Make sure your dog gets the right nutrition (definitely a good amount of vitamins C and E, and avoid sugary foods) as this goes a long way in protecting gum health.</p>
      <p>That said, gum disease is extremely common in dogs, even those that eat a healthy diet. Combining a well-balanced diet with a regular dog dental routine is the golden rule.</p>
      <p>If you’re primed to perfect your dog’s dental care, Pooch & Mutt have a bunch of delicious dog dental sticks, long-lasting dog chews and dental treats for dogs - all made with healthy, natural ingredients to boost your dog’s teeth, gums, body and mind.</p>
      <section>References</section>
`,
  headings: [
    { id: 'what-colour-should-dogs-gums-be', text: 'what-colour-should-dogs-gums-be', level: 2 },
    { id: 'healthy-vs-unhealthy-gum-chart', text: 'healthy-vs-unhealthy-gum-chart', level: 2 },
    { id: 'healthy-dog-gum-colours', text: 'healthy-dog-gum-colours', level: 3 },
    { id: 'unhealthy-dog-gum-colours', text: 'unhealthy-dog-gum-colours', level: 3 },
    { id: 'pale-and-white-gums-in-dogs', text: 'pale-and-white-gums-in-dogs', level: 3 },
    { id: 'what-causes-white-or-pale-gums-in-dogs', text: 'what-causes-white-or-pale-gums-in-dogs', level: 3 },
    { id: 'how-to-check-your-dog-for-pale-gums', text: 'how-to-check-your-dog-for-pale-gums', level: 3 },
    { id: 'what-to-do-if-your-dog-has-pale-gums', text: 'what-to-do-if-your-dog-has-pale-gums', level: 2 },
    { id: 'how-do-vets-treat-pale-gums-in-dogs', text: 'how-do-vets-treat-pale-gums-in-dogs', level: 3 },
    { id: 'how-can-i-prevent-my-dogs-gums-from-becoming-pale', text: 'how-can-i-prevent-my-dogs-gums-from-becoming-pale', level: 3 },
    { id: 'other-signs-of-unhealthy-dog-gums', text: 'other-signs-of-unhealthy-dog-gums', level: 2 },
    { id: 'ways-to-keep-your-dogs-gums-healthy', text: 'ways-to-keep-your-dogs-gums-healthy', level: 2 },
    { id: 'dog-gum-health-checklist', text: 'dog-gum-health-checklist', level: 2 },
    { id: 'faqs', text: 'faqs', level: 2 },
    { id: 'how-often-should-you-check-your-dogs-gums', text: 'how-often-should-you-check-your-dogs-gums', level: 3 },
    { id: 'should-my-dogs-gums-be-black', text: 'should-my-dogs-gums-be-black', level: 3 },
    { id: 'how-can-i-tell-if-my-dog-has-gum-disease', text: 'how-can-i-tell-if-my-dog-has-gum-disease', level: 3 },
    { id: 'what-if-im-not-sure-if-my-dogs-gums-are-pale', text: 'what-if-im-not-sure-if-my-dogs-gums-are-pale', level: 3 },
    { id: 'are-there-any-home-remedies-for-dogs-with-pale-gums', text: 'are-there-any-home-remedies-for-dogs-with-pale-gums', level: 3 },
    { id: 'are-pale-gums-a-sign-of-cancer-in-dogs', text: 'are-pale-gums-a-sign-of-cancer-in-dogs', level: 3 },
    { id: 'how-does-diet-affect-my-dogs-gums', text: 'how-does-diet-affect-my-dogs-gums', level: 3 },
  ]
},



'is-rawhide-bad-for-dogs': {
  title: 'Is rawhide bad for dogs?',
  category: 'Pets',
  snippet: "Snippet not found",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/BLOG_FISH_HIDE_VS_RAW_HIDE_2_500x_crop_center.jpg?v=1707837271",
    alt: "Is rawhide bad for dogs?",
    caption: "what-is-rawhide"
  },
  content: `
<p>The answer to this question is… yes, a rawhide is a risk-heavy chew for a dog. This old-school dog treat is now seen as pretty controversial - in fact, at Pooch & Mutt we aren’t fans of rawhide at all.</p>
      <p>Rawhide has been popular for one big reason; because dogs love to chew. Chewing is more than just a habit for a dog, it actually releases endorphins, keeping them relaxed and content. This is why a dog with a tasty bone or chew toy is an age-old image we all recognise.</p>
      <p>So what’s the problem with rawhide? What are the dangers of giving rawhide to a dog, and is there something else you can give your pooch to chew on instead? (Spoiler alert: yes, there is!).</p>
      <p>Read on, because in this article we’ll answer all the tricky questions you might have about whether rawhide is bad for dogs and offer some brilliant long-lasting chew alternatives.</p>
      <h2 id="what-is-rawhide">what-is-rawhide</h2>
      <p>You might know that dogs will spend hours chewing on rawhide, but what exactly is it? Let’s get into more detail about what rawhide is made of and how it’s produced...</p>
      <h3 id="what-is-rawhide-made-of">what-is-rawhide-made-of</h3>
      <p>Rawhide is basically the dried-out skin of an animal, such as a cow or horse. It is a waste product of the meat industry - not intended for a dog’s consumption, but just for chewing.</p>
      <p>Rawhide can be formed into many shapes such as a bone, strip or twist, and basically looks and feels like a solid chew. This is where the confusion comes in when it comes to commercial rawhide - it’s marketed as something a dog might eventually eat, when it’s not really safe for a dog to consume any of it. Read on for why...</p>
      <h3 id="how-rawhide-is-made">how-rawhide-is-made</h3>
      <p>The process of making rawhide is another reason why it’s deemed controversial. Making rawhide involves a very aggressive process of drying out, colouring and preserving, which requires a lot of strong chemical products.</p>
      <ul>
        <li>Processing. When the hides are removed from the animal they go through a vigorous process of cleaning, dehairing and drying out.</li>
        <li>Colouring. The hides are often patchy-coloured and may appear dirty, so are bleached in strong chemicals (often toxic to dogs) to ensure a more appetising, uniform colour.</li>
        <li>Preserving. The hide needs to last a long time without decaying and stay in its intended shape - so it’s then packed with artificial preservatives for longevity.</li>
      </ul>
      <p>You may have guessed this, but there’s a risk that the chemicals and preservatives in your dog’s rawhide will transfer to your dog’s digestive system while they’re chewing on it. These toxic substances can cause all kinds of side effects in your dog, from stomach upsets to allergic reactions.</p>
      <h2 id="is-rawhide-safe-for-dogs">is-rawhide-safe-for-dogs</h2>
      <p>Plenty of dogs chew on rawhide - it has been a popular dog product for a long time - but recently, dog owners are seeking out alternatives. It’s become somewhat of a controversial product, not only due to its chemical-heavy production but the risks that come from a dog ingesting it.</p>
      <h3 id="what-makes-some-rawhide-dangerous">what-makes-some-rawhide-dangerous</h3>
      <p>Here are some of the biggest reasons rawhide is considered a risky treat to give to your dog…</p>
      <ul>
        <li>Choking hazards All dogs chew differently - some small dogs have small teeth that may break off tiny pieces of rawhide; then there are larger dogs that are able to break down even the toughest of chews. This is where the risk heightens with rawhide - it isn’t intended for consumption, but dogs can easily end up swallowing and choking on pieces of splintered rawhide. At the very least, the sharp pieces that break off can hurt your dog, cutting their mouth or even causing damage internally.</li>
        <li>Digestive blockages If a dog manages to break off a piece of rawhide to eat or even swallows the whole thing, that can result in dangerous blockages in the stomach, bowels or intestine. This can be uncomfortable and distressing, or even prove fatal to a dog.</li>
        <li>Chemicals / toxins The toxic chemicals used to produce pieces of rawhide are dangerous for a dog and shouldn’t be ingested. This is worrying when the rawhide becomes visibly smaller over time, and pieces are swallowed by the dog.</li>
        <li>Dental issues Though chewing is recognised as beneficial for a dog’s dental health, some dogs can chew so hard on a rawhide, they eventually end up damaging or cracking their teeth.</li>
      </ul>
      <h2 id="should-i-avoid-rawhide-altogether">should-i-avoid-rawhide-altogether</h2>
      <p>Whether to avoid giving rawhide to your dog is a personal choice, but if you’re asking us at Pooch & Mutt - yes, you should avoid it! Rawhide is an old-school dog product, and we believe dog owners should switch to the safer alternatives to rawhide now available.</p>
      <p>That said, if you still want to give rawhide to your pooch, you should supervise every chewing session to make sure they don’t break or ingest it.</p>
      <h2 id="worried-after-your-dog-has-eaten-rawhide">worried-after-your-dog-has-eaten-rawhide</h2>
      <p>If your dog has eaten rawhide, you’re right to be somewhat concerned. The size of the swallowed piece will have some impact on what happens next, but even a small piece could have dangerous small splinters or shards, so the best thing to do is call your vet for advice.</p>
      <p>The most likely occurrence is that your dog may develop a stomach ache and have trouble passing it, but there is also the risk of intestinal blockage or bowel obstruction. In the worst case, this can be fatal for a dog. A vet will know the best course of action.</p>
      <h2 id="what-can-i-give-my-dog-instead-of-rawhide">what-can-i-give-my-dog-instead-of-rawhide</h2>
      <p>We thought you’d never ask! There are excellent alternatives to rawhide available - long-lasting chews that, unlike rawhide, are non-toxic and therefore fine for a dog to consume over time. The best rawhide alternatives contain natural ingredients, and are processed gently, without any of the toxic preservatives and chemicals.</p>
      <p>At Pooch & Mutt, we use safe, tasty fish skin to create our long-lasting rawhide alternatives. Here’s a bit more about them:</p>
      <h3 id="the-best-rawhide-alternative-chews">the-best-rawhide-alternative-chews</h3>
      <p>Here are some of the rawhide alternatives we recommend you to give to your pooch:</p>
      <p>100% Cod Fish Hide Chew</p>
      <p>Our all-natural fish skin hide is made of 100% gently rolled cod skin. It’s not only safe for a dog to eat, it’s nutritious; high in omega 3 and 6 (essential for healthy skin and coat, as well as strong nails, boosted immune system and improved cognitive function), a great source of collagen and protein, and it improves joint health and mobility in dogs.</p>
      <p>Calming Fish Hide Chew</p>
      <p>Similar to our 100% Cod Chew, this calming, long-lasting chew for dogs contains a smidge of chamomile, to give your dog an extra shot of calm with their chew session (as well as all the nutrients listed above). It’s also gently rolled using zero toxic chemicals or preservatives. Here’s some more in-depth info about our fish hide chews compared to rawhide.</p>
      <p>Dental Chews for dogs</p>
      <p>If you’re looking for a shorter-term chew that’s great for your pooch’s teeth, you could give your pooch a tasty dog dental stick to gnaw on. We have a range of delicious dental chews for dogs infused with flavours they go mad for; such as chicken and spirulina, or tasty peanut butter.</p>
      <p>Note: Though our fish hide chews are safe for dogs to eat, we still recommend you supervise your pooch every time they’re enjoying a chewing session. FAQs Here are the answers to any final questions you might have about the risks of rawhide. Remember, you can always get in touch if you have any others!</p>
      <h3 id="do-vets-recommend-rawhide-bones">do-vets-recommend-rawhide-bones</h3>
      <p>This depends on the vet of course, but generally, vets will often make dog owners aware of the risks associated with rawhide: that they can cause a dangerous bowel obstruction or blockage if ingested, that dogs may react badly to the toxic chemicals used in rawhide’s production, and they might pose a choking hazard.</p>
      <p>Vets will only recommend rawhide due to the positive effects of chewing, so a natural long-lasting chew for dogs is a great alternative to rawhide.</p>
      <h3 id="can-rawhide-break-a-dog’s-teeth">can-rawhide-break-a-dog’s-teeth</h3>
      <p>Yes - if your dog has a strong bite, or the rawhide they’re chewing on is particularly hard, there is the risk that rawhide can break a dog’s teeth.</p>
      <h3 id="how-long-does-it-take-for-a-dog-to-digest-rawhide">how-long-does-it-take-for-a-dog-to-digest-rawhide</h3>
      <p>This depends on your pooch, their health condition and size. In general, it should take no longer than a day or two for your dog to pass an ingested rawhide. Keep a close eye on your dog’s behaviour, and take them to a vet if you believe they may have swallowed rawhide and not passed it.</p>
      <h3 id="how-many-calories-in-a-rawhide-stick">how-many-calories-in-a-rawhide-stick</h3>
      <p>You would need to check the packaging of the particular rawhide you’ve given to your pooch, as all rawhide products vary. The thing is, dogs shouldn’t be ingesting rawhide at all - they’re not intended as a consumable product but more of a chew toy. There isn’t any nutritional value in a commercial rawhide, unlike our long-lasting fish chews.</p>
      <h3 id="can-puppies-have-rawhide">can-puppies-have-rawhide</h3>
      <p>Just as we don’t recommend giving rawhide to dogs, we don’t suggest giving a rawhide to a puppy, either. They have small, developing teeth, and while chewing is very beneficial for them, choosing a natural, non-toxic dog chew is much safer.</p>
      <p>If you’re convinced it’s time to opt for a rawhide alternative - take a look at our natural fish skin chews. They’re safe for dogs to eat and packed full of nutrients, so your dog can enjoy a supervised chew session without causing you any worries at all.</p>
`,
  headings: [
    { id: 'what-is-rawhide', text: 'what-is-rawhide', level: 2 },
    { id: 'what-is-rawhide-made-of', text: 'what-is-rawhide-made-of', level: 3 },
    { id: 'how-rawhide-is-made', text: 'how-rawhide-is-made', level: 3 },
    { id: 'is-rawhide-safe-for-dogs', text: 'is-rawhide-safe-for-dogs', level: 2 },
    { id: 'what-makes-some-rawhide-dangerous', text: 'what-makes-some-rawhide-dangerous', level: 3 },
    { id: 'should-i-avoid-rawhide-altogether', text: 'should-i-avoid-rawhide-altogether', level: 2 },
    { id: 'worried-after-your-dog-has-eaten-rawhide', text: 'worried-after-your-dog-has-eaten-rawhide', level: 2 },
    { id: 'what-can-i-give-my-dog-instead-of-rawhide', text: 'what-can-i-give-my-dog-instead-of-rawhide', level: 2 },
    { id: 'the-best-rawhide-alternative-chews', text: 'the-best-rawhide-alternative-chews', level: 3 },
    { id: 'do-vets-recommend-rawhide-bones', text: 'do-vets-recommend-rawhide-bones', level: 3 },
    { id: 'can-rawhide-break-a-dog’s-teeth', text: 'can-rawhide-break-a-dog’s-teeth', level: 3 },
    { id: 'how-long-does-it-take-for-a-dog-to-digest-rawhide', text: 'how-long-does-it-take-for-a-dog-to-digest-rawhide', level: 3 },
    { id: 'how-many-calories-in-a-rawhide-stick', text: 'how-many-calories-in-a-rawhide-stick', level: 3 },
    { id: 'can-puppies-have-rawhide', text: 'can-puppies-have-rawhide', level: 3 },
  ]
},
'dog-constipation-helping-dogs-poop-quickly': {
  title: 'Dog constipation: Helping dogs poop quickly',
  category: 'Pets',
  snippet: "Snippet not found",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/BLOG_DOG_CONSTIPATION_IMAGE_2_500x_crop_center.jpg?v=1709292534",
    alt: "Dog constipation: Helping dogs poop quickly",
    caption: "what-is-dog-constipation"
  },
  content: `
<p>Most dog parents will recognise this walkies scenario: you’ve a doggy bag in hand, prepped and ready for your pooch to poop - but nothing’s happening! Perhaps your pup keeps squatting to no avail, or it seems as if they’re in discomfort?</p>
      <p>When your dog has symptoms of constipation, it can make you feel somewhat hopeless to help them, as well as anxious to solve this for your poor pooch as soon as possible.</p>
      <p>Rest assured. There are lifestyle tweaks you can make to encourage your dog to let go, so that hopefully, they won’t have such a strained relationship with their poop in future. Read on for some potential reasons your pooch won’t poop, as well as at-home remedies to get their bowels in motion again.</p>
      <h2 id="what-is-dog-constipation">what-is-dog-constipation</h2>
      <p>In case you didn’t know, dog constipation is when no matter how hard they try, your dog can’t get out a poop. As we all know, pooping is a vital step in the process of digesting food and clearing out the bowels.</p>
      <p>Not doing so can result in pain and discomfort in a dog’s tummy and colon area, as well as bloatedness and lethargy. At its worst, it can make your dog very unwell and even cause rectal prolapse.</p>
      <h2 id="what-are-the-causes-of-dog-constipation">what-are-the-causes-of-dog-constipation</h2>
      <p>Constipation hits dogs for mostly the same reasons humans get it - they usually aren’t getting enough fibre and other nutrients in their diet. If they’re getting a full and balanced diet, however, there are lots of other reasons for constipation in dogs that will need to be considered.</p>
      <h3 id="reasons-your-pooch-might-be-constipated">reasons-your-pooch-might-be-constipated</h3>
      <p>Here are some of the reasons your dog might be stuck without a poop:</p>
      <ul>
        <li>Not enough fibre in their diet. This is the most common reason, as fibre is an essential nutrient for poop consistency and bowel regularity.</li>
        <li>Stress can cause irregular bowel movements - a stressful event (such as a house move or a vet visit) may frighten your dog’s body into inaction.</li>
        <li>Dehydration is another big culprit of constipation. Getting enough water and hydrating a dog’s physical body is essential to healthy bowel movements.</li>
        <li>A sedentary lifestyle without enough exercise can also cause dog constipation.</li>
        <li>Ageing. As dogs age, digestion becomes a tougher process and a wider range of foods could cause stomach or bowel issues, such as constipation.</li>
        <li>Enlarged anal glands will cause pain and distress when your dog poops, which means they might hold back/not feel able to ‘let go’.</li>
        <li>Tumours in the colon or stomach can cause an obstruction that means your dog isn’t able to poop.</li>
        <li>Extremely matted fur can cause issues with pooping. If thick fur around your dog’s butt makes it hard for them to poop or causes them pain, they may hold back on doing so.</li>
        <li>They’ve eaten a foreign object. There could be a blockage somewhere in the colon - either they will pass it eventually, or a vet may have to conduct an x-ray and remove it.</li>
      </ul>
      <h2 id="warning-signs-and-symptoms-of-dog-constipation">warning-signs-and-symptoms-of-dog-constipation</h2>
      <p>It’s easy to spot when your dog has constipation; these are some tell-tale signs...</p>
      <ul>
        <li>Squatting and straining You’ll find your dog is trying to poop, but struggling to produce anything. They may keep trying to squat to poop, but appear agitated.</li>
        <li>Discomfort and pain Not being able to poop is understandably uncomfortable. Your dog may be restless, whimper when their lower body is touched, or seem generally unhappy.</li>
        <li>Bloating and increased gas If your dog is constipated they may have a bloated tummy and dislike when their stomach is touched. Due to trapped gas, they might fart a lot more.</li>
        <li>Poop is hard and compacted When your dog does manage to poop, it might be small and pellet-like, and usually harder than usual.</li>
        <li>No poop for over a day If your dog has simply skipped their usual poop on walkies, and doesn’t try to poop the next day either, this could be constipation.</li>
      </ul>
      <h2 id="dog-constipation-treatments">dog-constipation-treatments</h2>
      <p>So how do we tackle constipation in your pained pooch? Let’s lay out all the available treatments for dog constipation, including both at-home remedies and vet-prescribed, so you’ll soon know how to make a constipated dog poop quickly.</p>
      <h3 id="dietary-changes">dietary-changes</h3>
      <p>As constipation is usually the result of a lack of fibre, your first port-of-call should be the food your dog eats. If you know that diet could be improved or tweaked to support your pooch’s bowels, it’s time to go granular with what your dog consumes and fill in the gaps in nutrition.</p>
      <ul>
        <li>Add more fibre to their diet. Dogs need a nutritious, well-balanced diet packed with lots of dietary fibre - this is essential for healthy digestion and bowel health, and it promotes regular bowel movements. Fibre comes from foods such as broccoli, courgette, pumpkin, sweet potato, apple or carrots.</li>
        <li>Leafy greens such as spinach or kale are also good sources of fibre to encourage bowel movement.</li>
        <li>Try probiotics. Probiotics help maintain the environment in a dog’s gut, encouraging digestion and bowel regularity. Boosting the amount of probiotics in your dog’s diet can improve their overall health in big ways - read all about it in our Guide to Probiotics for Dogs.</li>
        <li>Consider prescription dog food. Your dog may require a vet visit to get some specialist dog food to help with constipation.</li>
      </ul>
      <h3 id="supplements">supplements</h3>
      <p>Boosting your pooch’s meals with powerful supplements can work wonders in beating constipation. Consider some dog supplements for constipation, such as:</p>
      <h4>Fibre supplements</h4>
      <p>These come as tablets or powder to add to a dog’s food, and may contain natural sources of soluble fibre such as Psyllium Husk or Flaxseed.</p>
      <h4>Pumpkin powder</h4>
      <p>As pumpkin is such a nutritious natural fibre source, pumpkin powder supplements can give your dog’s gut and bowels a ‘push’.</p>
      <h4>Probiotics</h4>
      <p>Probiotics for dogs come in various forms. Though natural ways might come from live yoghurt or vegetables, you can get probiotic treats for dogs, or get them as a probiotic powder to add to your dog’s meals.</p>
      <h3 id="medical-treatments">medical-treatments</h3>
      <p>If you take your dog to the vet for their constipation issues, they might prescribe the following treatments…</p>
      <h4>Laxatives</h4>
      <p>When advised by a vet, laxatives can be a quick and smooth treatment for dogs - just don’t buy them over the counter without a vet’s recommendation.</p>
      <h4>Stool softeners</h4>
      <p>work in a similar way to laxatives, and again, are useful for dogs with constipation only when prescribed by a vet. Definitely don’t use human stool softeners on your dog.</p>
      <h4>More exercise</h4>
      <p>Your vet might advise more exercise for your dog, particularly if they live quite a sedentary lifestyle. Getting moving more often can work wonders on bowel regularity.</p>
      <h2 id="dog-constipation-home-remedies">dog-constipation-home-remedies</h2>
      <p>It’s not always necessary to take your pooch to a vet if they have constipation - you might like to try a few at-home remedies to get your dog pooping again.</p>
      <ul>
        <li>Use manual massage. So long as it doesn’t hurt your dog, use clean hands to massage their lower body and abdomen area. Sometimes a simple massage around a build-up or blockage in your dog can improve the issue. Just be sure your pooch seems relaxed during this, and stop if they express pain or discomfort.</li>
        <li>Apple cider vinegar in food can sometimes help get stools moving along. Increase water intake with extra bowls of water around the house, for example, or hydrating foods such as cucumber and watermelon.</li>
        <li>Add oil to food. This should be done sparingly, as oil has a high fat content - but a drizzle of olive oil or coconut oil in their usual food can help soften your dog’s poop.</li>
        <li>Consider CBD oil. It’s not a recognised veterinary treatment, but there is anecdotal evidence that CBD oil can encourage pooping in dogs. Try a few drops of a high quality CBD oil in your dog’s food and see if it helps.</li>
      </ul>
      <h3 id="the-ice-cube-technique">the-ice-cube-technique</h3>
      <p>Many dog owners try the Ice Cube Technique on a constipated dog - which is basically giving ice cubes to your dog to eat alongside food.</p>
      <p>The idea is that your dog will consume more water than usual (eating ice will hopefully feel like a treat) and get an extra shot of hydration. If you think your dog will stick their nose up at ice cubes, serve your pooch some crushed up ice alongside their regular food.</p>
      <p>Be sure to still provide a good amount of water in their regular water bowl - the more water they get, the better. Ample hydration should help ease their constipation and get their bowels moving.</p>
      <h3 id="what-to-avoid-when-your-dog-is-constipated">what-to-avoid-when-your-dog-is-constipated</h3>
      <p>Don’t try the following when your dog has trouble pooping…</p>
      <ul>
        <li>Enemas. A DIY colonoscopy might seem a good idea, but for dogs, enemas (a procedure in which liquid or gas is injected into the rectum) can be very distressing. Enemas are for vets to carry out under specific circumstances, and should definitely be avoided as an at-home treatment.</li>
        <li>Milk. Giving milk to your dog isn’t a proven method for shifting a stuck bowel movement, and even if it did work, dogs are generally lactose intolerant so could experience a tummy upset.</li>
      </ul>
      <h3 id="complications-of-untreated-constipation">complications-of-untreated-constipation</h3>
      <p>It’s important not to ignore it when your dog won’t poop. Not only will your dog feel greater discomfort over time, untreated constipation can lead to a severe blockage in their colon which only exacerbates the problem.</p>
      <p>Eventually, your pooch may experience a decreased appetite, a general sense of sickness and lethargy, and may even suffer long-term issues with pooping and straining (such as rectal prolapse). As soon as you notice your dog is having trouble ‘going to the bathroom’, start investigating ways to help them out.</p>
      <h3 id="when-to-see-your-vet">when-to-see-your-vet</h3>
      <p>If you’ve tried adding more fibre to your dog’s diet, massaging their lower body and getting your pooch to drink more water, and still you’re not seeing any improvement after a day or so, it’s time to get in touch with your vet. They can rule out any more serious causes for your dog’s pooping issues, and perhaps prescribe some medication or specialist food to tackle the problem.</p>
      <h2 id="faqs">faqs</h2>
      <h3 id="how-do-i-get-my-puppy-to-poop">how-do-i-get-my-puppy-to-poop</h3>
      <p>If you suspect you have a constipated puppy, you should consult a vet before trying any supplements or home remedies, as puppy’s tums are very sensitive. You can try feeding them some fibre-rich food and get them to drink more water though.</p>
      <h3 id="are-there-any-side-effects-of-using-supplements-for-my-dogs-digestion">are-there-any-side-effects-of-using-supplements-for-my-dogs-digestion</h3>
      <p>Supplements can have undesired side effects in your pooch, such as loose stools, nausea or sickness. It’s important to gradually introduce them into your dog’s diet rather than give a sharp uptake in fibre. Chat to your vet for advice specific to your dog.</p>
      <h3 id="why-are-dogs-so-picky-when-choosing-a-bathroom-spot">why-are-dogs-so-picky-when-choosing-a-bathroom-spot</h3>
      <p>A lot of dogs refuse to poop just anywhere. This is because they’re territorial creatures, and choose a specific spot based on scent-marking and their surroundings. Where they choose might also be part of a regular routine for them. Basically, it’s important that they feel comfortable before they settle down to poop.</p>
      <h3 id="can-i-use-over-the-counter-laxatives-for-my-dog">can-i-use-over-the-counter-laxatives-for-my-dog</h3>
      <p>There are laxatives for dogs, but getting them over-the-counter isn’t a great idea. Laxatives can be powerful, and sometimes not the right medication for a specific dog’s issue, so must always be prescribed on the advice of a vet. If you want to try some alternative remedies, consider some fibre supplements for dogs, such as pumpkin powder. Never use laxatives for humans on dogs - their physical effects are different on the delicate canine body and could cause harm.</p>
      <h3 id="are-there-any-preventive-measures-i-can-take-to-avoid-constipation-in-my-dog">are-there-any-preventive-measures-i-can-take-to-avoid-constipation-in-my-dog</h3>
      <p>The best way to prevent constipation in your dog is with a fibre-rich, well-balanced diet packed with nutritious, whole ingredients. Nutrition is the fastest route to a healthy digestive system, a harmonious gut microbiome and reliable, regular poops! Also, be sure your dog gets plenty of water to stay well hydrated, and gets their body moving with daily exercise.</p>
      <p>If you’re looking to give your dog’s digestive system a boost, get some powerful, gut-nourishing probiotics into their diet with our probiotic supplements for dogs, or delicious probiotic dog treats.</p>
`,
  headings: [
    { id: 'what-is-dog-constipation', text: 'what-is-dog-constipation', level: 2 },
    { id: 'what-are-the-causes-of-dog-constipation', text: 'what-are-the-causes-of-dog-constipation', level: 2 },
    { id: 'reasons-your-pooch-might-be-constipated', text: 'reasons-your-pooch-might-be-constipated', level: 3 },
    { id: 'warning-signs-and-symptoms-of-dog-constipation', text: 'warning-signs-and-symptoms-of-dog-constipation', level: 2 },
    { id: 'dog-constipation-treatments', text: 'dog-constipation-treatments', level: 2 },
    { id: 'dietary-changes', text: 'dietary-changes', level: 3 },
    { id: 'supplements', text: 'supplements', level: 3 },
    { id: 'medical-treatments', text: 'medical-treatments', level: 3 },
    { id: 'dog-constipation-home-remedies', text: 'dog-constipation-home-remedies', level: 2 },
    { id: 'the-ice-cube-technique', text: 'the-ice-cube-technique', level: 3 },
    { id: 'what-to-avoid-when-your-dog-is-constipated', text: 'what-to-avoid-when-your-dog-is-constipated', level: 3 },
    { id: 'complications-of-untreated-constipation', text: 'complications-of-untreated-constipation', level: 3 },
    { id: 'when-to-see-your-vet', text: 'when-to-see-your-vet', level: 3 },
    { id: 'faqs', text: 'faqs', level: 2 },
    { id: 'how-do-i-get-my-puppy-to-poop', text: 'how-do-i-get-my-puppy-to-poop', level: 3 },
    { id: 'are-there-any-side-effects-of-using-supplements-for-my-dogs-digestion', text: 'are-there-any-side-effects-of-using-supplements-for-my-dogs-digestion', level: 3 },
    { id: 'why-are-dogs-so-picky-when-choosing-a-bathroom-spot', text: 'why-are-dogs-so-picky-when-choosing-a-bathroom-spot', level: 3 },
    { id: 'can-i-use-over-the-counter-laxatives-for-my-dog', text: 'can-i-use-over-the-counter-laxatives-for-my-dog', level: 3 },
    { id: 'are-there-any-preventive-measures-i-can-take-to-avoid-constipation-in-my-dog', text: 'are-there-any-preventive-measures-i-can-take-to-avoid-constipation-in-my-dog', level: 3 },
  ]
},



'anti-inflammatory-solutions-for-dogs': {
  title: 'Anti-inflammatory solutions for dogs',
  category: 'Pets',
  snippet: "Snippet not found",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/BLOG_ANTI-INFLAMMATORY_SOLUTIONS_FOR_DOGS_IMAGE_2_500x_crop_center.jpg?v=1706794078",
    alt: "Anti-inflammatory solutions for dogs",
    caption: "understanding-inflammation-in-dogs"
  },
  content: `
<p>If your dog suffers from inflammation anywhere in their body, whether it's a sensitive tum, osteoarthritis or just general aches and pains, you’ll know that it can be a challenge keeping their physical and mental wellbeing in tip-top shape.</p>
      <p>In this guide, we’ll go over the types of inflammation in dogs, what to look out for, and the various ways in which these conditions can be treated - from conventional medication to alternative remedies and supplements.</p>
      <p>With our simple guide to anti-inflammatory treatments for dogs, you’ll have the full knowledge in deciding what’s best for you and your pooch.</p>
      <h2 id="understanding-inflammation-in-dogs">understanding-inflammation-in-dogs</h2>
      <p>Inflammation in dogs can be both a symptom and a cause for certain conditions, and that can be confusing for dog owners. Let’s start with the basics, and then discuss the different ways inflammation can present in dogs…</p>
      <h3 id="what-is-inflammation-in-dogs">what-is-inflammation-in-dogs</h3>
      <p>Inflammation is a natural response in a dog’s body, and can be triggered by a number of factors - from an injury, to air pollution, to certain foods.</p>
      <p>Wherever there has been significant stress in the body (e.g. in a specific muscle due to extreme exercise, or pressure on joints), the body will flood the area with fluid and antibodies to fight the stress.</p>
      <p>This can result in reddened skin, swelling, heat and temporary pain. Inflammation can occur anywhere in the body and produce different symptoms; in the gut, for instance, it can cause bloating and gas or even sickness and diarrhoea.</p>
      <p>Though inflammation is intended to act as a protective process, too much inflammation over an extended period of time (called chronic inflammation) can actually cause damage and discomfort to a dog. In these cases, extra help is needed to reduce it, either through preventative measures, or treatment such as medication and/or natural remedies.</p>
      <h3 id="causes-of-inflammation-in-dogs">causes-of-inflammation-in-dogs</h3>
      <p>Inflammation in a dog’s body can be caused by a number of triggers…</p>
      <p>Injuries Even minor injuries such as sore limbs after strenuous exercise can cause inflammation in the relevant area (such as muscles). It can also be brought on by a sprain or superficial bump, or after surgery.</p>
      <p>Environmental factors External triggers such as air pollution, viruses or allergens can cause inflammation in your pooch’s body.</p>
      <p>Food/Diet One of the most common causes of inflammation is diet. High-fat foods can lead to inflammation in the gut or pancreas, or if your pooch is allergic to a food group, their body may fight extra hard to digest these foods, leading to inflammation and allergic reactions.</p>
      <p>Lifestyle stresses Even emotional stressors can cause inflammation in a dog. A house move, improper care or having a new pet in the house can upset their immune system. In these cases the body releases cortisol, a stress hormone, which can kick off an inflammatory response.</p>
      <h3 id="types-of-inflammation-in-dogs">types-of-inflammation-in-dogs</h3>
      <p>As mentioned, inflammation can occur all over a pooch’s body, affecting and presenting in a dog in different ways.</p>
      <p>Some illnesses and health disorders that we know well by other names, are actually forms of inflammation in the body. Here are just some of the different types of inflammation:</p>
      <p>Osteoarthritis This extremely common health disorder affects up to 8 in 10 dogs within their lifetime, and is caused by inflammation of the joints. The wearing down of cartilage and bone causes chronic inflammation in these areas as the body works to soothe and protect the joint.</p>
      <p>Dermatitis When a pooch has a skin infection or is allergic to something, the body will try to attack the offending trigger by releasing antibodies. This inflammation can cause reddening, itchiness, rashes and heat in the skin, which long-term can lead to dermatitis.</p>
      <p>Periodontal disease When your pooch has a tooth or gum infection, either through old age or because they haven’t received adequate dental care, inflammation of the gums and mouth leads to periodontal disease.</p>
      <p>Gastrointestinal inflammation Inflammation of the gut is extremely common in dogs, and is often caused by food and diet. Sometimes an intolerance to certain food groups, such as grain or dairy products, can cause inflammation that leads to gastrointestinal issues.</p>
      <p>Urinary Tract Infections (UTIs) Infections in the bladder and urinary tract can cause inflammation, which without treatment can lead to chronic infections.</p>
      <p>Pancreatitis High-fat diets fed to a pooch long-term can lead to pancreatitis, a condition of inflammation in the pancreas.</p>
      <p>Ear and eye infections Allergies or harmful bacteria can lead to inflammation of ears and eyes, and infections such as conjunctivitis (an eye infection).</p>
      <p>Pneumonia Inflammation of the lungs can be a cause and/or symptom of pneumonia in dogs, which is brought on by bacteria, viruses or fungal infections.</p>
      <h3 id="signs-of-inflammation-in-dogs">signs-of-inflammation-in-dogs</h3>
      <p>The signs of inflammation are similarly widespread, of course, depending on where the inflammation is centred (e.g. inflammation of the joints may present as difficulty walking).</p>
      <p>In general, keep an eye out for any of the following symptoms in your dog:</p>
      <ul>
        <li>Redness, swelling, itching of the skin</li>
        <li>Stomach issues such as sickness or diarrhoea</li>
        <li>Eye and ear irritation/redness</li>
        <li>Difficulty breathing; wheezing</li>
        <li>Changes in behaviour, drop in energy levels</li>
        <li>Pain (in joints, stomach etc.) Fever</li>
        <li>Loss of appetite</li>
        <li>Difficulty walking, unusual gait</li>
      </ul>
      <p>Keep a note of how often symptoms present, and take your dog to the vet for an examination.</p>
      <h2 id="conventional-anti-inflammatory-treatments">conventional-anti-inflammatory-treatments</h2>
      <p>If your pooch suffers from inflammation of some kind, it’s likely their vet will prescribe one or more of the following conventional treatments:</p>
      <h3 id="non-steroidal-anti-inflammatory-drugs-(nsaids)">non-steroidal-anti-inflammatory-drugs-(nsaids)</h3>
      <p>NSAIDs, which stands for Non-Steroidal Anti-Inflammatory Drugs, tend to be the ‘go-to’ treatment for a dog who has inflammation.</p>
      <p>They come in various forms; the most common types in the UK are Carprofen (Rimadyl) or Meloxican (Metacam), but there are many other types you may be prescribed first depending on your dog’s specific issues.</p>
      <h4>Benefits and side effects of NSAIDs</h4>
      <p>NSAIDs main purpose is in reducing inflammation and the negative side effects of inflammation.</p>
      <p>Without getting too scientific, they work by inhibiting the enzymes which produce a substance called prostaglandins, which are responsible for pain, fever and inflammation in the body.</p>
      <p>By inhibiting these enzymes, negative symptoms of inflammation such as itching, redness, swelling and pain are reduced, and they feel some physical relief.</p>
      <h4>Over-the-counter availability and usage</h4>
      <p>It’s really important that NSAIDs are prescribed by a vet, not bought over the counter.</p>
      <p>Your vet can recommend how often your pooch should take the medication and whether it should be short-term or long-term, as it depends on their health condition and whether they’re receiving any other regular treatment.</p>
      <h4>Combining NSAIDs with other medications</h4>
      <p>It’s quite common to combine NSAIDs with other treatments, but only on the advice of your vet.</p>
      <p>Speak to them about all the medication your pooch is taking, and inform them before using any over-the-counter treatment, as NSAIDs may be less effective if combined with certain meds.</p>
      <h3 id="steroids">steroids</h3>
      <p>Your vet may also prescribe steroids to treat your dog’s inflammation. They’re often used for skin conditions, allergies, autoimmune diseases or osteoarthritis, as well as other infections of the body.</p>
      <h4>Uses, benefits, and side effects of steroids</h4>
      <p>Steroids release anti-inflammatory agents, and work powerfully to reduce inflammation and its symptoms.</p>
      <p>This is especially useful if a dog’s body is overproducing an immune response, as it can suppress that response and stabilise it to a more comfortable, manageable level. Their use must be carefully monitored, though - as overuse or misuse of steroids can have side effects.</p>
      <p>Steroids can cause an increased susceptibility to infections, metabolic changes which can lead to weight gain, and gastrointestinal issues.</p>
      <h4>Combining steroids with other medications</h4>
      <p>Always check with your vet whether prescribing steroids to your dog will interact with other medications they may be on. Your vet will have full knowledge of your dog’s health condition and which medications can be used together.</p>
      <h3 id="antihistamines">antihistamines</h3>
      <p>Antihistamines are mostly used to combat inflammation caused by allergic reactions, as histamines are the substances released by the body during allergic responses.</p>
      <h4>Uses, benefits, and side effects of antihistamines</h4>
      <p>Antihistamines for dogs are used to combat the nasty symptoms of allergic reactions, and as part of that, they have mild anti-inflammatory properties.</p>
      <p>As allergies can manifest as itching, swelling, redness and rashes, antihistamines work to lessen these symptoms, and also reduce some inflammation in a dog’s body.</p>
      <p>Antihistamines aren’t really powerful enough to combat severe inflammation. For more chronic health conditions, stronger medication such as NSAIDs or steroids are usually prescribed.</p>
      <h4>Combining antihistamines with other medications</h4>
      <p>Combining antihistamines with stronger meds, such as steroids, is quite common practice - but should always be done on a vet’s advice. Be sure to chat thoroughly about your dog’s treatment plan and what medication should and shouldn’t be combined.</p>
      <h3 id="risks-of-conventional-anti-inflammatory-medications">risks-of-conventional-anti-inflammatory-medications</h3>
      <p>There are always risks associated with conventional medication - your pooch might have an adverse reaction to treatment, a combination of meds might interact negatively and cause side effects, or you might worry that your dog becomes dependent on medication.</p>
      <p>In some cases, dogs on anti-inflammatory medication develop suppressed immunity, an increase in blood pressure or in severe cases, liver or kidney complications. Some dog owners decide to try natural remedies, in the hopes that changing diet and environment may have some impact.</p>
      <h2 id="natural-anti-inflammatory-alternatives">natural-anti-inflammatory-alternatives</h2>
      <p>There are a host of natural remedies for inflammation in dogs that could be used either in combination with conventional treatments, or as an alternative treatment. Let’s go into the most common natural remedies for inflammation in dogs…</p>
      <h3 id="natural-anti-inflammatory-foods-for-dogs">natural-anti-inflammatory-foods-for-dogs</h3>
      <p>Some foods in the natural world are known for their anti-inflammatory properties - turmeric being one of them. The yellow spice is quite a powerful ingredient, so must be administered to dogs in the correct way so as not to cause any digestive issues.</p>
      <h4>Turmeric and Golden Paste</h4>
      <p>Turmeric has been used in ancient medicines for thousands of years as it contains curcumin, an antioxidant known to reduce inflammation in the body.</p>
      <p>It’s important to use the right amount of turmeric, to avoid your pooch having any digestive problems. The amount depends on your dog’s size, but the recommended dosage is typically 1/8 to 1/4 teaspoon per 10 pounds of a dog’s body weight.</p>
      <p>To make an edible turmeric mix, called ‘Golden Paste’, simply simmer some turmeric with water and olive oil in a pan. Some pooch parents also add a dash of black pepper, so that the turmeric is absorbed into the body easily. You can then add it to a dog’s regular food.</p>
      <h4>Other beneficial foods and herbs</h4>
      <p>The plant world is full of natural anti-inflammatories. Other foods and herbs known for their anti-inflammatory effects in dogs include the following:</p>
      <p>Oily fish such as salmon or mackerel, due to their omega-3 fatty acids.</p>
      <p>Pineapple, for its anti-inflammatory enzyme, bromelain.</p>
      <p>Ginger, for gingerol, its anti-inflammatory component. It’s often recommended to reduce turbulence in the gut.</p>
      <p>Blueberries, which contain numerous antioxidants that fight inflammation.</p>
      <p>Broccoli for its antioxidants such as sulforaphane, alongside vitamins which have anti-inflammatory properties.</p>
      <p>Boswellia serrata, derived from a tree, has been used in African medicine for many years to reduce inflammation.</p>
      <h3 id="anti-inflammatory-diet-for-dogs">anti-inflammatory-diet-for-dogs</h3>
      <p>Foods that reduce inflammation are beneficial to all dogs, no matter their health condition, as a healthy, well-balanced diet can act to prevent the onset of inflammation diseases.</p>
      <p>Foods that have anti-inflammatory properties also tend to contain a host of other nutrients and health benefits.</p>
      <h4>Implementing a natural anti-inflammatory diet</h4>
      <p>If you want to focus on implementing anti-inflammatory foods into your dog’s diet, do so gradually - don’t just add all new foods into their dog bowls one day, as they’re sure to get a tummy upset!</p>
      <p>Perhaps chat to your vet about which foods may be of particular benefit, introduce the food gradually alongside your pooch’s regular dog food, and be sure to phase out foods which contribute to inflammation.</p>
      <h4>Foods to avoid</h4>
      <p>There’s a vital step in creating an anti-inflammatory diet for your dog, and that’s to phase out foods that will trigger inflammation.</p>
      <p>These foods include:</p>
      <ul>
        <li>Foods high in saturated fat, salt or sugar. This usually includes ‘naughty’ dog treats, cheap dog food or too many human table scraps.</li>
        <li>Processed foods that don’t contain whole ingredients and are full of artificial flavourings and preservatives.</li>
        <li>Foods with a high grain or gluten content can cause inflammation in some dogs due to an intolerance or allergy to grain or gluten.</li>
        <li>Dairy products such as cheese or milk can cause inflammation due to their high fat content or a lactose intolerance.</li>
        <li>Any food that triggers allergic reactions. Of course, your dog could be allergic to any food, even a popular protein for dogs such as chicken. If your pooch has a food allergy, definitely avoid these foods.</li>
      </ul>
      <h2 id="supplements-and-therapies">supplements-and-therapies</h2>
      <p>Supplements for dogs are an extra superpower in your inflammation-fighting arsenal. Nutrient-packed supplements can be given in the form of food, or they can be bought as oils, powders or tablets to add to regular meals, almost like a condensed shot of anti-inflammatory power.</p>
      <h3 id="common-supplements-for-inflammation">common-supplements-for-inflammation</h3>
      <p>Let’s take a look at the most well-known supplements to reduce inflammation in dogs:</p>
      <h4>Glucosamine and Chondroitin</h4>
      <p>Glucosamine and Chondroitin are often championed when it comes to reducing inflammation, particularly in joints - as they are a veritable power duo derived from the natural world.</p>
      <p>Found in shellfish such as green-lipped mussels, glucosamine helps form the building blocks of cartilage, and in doing so, reduces the need for a pooch’s body to try to ‘heal’ the joint with inflammation.</p>
      <p>Glucosamine supplements for dogs are often used to combat the symptoms of arthritis and joint pain.</p>
      <h4>Omega-3 Fatty Acids</h4>
      <p>Essential fatty acids, such as Omega-3, are hugely beneficial to a dog’s body as they contribute to building healthy cells.</p>
      <p>Omega-3 Fatty Acids can boost a dog’s immunity, improve skin and coat condition, contribute to heart health, brain function and a dog’s nervous system, and reduce inflammation.</p>
      <p>Omega-3 fatty acids can be found in oily fish; fish oil for dogs in supplement form can be drizzled over food each day.</p>
      <h4>Other beneficial supplements</h4>
      <p>Other beneficial supplements for inflammation in dogs include:</p>
      <ul>
        <li>Collagen, derived from animal skin and bones, is seen as a protective booster to joints.</li>
        <li>Devil’s Claw, used in African medicine for many years, has anti-inflammatory effects.</li>
        <li>Yucca, derived from the yucca plant, has long-known medicinal properties.</li>
        <li>Vitamins E and C offer anti-inflammation as a secondary effect.</li>
        <li>CBD oil. Though not confirmed by veterinary boards as a legitimate dog supplement, some dog owners add a few drops of CBD oil to their dog’s food for its soothing, pain relieving effects.</li>
      </ul>
      <h3 id="alternative-therapies">alternative-therapies</h3>
      <p>Inflammation often causes physical effects in dogs, such as pain in the joints and effects on mobility. To ensure their dog is getting all the benefits of different treatments, lots of pooch parents opt for alternative therapies, such as physiotherapy or even acupuncture.</p>
      <h4>Physiotherapy</h4>
      <p>A physio can help stretch your dog’s body to reduce pain in their limbs or joints, promote good digestion, massage aching areas and boost their overall mood. They can also educate you in beneficial exercises for your dog.</p>
      <h4>Hot and cold therapies</h4>
      <p>Hot and cold therapies could include ice packs or heat packs, or immersing your pooch in a warm or cold bath to stimulate the areas of inflammation and reduce pain. You should always get a vet’s advice over how to do this properly, so that it acts to soothe your dog rather than panic or distress them.</p>
      <h4>Hydrotherapy</h4>
      <p>Low impact exercise, like taking a dog to swimming classes, or having them use an underwater treadmill, can ensure they’re getting all the benefits of exercise without putting too much stress on the areas in which they might feel pain. Done well, it can be fun for a dog, especially if they often seem frustrated at their limited movement.</p>
      <h4>Acupuncture</h4>
      <p>It may seem daunting to some pooch parents, but acupuncture is one alternative option to beat inflammation in your dog. Very thin needles are inserted into specific zones of a dog’s body, known as ‘trigger points’, which has been seen to relieve a dog’s pressure and pain.</p>
      <h2 id="best-practices-in-administering-anti-inflammatories-to-dogs">best-practices-in-administering-anti-inflammatories-to-dogs</h2>
      <p>Always remember that anti-inflammatories, whether conventional medications or natural remedies, should be given to your pooch with a sense of caution.</p>
      <p>Be especially careful if your dog is taking other medications already, and be mindful of your dog’s wellbeing and behaviour after they’ve tried a new food or supplement for inflammation.</p>
      <h2 id="when-to-consult-a-vet">when-to-consult-a-vet</h2>
      <p>Always chat to your vet before you try out a new treatment for your pooch, whether that be a prescribed medication, a natural remedy or alternative therapy - and stay in touch with them throughout the process of treating inflammation.</p>
      <p>Be aware of how your dog responds to treatment, and if they display any adverse symptoms, such as increased skin irritation, pain, sickness, diarrhoea or other behavioural changes - and make sure to report back to your vet immediately.</p>
      <h2 id="frequently-asked-questions">frequently-asked-questions</h2>
      <p>Phew! Hopefully at this point, you’re feeling well equipped to decide the best course of action to treat inflammation in your dog. Here are a couple of final questions to round off your comprehensive knowledge.</p>
      <h3 id="can-diet-help-with-arthritis-in-dogs">can-diet-help-with-arthritis-in-dogs</h3>
      <p>Osteoarthritis in dogs is sadly incurable, as it is a degenerative disease that wears down your dog’s joints over time.</p>
      <p>What you can do, as a dog owner, is use a diet rich in anti-inflammatory foods and supplements to ease the symptoms of arthritis in your pooch and make getting around more comfortable for them.</p>
      <p>If your pooch has yet to be diagnosed with arthritis, or if they’re not even showing any signs of sore or aching joints, you can absolutely put them on an anti-inflammatory diet as a preventative measure, to delay the onset of arthritis.</p>
      <h3 id="is-ibuprofen-safe-for-dogs">is-ibuprofen-safe-for-dogs</h3>
      <p>No. Ibuprofen is a common remedy for pain relief for humans, but it absolutely shouldn’t be given to dogs.</p>
      <p>Though ibuprofen is an NSAID (non-steroidal anti-inflammatory drug), and used to reduce inflammation in humans, even a small amount of ibuprofen can be toxic to dogs. It could lead to kidney, liver or heart damage, or even attack the central nervous system.</p>
      <p>Talk to a vet to be prescribed an anti-inflammatory medication that is safe for dogs to use.</p>
      <h3 id="is-benadryl-a-good-anti-inflammatory-for-dogs">is-benadryl-a-good-anti-inflammatory-for-dogs</h3>
      <p>Only if administered by a vet.</p>
      <p>Benadryl is a common remedy for allergic reactions in humans, and it can be given to dogs in certain circumstances, but never by a dog owner without advice from a vet.</p>
      <p>If your pooch is suffering from an allergic reaction, use medication prescribed to your specific dog or take them to a vet for a recommendation.</p>
      <p>At Pooch & Mutt we implement beneficial ingredients that reduce inflammation in all of our healthy, grain-free dog food. What’s more, our Salmon Oil for Dogs or our Joint Care Supplement for Dogs offer a safe, accessible way to give your beloved pooch a shot of anti-inflammatory nutrients.</p>
      <section>References</section>
`,
  headings: [
    { id: 'understanding-inflammation-in-dogs', text: 'understanding-inflammation-in-dogs', level: 2 },
    { id: 'what-is-inflammation-in-dogs', text: 'what-is-inflammation-in-dogs', level: 3 },
    { id: 'causes-of-inflammation-in-dogs', text: 'causes-of-inflammation-in-dogs', level: 3 },
    { id: 'types-of-inflammation-in-dogs', text: 'types-of-inflammation-in-dogs', level: 3 },
    { id: 'signs-of-inflammation-in-dogs', text: 'signs-of-inflammation-in-dogs', level: 3 },
    { id: 'conventional-anti-inflammatory-treatments', text: 'conventional-anti-inflammatory-treatments', level: 2 },
    { id: 'non-steroidal-anti-inflammatory-drugs-(nsaids)', text: 'non-steroidal-anti-inflammatory-drugs-(nsaids)', level: 3 },
    { id: 'steroids', text: 'steroids', level: 3 },
    { id: 'antihistamines', text: 'antihistamines', level: 3 },
    { id: 'risks-of-conventional-anti-inflammatory-medications', text: 'risks-of-conventional-anti-inflammatory-medications', level: 3 },
    { id: 'natural-anti-inflammatory-alternatives', text: 'natural-anti-inflammatory-alternatives', level: 2 },
    { id: 'natural-anti-inflammatory-foods-for-dogs', text: 'natural-anti-inflammatory-foods-for-dogs', level: 3 },
    { id: 'anti-inflammatory-diet-for-dogs', text: 'anti-inflammatory-diet-for-dogs', level: 3 },
    { id: 'supplements-and-therapies', text: 'supplements-and-therapies', level: 2 },
    { id: 'common-supplements-for-inflammation', text: 'common-supplements-for-inflammation', level: 3 },
    { id: 'alternative-therapies', text: 'alternative-therapies', level: 3 },
    { id: 'best-practices-in-administering-anti-inflammatories-to-dogs', text: 'best-practices-in-administering-anti-inflammatories-to-dogs', level: 2 },
    { id: 'when-to-consult-a-vet', text: 'when-to-consult-a-vet', level: 2 },
    { id: 'frequently-asked-questions', text: 'frequently-asked-questions', level: 2 },
    { id: 'can-diet-help-with-arthritis-in-dogs', text: 'can-diet-help-with-arthritis-in-dogs', level: 3 },
    { id: 'is-ibuprofen-safe-for-dogs', text: 'is-ibuprofen-safe-for-dogs', level: 3 },
    { id: 'is-benadryl-a-good-anti-inflammatory-for-dogs', text: 'is-benadryl-a-good-anti-inflammatory-for-dogs', level: 3 },
  ]
},
'dog-skin-allergies-causes-symptoms-and-treatment': {
  title: 'Dog Skin Allergies: Causes, Symptoms and Treatment',
  category: 'Pets',
  snippet: "Snippet not found",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/download_203cfdff-6464-4fe4-932e-711d099f2143_500x_crop_center.jpg?v=1629196847",
    alt: "Dog Skin Allergies: Causes, Symptoms and Treatment",
    caption: "dog-skin-allergies-reasons-dogs-scratch"
  },
  content: `
<p>Did you know, one of the most common reasons a dog is brought to the vet is because they have been scratching?</p>
      <p>Dogs typically scratch because they are itchy. You may also find that they rub, lick and chew at their skin.</p>
      <p>It is normal for a dog to lick and scratch a little. This is how they keep clean and everyone gets itchy now and then! However, it shouldn’t be interfering with their day to day life.</p>
      <p>If you’re concerned that your dog is spending more time licking, chewing or scratching then this is something we need to look at further.</p>
      <h2 id="dog-skin-allergies-reasons-dogs-scratch">dog-skin-allergies-reasons-dogs-scratch</h2>
      <p>Food Allergies - Those with food allergies can itch all over, but their face, paws and belly are most often involved. Common allergens include grains, dairy, eggs, beef and chicken. However, dogs can actually be allergic to ingredients.</p>
      <p>Atopic Dermatitis - An allergy to something in your dog’s environment (like pollen, grass, mould or dust mites) or food can cause their skin to become pink and itchy.

Allergies like this tend to present between six months and three years of age. Pedigrees including the Pug, Frenchie, Westie, Labrador and Jack Russell are most often affected. Genetics play a role so if a pup’s parents had allergies, they are at higher risk.

The most frequently affected areas including the face, paws and belly. Some owners notice a pattern and may find that their dog itches more in e.g. the Spring or Winter. This makes an environmental allergy more likely.

Those who are itchy when the weather is warmer may be allergic to grasses and pollens. Conversely, winter time itching is more often associated with allergies to house dust mites and to parasites.</p>
      <p>Fleas - Fleas are incredibly common, even in the cleanest of dogs! They are seen all year round, but especially in the Spring and Summer. We see them in dogs of all ages but puppies are affected the most.They can be caught from other dogs, as well as from their environment and wildlife.</p>
      <p>Fleas tend to cause intense itching, particularly over the rump and flanks. Dogs may chew the skin above their tail, causing a red and infected lesion. Whilst fleas will cause all dogs to itch, those with an allergy to the flea saliva will have an extreme reaction. They get intensely itchy, particularly over their rump. They may lose fur and develop scabs, red skin and secondary skin infections.</p>
      <p>Be sure to keep your dog up to date with a good quality flea prevention, especially if they are prone to skin disease.</p>
      <p>Contact dermatitis - Your dog may have a bad reaction to something they have had contact with, such as a carpet cleaner, plant or new shampoo. Their skin may look visibly red and sore in the area that has touched the irritant.</p>
      <p>Skin infections - These infections may be bacterial or fungal and are typically associated with other skin conditions such as allergies and parasites.</p>
      <p>The dog’s scratching and chewing tends to be what introduces the infection.</p>
      <p>Signs can include redness, oozing, crusting and circular lesions on the skin. Dogs are generally affected on their belly and back but can develop an infection in any location.</p>
      <p>Hormonal Disorders -  Those with underlying endocrine disorders such as Hypothyroidism and Cushing’s disease are at highest risk for chronic skin complaints.</p>
      <p>These conditions are seen in middle aged and older dogs. Signs can include fur loss and skin thinning and many dogs become itchy due to secondary infections that develop.</p>
      <p>Allergic skin disease (or Allergic Dermatitis) in dogs is a very common condition. Indeed, it affects hundreds of thousands of UK dogs. Owners and vets alike despair at the symptoms that come and go and cause ongoing discomfort.</p>
      <p>There are a variety of things dogs can be allergic to and most pets are allergic to more than one thing.</p>
      <p>Symptoms of allergic dermatitis tend to present between the ages of six months and six years of age. Pedigree dogs who live indoors are most at risk, but any dog can be affected.</p>
      <h2 id="skin-allergies-in-puppies">skin-allergies-in-puppies</h2>
      <ul>
        <li>Puppy Pyoderma or Impetigo. 
Can affect young puppies, 8 weeks and below, and causes raised pustules on the body. If a puppy shows signs of Puppy Pyoderma, they must visit a vet who will most likely prescribe either oral or topical antibiotics.</li>
        <li>Flaky skin caused by mites, fleas or worms. 
Flaky skin, or scaling skin can have many causes, from parasites to poor diet, allergies or infections. If you notice scaly or flaky skin on your puppy, be sure to contact your vet. They may prescribe anything from a cream to a round of antibiotics.</li>
        <li>Puppy Strangles or Juvenile Cellulitis.
The root cause of Puppy Strangles is unknown, but it's thought to be an auto-immune condition. It mainly affects young puppies and causes symptoms such as swelling in the face, ears and eyelids as well as red, irritated skin.

If your puppy shows signs of Puppy Strangles, be sure to take them to a vet immediately. Treatment will vary, but will often include something to settle their immune system and relieve symptoms.</li>
      </ul>
      <h2 id="symptoms-of-dog-skin-allergies">symptoms-of-dog-skin-allergies</h2>
      <p>Symptoms will vary from patient to patient and can include:</p>
      <ul>
        <li>Itchy skin leading to paw licking, face rubbing, skin chewing and scratching.

You may find that underneath their fur, they are dry, red or scabby. You might even see evidence of parasites or something that has gotten stuck in their fur like a bramble.</li>
        <li>Pink skin</li>
        <li>Fur loss</li>
        <li>Chronic infections of the ears, skin or anal glands - Itchy skin and ear disease go hand in hand.

Those with atopic dermatitis are more prone to ear infections, as well as to anal gland disease.  As well as head shaking, a dog may rub their ear on the ground or scratch at the affected ear.

This can be a sign of itchiness within the ear canals and/or an ear infection. Those with heavy and pendulous ears like the Spaniel are affected more so than other dogs.</li>
        <li>Skin thickening and darkening (lichenification)</li>
      </ul>
      <h2 id="what-to-do-if-your-dog-has-skin-allergies">what-to-do-if-your-dog-has-skin-allergies</h2>
      <p>It can be heart-wrenching to see our pets incessantly scratching, licking and chewing at their skin. Some will be distressed and they can find it hard to focus on other things such as playing with their toys.

Many will find it hard to sleep and might wake up licking or scratching. It is little wonder then, that owners are keen to help ease this discomfort.</p>
      <p>Skin allergies can mimic other conditions such as mange or a bacterial skin infection. Due to this, your dog must see a vet so we can ensure the right diagnosis is reached.

This may mean a series of tests, including a skin scrape, skin swab and blood tests. This is so the vet can try to determine what is the underlying issue. They will also thoroughly check for any fleas as ‘flea allergy dermatitis’ is one of the most common causes of scratching.</p>
      <p>Once we treat the cause of the scratching, we are well on our way to re-establishing a healthy skin and coat.</p>
      <h2 id="treatment-for-dogs-with-skin-allergies">treatment-for-dogs-with-skin-allergies</h2>
      <p>It is important to go into treatment with eyes wide open. A dog’s allergies cannot usually be cured and this isn’t typically the aim of treatment. We will attempt to control symptoms as much as possible and minimise flares. Owners must understand that they will likely be seeing their vet regularly going forward.</p>
      <p>Short-term, consider bathing them in a hypoallergenic shampoo. You can also prevent them from chewing with a buster collar and trim their claws short.</p>
      <p>In the longer term, rather than a single treatment, we need to take a multi-modal approach. This means employing a variety of tactics such as:</p>
      <ul>
        <li>Allergen avoidance. As much as possible, we need to keep our pooch away from what triggers them. We may be able to figure out what this is by performing a hypoallergenic diet trial, noticing seasonal trends and carrying out allergy testing.</li>
        <li>Medicated washes that can help to strip excess yeast and bacteria from the skin.</li>
        <li>Prescription medicine such as anti-itch medicine to break the itch scratch cycle and antibiotics to treat secondary bacterial infections.</li>
        <li>Immunotherapy may be an option for some but can be expensive and is not always effective.</li>
        <li>Nutritional supplements and a skin supportive diet</li>
      </ul>
      <h2 id="dog-food-and-supplements-for-skin-allergies">dog-food-and-supplements-for-skin-allergies</h2>
      <p>For the majority of our patients, the right diet will play a role in helping their skin.</p>
      <p>This is especially true for those with food allergies / adverse food reactions. Dogs can react to certain ingredients (such as grain, dairy or chicken) so removing these ingredients completely from their diet should make an improvement within a few weeks.

As all of our Pooch & Mutt diets contain a limited number of ingredients and are grain free, they work well for many itchy dogs.</p>
      <p>Feeding a diet such as Pooch & Mutt’s Skin & Coat all year round can go a long way towards reducing flares and minimising symptoms.</p>
      <p>The omega 3 and 6 fatty acids alongside the collagen work to strengthen the skin barrier and prevent the entrance of allergens. They also lock moisture inside the skin, ensuring it doesn’t dry out, which can lead to itching.</p>
      <p>This food is packed with both prebiotics and probiotics which ensure a healthy gut microbiome is established. This can reduce symptoms of skin allergies and may potentially prevent food allergies from developing.</p>
      <p>Containing few ingredients, many of those with food allergies will respond positively to this diet. The herring is likely to be a novel protein to most dogs. However, as dogs can react to any ingredient, do double check that this is an appropriate option for your dog if they have known food allergies.</p>
      <p>For all dogs, adding omega 3 fatty acids can improve the skin barrier and help it retain moisture and react less to allergens in the environment. Our Pooch & Mutt Salmon Oil is a rich source of these healthy fats and can be added to your doggo’s dinner each day.</p>
      <p>Supplements, such as our Bionic Biotic, may also help support the skin and reduce generalised itching.

This complementary feed is sprinkled on our pet’s food. It contains both prebiotics and probiotics which promote a healthy gut microbiome. The right balance of healthy bacteria in the gut may reduce the prevalence of adverse food reactions.

The added antioxidants in Bionic Biotic can help your dog fight off skin infections as they promote a robust immune system. On top of this, the Biotin within this supplement promotes healthy fur growth; ideal for those whose itching led to fur loss or thinning.</p>
      <p>So, don’t despair if your dog is incessantly scratching at their skin. Once we treat the cause and support their skin and fur with the right diet, things should improve rapidly.</p>
`,
  headings: [
    { id: 'dog-skin-allergies-reasons-dogs-scratch', text: 'dog-skin-allergies-reasons-dogs-scratch', level: 2 },
    { id: 'skin-allergies-in-puppies', text: 'skin-allergies-in-puppies', level: 2 },
    { id: 'symptoms-of-dog-skin-allergies', text: 'symptoms-of-dog-skin-allergies', level: 2 },
    { id: 'what-to-do-if-your-dog-has-skin-allergies', text: 'what-to-do-if-your-dog-has-skin-allergies', level: 2 },
    { id: 'treatment-for-dogs-with-skin-allergies', text: 'treatment-for-dogs-with-skin-allergies', level: 2 },
    { id: 'dog-food-and-supplements-for-skin-allergies', text: 'dog-food-and-supplements-for-skin-allergies', level: 2 },
  ]
},
'how-to-calm-your-dog-during-fireworks-on-bonfire-night': {
  title: 'How to calm your dog during fireworks on Bonfire Night',
  category: 'Pets',
  snippet: "Snippet not found",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/Blog-Images-BFN_500x_crop_center.jpg?v=1634821793",
    alt: "How to calm your dog during fireworks on Bonfire Night",
    caption: "how-to-keep-dogs-calm-on-bonfire-night"
  },
  content: `
<p>For some owners and dogs, Bonfire Night and fireworks season are a huge source of tension and stress. Dogs suddenly become a shell of their normal selves, and owners are constantly on edge, worried about their pet’s wellbeing.

Of course, not every dog will be fearful of the loud bangs and shrill screeches - but a large number are. In fact, up to 17-49%* of dogs can have a noise phobia. A dog’s fear may be obvious, though some of the more subtle signs can be easily overlooked.

While canine anxiety isn’t an easy issue to tackle, there are plenty of things we can do, especially when it comes to pre-Bonfire Night preparation. Patience is key as this isn't something that resolves overnight. But with the right approach, and expert help, it can be tackled head-on and will make next year’s fireworks season more enjoyable.</p>
      <h2 id="how-to-keep-dogs-calm-on-bonfire-night">how-to-keep-dogs-calm-on-bonfire-night</h2>
      <ul>
        <li>Plan ahead - Pre-Bonfire Night exposure training: Where possible, we should try to help alleviate our dog’s concerns before fireworks season comes around. This can be done via desensitisation, which can include exposing your dog to firework noises on a video and making it a positive experience.

Start by keeping the volume low and rewarding calm behaviour with vocal praise, strokes and tempting treats. You can even play a short game of tug with your dog if this is something they find enjoyable (rather than over-stimulating). Over time, increase the volume and frequency of the noise, ensuring your dog stays tolerant and relaxed. This process can take weeks or even months.</li>
        <li>A tired dog is a well-behaved dog! Make sure that your pooch is tuckered out from a day of walks, playing and mental enrichment before peak firework time. Being tired and worn out can help them avoid feeling anxious and scared. Fireworks are now often let off as soon as it gets to dusk, so try to make sure that you get your dog exercised early enough to avoid the fireworks outside.</li>
      </ul>
      <ul>
        <li>Stay calm yourself. When fireworks start, be cautious not to act unsettled yourself. Dogs quickly pick up on our body language and stress levels and may become upset if you're anxious. Be calm and confident, and try not to fuss them too much.</li>
      </ul>
      <ul>
        <li>Create a safe haven. This can be a cosy den in the middle of the home, away from windows. Keep curtains closed and provide lots of blankets for your dog to bury themselves under. Have the TV or radio on in an attempt to drown out sounds too. Your dog may appreciate a nice long-lasting chew while they settle down for the night, or a soft, plushie companion to snuggle up with.</li>
      </ul>
      <ul>
        <li>Stick on some relaxing tunes! Many studies have shown that playing calming music for anxious pooches helps to soothe them. So, why not stick some classical music on this Bonfire Night? Better yet, you can explore Pooch & Mutt’s playlist for relaxed pooches!</li>
      </ul>
      <h2 id="what-can-you-use-to-calm-your-dog-on-bonfire-night">what-can-you-use-to-calm-your-dog-on-bonfire-night</h2>
      <p>Thankfully, there are a wide range of products out there that are specifically designed to help relax your anxious dog - including here at Pooch & Mutt!

Consider looking into the following in the lead-up to Bonfire Night to help create a chilled-out pooch.</p>
      <ul>
        <li>Pooch & Mutt’s Calm & Relaxed Range. We know how hard it is to see your fun-loving pooch reduced to quivering under the couch. So, we focused all our energy and expertise on developing a functional food range that can help soothe nervous or excitable dogs.

From our Calm & Relaxed Wet and Dry Food, Calm & Relaxed Dental Sticks, Probiotic Meaty Treats and our Hemp Chewie Supplements, you can ensure you’re doing all you can to help your pooch get through firework season.

These can be started several weeks in advance, ensuring the body has plenty of time to utilise the key ingredients including hemp, chamomile, L-tryptophan and brewer’s yeast.</li>
      </ul>
      <ul>
        <li>Pheromone plug-in or collar. These products release synthetic, imitation pheromones that help to naturally calm down dogs and pups. Alongside other calming tactics and accessories, they’re great as an extra helping hand come Bonfire Night.</li>
        <li>Toys and puzzles. Having soft, cuddly toys, enrichment toys and puzzles on hand are great for not only providing some comfort to your pooch, but distraction too!

Pooch and Mutt have their own line of toys, ranging from cuddle companions to treat stuffers and tennis balls, so you can be fully prepared to entertain your pooch come firework season.</li>
      </ul>
      <ul>
        <li>Anxiety coats or jumpers. Specialised anxiety coats and jumpers are soft and snuggly fitted, helping your dog feel more secure and protected during loud noises. The gentle pressure stimulates the production of oxytocin, creating a sense of calm.</li>
      </ul>
      <ul>
        <li>Prescription anxiolytics. These need to be given under the supervision of a vet, so your dog will have to be physically examined first.</li>
      </ul>
      <h2 id="why-are-dogs-scared-of-fireworks">why-are-dogs-scared-of-fireworks</h2>
      <p>As many dog owners will agree, not all dogs are spooked by firework bangs. For certain breeds, their genetics are sure to play a role. Gun dogs that are used to being close to loud explosions are less commonly affected than other breeds. One Norwegian study showed that the Soft Coated Wheaten Terrier and Lagotto Romagnolo were the most likely to have a noise sensitivity. Spaniels tend to be under-represented.</p>
      <p>A dog’s early experiences can also shape them. If they have had lots of positive experiences exposing them to loud noises and fireworks from a young age, they're more likely to be tolerant of them when older.

Anxiety-prone dogs, for example, those who already have separation anxiety and a fear of new places, tend to be more affected. Conversely, confident dogs who are social and cope well in other situations are far less likely to be worried about fireworks.</p>
      <h2 id="signs-of-fear-and-anxiety-in-dogs-during-fireworks">signs-of-fear-and-anxiety-in-dogs-during-fireworks</h2>
      <p>Signs of a noise phobia during firework season will vary between dogs, and can include:</p>
      <ul>
        <li>Shaking</li>
        <li>Whining or barking</li>
        <li>Hyperactivity</li>
        <li>Hiding away</li>
        <li>Refusal to eat</li>
        <li>Panting</li>
        <li>Seeking more affection</li>
        <li>Peeing or pooping in the house</li>
      </ul>
      <p>Signs may seem to start before you hear a noise, as dogs have such good hearing that they often pick up on noises before we do. Symptoms can go on for long after the fireworks have stopped too, as your dog’s stress hormone levels remain high.</p>
      <h2 id="when-will-you-see-more-fireworks-in-the-uk">when-will-you-see-more-fireworks-in-the-uk</h2>
      <p>There any many celebrations and seasonal events in the UK that often come along with fireworks lighting up your neighbourhood. To make sure you can prep your pooch, here are a few key dates for your 2024/2025 calendar:</p>
      <ul>
        <li>Diwali: 31st Oct-1st November 2024 (this changes each year)</li>
        <li>Bonfire Night: 5th November</li>
        <li>New Year’s Eve: 31st December</li>
        <li>Chinese New Year: 29th January 2025 (this changes each year)</li>
        <li>Eid: 30-31st March 2025 (this changes each year)</li>
      </ul>
      <p>If you’re looking to help prepare your dog for Bonfire Night, don’t forget to explore Pooch & Mutt’s entire Calm & Relaxed Range. And of course, a few treats for positive reinforcement wouldn’t hurt - there are plenty of tasty flavours AND nutritional benefits. If you have any questions about the Calm & Relaxed Range, be sure to contact the expert Pooch and Mutt team.</p>
      <section>References</section>
`,
  headings: [
    { id: 'how-to-keep-dogs-calm-on-bonfire-night', text: 'how-to-keep-dogs-calm-on-bonfire-night', level: 2 },
    { id: 'what-can-you-use-to-calm-your-dog-on-bonfire-night', text: 'what-can-you-use-to-calm-your-dog-on-bonfire-night', level: 2 },
    { id: 'why-are-dogs-scared-of-fireworks', text: 'why-are-dogs-scared-of-fireworks', level: 2 },
    { id: 'signs-of-fear-and-anxiety-in-dogs-during-fireworks', text: 'signs-of-fear-and-anxiety-in-dogs-during-fireworks', level: 2 },
    { id: 'when-will-you-see-more-fireworks-in-the-uk', text: 'when-will-you-see-more-fireworks-in-the-uk', level: 2 },
  ]
},


'autumn-walks-dangers-of-acorns-conkers-for-dogs': {
  title: 'Autumn Walks: Dangers of Acorns & Conkers for Dogs',
  category: 'Pets',
  snippet: "Snippet not found",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/BLOG_AUTUMN_WALKS_IMAGE_4_500x_crop_center.jpg?v=1728388848",
    alt: "Autumn Walks: Dangers of Acorns & Conkers for Dogs",
    caption: "are-conkers-poisonous-to-dogs"
  },
  content: `
<p>As the colder months roll in, you might be looking forward to those autumnal dog walks full of golden foliage, misty morning light and crunchy leaves underfoot.</p>
      <p>There is something else the autumn brings, however, and that’s fallen seeds - including acorns and conkers that scatter the ground of parks, pavements and fields. Dogs are curious creatures and will gladly munch on acorns and conkers when your head’s turned - but is it safe for them?</p>
      <p>Read on to learn about the dangers of acorns and conkers for dogs, and tips on how to keep your pooch safe on autumn walks.</p>
      <h2 id="are-conkers-poisonous-to-dogs">are-conkers-poisonous-to-dogs</h2>
      <p>Yes - conkers are toxic to dogs and shouldn’t be ingested.</p>
      <p>If your pooch eats a conker, not only does it pose a serious choking hazard, it can make your dog very sick due to the toxin aesculin. This can cause your dog to vomit or have diarrhoea - but it can lead to more serious symptoms, or even death if it goes untreated.</p>
      <h3 id="what-are-conkers">what-are-conkers</h3>
      <p>Let’s talk trees and seeds.


A conker is the seed of a horse chestnut tree, and grows encased in a spiky green shell. The seeds (conkers) are round, shiny, and brown inside their spiky casing, and are about the size of a large marble or golf ball.</p>
      <p>Although conkers look similar to chestnuts, they are not edible.</p>
      <h3 id="how-to-identify-a-conker">how-to-identify-a-conker</h3>
      <p>On the ground outside, a conker will likely be inside its green spiky case - though often they can come loose and will resemble a golf-ball-sized seed; which is brown, hard and shiny. Often there will be lots of them on the ground at one time, underneath a horse chestnut tree.</p>
      <h3 id="what-other-parts-of-the-horse-chestnut-tree-are-poisonous-to-dogs">what-other-parts-of-the-horse-chestnut-tree-are-poisonous-to-dogs</h3>
      <p>The entirety of a horse chestnut tree is toxic to dogs if they ingest it.</p>
      <p>This includes the bark and flowers, as well as the conkers. This is because the whole tree contains the toxin, aesculin, which can make a dog very ill or even prove fatal.</p>
      <h2 id="are-acorns-poisonous-to-dogs">are-acorns-poisonous-to-dogs</h2>
      <p>Yes, acorns are toxic to dogs due to the presence of tannins.</p>
      <p>These are a type of bitter-tasting compound that can irritate a dog’s digestive system and cause pain, diarrhoea and vomiting if they eat too many. Tannins also affect the nervous system, so can cause convulsions. In severe cases, tannins can cause kidney or liver damage in your pooch.</p>
      <h3 id="what-are-acorns">what-are-acorns</h3>
      <p>Acorns are the seed of the oak tree.</p>
      <p>They are smaller than conkers, more like a small marble - and are light brown, typically oval-shaped with a hard, smooth shell.</p>
      <h3 id="are-acorns-poisonous-to-dogs">are-acorns-poisonous-to-dogs</h3>
      <p>Yes, acorns are toxic to dogs due to the presence of tannins.</p>
      <p>These are a type of bitter-tasting compound that can irritate a dog’s digestive system and cause pain, diarrhoea and vomiting if they eat too many. Tannins also affect the nervous system, so can cause convulsions. In severe cases, tannins can cause kidney or liver damage in your pooch.</p>
      <h3 id="how-to-identify-an-acorn">how-to-identify-an-acorn</h3>
      <p>When they’ve fallen from an oak tree, acorns are usually brown, small, hard and shiny. They have a small green cap and maybe a stalk, where they’ve been attached to the branches of the oak tree. Many acorns will scatter the ground underneath an oak tree in the autumn.</p>
      <h2 id="how-do-i-know-if-my-dog-has-eaten-something-toxic">how-do-i-know-if-my-dog-has-eaten-something-toxic</h2>
      <p>Here are some signs that your dog may have eaten something they shouldn’t on an autumn walk…</p>
      <h3 id="mild-symptoms-of-poisoning-in-dogs">mild-symptoms-of-poisoning-in-dogs</h3>
      <p>Mild symptoms of poisoning from conkers or acorns might be:</p>
      <ul>
        <li>Vomiting</li>
        <li>Diarrhoea</li>
        <li>Lethargy</li>
        <li>Loss of appetite</li>
        <li>Drooling</li>
      </ul>
      <h3 id="severe-poisoning-symptoms-in-dogs">severe-poisoning-symptoms-in-dogs</h3>
      <p>Your pooch might show the above mild symptoms alongside one or more of these severe symptoms:</p>
      <ul>
        <li>Difficulty breathing</li>
        <li>Tremors or seizures</li>
        <li>Collapse/faint</li>
        <li>Increased heart rate</li>
        <li>Kidney or liver failure (in extreme cases)</li>
      </ul>
      <h2 id="when-to-go-to-a-vet">when-to-go-to-a-vet</h2>
      <p>If your pooch shows any of the above symptoms, take them to the vet as a state of emergency. If you notice your dog is eating a conker or acorn, remove the pieces from your dog’s mouth, if you can. Keep a close eye on them - but if they’re a small or frail dog it’s worth calling the vet, regardless of how fine they seem.</p>
      <h3 id="how-many-conkers-or-acorns-will-make-my-dog-ill">how-many-conkers-or-acorns-will-make-my-dog-ill</h3>
      <p>If your dog eats only one conker or acorn, they might be lucky enough to go unaffected - but you should take them to the vet anyway for a check-up. This is especially important if your dog is small. Keep a close eye on them for any untoward symptoms. If they eat more than one acorn or conker, it goes without saying that you should immediately take them to the vet.</p>
      <h2 id="how-to-stop-your-dog-from-eating-conkers-and-acorns">how-to-stop-your-dog-from-eating-conkers-and-acorns</h2>
      <p>We can’t keep our dog in sight at all times, especially if you’ve let them off the lead - but there are steps you can take to prevent your pooch eating acorns or conkers on an autumn walk:</p>
      <p>Keep dog on lead</p>
      <p>If you’re in an area that’s rife with dropped acorns and conkers, it’s a good idea to keep your pooch on the lead for that portion of the walk. This way it’s easier to keep an eye on them and pull them away from anything they might try to snaffle.</p>
      <p>Train them to leave it</p>
      <p>Be safe outdoors</p>
      <p>Keep a sense of safety in mind at all times when you’re out walking the dog during the autumn months - there are lots more seeds and fallen fruits on the ground that your dog can get their nose into. Be vigilant about what they might be distracted by, and keep them distracted with healthy dog treats instead.</p>
      <p>For the perfect autumnal pairing, why not try our seasonal Pumpkin Spice Probiotic Meaty Treats? Made up of nutrient-rich pumpkin and just a sprinkle of cinnamon for bonus anti-inflammatory properties, 'tis the season to be chomping on these delicious, probiotic meaty bites.</p>
      <h3 id="other-things-to-look-out-for-on-autumn-walks">other-things-to-look-out-for-on-autumn-walks</h3>
      <p>Here are some other risks to keep a vigilant eye on during your autumn dog walks:</p>
      <ul>
        <li>Wild mushrooms/toadstools</li>
      </ul>
      <p>Just like humans shouldn’t eat any mushroom they find, nor should dogs - some are toxic or even deadly.</p>
      <ul>
        <li>Dirty water/puddles</li>
      </ul>
      <p>Try to keep your dog from lapping up water from ponds or dirty puddles, as it can contain nasty bacteria or parasites that will make them very sick.</p>
      <ul>
        <li>Ticks</li>
      </ul>
      <p>Dogs rolling around in grasses or pushing through shrubs in forests may pick up ticks, which can cause Lyme Disease. Examine your dog’s skin and coat regularly after a walk for any unwanted stowaways.</p>
      <ul>
        <li>Lungworm</li>
      </ul>
      <p>Snails, slugs, and their slime trails can transmit lungworm, a parasite that can cause serious illness in dogs. This one is tricky, but try to stop your dog from slurping up slugs and snails</p>
      <p>There's nothing better than enjoying the turn of the season with your pooch! And with our help, you can do so safely. For more tips on keeping your dog safe, happy and healthy, be sure to check out the rest of our Dog Blog. To make sure they're chomping on nothing but nutritious goodies, explore our whole healthy and natural dog food range. Happy Paw-tumn!</p>
`,
  headings: [
    { id: 'are-conkers-poisonous-to-dogs', text: 'are-conkers-poisonous-to-dogs', level: 2 },
    { id: 'what-are-conkers', text: 'what-are-conkers', level: 3 },
    { id: 'how-to-identify-a-conker', text: 'how-to-identify-a-conker', level: 3 },
    { id: 'what-other-parts-of-the-horse-chestnut-tree-are-poisonous-to-dogs', text: 'what-other-parts-of-the-horse-chestnut-tree-are-poisonous-to-dogs', level: 3 },
    { id: 'are-acorns-poisonous-to-dogs', text: 'are-acorns-poisonous-to-dogs', level: 2 },
    { id: 'what-are-acorns', text: 'what-are-acorns', level: 3 },
    { id: 'are-acorns-poisonous-to-dogs', text: 'are-acorns-poisonous-to-dogs', level: 3 },
    { id: 'how-to-identify-an-acorn', text: 'how-to-identify-an-acorn', level: 3 },
    { id: 'how-do-i-know-if-my-dog-has-eaten-something-toxic', text: 'how-do-i-know-if-my-dog-has-eaten-something-toxic', level: 2 },
    { id: 'mild-symptoms-of-poisoning-in-dogs', text: 'mild-symptoms-of-poisoning-in-dogs', level: 3 },
    { id: 'severe-poisoning-symptoms-in-dogs', text: 'severe-poisoning-symptoms-in-dogs', level: 3 },
    { id: 'when-to-go-to-a-vet', text: 'when-to-go-to-a-vet', level: 2 },
    { id: 'how-many-conkers-or-acorns-will-make-my-dog-ill', text: 'how-many-conkers-or-acorns-will-make-my-dog-ill', level: 3 },
    { id: 'how-to-stop-your-dog-from-eating-conkers-and-acorns', text: 'how-to-stop-your-dog-from-eating-conkers-and-acorns', level: 2 },
    { id: 'other-things-to-look-out-for-on-autumn-walks', text: 'other-things-to-look-out-for-on-autumn-walks', level: 3 },
  ]
},
'finding-the-best-food-for-pancreatitis-in-dogs': {
  title: 'Finding the best food for pancreatitis in dogs',
  category: 'Pets',
  snippet: "Snippet not found",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/BLOG_PANCREATITIS_IMAGE_1_500x_crop_center.jpg?v=1714398996",
    alt: "Finding the best food for pancreatitis in dogs",
    caption: "what-is-pancreatitis-in-dogs"
  },
  content: `
<strong>pancreatitis</strong>
      <h2 id="what-is-pancreatitis-in-dogs">what-is-pancreatitis-in-dogs</h2>
      <strong>Pancreatitis</strong>
      <p>It’s fair to say that diet is an essential part of treatment when a dog has pancreatitis. Not tweaking their diet to suit their new physical needs can even prove life threatening to a dog with pancreatitis, so once your pooch is diagnosed, honing what they will eat in future is vital to keep your dog well and safe.</p>
      <h2 id="nutritional-requirements-for-dog-food-for-pancreatitis">nutritional-requirements-for-dog-food-for-pancreatitis</h2>
      <ul>
        <li>Low in fat. Overly fatty foods put a huge strain on the pancreas and could cause your dog to become very sick. Heavy, fatty or sugary foods should be replaced with healthy, light veggies and lean proteins.</li>
        <li>Highly digestible. Dogs with pancreatitis must eat digestible foods that are easy on the organs, to avoid the pancreas having to overwork. Gentle digestible foods such as fish, potatoes and peas should be top of the menu.</li>
        <li>Made with high-quality protein sources. Dogs need a lot of lean protein - it’s the hero of a nutritious dog diet. However, some healthy proteins can even be a risk for a dog with pancreatitis due to potential fat content. Fatty proteins (such as lamb or beef) should be approached with caution, ideally replaced with very lean, digestible proteins (such as chicken or turkey).</li>
        <li>Made of limited ingredients. When feeding a dog with pancreatitis, the fewer ingredients the better. Keeping it simple with whole, nourishing foods reduces the risk of food sensitivities and nasty symptoms being triggered.</li>
      </ul>
      <h2 id="what-food-can-i-give-my-dog-with-pancreatitis">what-food-can-i-give-my-dog-with-pancreatitis</h2>
      <p>So what can you feed your pooch that eases, rather than triggers, their pancreatitis?</p>
      <ul>
        <li>The easiest option is to choose a premium-quality, specialist dog food specifically formulated for digestive issues or pancreatic health, and go for a brand recommended by your vet. This dog food should have a low fat content, usually 15% or below.</li>
        <li>Some pooch owners opt for a homemade diet. This can be the preferable choice if you want to know exactly what your dog is eating, however it is tricky to balance the nutrients on your own when your dog has such specific needs. If you choose to prepare dog food yourself at home, make sure this is alongside the guidance of a vet or pet nutritionist.</li>
        <li>Prioritise hydration. Dogs with pancreatitis often get dehydrated - so wet food is often seen as the best way to boost their hydration. Some specialist dry dog foods are still excellent options, however, as they can be served alongside oral hydration solutions or softened with warm water. Also, make sure there are lots of bowls of fresh water around your house for your pooch to drink all day.</li>
      </ul>
      <h3 id="ingredients-to-avoid">ingredients-to-avoid</h3>
      <p>When you’re planning a new diet for your pooch with pancreatitis, here’s a reminder of foods to stay clear of…</p>
      <ul>
        <li>High-fat ingredients, as they can exacerbate symptoms of pancreatitis. Fat is the biggest trigger of your dog’s condition, so things such as human leftovers, fatty or sugary treats, cheese and red meats are no longer on the menu! Chat to your vet about specifics so you know what’s best for your particular pooch - they can let you know what fat levels your dog can manage.</li>
        <li>Common allergens and irritants for sensitive dogs. Allergens that lots of dogs are sensitive to, such as grain or dairy products, are likely to make your dog unwell if they have pancreatitis. Trying a grain-free dog food and/or avoiding dairy products and other common allergens entirely will certainly help with this.</li>
        <li>Cheap dog food not formulated for pancreatitis. It goes without saying, but cheap dog food that hasn’t been designed for your dog’s needs is only going to stress their poor body. These dog foods are not only more likely to contain high-fat ingredients but also preservatives, artificial sugars and nasties that will really aggravate your dog’s pancreatitis.</li>
      </ul>
      <h3 id="gastrointestinal-dog-food-for-pancreatitis">gastrointestinal-dog-food-for-pancreatitis</h3>
      <p>As it’s best to avoid common allergens which can trigger symptoms, dogs with pancreatitis often benefit from a grain-free dog food - like our vet recommended, grain-free dog food for gastrointestinal issues (such as pancreatitis) that contains zero grain.</p>
      <p>It’s made with delicious, gut-sensitive ingredients that are gently digestible - like salmon, a high quality protein full of powerful nutrients. Unlike fresh salmon, which can be risky for a dog with pancreatitis due to its fattiness, the fat content of our vet-approved kibble is as low as 15%. It also contains apple pulp for a boost of digestive fibre, and lots of prebiotics and probiotics to balance healthy bacteria in the gut.</p>
      <p>* Note - Our Veterinary Food for Gastroenteritis contains 15% fat - so is NOT suitable for pooches advised to stick to a diet with less than 15% fat. They'd instead need a lower fat alternative (like our Fish, Potato and Pea Wet Food).</p>
      <h2 id="transitioning-to-a-pancreatitis-friendly-diet">transitioning-to-a-pancreatitis-friendly-diet</h2>
      <p>When you’ve got your dog’s new pancreatitis-friendly food, it’s important to transition them slowly...</p>
      <ul>
        <li>Gradually introduce new food, perhaps mixing it with some of their old food for a few days at first and monitoring how they react to it. Eventually you can transition completely to their new food in around 7-10 days.</li>
        <li>Monitor your dog’s behaviour, such as bowel movements and any untoward symptoms (lethargy or bloatedness, for example), as well as improvements in their condition.</li>
        <li>Check in with a vet regularly to update them on how things are going. Regular vet check-ups are an essential step in looking after your dog with pancreatitis.</li>
        <li>Tailor their diet. If you have trouble getting your dog to eat their new food, that’s another thing to discuss with a vet. All dogs are different levels of picky - if they don’t like something, their diet can be tailored to suit their tastes. The severity of pancreatitis can vary - and your vet can also inform you on fat levels in food your dog can handle.</li>
      </ul>
      <h2 id="conclusion">conclusion</h2>
      <p>Let’s sum up - here are the main points to consider when feeding your dog with pancreatitis:</p>
      <ul>
        <li>As the pancreas is responsible for balancing blood sugar levels and digesting fats, it’s vital to put your dog on a suitable diet that won’t put pressure on the pancreas.</li>
        <li>Plan a diet for your dog that is low in fat and contains simple, highly digestible ingredients. You can choose a specialist dog food for gastrointestinal issues, such as pancreatitis, that balances the nutrients for you.</li>
        <li>Hydration is very important when feeding your dog with pancreatitis. If you’re putting them on a specialist dry food, you can add water to soften the kibble, and be sure your dog drinks lots of water throughout the day.</li>
        <li>Consult your vet on which foods your dog with pancreatitis can eat. They can tell you the level of fat content your dog can manage (usually between 7% and 15%) and can offer advice and medications to maintain your dog’s well-being.</li>
        <li>With veterinary guidance and the help of a specialist diet for pancreatitis, your pooch can avoid exacerbating the symptoms of their condition and enjoy a healthy and stress-free quality of life.</li>
      </ul>
      <h2 id="faqs">faqs</h2>
      <h3 id="how-is-pancreatitis-in-dogs-diagnosed">how-is-pancreatitis-in-dogs-diagnosed</h3>
      <p>Dogs with pancreatitis often show symptoms in advance (vomiting, abdominal pain, changes in appetite). A vet will determine if a pooch has pancreatitis with physical examinations, including x-rays, blood tests or ultrasounds, to detect whether their pancreatitis is inflamed. Once diagnosed, your vet will likely prescribe medication and suggest a special low-fat diet.</p>
      <h3 id="is-wet-or-dry-food-better-for-dogs-with-pancreatitis">is-wet-or-dry-food-better-for-dogs-with-pancreatitis</h3>
      <p>As pancreatitis can lead a dog to be dehydrated, wet food is often deemed beneficial due to its higher water content. There’s also the argument that wet food is more palatable, therefore a dog is more likely to eat it and get all the valuable nutrition they need for their condition.</p>
      <p>However, a nutritious dry food, if it’s a specialist, vet-approved recipe, is still an excellent choice for a dog with pancreatitis. To add water content you could serve their food softened with some warm water, serve it with a hydration supplement, and make sure there are always full bowls of water around the house for your dog to drink throughout the day.</p>
      <h3 id="can-dogs-with-pancreatitis-eat-tuna">can-dogs-with-pancreatitis-eat-tuna</h3>
      <p>Tuna is a healthy fish for dogs, but for dogs with pancreatitis, it’s a little risky. As tuna is a fatty fish, it could exacerbate your dog’s sensitive digestive system. If you’re considering canned tuna, be sure that it’s high quality and the type that comes in spring water - not brine and definitely not oil. Before you go ahead with feeding tuna to your dog, chat with your vet about your dog’s pancreatitis to be sure.</p>
      <h3 id="can-dogs-with-pancreatitis-eat-eggs">can-dogs-with-pancreatitis-eat-eggs</h3>
      <p>Eggs are a typically fatty food, but they are a healthy protein source and come with lots of nutritional benefits for dogs. Whether your pooch should avoid eggs will depend on their specific severity of pancreatitis, so discuss it with your vet. If your dog eats eggs, they should be hard-boiled so they’re fully cooked, and served plain alongside other lean, digestible foods.</p>
      <h3 id="are-there-any-home-remedies-for-pancreatitis-in-dogs">are-there-any-home-remedies-for-pancreatitis-in-dogs</h3>
      <p>If your pooch has been diagnosed with pancreatitis, some go-to home remedies include feeding your dog little and often, as this avoids the body digesting large amounts of food, so puts less pressure on the pancreas. Some dog owners also try fasting on their dog - this may be appropriate if they're vomiting excessively, however, in these cases we'd usually recommend contacting your vet as they may want you to bring your dog in and on a fluid drip with anti nausea medicine.</p>
      <p>Remember to also keep your dog well hydrated with lots of water and hydrating foods.</p>
      <p>Note that at-home remedies aren’t enough for pancreatitis; you’ll need professional medical treatment and advice from a vet when carrying out any of the above suggestions.</p>
      <h3 id="which-protein-is-best-for-a-dog-with-pancreatitis">which-protein-is-best-for-a-dog-with-pancreatitis</h3>
      <p>Protein is super important for growth, maintenance and physical development as a dog ages, but it’s vital to give a dog with pancreatitis the right types of protein. They should be lean and highly digestible to put the least strain on the pancreas; meats such as turkey or chicken and certain types of fish are perfect.</p>
      <p>Dog foods that are specially formulated for a dog with pancreatitis will be made with high-quality proteins that are super healthy as well as suited to your dog’s physical condition.</p>
      <p>If your pooch has special dietary requirements due to a health condition such as pancreatitis, our vet-approved, grain-free dog food for gastrointestinal issues is perfectly formulated to fuel their bodies while keeping them healthy, happy, and safe. Remember to discuss with your vet before changing your dog’s food.</p>
      <section>References</section>
`,
  headings: [
    { id: 'what-is-pancreatitis-in-dogs', text: 'what-is-pancreatitis-in-dogs', level: 2 },
    { id: 'nutritional-requirements-for-dog-food-for-pancreatitis', text: 'nutritional-requirements-for-dog-food-for-pancreatitis', level: 2 },
    { id: 'what-food-can-i-give-my-dog-with-pancreatitis', text: 'what-food-can-i-give-my-dog-with-pancreatitis', level: 2 },
    { id: 'ingredients-to-avoid', text: 'ingredients-to-avoid', level: 3 },
    { id: 'gastrointestinal-dog-food-for-pancreatitis', text: 'gastrointestinal-dog-food-for-pancreatitis', level: 3 },
    { id: 'transitioning-to-a-pancreatitis-friendly-diet', text: 'transitioning-to-a-pancreatitis-friendly-diet', level: 2 },
    { id: 'conclusion', text: 'conclusion', level: 2 },
    { id: 'faqs', text: 'faqs', level: 2 },
    { id: 'how-is-pancreatitis-in-dogs-diagnosed', text: 'how-is-pancreatitis-in-dogs-diagnosed', level: 3 },
    { id: 'is-wet-or-dry-food-better-for-dogs-with-pancreatitis', text: 'is-wet-or-dry-food-better-for-dogs-with-pancreatitis', level: 3 },
    { id: 'can-dogs-with-pancreatitis-eat-tuna', text: 'can-dogs-with-pancreatitis-eat-tuna', level: 3 },
    { id: 'can-dogs-with-pancreatitis-eat-eggs', text: 'can-dogs-with-pancreatitis-eat-eggs', level: 3 },
    { id: 'are-there-any-home-remedies-for-pancreatitis-in-dogs', text: 'are-there-any-home-remedies-for-pancreatitis-in-dogs', level: 3 },
    { id: 'which-protein-is-best-for-a-dog-with-pancreatitis', text: 'which-protein-is-best-for-a-dog-with-pancreatitis', level: 3 },
  ]
},
'finding-the-best-food-for-colitis-in-dogs': {
  title: 'Finding the best food for colitis in dogs',
  category: 'Pets',
  snippet: "Snippet not found",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/BLOG_BEST_FOOD_FOR_COLITIS_IMAGE_1_500x_crop_center.jpg?v=1712679669",
    alt: "Finding the best food for colitis in dogs",
    caption: "what-is-colitis"
  },
  content: `
<p>Nutrition is always the best fuel for your dog’s health and happiness, but when they have health conditions that require a specialist diet - such as colitis - it becomes even more important.</p>
      <p>If your pooch has ongoing toilet trouble (usually severe diarrhoea) to the extent that they’ve been diagnosed with colitis, one of the first steps in their treatment is to get a special diet in place that works with their delicate digestive system.</p>
      <p>So what do you feed a dog with colitis? Read on to learn about the best food to give your pooch for colitis - from what ingredients to avoid, to what constitutes a colitis-friendly diet.</p>
      <h2 id="what-is-colitis">what-is-colitis</h2>
      <p>Colitis is a condition in which the colon becomes inflamed, resulting in the dog experiencing severe toilet issues - usually diarrhoea, but sometimes constipation, to the point where there’s often blood or mucus alongside their poop.</p>
      <p>It can be brought on by a few things such as food allergies, an illness (autoimmune disorders, for example) or even by stress. It can be long-term affliction or a short burst of colitis - but it’s always exacerbated by your pooch eating the wrong foods.</p>
      <h3 id="does-diet-help-manage-colitis">does-diet-help-manage-colitis</h3>
      <p>Diet is an integral treatment to manage a dog with colitis, as continuing to feed triggering foods means they’ll keep experiencing bowel issues and diarrhoea.</p>
      <p>Not tweaking their diet can result in serious worsening of their condition, so once your pooch is diagnosed with colitis, it’s a good idea to assess and hone their diet straight away.</p>
      <h2 id="nutritional-requirements-in-dog-food-for-colitis">nutritional-requirements-in-dog-food-for-colitis</h2>
      <p>So what makes a diet suitable for a dog with colitis? These are usually the factors of a colitis-friendly diet for dogs:</p>
      <ul>
        <li>High in fibre, as both soluble and insoluble fibres are fundamental in regulating digestion, promoting regular bowel movements and improving stool consistency (no more runny poops!). However, some dogs with colitis may react badly to excessive fibre, so discuss with a vet to be sure you get the balance right.</li>
        <li>Easily digestible proteins. Dogs need protein, but they must be lean and easily digested so the body isn’t having to work hard to break them down and absorb them into the body.</li>
        <li>Low fat, as fatty foods can also exacerbate the gut, colon and digestive system. Inflammation of the intestines, as happens with colitis, can make fats harder to absorb.</li>
        <li>Lots of probiotics and prebiotics, the combination of which have powerful impacts on improving digestion and balancing healthy bacteria in the gut. Here’s more about what probiotics can do for dogs.</li>
      </ul>
      <h2 id="what-food-can-i-give-my-dog-with-colitis">what-food-can-i-give-my-dog-with-colitis</h2>
      <p>So what kind of food can you give your pooch to manage their colitis? It’s a personal choice, but you’ll want to discuss one of the following options with your vet:</p>
      <ul>
        <li>The easiest option is to choose a premium-quality, specialist dog food for sensitive digestion or gastrointestinal issues. Unlike cheap dog foods on the market, a specialist dog food formulated for gastric health will be made up of tasty, nutritious ingredients that are high fibre and low fat, nourishing your pooch without triggering their sensitive digestive system, and/or colitis.</li>
        <li>Some pooch parents opt for a homemade diet. This can be the preferable choice if you want to know exactly what goes into your dog’s food bowl, however when your dog has specific dietary needs, it can be tricky to get the nutritional balance right on your own. If you prepare dog food yourself at home, do so with the guidance of a vet or pet nutritionist.</li>
        <li>Prioritise hydration. Dogs with colitis are at risk of getting dehydrated - so it’s vital to boost their water consumption. Wet foods help with this, however dry foods for gastrointestinal issues are still a good choice - they can be softened up with warm water or served alongside oral hydration solutions.</li>
      </ul>
      <h3 id="grain-free-dog-food-for-colitis">grain-free-dog-food-for-colitis</h3>
      <p>As dogs with colitis can be triggered by common food allergies like grain, lots of pooch parents opt for a specialist grain-free dog food to target the problem. Pooch & Mutt offer a vet-recommended dog food for gastrointestinal issues, such as colitis, that contains zero grain. It comes with the protein goodness of tasty salmon and herring, a shot of probiotics and prebiotics to soothe a turbulent gut, and apple pulp for an added boost of dietary fibre.</p>
      <p>There are also lots of tummy-sensitive recipes in our Health & Digestion range, which contain gently digestible, high-fibre ingredients such as lean turkey, white fish and nutritious veggies - along with probiotics and prebiotics, to support dogs with gut and bowel issues such as colitis.</p>
      <p>You could also try adding a natural probiotics supplement for dogs to sprinkle on the food you give them for their colitis. Check with your vet once you’ve decided on your preferred dietary combination.</p>
      <h3 id="ingredients-to-avoid">ingredients-to-avoid</h3>
      <p>When you’re planning a new diet for your dog with colitis, here’s a reminder of foods to stay away from to avoid more doggo diarrhoea…</p>
      <ul>
        <li>High fat foods and simple carbohydrates such as fatty dog treats or most human leftovers, are best completely avoided if your dog has colitis. Sugary, high fat foods put too much pressure on the dog’s digestive system, can make colitis worse, and offer little nutritional value to your dog.</li>
        <li>Common food allergens such as grains, red meat or dairy, can irritate a dog’s stomach and digestive tract and exacerbate symptoms of colitis. It’s best to keep it simple with safe, gently digestible ingredients and consider going grain-free.</li>
        <li>Cheap dog food not made for digestive issues. It goes without saying, but cheap dog food that hasn’t been designed for sensitive digestive systems is only going to stress your poor dog’s body. These dog foods are not only more likely to contain high-fat ingredients but also preservatives, sugars and nasties that’ll make your dog’s poops much worse.</li>
      </ul>
      <h2 id="transitioning-to-a-colitis-friendly-diet">transitioning-to-a-colitis-friendly-diet</h2>
      <p>When you’ve organised a diet for your dog’s colitis, it’s important to transition them safely into their new foods…</p>
      <ul>
        <li>Gradually introduce their new food. Some pooch parents choose to mix some of their dog’s old food with the new to avoid shocking the digestive system. Eventually you’ll phase out their old food within 7-10 days.</li>
        <li>OR: Identify a food allergen. The other route, if you’re trying to identify a food allergen as the source of your dog’s colitis, is to try an exclusion diet. This means you simplify your dog’s diet to only bland foods and slowly introduce any potential triggers to monitor their reaction. Here’s more detail on identifying a food allergy in your dog.</li>
        <li>Check your dog’s behaviour as they transition into their new diet, monitoring bowel movements and any untoward symptoms (lethargy or being bloated for example).</li>
        <li>Consult with a vet to update them throughout treatment. They can offer guidance, suggest further diet changes or prescribe helpful medications to make things easier for your dog. Regular check-ups with the vet is an essential factor in managing your dog’s colitis.</li>
        <li>Tailor their diet. If you have trouble getting your dog to eat their new foods, that’s another thing to discuss with a vet. Dogs can be picky - but their new diet can be tailored to be palatable to them while still suiting their physical needs.</li>
      </ul>
      <h2 id="conclusion">conclusion</h2>
      <p>To sum up, here are the main points to consider when your dog has colitis:</p>
      <ul>
        <li>As nutrition is directly linked to digestive health and bowels, it’s vital to put your dog on a suitable diet when they have a colitis diagnosis.</li>
        <li>Plan a diet for your dog that’s high in fibre, low in fat and contains simple, highly digestible ingredients. Or you can choose a specialist dog food for gastrointestinal issues or a sensitive stomach that does the hard work of balancing the nutrients for you.</li>
        <li>Remember, if you think your dog’s colitis is down to a food allergy, you might want to try an exclusion diet first.</li>
        <li>Probiotics and prebiotics are your best friend when managing digestive problems such as colitis - a good dog food for sensitive stomachs should already contain these, or you could use a probiotic supplement for dogs.</li>
        <li>Boost your dog’s hydration, either by opting for wet foods, using oral hydration solutions or making sure your pup has the means to drink a lot of water throughout the day.</li>
        <li>Get regular vet check-ups as you manage your dog’s colitis; they can offer advice around dietary tweaks or suggest medications to improve your dog’s health and wellbeing.</li>
        <li>With veterinary guidance and the help of a specialist diet for colitis, your pooch can avoid exacerbating the symptoms of their condition and enjoy a much improved quality of life.</li>
      </ul>
      <h2 id="faqs">faqs</h2>
      <h3 id="can-stress-affect-my-dogs-colitis-symptoms">can-stress-affect-my-dogs-colitis-symptoms</h3>
      <p>Yes it can, in fact stress can even be the sole cause of colitis in some circumstances. If your vet has ruled out any other causes and your dog has been through a stressful event; perhaps a house move, recent surgery or you’ve just got a new pet; it’s possible that stress could be exacerbating your dog’s digestive issues and worsening colitis. Here are some tips on managing stress colitis in dogs.</p>
      <h3 id="is-salmon-good-for-dogs-with-colitis">is-salmon-good-for-dogs-with-colitis</h3>
      <p>Salmon is a healthy, delicious protein full of essential fatty acids like omega-3 and omega-6. However, it can be considered a risky food for dogs with serious digestive issues (pancreatitis, for instance), due to it having a higher fat content than other proteins.</p>
      <p>Discuss this over with your vet, however a specialist dog food for digestion that contains salmon should be safe for your dog to eat. If you choose to feed your dog fresh salmon, be sure it’s cooked and plain without added salt, and that all the bones are removed.</p>
      <h3 id="whats-the-difference-between-ibd-and-colitis-in-dogs">whats-the-difference-between-ibd-and-colitis-in-dogs</h3>
      <p>Both Irritable Bowel Disease (IBD) and colitis are conditions that affect digestion and bowel function in dogs, however they are different things. IBD is a general term for inflammation of the entire digestive system, including the gut, small intestine and colon, whereas colitis is specifically linked to the colon. Colitis can be either chronic or an acute, short-term symptom of another illness or infection, whereas IBD is a longer-term condition in dogs that impacts what they can eat and digest.</p>
      <h3 id="how-long-should-it-take-to-see-improvements-after-switching-to-new-dog-food">how-long-should-it-take-to-see-improvements-after-switching-to-new-dog-food</h3>
      <p>This depends on the severity and causes of your dog’s colitis, but in general, once you’ve transitioned your dog into a new colitis-friendly diet, you should start to see improvements within 2-4 weeks. Keep an eye on their behaviours and bowel movements for signs of improvements on their colitis, and be in touch with your vet throughout the process so they can guide you on next steps.</p>
      <h3 id="are-there-any-supplements-that-can-help-support-dogs-with-colitis">are-there-any-supplements-that-can-help-support-dogs-with-colitis</h3>
      <p>A probiotic supplement is a great option for a dog with digestive issues such as colitis. Probiotics and prebiotics are responsible for balancing the bacteria in the gut and promoting digestion, immunity and healthy bowel function. Dogs can get probiotics from food, but a probiotic supplement for dogs that you can sprinkle over their food is a more targeted way of making sure they get all the probiotic goodness they need.</p>
      <h3 id="should-i-avoid-feeding-my-dog-treats-if-they-have-ibd">should-i-avoid-feeding-my-dog-treats-if-they-have-ibd</h3>
      <p>All dogs deserve treats, even those with dodgy tummies! The key is choosing dog treats that won’t cause havoc in their delicate tums, which means human leftovers and fatty, sugary treats are a no-no. Try some healthy dog treats made from natural ingredients. Many, such as our probiotic meaty treats, for instance, have added supplements that will actually support your dog’s digestive issues.</p>
      <p>If your hungry hound has a digestive health condition such as colitis, take a look at our tasty and digestible grain-free dog food for sensitive stomachs, our specialist Veterinary Diets range and powerful probiotic supplements.</p>
      <section>References</section>
`,
  headings: [
    { id: 'what-is-colitis', text: 'what-is-colitis', level: 2 },
    { id: 'does-diet-help-manage-colitis', text: 'does-diet-help-manage-colitis', level: 3 },
    { id: 'nutritional-requirements-in-dog-food-for-colitis', text: 'nutritional-requirements-in-dog-food-for-colitis', level: 2 },
    { id: 'what-food-can-i-give-my-dog-with-colitis', text: 'what-food-can-i-give-my-dog-with-colitis', level: 2 },
    { id: 'grain-free-dog-food-for-colitis', text: 'grain-free-dog-food-for-colitis', level: 3 },
    { id: 'ingredients-to-avoid', text: 'ingredients-to-avoid', level: 3 },
    { id: 'transitioning-to-a-colitis-friendly-diet', text: 'transitioning-to-a-colitis-friendly-diet', level: 2 },
    { id: 'conclusion', text: 'conclusion', level: 2 },
    { id: 'faqs', text: 'faqs', level: 2 },
    { id: 'can-stress-affect-my-dogs-colitis-symptoms', text: 'can-stress-affect-my-dogs-colitis-symptoms', level: 3 },
    { id: 'is-salmon-good-for-dogs-with-colitis', text: 'is-salmon-good-for-dogs-with-colitis', level: 3 },
    { id: 'whats-the-difference-between-ibd-and-colitis-in-dogs', text: 'whats-the-difference-between-ibd-and-colitis-in-dogs', level: 3 },
    { id: 'how-long-should-it-take-to-see-improvements-after-switching-to-new-dog-food', text: 'how-long-should-it-take-to-see-improvements-after-switching-to-new-dog-food', level: 3 },
    { id: 'are-there-any-supplements-that-can-help-support-dogs-with-colitis', text: 'are-there-any-supplements-that-can-help-support-dogs-with-colitis', level: 3 },
    { id: 'should-i-avoid-feeding-my-dog-treats-if-they-have-ibd', text: 'should-i-avoid-feeding-my-dog-treats-if-they-have-ibd', level: 3 },
  ]
},




'finding-the-best-food-for-yeast-infections-in-dogs': {
  title: 'Finding the best food for yeast infections in dogs',
  category: 'Pets',
  snippet: "Snippet not found",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/BLOG_YEAST_INFECTION_IMAGE_1_500x_crop_center.jpg?v=1711641422",
    alt: "Finding the best food for yeast infections in dogs",
    caption: "what-are-yeast-infections-in-dogs"
  },
  content: `
<p>If your pooch seems agitated within their skin, often itching and scratching their ears and paws, they could have a yeast infection. There are plenty of causes for an unpleasant, irritating yeast infection - but they can be caused, or at least greatly influenced by the food your dog eats. So what's the best diet for keeping a yeast infection at bay?</p>
      <p>If you’re itching to know, read on - we’ve got the lowdown on the best food to feed your dog in order to curb and soothe those nasty yeast infections.</p>
      <h2 id="what-are-yeast-infections-in-dogs">what-are-yeast-infections-in-dogs</h2>
      <p>Firstly, what even is a yeast infection? Sometimes called yeast dermatitis, it’s a broad term for when there’s a build up of fungal yeast in your dog’s body. This could be down to simple genetics (dogs with lots of skin folds, for instance, are more at risk of getting yeast infections), an imbalance of bacteria, an ongoing illness, allergies, a weakened immune system, or because of too many yeast-promoting foods in their diet.</p>
      <p>A yeast infection usually presents as itching and physical irritation in your dog, but full symptoms can include:</p>
      <ul>
        <li>Irritation/itching/redness (particularly in ears, paws, groin area and bum)</li>
        <li>Recurring ear infections</li>
        <li>Foul odours (usually from ears)</li>
        <li>Black spots on the skin</li>
        <li>General fidgety behaviour, such as excessing licking and scratching</li>
        <li>Greasy or oily coat and skin</li>
        <li>Thinning coat where they’ve over-scratched themselves</li>
        <li>Low mood</li>
      </ul>
      <h3 id="does-diet-help-to-manage-yeast-infections">does-diet-help-to-manage-yeast-infections</h3>
      <p>Though yeast infections can occur for a variety of reasons unrelated to diet (sometimes just genetic), diet can certainly play a very important role. Certain foods can either soothe or exacerbate symptoms of an ongoing yeast infection, or even be the motivator of a yeast infection occurring and reoccurring.</p>
      <p>There’s some evidence to suggest that common food allergens, such as grain, could be responsible for yeast infections in some dogs, alongside other food triggers such as dairy or sugar.</p>
      <p>In any case, there’s a big chance your pooch’s condition could be improved by experimenting with their diet and adding supplements, especially if you’ve been regularly feeding your dog quite high fat or sugary foods.</p>
      <h2 id="nutritional-requirements-for-dog-food-for-yeast-infections">nutritional-requirements-for-dog-food-for-yeast-infections</h2>
      <p>When figuring out a new diet for a dog who gets yeast infections, you’ll want to stick to the following guidelines:</p>
      <ul>
        <li>Food with a low glycemic index, such as non-starchy veggies and legumes. It’s important to avoid sugars and simple carbohydrates, which have a high glycemic index - as these are more likely to produce yeast and feed the problem.</li>
        <li>High-quality proteins. Lean, nutritious proteins will maintain your dog’s physical health and support muscle maintenance and growth, without promoting yeast production.</li>
        <li>Healthy fats can help reduce inflammation in your pooch and contribute to healthy skin. Examples include the omega-3 fatty acids of salmon, a recommended food for yeast infections.</li>
        <li>Probiotics work wonders in balancing the amount of healthy bacteria in the gut, therefore improving immunity, boosting digestion and promoting general equilibrium in the body (= a reduced chance of yeast infection). Check out why probiotics are so good for dogs.</li>
      </ul>
      <h2 id="what-food-can-i-give-my-dog-with-a-yeast-infection">what-food-can-i-give-my-dog-with-a-yeast-infection</h2>
      <p>So what should you feed your pooch to ensure they aren’t at constant risk of developing or worsening a yeast infection?</p>
      <ul>
        <li>Nutrition is key to building up their immune system and fighting off the infection, so choose a premium-quality, commercial dog food formulated for dogs with health conditions. Ideally it should be labelled for managing yeast infections. Unlike cheap dog foods on the market, specialist dog food for yeast infections will be made up of beneficial, non-triggering ingredients that will nourish your pooch without aggravating or adding to a yeast overgrowth problem.</li>
        <li>Some pooch owners opt for a homemade diet. This can be the preferable option for those who like to know exactly what their dog’s eating, however it can be tricky to get the nutritional balance right when you need to specifically avoid yeast-promoting ingredients. If you choose to take the DIY route, make sure this is under the guidance of a vet or pet nutritionist.</li>
        <li>Consider more raw food, or food that’s only been gently cooked. This minimises your dog’s processed food intake and reduces the risk of their body being upset or triggered. Remember, this has its own downsides - though raw food retains a lot of nutrients, it needs to be completely safe in terms of bacterial contamination risk and digestibility (raw meat for example, isn’t recommended, and raw potatoes can be toxic to dogs). As always, chat to your vet about this first.</li>
        <li>Get some dog supplements, especially probiotics or anything that promotes balanced gut health. As keeping yeast under control is often about maintaining bacterial harmony in the body, probiotics can help support that.</li>
      </ul>
      <h3 id="dog-food-for-a-yeast-infection">dog-food-for-a-yeast-infection</h3>
      <p>Dogs who suffer from yeast infections can thrive on a grain-free diet as it’s best they avoid common allergens, which can disrupt the delicate bacterial harmony in their gut and bowels. This is why Pooch & Mutt dog foods contain zero grain, alongside a range of nutritious, gently digestible ingredients that are easy on the body.</p>
      <ul>
        <li>Our Skin & Coat recipe, for instance, is packed full of herring, collagen and probiotics to support healthy, comfortable skin.</li>
        <li>Our Health & Digestion range includes lean, easy-to-digest ingredients so the body averts a build-up of troublesome yeast.</li>
        <li>Our vet-approved Sensitivity Dog Food for Allergies is made up of tasty, non-triggering foods for pooches that are easily aggravated by food allergens.</li>
      </ul>
      <h3 id="ingredients-to-avoid">ingredients-to-avoid</h3>
      <p>Even if your dog’s yeast infections are genetic, there are foods that will likely exacerbate or contribute to yeast overgrowth in your pooch. Here’s a reminder of foods to stay clear of…</p>
      <ul>
        <li>High-fat and high-sugar foods. Fat and sugar are some of the worst culprits for build-up of yeast in the body; they also contribute to a lowered immune system, making it harder for your dog’s body to protect itself. Cut out human leftovers and fatty or sugary treats, including cheese and fatty meats, and lean into health and nutrition for your dog (they’re worth it!).</li>
        <li>Common food allergens for dogs. Allergens that lots of dogs are sensitive to, such as grain or dairy products, could be responsible for triggering their yeast infections. Going for a grain-free dog food and/or avoiding dairy products and other common allergens entirely will likely help.</li>
        <li>Cheap dog food full of artificial preservatives. It goes without saying, but cheap dog food that hasn’t been designed for targeted health conditions is only going to exacerbate your dog’s infection. These cheap dog foods are not only more likely to contain high-fat ingredients, but also preservatives, sugars and artificial nasties that will trigger or aggravate their symptoms.</li>
      </ul>
      <h2 id="transitioning-to-a-diet-that-avoids-yeast-infections">transitioning-to-a-diet-that-avoids-yeast-infections</h2>
      <p>When you’ve decided upon your dog’s new food, it’s important to transition them slowly into their new diet.</p>
      <ul>
        <li>Gradually introduce their new food. If your dog’s new food is drastically different, switching it out straight away can shock the system and cause tummy issues. To be safe, mix new food with some of their old food for a few days at first, and monitor how they react to it. If appropriate, eventually you can completely phase out their old food.</li>
        <li>Try a limited ingredient diet. To identify a food allergy or if there’s a specific trigger to your dog’s infections, you might want to strip down their diet and slowly reintroduce ingredients until you’ve discovered the offending food. This is also called an exclusion diet - here’s more about identifying a food allergy in your dog.</li>
        <li>Check your dog’s behaviour for any changes in symptoms following the food switch - keep note of both improvements and if things have worsened (increased itchiness, soreness, changes in energy levels etc.).</li>
        <li>Check-in with a vet to update them on how things are going - they can offer advice if the food switch isn’t having the desired effect on your dog. Vet guidance is essential for managing a dog’s yeast infections, as there are many potential causes and it’s vital to get the right diagnosis.</li>
        <li>Tailor their diet. Some dogs get very familiar with their old foods, and it’s harder to introduce them to new flavours and textures. If you’re having trouble getting them to eat, your vet can help tailor their diet to suit them.</li>
      </ul>
      <h2 id="conclusion">conclusion</h2>
      <ul>
        <li>To sum up, there are lots of reasons your pooch may develop yeast infections - it could be a food allergy, the effects of medication, or they may be genetically predisposed to getting itchy. In any case, diet is extremely important in managing symptoms and keeping future yeast infections at bay.</li>
        <li>To create a superpowered diet that curbs yeast overgrowth: cut-out high fat, high sugar ingredients and instead focus on lean proteins, nutritious low-glycaemic foods and a boost of probiotics. Common food allergens can also exacerbate or cause yeast infections in dogs - so you might want to try an exclusion diet to identify the trigger; or consider going grain-free. You may want to consider integrating raw or gently cooked foods into your pooch’s meals too.</li>
        <li>A vet should guide you throughout the process of treating a dog who gets yeast infections - this is really important! They can go through the various methods of diagnosis to target and treat the exact cause of your dog’s yeast infections, so you don’t end up barking up the wrong tree.</li>
      </ul>
      <h2 id="faqs">faqs</h2>
      <p>Hopefully you should now feel more confident in choosing food for your dog’s itchy infection, but here are some final questions you might have about dogs and yeast infections.</p>
      <h3 id="what-happens-if-dog-yeast-infections-go-untreated">what-happens-if-dog-yeast-infections-go-untreated</h3>
      <p>Ignoring symptoms of a yeast infection won’t help your pooch as it won’t pass on its own - in fact, the problem could get significantly worse. If your dog’s infection is quite localised, the yeast may spread to other areas of the body and skin, leaving them in a lot of continual discomfort.</p>
      <p>Overall, a long-term yeast infection can lower a dog’s immune system and leave them susceptible to catching other nasty illnesses. If you notice symptoms of a yeast infection, treating it and identifying the cause should be a priority as a pooch parent.</p>
      <h3 id="what’s-the-difference-between-a-yeast-and-fungal-infection-in-dogs">what’s-the-difference-between-a-yeast-and-fungal-infection-in-dogs</h3>
      <p>There are similarities, but a yeast infection is caused by an overgrowth of, most commonly, the Candida albicans fungus, or the Malassezia pachydermatis fungus. A fungal infection is a more general term and can be caused by all kinds of fungus.</p>
      <p>When vets refer to a yeast infection, that usually means a yeast that is affecting the dog’s skin, paws and ears (and potentially groin, underarms and bum area). Contrastingly, a fungal infection can infect the internal organs and other parts of the inner body. Be sure a vet is the one identifying your dog’s particular issue - don’t try and guess on it yourself without professional opinion.</p>
      <h3 id="can-dogs-get-thrush">can-dogs-get-thrush</h3>
      <p>Itchy, irritating thrush is a condition caused by yeast overgrowth that is very common for humans - and dogs get it mostly in the mouth and throat area. Your pooch might develop white spots on their tongue, throat and inner cheeks, and may drool or paw at their mouth in discomfort. Take them to a vet, and they’ll clear up the problem with an antifungal treatment, and hopefully give a diagnosis on what may have caused the thrush.</p>
      <h3 id="what-are-the-benefits-of-feeding-my-dog-anti-yeast-dog-food">what-are-the-benefits-of-feeding-my-dog-anti-yeast-dog-food</h3>
      <p>A dog’s body requires a delicate balance of bacteria in order to function harmoniously, just like ours - and when this balance is disrupted it can lead to a build-up or overgrowth of yeast. Yeast overgrowth is responsible for the itchiness, irritation and redness much dogs experience in their ears, skin and paws. Anti-yeast dog foods can help remedy that by supporting balance in a dog’s body, and boosting nutrition while avoiding yeast-promoting ingredients.</p>
      <h3 id="what-is-a-limited-ingredient-diet-and-how-can-it-help-with-yeast-infections">what-is-a-limited-ingredient-diet-and-how-can-it-help-with-yeast-infections</h3>
      <p>If your dog’s yeast infection is caused by food, it’s a good idea to put them on a limited ingredient diet (sometimes called an exclusion diet). Not only will the stripping down of their diet to bland, gently digestible ingredients ease pressure on the body, it’s a nifty way of ‘detoxifying’ their digestive system so that slowly, you can reintroduce potential triggers and identify what causes their yeast infection. Take a look at our article on identifying a dog’s food allergy for more information.</p>
      <p>If your pooch has special dietary requirements for recurring yeast infections, try our range of grain-free dog foods for a healthy gut. Our vet-approved dog food for food allergies could be perfect for your pooch, while our Skin & Coat recipe is formulated for soothed, stress-free skin.</p>
      <section>References</section>
`,
  headings: [
    { id: 'what-are-yeast-infections-in-dogs', text: 'what-are-yeast-infections-in-dogs', level: 2 },
    { id: 'does-diet-help-to-manage-yeast-infections', text: 'does-diet-help-to-manage-yeast-infections', level: 3 },
    { id: 'nutritional-requirements-for-dog-food-for-yeast-infections', text: 'nutritional-requirements-for-dog-food-for-yeast-infections', level: 2 },
    { id: 'what-food-can-i-give-my-dog-with-a-yeast-infection', text: 'what-food-can-i-give-my-dog-with-a-yeast-infection', level: 2 },
    { id: 'dog-food-for-a-yeast-infection', text: 'dog-food-for-a-yeast-infection', level: 3 },
    { id: 'ingredients-to-avoid', text: 'ingredients-to-avoid', level: 3 },
    { id: 'transitioning-to-a-diet-that-avoids-yeast-infections', text: 'transitioning-to-a-diet-that-avoids-yeast-infections', level: 2 },
    { id: 'conclusion', text: 'conclusion', level: 2 },
    { id: 'faqs', text: 'faqs', level: 2 },
    { id: 'what-happens-if-dog-yeast-infections-go-untreated', text: 'what-happens-if-dog-yeast-infections-go-untreated', level: 3 },
    { id: 'what’s-the-difference-between-a-yeast-and-fungal-infection-in-dogs', text: 'what’s-the-difference-between-a-yeast-and-fungal-infection-in-dogs', level: 3 },
    { id: 'can-dogs-get-thrush', text: 'can-dogs-get-thrush', level: 3 },
    { id: 'what-are-the-benefits-of-feeding-my-dog-anti-yeast-dog-food', text: 'what-are-the-benefits-of-feeding-my-dog-anti-yeast-dog-food', level: 3 },
    { id: 'what-is-a-limited-ingredient-diet-and-how-can-it-help-with-yeast-infections', text: 'what-is-a-limited-ingredient-diet-and-how-can-it-help-with-yeast-infections', level: 3 },
  ]
},
'stress-colitis-in-dogs': {
  title: 'Stress colitis in dogs',
  category: 'Pets',
  snippet: "Snippet not found",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/BLOG_STRESS_COLITIS_IN_DOGS_IMAGE_5_500x_crop_center.jpg?v=1708526985",
    alt: "Stress colitis in dogs",
    caption: "what-is-stress-colitis-in-dogs"
  },
  content: `
<p>Have you ever let your dog outside to urgently poop, only to find they have diarrhoea with blood in it? This can be concerning for pooch parents, as it seems serious. You should definitely get your dog to a vet if this occurs, but you may be surprised to know that it can be brought on by stress.</p>
      <p>Stress colitis is a common, yet unpleasant condition for dogs that is usually treatable with medication and a few diet and lifestyle tweaks. Read on for the lowdown on dog stress colitis, the usual causes for it and the best ways to treat colitis in dogs.</p>
      <h2 id="what-is-stress-colitis-in-dogs">what-is-stress-colitis-in-dogs</h2>
      <p>The clue's in the name - ‘colitis’, as it means inflammation of the colon. In regards to dog health, this inflammation causes a nasty case of diarrhoea or other bowel issues, which may leave blood or mucus in stools and have your poor pup in distress and pain.</p>
      <p>Colitis in general can be caused by a few things - their immune disease, stomach infections, IBS (Irritable Bowel Syndrome), pancreatitis, or something else. Stress colitis, however, is caused by your dog experiencing stress.</p>
      <h2 id="understanding-causes-of-stress-colitis-in-dogs">understanding-causes-of-stress-colitis-in-dogs</h2>
      <p>Dogs feel stress for lots of reasons - and it affects all dogs differently. Your dog’s stress colitis could be caused by anxiety they’re feeling due to lifestyle changes, such as a house move, or perhaps they’ve had an operation lately. It could be due to a new dog or person in the house. They may be feeling traumatised due to bad treatment by former owners, or a recent accident they’ve had.</p>
      <p>Another thing to note is, that dogs with sensitive stomachs are often more impacted by stress or environmental changes, as inflammation of their digestive system is triggered more easily.</p>
      <h3 id="symptoms-of-stress-colitis-in-dogs">symptoms-of-stress-colitis-in-dogs</h3>
      <p>So, how will you know if your dog has a bout of stress colitis? Take note if your dog has presented any of the following symptoms:</p>
      <ul>
        <li>Pooping urgently and more often, exhibiting distress if they can’t do so. Loose stools/severe diarrhoea.</li>
        <li>Blood or mucus in stools which appears as bright red, or black and tarry.</li>
        <li>Stomach pain. Your dog may whimper or dislike being touched in the abdomen.</li>
        <li>Constipation or straining to poop and being unable to produce anything.</li>
        <li>More gas than usual, more frequently and sometimes stinkier farts.</li>
        <li>Changes in appetite due to nausea, and because their digestion isn’t functioning correctly.</li>
        <li>Weight loss due to their decreased appetite. Lethargy and not seeming themselves.</li>
      </ul>
      <h3 id="understanding-your-dogs-stress-triggers">understanding-your-dogs-stress-triggers</h3>
      <p>It’s in the name - stress colitis is caused by stress! So it’s important that you come to understand what triggers a sense of anxiety in your dog. The intensity of your dog’s stress could depend on their personality, or it could be down to them having a sensitive digestive system (a pooch with a sensitive tummy will more easily develop inflammation due to stressful events).</p>
      <p>Stressful events could be anything - from a lifestyle change such as a new baby or house move, to the lingering distress of frequent vet visits or a domestic disturbance. If you notice your pooch suffering from colitis, and it hasn’t been diagnosed as a symptom of another health condition, then stress could be the cause.</p>
      <h3 id="can-puppies-get-stress-colitis">can-puppies-get-stress-colitis</h3>
      <p>Yes, puppies can get colitis due to stress! This can be brought on by things that are stressful for little puppies - a sudden change in environment, weaning or changing foods, getting used to other dogs, being left alone for too long, and so on.</p>
      <p>Take your pup to the vet for a checkup if they appear to have ongoing toilet trouble.</p>
      <h3 id="dog-breeds-prone-to-colitis">dog-breeds-prone-to-colitis</h3>
      <p>Whether it’s brought on by stress or not, some dogs are more genetically predisposed to suffer from colitis than others. This includes:</p>
      <ul>
        <li>German Shepherds</li>
        <li>Border Collies</li>
        <li>Golden Retrievers</li>
        <li>Boxers</li>
        <li>Cocker Spaniels</li>
        <li>Labrador Retrievers</li>
      </ul>
      <h2 id="how-is-stress-colitis-in-dogs-diagnosed">how-is-stress-colitis-in-dogs-diagnosed</h2>
      <p>When you’ve noticed your pooch suffering from painful diarrhoea and more importantly, there's blood or mucus in the stools, it’s vital to get them to a vet for a proper examination.</p>
      <p>Colitis is a symptom of many potential health conditions and illnesses, so it’s important for a vet to rule out any of these possibilities before diagnosing stress colitis. Generally, they’ll do this by taking stool samples and carrying out thorough physical tests.</p>
      <p>Alongside this, your vet will ask you about your dog’s diet, lifestyle and any significant environmental changes they may have experienced. If stress colitis is suspected, it’s probable they’ll advise a few at-home treatments (read on for more of these) and prescribe some anti-diarrhoea medication.</p>
      <h3 id="symptoms-of-chronic-colitis-in-dogs">symptoms-of-chronic-colitis-in-dogs</h3>
      <p>Stress colitis is usually a short-term condition that can be cleared up with the right lifestyle changes, but sometimes it can stick around long-term, or happen over and over. This is called chronic colitis.</p>
      <p>If this seems to be the case and you’re not sure why, get your pooch to a vet for a thorough examination; chronic inflammation of your pooch’s colon could be linked to an underlying health condition.</p>
      <h2 id="how-can-i-help-my-dog-with-stress-colitis">how-can-i-help-my-dog-with-stress-colitis</h2>
      <p>The outlook is usually very positive when your dog suffers from stress colitis. After taking them to the vet to rule out any other more serious conditions, you can treat stress colitis with a combination of medications, diet changes and at-home remedies.</p>
      <h3 id="how-to-treat-your-dogs-stress-colitis-at-home">how-to-treat-your-dogs-stress-colitis-at-home</h3>
      <p>Once you’ve had a diagnosis of stress colitis, there are lots of ways to treat the problem at home.</p>
      <h4>Reduce your dog’s stress.</h4>
      <p>If the root cause of your dog’s stress can be reduced or eliminated, work on that first. Perhaps they need a calm, private sleeping area; a more structured walking or feeding routine; or to be kept relatively separate from another animal in the house.</p>
      <h4>Introduce a plain/low-residue diet.</h4>
      <p>It’s a good idea to put your pooch on a bland diet which avoids common food triggers, such as red meat and grain. This is also called a low-residue diet. Try dog food that is gentle on digestion and not full of strong flavours, such as one with plain white fish, pea and potato. You could also try a vet-approved dog food.</p>
      <h4>Add more fibre to your dog's diet.</h4>
      <p>Fibre is an essential nutrient for a dog’s digestion; it promotes healthy and regular bowel activity and firms up stools. Lots of vegetables contain fibre such as courgette, broccoli or carrots, so get some of these into your dog’s diet. You could also try a specialist dog food for sensitive tummies.</p>
      <h4>Fasting.</h4>
      <p>Under the guidance of a vet, fasting can be a way to give your dog’s digestive tract a chance to recover. This shouldn’t be for more than 12 hours or so, and remember to keep your dog well hydrated - it’s crucial they get lots of water.</p>
      <h4>Medication.</h4>
      <p>Your vet might prescribe some medication for your dog’s colitis - anti-diarrhoea capsules, for instance. If stress is a big issue in your dog, they might prescribe some anti-anxiety medication to settle their nerves and in turn, battle the colitis.</p>
      <h4>Anti-inflammatory prebiotics / probiotics.</h4>
      <p>To ease the inflammation in your dog’s gut and digestive system, the use of probiotics and prebiotics can help. This wonder duo works powerfully together to create harmony in the gut microbiome and improve bowel function (read more about probiotics for dogs).</p>
      <h2 id="ways-to-prevent-stress-colitis-in-your-dog">ways-to-prevent-stress-colitis-in-your-dog</h2>
      <p>We’ve covered ways to tackle the symptoms of stress colitis, now what about preventing stress in the first place? Well, it could be useful to try a few anti-stress techniques for dogs to improve their general wellbeing…</p>
      <h3 id="practice-crate-training">practice-crate-training</h3>
      <p>If your pooch tends to feel agitated and stressed throughout the day, they might respond well to crate training. Dogs feel a sense of safety and security from having their own private ‘den’ to retreat to, so this could offer them a way to self-soothe, thus reducing the anxiety that exacerbates their colitis.</p>
      <h3 id="play-music-or-calming-sounds">play-music-or-calming-sounds</h3>
      <p>Music and calming white noise have been proven to reduce a dog’s stress levels and induce a sense of serenity. Popping some chilled music on can be a useful way to comfort your dog during stressful periods; for example, when visitors are in the house, a baby is crying, or they have to be left alone for short periods. Check out our Calm and Relaxed Pooch Playlist.</p>
      <h3 id="honour-your-dog’s-routines">honour-your-dog’s-routines</h3>
      <p>Studies show that pets exhibit signs of stress when predictability in their day-to-day life is removed. If, for some reason, your dog’s walking, feeding or sleeping routine is chaotic or always changing, try to be more structured in your approach, and stick to set times each day. Dogs feel immense safety in their routines and should become calmer once they start to stick.</p>
      <h3 id="try-cbd-oil-for-dogs">try-cbd-oil-for-dogs</h3>
      <p>Though it’s not commercially available for dogs in the UK yet, many pooch parents have anecdotal evidence of the impact of CBD oil. A few drops of good quality CBD oil in your dog’s regular food may help instil a sense of calm. Of course, if you notice any untoward side effects of this (a worsening of diarrhoea, for instance) then stop using immediately. If you’re intrigued, here’s some more information on CBD for dogs.</p>
      <h2 id="when-to-contact-your-vet">when-to-contact-your-vet</h2>
      <p>You should get in touch with a vet as soon as you notice blood or mucus in your dog’s stools, as this can be a sign your dog needs urgent medical care. Once you’ve received a diagnosis of stress colitis and been given medication and advice, you should stay in contact with your vet to update them of any changes and improvement in your dog’s condition, but especially if treatment doesn’t seem to have made a difference.</p>
      <h2 id="faqs">faqs</h2>
      <h3 id="can-anxiety-cause-colitis-in-dogs">can-anxiety-cause-colitis-in-dogs</h3>
      <p>Yes, if your pooch has anxiety, they could develop stress colitis. If you notice your dog has poop issues and think this could be the case, make a note of the triggers that exacerbate your dog’s anxiety, and take them to a vet for further advice.</p>
      <h3 id="how-long-does-stress-colitis-in-dogs-last">how-long-does-stress-colitis-in-dogs-last</h3>
      <p>How long stress colitis lasts can vary greatly depending on the seriousness of your dog’s stress/anxiety, and how effective treatment is. Be sure to report to your vet as you carry out treatment, particularly if you haven’t seen much improvement in your dog’s colitis.</p>
      <h3 id="is-colitis-in-dogs-contagious">is-colitis-in-dogs-contagious</h3>
      <p>No, colitis itself isn’t contagious as it refers to inflammation of the colon. It’s usually a symptom of something else - such as stress, IBS (irritable bowel syndrome), a tummy infection etc., so the colitis itself shouldn’t spread to other dogs.</p>
      <h3 id="how-do-you-treat-stress-colitis-in-dogs-naturally">how-do-you-treat-stress-colitis-in-dogs-naturally</h3>
      <p>It’s important to take your dog to a vet to rule out any underlying health conditions, but if they diagnose stress as the cause, there are many natural ways to treat the problem.</p>
      <p>A change in diet is usually recommended (try food for sensitive stomachs or high fibre foods), as well as giving your dog the means to calm and self-soothe at home (lots of chew toys, calming dog treats and food, a quiet sleeping area, and a structured exercise and feeding routine).</p>
      <p>If possible, remove any obvious causes of stress to your pooch and make their calmness a priority as much as you can.</p>
      <p>Lots of dogs achieve calmness, wellbeing and overall gut health with a nutritious, grain-free diet. Take a look at our grain-free food for dogs with sensitive stomachs, as well as our tasty vet-approved dog food range, specially formulated for dogs with various health conditions.</p>
      <section>References</section>
`,
  headings: [
    { id: 'what-is-stress-colitis-in-dogs', text: 'what-is-stress-colitis-in-dogs', level: 2 },
    { id: 'understanding-causes-of-stress-colitis-in-dogs', text: 'understanding-causes-of-stress-colitis-in-dogs', level: 2 },
    { id: 'symptoms-of-stress-colitis-in-dogs', text: 'symptoms-of-stress-colitis-in-dogs', level: 3 },
    { id: 'understanding-your-dogs-stress-triggers', text: 'understanding-your-dogs-stress-triggers', level: 3 },
    { id: 'can-puppies-get-stress-colitis', text: 'can-puppies-get-stress-colitis', level: 3 },
    { id: 'dog-breeds-prone-to-colitis', text: 'dog-breeds-prone-to-colitis', level: 3 },
    { id: 'how-is-stress-colitis-in-dogs-diagnosed', text: 'how-is-stress-colitis-in-dogs-diagnosed', level: 2 },
    { id: 'symptoms-of-chronic-colitis-in-dogs', text: 'symptoms-of-chronic-colitis-in-dogs', level: 3 },
    { id: 'how-can-i-help-my-dog-with-stress-colitis', text: 'how-can-i-help-my-dog-with-stress-colitis', level: 2 },
    { id: 'how-to-treat-your-dogs-stress-colitis-at-home', text: 'how-to-treat-your-dogs-stress-colitis-at-home', level: 3 },
    { id: 'ways-to-prevent-stress-colitis-in-your-dog', text: 'ways-to-prevent-stress-colitis-in-your-dog', level: 2 },
    { id: 'practice-crate-training', text: 'practice-crate-training', level: 3 },
    { id: 'play-music-or-calming-sounds', text: 'play-music-or-calming-sounds', level: 3 },
    { id: 'honour-your-dog’s-routines', text: 'honour-your-dog’s-routines', level: 3 },
    { id: 'try-cbd-oil-for-dogs', text: 'try-cbd-oil-for-dogs', level: 3 },
    { id: 'when-to-contact-your-vet', text: 'when-to-contact-your-vet', level: 2 },
    { id: 'faqs', text: 'faqs', level: 2 },
    { id: 'can-anxiety-cause-colitis-in-dogs', text: 'can-anxiety-cause-colitis-in-dogs', level: 3 },
    { id: 'how-long-does-stress-colitis-in-dogs-last', text: 'how-long-does-stress-colitis-in-dogs-last', level: 3 },
    { id: 'is-colitis-in-dogs-contagious', text: 'is-colitis-in-dogs-contagious', level: 3 },
    { id: 'how-do-you-treat-stress-colitis-in-dogs-naturally', text: 'how-do-you-treat-stress-colitis-in-dogs-naturally', level: 3 },
  ]
},



'should-i-get-my-dog-spayed-neutered': {
  title: 'Should I get my dog spayed/neutered? The pros and cons for your canine companion',
  category: 'Pets',
  snippet: "Snippet not found",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/BLOG_SHOULD_I_GET_MY_DOG_SPAYED_NEUTERED_3_500x_crop_center.jpg?v=1708095116",
    alt: "Should I get my dog spayed/neutered? The pros and cons for your canine companion",
    caption: "what-is-spaying-neutering"
  },
  content: `
<p>Deciding whether to spay or neuter a puppy is a pivotal moment in responsible pet ownership. You might be facing that decision right now, weighing up the pros and cons and feeling overwhelmed with information.</p>
      <p>In this article, I’ll discuss the benefits and drawbacks of having your dog spayed/neutered, as well as how you can prepare for before and after the procedure if you do decide to go ahead.</p>
      <h2 id="what-is-spaying-neutering">what-is-spaying-neutering</h2>
      <p>Neutering involves surgically removing a male dog's testicles, while spaying is the removal of a female's reproductive organs. It isn't just about preventing unexpected puppies though; it's a health and behavioural consideration too. Spaying or neutering your dog can bring significant benefits.</p>
      <p>Aside from avoiding an unanticipated litter of puppies (which contributes to pet overpopulation), these procedures can also offer health advantages, such as a decreased risk of certain cancers. That said, every dog is different, and factors like breed, behaviour, age, and health status could influence your decision to have the procedure done.</p>
      <h2 id="benefits-of-spaying-neutering">benefits-of-spaying-neutering</h2>
      <p>Spaying and neutering your dog can have significant health and behavioural benefits. This procedure not only helps in managing the pet population, but also contributes to a healthier, happier pet. Let's explore how:</p>
      <h3 id="health-benefits-for-your-puppy">health-benefits-for-your-puppy</h3>
      <p>Spaying a female dog is a surgical procedure that removes her ovaries and often her uterus. It's a sure-fire way to prevent unwanted litters and increase your furry friend's health prospects. Spaying helps prevent breast cancer and pyometra - a potentially life-threatening uterine infection. Not only that but spaying before the first heat cycle can greatly reduce the risk of mammary cancer.</p>
      <p>For males, neutering or castrating (the removal of the testicles) significantly reduces the risk of prostate problems and testicular cancer. With fewer hormones like testosterone coursing through their bodies, neutered males are also less likely to roam or display aggressive behaviour, making them more socially adaptable and less prone to getting themselves into trouble.</p>
      <h3 id="behavioural-and-social-benefits">behavioural-and-social-benefits</h3>
      <p>Now, let's talk about marking territory. Have you ever been embarrassed by your male dog enthusiastically scent-marking in your friend's house? Neutering can reduce or eliminate this behaviour, which is driven by testosterone.</p>
      <p>In terms of social benefits, spayed and neutered dogs are often more focused on their human family, not seeking a mate during the breeding season. This helps lower the risk of them wanting to dash out the door in search of romance. And less roaming leads to less chance of getting into fights or accidents. It's a relief to know your pup's mind is on their ball rather than the canine cutie next door!</p>
      <p>Additionally, neutering can sometimes help with mounting behaviours. While there’s never any guarantee that neutering will result in desirable behavioural changes, and it’s not a replacement for proper training, it's often a part of the solution.</p>
      <h2 id="potential-risks-and-considerations">potential-risks-and-considerations</h2>
      <p>Before deciding to spay or neuter your dog, it's wise to consider both the benefits and risks of the procedure. While the surgery is common and often recommended, certain potential complications and long-term health effects should be weighed-up against each other.</p>
      <h3 id="surgical-risks-and-complications">surgical-risks-and-complications</h3>
      <p>Surgery, while routine, does come with its inherent risks. Complications can include adverse reactions to anaesthetic drugs, bleeding, or infection at the incision site.</p>
      <p>While it’s important to ensure your dog's in good health before the operation, each dog will respond differently based on age, breed, and overall health.</p>
      <ul>
        <li>Anaesthetic reactions: Some dogs may experience sensitivity to anaesthesia, which can lead to complications and in extreme cases death.</li>
        <li>Bleeding: As with any surgery, there's a risk of bleeding during or after the procedure.</li>
        <li>Infection: Keeping the incision clean is paramount; otherwise, there's a risk of infection.</li>
      </ul>
      <h3 id="long-term-health-impacts">long-term-health-impacts</h3>
      <p>The decision to spay or neuter should also take into account potential long-term health implications. Spayed females have a reduced risk of mammary cancer and almost no risk of uterine infections, like pyometra. Neutered males are spared from prostate disease and testicular cancer.</p>
      <p>However, the procedure may lead to an increased risk of certain conditions, depending on factors like the timing of the surgery and the dog's size:</p>
      <ul>
        <li>Weight gain: Spaying and neutering can lead to a decrease in metabolic rate, resulting in a tendency for weight gain if not managed with diet and exercise</li>
        <li>Hip dysplasia: Large breeds may have a higher incidence of hip dysplasia if neutered early</li>
        <li>Urinary incontinence: Especially in females, spaying can sometimes lead to urinary incontinence, though this is often manageable with medication</li>
      </ul>
      <h2 id="timing-and-age-factors">timing-and-age-factors</h2>
      <p>Have you been pondering the best time to get your furry friend neutered? You're not alone. It's a common question pet parents grapple with. The role of size, breed, and individual development is vital in deciding the right age for this process.</p>
      <h3 id="determining-the-right-age">determining-the-right-age</h3>
      <p>When thinking about spaying or neutering your dog, it's important to consider several factors to pinpoint the right timing. Doing it too early or too late can have different implications, so let's unpack this.</p>
      <ul>
        <li>Breed: Smaller breeds often reach sexual maturity faster than their larger counterparts, meaning they could be ready for neutering at a younger age. For many small to medium breeds, this could be as soon as six months of age. Larger breeds might need a bit more time for their bodies to fully develop before going through the surgery.</li>
        <li>Size and development: The development stage is crucial as it impacts overall health. A dog that’s allowed to grow and develop before neutering can gain full benefits from their body's natural hormones. This might mean waiting until they’re physically mature, which can be up to two years in some large breeds.</li>
        <li>First season: For female dogs, it's often advised to wait until after their first season to spay, which can help minimise the risk of future health problems such as urinary incontinence.</li>
      </ul>
      <h2 id="practical-aspects-of-the-procedure">practical-aspects-of-the-procedure</h2>
      <p>When it comes to having your furry friend neutered, you'd no doubt want to be clued-up on what actually happens on the day, right? It's not just about making a decision; it's about understanding the steps involved before and after that make all the difference to both you and your pet.</p>
      <h3 id="pre-surgical-preparation-and-aftercare">pre-surgical-preparation-and-aftercare</h3>
      <p>Before surgery, you want to make sure your dog is as prepared as possible. Your little one will need to be fasted, typically from the night before – no midnight snacks I'm afraid!</p>
      <p>The procedure itself involves your dog being placed under anaesthetic; they’ll be fully asleep so they won't feel a thing. Once the operation is done, their abdomen may have visible stitches or stitches buried in the skin. During recovery, they'll need plenty of rest, and it’s crucial to manage their aftercare well to avoid any complications. This means:</p>
      <ul>
        <li>No vigorous exercising until they're fully healed.</li>
        <li>Monitoring their appetite and making sure they're well-hydrated.</li>
        <li>Giving all prescribed medication on time.</li>
        <li>Keeping a cosy spot for them to recuperate in peace.</li>
        <li>Keeping a close eye on the wound to make sure it remains clean and stopping your dog from licking at the surgical area. This can be prevented with the help of a surgical cone (aka “the cone of shame”!), collar or recovery suit.</li>
      </ul>
      <h2 id="frequently-asked-questions">frequently-asked-questions</h2>
      <h3 id="what-are-the-potential-drawbacks-of-spaying-my-female-dog">what-are-the-potential-drawbacks-of-spaying-my-female-dog</h3>
      <p>While the benefits of spaying are well-documented, there are a few potential drawbacks to consider. For instance, the surgery carries the usual risks associated with anaesthesia and operation. There's also a chance of weight gain post-surgery and a small risk of urinary incontinence in later life.</p>
      <h3 id="could-there-be-any-benefits-in-postponing-neutering-my-dog">could-there-be-any-benefits-in-postponing-neutering-my-dog</h3>
      <p>Postponing neutering can be beneficial for a dog's physical development, especially in larger breeds. Delayed neutering may reduce the risk of certain joint disorders.</p>
      <h3 id="is-it-necessary-to-have-a-dog-neutered-before-they-reach-a-certain-age">is-it-necessary-to-have-a-dog-neutered-before-they-reach-a-certain-age</h3>
      <p>While neutering at a young age is commonly recommended, it's not strictly necessary to neuter before a dog reaches a certain age. Still, early neutering can prevent unwanted behaviours and health issues linked to hormones.</p>
      <h3 id="what-could-be-the-health-implications-for-an-unspayed-female-dog">what-could-be-the-health-implications-for-an-unspayed-female-dog</h3>
      <p>An unspayed female dog is at risk for pyometra, a serious uterine infection, and mammary tumours, which can be malignant. Reproductive hormones can also lead to other health issues over time.</p>
      <h3 id="are-there-any-valid-reasons-for-choosing-not-to-neuter-my-dog">are-there-any-valid-reasons-for-choosing-not-to-neuter-my-dog</h3>
      <p>Some reasons someone might opt not to neuter their dog include potential breeding plans or concerns about anaesthetic risk, due to underlying health conditions. Always discuss such decisions with your local vet.</p>
`,
  headings: [
    { id: 'what-is-spaying-neutering', text: 'what-is-spaying-neutering', level: 2 },
    { id: 'benefits-of-spaying-neutering', text: 'benefits-of-spaying-neutering', level: 2 },
    { id: 'health-benefits-for-your-puppy', text: 'health-benefits-for-your-puppy', level: 3 },
    { id: 'behavioural-and-social-benefits', text: 'behavioural-and-social-benefits', level: 3 },
    { id: 'potential-risks-and-considerations', text: 'potential-risks-and-considerations', level: 2 },
    { id: 'surgical-risks-and-complications', text: 'surgical-risks-and-complications', level: 3 },
    { id: 'long-term-health-impacts', text: 'long-term-health-impacts', level: 3 },
    { id: 'timing-and-age-factors', text: 'timing-and-age-factors', level: 2 },
    { id: 'determining-the-right-age', text: 'determining-the-right-age', level: 3 },
    { id: 'practical-aspects-of-the-procedure', text: 'practical-aspects-of-the-procedure', level: 2 },
    { id: 'pre-surgical-preparation-and-aftercare', text: 'pre-surgical-preparation-and-aftercare', level: 3 },
    { id: 'frequently-asked-questions', text: 'frequently-asked-questions', level: 2 },
    { id: 'what-are-the-potential-drawbacks-of-spaying-my-female-dog', text: 'what-are-the-potential-drawbacks-of-spaying-my-female-dog', level: 3 },
    { id: 'could-there-be-any-benefits-in-postponing-neutering-my-dog', text: 'could-there-be-any-benefits-in-postponing-neutering-my-dog', level: 3 },
    { id: 'is-it-necessary-to-have-a-dog-neutered-before-they-reach-a-certain-age', text: 'is-it-necessary-to-have-a-dog-neutered-before-they-reach-a-certain-age', level: 3 },
    { id: 'what-could-be-the-health-implications-for-an-unspayed-female-dog', text: 'what-could-be-the-health-implications-for-an-unspayed-female-dog', level: 3 },
    { id: 'are-there-any-valid-reasons-for-choosing-not-to-neuter-my-dog', text: 'are-there-any-valid-reasons-for-choosing-not-to-neuter-my-dog', level: 3 },
  ]
},



'how-to-clean-a-dogs-teeth': {
  title: 'How to Clean a Dog’s Teeth',
  category: 'Pets',
  snippet: "Snippet not found",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/24-08-23_BLOG_BRAND_BLOG_HOW_TO_CLEAN_YOUR_DOGS_TEETH_4_500x_crop_center.jpg?v=1692876294",
    alt: "How to Clean a Dog’s Teeth",
    caption: "how-to-clean-a-dog’s-teeth-step-by-step"
  },
  content: `
<p>There’s nothing more lovable than seeing your dog’s big old grin as they look right at you - but that toothy smile needs love from us too! We’re raised from an early age to carefully look after our teeth, and it’s just as important that our pooches get that same treatment.</p>
      <p>Cleaning your dog’s teeth isn’t always simple, though. Many pooch parents struggle to get safely near their dog’s face, let alone into their mouth with a strange bristled stick. We understand that it’s not always straight-forward, and may have you worrying about how to keep your dog’s teeth clean.</p>
      <p>There are techniques to brushing a dog’s teeth, and alternative methods you can try to clean a dog’s teeth without brushing. Read on as we go into the step-by-step of cleaning your dog's teeth, why dental hygiene is important for your dog, signs of unhealthy dog teeth, and how often you should attempt the tricky task of dog teeth-cleaning.</p>
      <h2 id="how-to-clean-a-dog’s-teeth-step-by-step">how-to-clean-a-dog’s-teeth-step-by-step</h2>
      <p>So, how exactly do you go about the tricky task of brushing your dog’s teeth? Here we’ve laid out some steps for doggo teeth-cleaning, step-by-step. Remember to do this gradually and incrementally, perhaps a few times until they get used to the process.</p>
      <ol>
        <li>Introduce the ‘chin’ command</li>
      </ol>
      <ul>
        <li>The ideal first step would be for your pooch to rest their chin on your hand on command.</li>
        <li>To teach this, start by laying your hand out flat in front of their nose with a treat just out of reach, so they have to rest their chin on your palm to get to it.</li>
        <li>Reward your dog each time they follow this motion, then try it repeatedly, eventually phasing out the treat, until your pooch knows what the word ‘chin’ is asking of them.</li>
      </ul>
      <ol>
        <li>Familiarise your dog with face and mouth touching</li>
      </ol>
      <ul>
        <li>Once your dog’s chin is in place and relaxed, start to brush your pooch’s cheeks and mouth area with your finger.</li>
        <li>Try other movements, such as slowly placing a hand on top of their snout.</li>
        <li>Don’t make any sudden jolts, and reward them with verbal praise and a treat if they comfortably offer their face to you and let you touch them.</li>
      </ul>
      <ol>
        <li>Brush their teeth and gums with your finger</li>
      </ol>
      <ul>
        <li>Before introducing anything intimidating like a toothbrush, gradually try lifting your dog’s lips and moving your finger across your dog’s teeth and gums, to show them it doesn’t harm them for you to do so.</li>
        <li>It could take a few times.</li>
        <li>If they let you do this and they’re calm, be sure to reward them in an obvious fashion, so they know they’ve done well.</li>
      </ul>
      <ol>
        <li>Bring in the toothbrush</li>
      </ol>
      <ul>
        <li>Once your dog seems comfortable with your finger-brushing - even if it took a few goes - it’s time to level up.</li>
        <li>There are plenty of doggy toothbrushes that are perfectly shaped for reaching a dog’s teeth, and toothpastes that are specially flavoured for encouragement (chicken or peanut butter flavour, for example).</li>
        <li>Be calm for this step, so your dog feels calm too - and try moving the brush in a circular motion over a few teeth for a few seconds.</li>
        <li>Again, this could take repeated tries but any brushing, even for a moment is a win!</li>
      </ul>
      <ol>
        <li>Add more toothpaste</li>
      </ol>
      <ul>
        <li>Each time you use the toothbrush you might want to offer your pooch some toothpaste on it first, let them lick it and get used to the flavour, and try brushing again.</li>
        <li>Hopefully your dog should be learning now that teeth-brushing isn’t all that scary.</li>
      </ul>
      <h2 id="why-should-you-clean-your-dog’s-teeth">why-should-you-clean-your-dog’s-teeth</h2>
      <p>You should clean your dog’s teeth for the same reasons you clean your own - good dental hygiene ensures your dog has long-lasting, pain-free teeth, gums and mouth.</p>
      <p>With good oral health care your dog will be more likely to stay happier and healthier into old age, rather than suffering from tooth decay or gum disease (also called periodontal disease) which can be painful for your dog, or at its worst, can even shorten their life. Not to mention, when dogs’ teeth are healthier, their breath stays relatively fresher.</p>
      <h3 id="unhealthy-dog-teeth-and-dental-disease">unhealthy-dog-teeth-and-dental-disease</h3>
      <p>There are plenty of signs that your dog’s teeth may not be at their best, or even that gum disease is setting in. Look out for the following, as they could indicate your pooch’s dental hygiene needs attention:</p>
      <ul>
        <li>Visible plaque and tartar Plaque and tartar may be visible with a darkened, yellowish tint along your dog’s teeth, especially noticeable along the gum line.</li>
        <li>Bad breath (worse than usual) Dog’s breath isn’t the most fragrant, but if it smells more potent than usual, that could be a sign of a problem.</li>
        <li>Drooling Your pooch might drool if a toothache means they can’t move/close their mouth as usual.</li>
        <li>Reddened gums Darker-coloured gums usually indicate soreness and sensitivity associated with gum disease.</li>
        <li>Pawing at mouth Your poor pooch might show you he has toothache by pawing at his face and mouth area.</li>
        <li>Loss of appetite/weight loss If your pooch can’t bite down due to toothache or mouth pain, they will likely go off their food or even lose weight.</li>
        <li>Change in behaviour If you just notice something isn’t quite right with your dog, or they’re behaving out of sorts, toothache or gum disease could be to blame.</li>
      </ul>
      <h3 id="how-often-should-you-brush-a-dog’s-teeth">how-often-should-you-brush-a-dog’s-teeth</h3>
      <p>You should try to clean your dog’s teeth as often as possible. Ideally, it’s recommended to brush around 3-4 times a week, but even once a week is better than never. We know it can be tough to achieve this though, especially if your pooch won’t let you near their chops with a toothbrush. Supplementing an oral hygiene regime with alternative dog teeth-cleaning methods should help.</p>
      <h3 id="how-to-remove-plaque-and-tartar-from-dog’s-teeth">how-to-remove-plaque-and-tartar-from-dog’s-teeth</h3>
      <p>You might notice deep yellow colouring on your dog’s teeth, specifically near the gumline. This could indicate plaque and tartar build-up, which could lead to more serious oral problems that might have your pooch in pain.</p>
      <p>To get rid of tartar or plaque from your dog’s teeth, brush their teeth more regularly, feed them dental chews or sticks, introduce dry food into their diet, or perhaps visit a vet for more advice. Read on for more detailed ideas.</p>
      <h2 id="alternative-methods-of-cleaning-a-dog’s-teeth">alternative-methods-of-cleaning-a-dog’s-teeth</h2>
      <p>Let’s be clear on this - nothing replaces a good brush of your dog’s teeth with a dedicated doggo toothbrush. If this isn’t always achievable, however, here are some tips for alternative methods of brushing:</p>
      <h3 id="how-to-clean-dog-teeth-without-brushing">how-to-clean-dog-teeth-without-brushing</h3>
      <p>Let’s go over the myriad ways you can remove plaque from your dog’s teeth without brushing…</p>
      <p>Chew toys - It’s important that your dog’s teeth are getting ‘worked’  in some way by chewing and munching on things that offer some resistance, rather than just wet food. Chew toys that offer some friction on the teeth are great for keeping their teeth strong and clean.</p>
      <p>Dental sticks for dogs - Dental sticks come in a variety of flavours and can include tasty, healthy ingredients for teeth and breath; like spirulina, moreish peanut butter or even hemp to help calm your dog. The motion of chewing on the sticks helps break down tartar build-up, so it’s a great idea to include these in your dog’s dental regime. Just remember, these do contain calories, so ensure they’re fed as part of your pooch’s daily allowance.</p>
      <p>Doggy chews/treats - For the same reasons as above, getting your dog to munch on particularly chewy dental treats are a good option for teeth cleaning.</p>
      <p>Oral spray for dogs - Special dental spray for dogs can go some way to improving the conditions of your dog’s teeth and mouth.</p>
      <p>Dry food - If your dog only eats wet food, there has been some evidence to suggest that dry food helps break down tartar on a dog’s teeth. Perhaps try introducing dry food into your dog’s diet?</p>
      <p>Finger brush - Some doggy toothbrushes sit on the end of your finger, so your pooch isn’t intimidated by a strange stick near their face. If your pooch isn’t a fan of the toothbrush, it could be worth a try.</p>
      <p>Finger and toothpaste - Try gently rubbing toothpaste on your dog’s teeth with your finger. It’s not better than brushing but it could help them get used to a toothbrush.</p>
      <h3 id="ultrasonic-dog-teeth-cleaning">ultrasonic-dog-teeth-cleaning</h3>
      <p>If all else fails, and your pooch really won’t allow you to get anywhere near those peggys, chat to your vet about ultrasonic dog teeth cleaning.</p>
      <p>This is a special procedure in which your dog is usually put under anaesthetic, and a handheld device is used to clean their teeth using ultrasonic vibrations. This is used to effectively break down plaque and tartar on your dog’s teeth and gently massage the gumline, without the ordeal of stressing your dog as it might when awake.</p>
      <p>Ideally, this would be a supplementary treatment alongside regular teeth brushing.</p>
      <h2 id="ways-to-keep-dogs’-teeth-clean">ways-to-keep-dogs’-teeth-clean</h2>
      <p>To summarise, let’s go through the combination of ways to keep your dog’s teeth clean. A mixture of all would be ideal, as you should tackle your dog’s oral health from all angles!</p>
      <p>However, just trying whatever works is at least going some way towards improving your pooch’s beloved grin. If you can’t manage these, especially the brushing, get in touch with a vet who’ll be able to help you more specifically.</p>
      <ul>
        <li>Regular brushing with a dog toothbrush and toothpaste</li>
        <li>Dental sticks</li>
        <li>Teeth cleaning chews</li>
        <li>Alternatives - such as oral spray or a chew toy</li>
        <li>Switching/supplementing with dry dog food over wet</li>
        <li>Trying ultrasonic teeth cleaning</li>
      </ul>
      <p>We know it can be really tough to get a dog comfortable with their teeth being cleaned, and that can be guilt-inducing. Remember to introduce your dog’s teeth-cleaning regime gently and incrementally, and just know that even a few seconds of brushing is better than none at all!</p>
      <p>If you’re concerned about your dog’s dental hygiene, or you think they may be suffering from symptoms of periodontal disease, be sure to visit a vet as soon as you can.</p>
      <p>There are plenty of ways to supplement your dog’s teeth-brushing regime - including the use of healthy dental sticks for dogs.</p>
      <p>Our tasty dental sticks contain irresistible natural ingredients such as peanut butter and spirulina, so your dog can’t help but munch, while freshening their breath and cleaning their teeth in the process.</p>
`,
  headings: [
    { id: 'how-to-clean-a-dog’s-teeth-step-by-step', text: 'how-to-clean-a-dog’s-teeth-step-by-step', level: 2 },
    { id: 'why-should-you-clean-your-dog’s-teeth', text: 'why-should-you-clean-your-dog’s-teeth', level: 2 },
    { id: 'unhealthy-dog-teeth-and-dental-disease', text: 'unhealthy-dog-teeth-and-dental-disease', level: 3 },
    { id: 'how-often-should-you-brush-a-dog’s-teeth', text: 'how-often-should-you-brush-a-dog’s-teeth', level: 3 },
    { id: 'how-to-remove-plaque-and-tartar-from-dog’s-teeth', text: 'how-to-remove-plaque-and-tartar-from-dog’s-teeth', level: 3 },
    { id: 'alternative-methods-of-cleaning-a-dog’s-teeth', text: 'alternative-methods-of-cleaning-a-dog’s-teeth', level: 2 },
    { id: 'how-to-clean-dog-teeth-without-brushing', text: 'how-to-clean-dog-teeth-without-brushing', level: 3 },
    { id: 'ultrasonic-dog-teeth-cleaning', text: 'ultrasonic-dog-teeth-cleaning', level: 3 },
    { id: 'ways-to-keep-dogs’-teeth-clean', text: 'ways-to-keep-dogs’-teeth-clean', level: 2 },
  ]
},
'metacam-for-dogs-nsaids-side-effects-alternatives': {
  title: 'Metacam for Dogs: NSAIDs side effects & alternatives',
  category: 'Pets',
  snippet: "Snippet not found",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/BLOG_ANTI-INFLAMMATORY_SOLUTIONS_FOR_DOGS_IMAGE_1_500x_crop_center.jpg?v=1706109419",
    alt: "Metacam for Dogs: NSAIDs side effects & alternatives",
    caption: "introduction-to-nsaids-in-veterinary-care"
  },
  content: `
<p>When a dog’s suffering from inflammation - in their joints, for instance - or a condition caused by inflammation such as osteoarthritis, the likelihood is your vet will prescribe a course of NSAIDs (Non-Steroidal Anti-Inflammatory Drugs).</p>
      <p>One of the most common of these NSAIDs is called Metacam. But is there an alternative to Metacam for dogs, and in which scenarios can dog-owners consider a different treatment? In this article, we’re going to discuss the side effects of NSAIDs such as Metacam as well as possible alternatives, so that you, as a dog owner, can make an informed choice over what’s best for your precious pooch.</p>
      <h2 id="introduction-to-nsaids-in-veterinary-care">introduction-to-nsaids-in-veterinary-care</h2>
      <p>Once again, NSAIDs stands for Non-Steroidal Anti-Inflammatory Drugs, and they’re commonly prescribed to treat inflammation. When looking to ease the distressing symptoms of inflammation and inflammation-based health conditions in dogs (pain, swelling, redness, fever etc.), vets will likely suggest a commonly used NSAID, such as Metacam.</p>
      <h2 id="how-metacam-works">how-metacam-works</h2>
      <p>NSAIDs like Metacam are so popular because they have pain relieving properties, and inhibit the release of the naturally occurring substances which contribute to inflammation.</p>
      <p>Without getting too scientific, Metacam blocks the production of an enzyme called COX-2, which is released into a dog’s body during inflammation. COX-2 plays a key role in the synthesis of prostaglandins, which contribute to the nasty and sometimes debilitating side effects of inflammation.</p>
      <p>Therefore when COX-2 is blocked, so are the prostaglandins, and the uncomfortable symptoms your dog experiences are greatly reduced. NSAIDs also soothe the resulting fever that comes from inflammation, and may indirectly help dogs with their mobility, as reduced pain means more movement.</p>
      <h3 id="common-uses-of-metacam-in-dogs">common-uses-of-metacam-in-dogs</h3>
      <p>Metacam, sometimes called Meloxicam (Meloxicam is the name of the drug, while Metacam is the generic product name), is most often prescribed to dogs suffering from moderate to severe pain and/or dogs with certain medical conditions, related to inflammation.</p>
      <p>These conditions usually include the following:</p>
      <ul>
        <li>Osteoarthritis or severe joint pain</li>
        <li>Hip dysplasia</li>
        <li>Soft tissue injuries</li>
        <li>Pain management after surgery</li>
        <li>Chronic pain</li>
        <li>Other health conditions related to bone, joint and tissue</li>
      </ul>
      <p>Essentially, if your pooch is suffering due to the pain, lethargy and subsequent lack of mobility that comes from inflammation-based health issues, a vet might prescribe Metacam as the first port of call.</p>
      <h3 id="dosage-guidelines-for-metacam">dosage-guidelines-for-metacam</h3>
      <p>Not all dogs will be prescribed the same dosage of Metacam; it depends on their breed, size, age and other health conditions they may have.</p>
      <p>Metacam usually comes as a flavoured liquid which can be added to food or administered directly into your dog’s mouth after they’ve eaten. Less often, you may be prescribed Metacam in a tablet format.</p>
      <p>Metacam can only be prescribed by a vet, so despite which version you’re given, you must listen very carefully to the dosage instructions they advise for your specific dog. Overdosing can be dangerous or even fatal (more on that later).</p>
      <h3 id="comparing-metacam-with-other-nsaids-rimadyl-(carprofen)">comparing-metacam-with-other-nsaids-rimadyl-(carprofen)</h3>
      <p>Some dog owners will be prescribed Rimadyl (which contains Carprofen) instead of Metacam or Meloxicam. They’re used for the same type of thing - the inhibition of COX-2 and the prostaglandins that contribute to inflammation - however there are small differences between them.</p>
      <ul>
        <li>Rimadyl is an older drug, and was one of the first NSAIDs available for veterinary use. Metacam has come onto the market more recently (though both are very established).</li>
        <li>Rimadyl is available in the form of chewable tablets and capsules, or can be injected directly into your dog - whereas Metacam is available as an oral liquid or tablet.</li>
        <li>The effects of Rimadyl are quicker but less prolonged - so it may need to be administered twice daily as opposed to Metacam’s once. It may also be used for quick relief of intense pain, as opposed to longer term pain.</li>
        <li>Sometimes Rimadyl (Carprofen) is favoured by vets for dogs suffering from hip dysplasia.</li>
      </ul>
      <p>Both have the same risks and side effects, especially after prolonged use: gastrointestinal issues and nausea, kidney or liver damage.</p>
      <p>Always ask your vet why you’re being prescribed one NSAID over another.</p>
      <h2 id="potential-side-effects-of-nsaids">potential-side-effects-of-nsaids</h2>
      <p>Though lots of dogs have favourable results from using NSAIDs, they’re sometimes deemed controversial due to the risk of dangerous side effects and overdosing.</p>
      <p>It’s really important to be diligent when administering NSAIDs to your pooch, and keep a close eye on them and their behaviour throughout treatment.</p>
      <p>It’s equally as important to monitor your dog if they’ve been using NSAIDs for a prolonged period of time, as well as when the medication is just being introduced.</p>
      <h3 id="dangers-of-overdose">dangers-of-overdose</h3>
      <p>As Metacam is often dosed to dogs in liquid form, there’s a heightened danger of overdosing. This can be especially prominent if you drizzle the liquid into food without using a proper dosage dropper (do not do this).</p>
      <p>This can cause distressing side effects in your dog such as stomach upset or nausea, but at its worst can prove fatal. It’s vital to avoid the risk of giving your dog an overdose of Metacam or other NSAIDs.</p>
      <p>Constantly refer to the advice given by your vet regarding dosage, and get in touch with them if you have any concerns that your dog isn’t responding well to treatment.</p>
      <h3 id="meloxicam-poisoning-in-dogs">meloxicam-poisoning-in-dogs</h3>
      <p>If your pooch has been administered too much Metacam or Meloxicam, they’ll likely show untoward side effects that indicate poisoning. There have also been reports of Metacam poisoning in dogs after it has been administered over a particularly long period.</p>
      <h4>Symptoms & signs to look out for</h4>
      <p>Keep a close eye on the signs of Metacam overdose or poisoning in dogs, which may include the following:</p>
      <ul>
        <li>Extreme gastrointestinal issues - overdosing on Metacam (or Meloxicam) can result in stomach ulcers, intestinal perforations or bleeding. You’ll know if your pooch is suffering from this as they’ll be in much distress, exhibiting abdominal pain, vomiting and diarrhoea. Sometimes their stools will be bloody too.</li>
        <li>Increased thirst, urinating, lethargy, loss of appetite - These symptoms point to kidney (renal) damage, as kidneys can be impacted by overdosing NSAIDs.</li>
        <li>Yellowing of skin and eyes, vomiting, lethargy - If your pooch shows yellowing on the tips of his ears, eyes and other exposed patches of skin, this could point to liver damage due to NSAIDs.</li>
        <li>Seizures, lack of coordination - Your pooch may have suffered nerve damage and appear disoriented due to NSAIDs.</li>
        <li>Difficulty breathing - In severe cases, your dog may struggle to breathe if they’re reacting to an overdose of NSAIDs.</li>
      </ul>
      <p>If your dog is suffering from any of the above symptoms or a combination, get them to a vet as a state of emergency.</p>
      <h2 id="exploring-alternative-treatments">exploring-alternative-treatments</h2>
      <p>Though NSAIDs are widely seen as the standard treatment for inflammation and inflammation-based conditions in dogs, many dog-owners concerned by the apparent risks choose to try alternatives.</p>
      <p>Many find a more natural route to be more in-keeping with what they want for their dog. At least, they may supplement the NSAID prescription with alternative treatments and/or supplements.</p>
      <p>This should always be done in collaboration with a vet - so be sure to talk through your plans with them and get advice regarding your dog’s specific medical issues.</p>
      <p>Let’s go into some of the alternative options you might consider for your dog’s inflammation and pain management…</p>
      <h3 id="hydrotherapy-for-dogs">hydrotherapy-for-dogs</h3>
      <p>If inflammation means your pooch has issues with mobility and getting around, many dog owners choose hydrotherapy as a low impact way for them to get vital exercise.</p>
      <p>In collaboration with a physiotherapist for dogs, you could take your dog to specialist swimming classes, or even use an underwater treadmill.</p>
      <p>Exercising in water will help keep them active and their body strong, without the stress and pain they might experience from standard walkies.</p>
      <h3 id="acupuncture-for-dogs">acupuncture-for-dogs</h3>
      <p>Another option is acupuncture; an ancient treatment which many dog owners swear by.</p>
      <p>Acupuncture involves the insertion of tiny needles into targeted areas of a dog’s body, called ‘pressure points’, to ease the pain caused by inflammation. Lots of vets recommend acupuncture as an alternative mode of pain relief.</p>
      <h3 id="nutritional-supplements">nutritional-supplements</h3>
      <p>A wide range of nutritional supplements can provide a more natural way for your pooch to get the physical support their body needs.</p>
      <p>Nutrient-packed supplements for dogs can be bought as oils, powders or tablets to add to regular meals - almost like a condensed shot of anti-inflammatory power.</p>
      <p>Let’s take a look at the most well-known supplements that can be used either instead of, or in addition to NSAIDs for dogs.</p>
      <h4>Glucosamine and Chondroitin</h4>
      <p>Glucosamine and Chondroitin are the heavy hitters when it comes to pain relief in joints - and they’re derived from the natural world, found in shellfish such as green-lipped mussels.</p>
      <p>Glucosamine helps form the building blocks of cartilage, and in doing so, supports the joint, reducing the pain and strain your dog experiences.</p>
      <p>Joint care supplements for dogs often contain Glucosamine and Chondroitin, which are both used to combat the painful symptoms of arthritis and joint pain.</p>
      <h4>Omega-3 fatty acids</h4>
      <p>Essential fatty acids such as Omega-3 have tons of benefits to a dog as they contribute to building healthy cells.</p>
      <p>Omega-3 fatty acids (found in oily fish like salmon and mackerel, or in fish oil for dogs) can boost a dog’s immunity, improve skin and coat condition, contribute to heart health, brain function and a dog’s nervous system, and reduce inflammation.</p>
      <p>This makes fish oil supplements for dogs a great natural alternative to NSAIDs.</p>
      <h4>Other beneficial supplements</h4>
      <p>Other beneficial supplements that could have anti-inflammatory effects include: Collagen Devil’s Claw Yucca Vitamins E and C CBD oil. These can be found over-the-counter as an array of natural supplements for dogs.</p>
      <h2 id="understanding-when-nsaids-are-necessary">understanding-when-nsaids-are-necessary</h2>
      <p>Of course, we don’t condone that you use natural supplements instead of NSAIDs when a vet insists they’re absolutely necessary.</p>
      <p>There are medical scenarios in which NSAIDs are the most sensible treatment for your pooch’s condition - especially if their pain is severe and/or chronic - and you should follow medical advice when this is the case.</p>
      <p>However, there may be times in which NSAIDs are prescribed as the first port of call, when perhaps nutritional changes could have similar, and safer effects than these powerful drugs.</p>
      <p>There are lots of risks to consider with NSAIDs, and as a dog owner who wants the best for their dog, you should decide which other avenues may be worth pursuing.</p>
      <h2 id="consulting-with-your-veterinarian">consulting-with-your-veterinarian</h2>
      <p>Overall, you should be working as a team with your vet to work out which is the best route for your dog’s health.</p>
      <p>Whether you want to go for NSAIDs or try alternative therapies combined with anti-inflammatory nutritional supplements for dogs, you should be open with your vet and let them know exactly what you intend to do.</p>
      <h2 id="integrating-nsaids-with-alternative-treatments">integrating-nsaids-with-alternative-treatments</h2>
      <p>Often, NSAIDs and natural supplements won’t be an either/or discussion, but each can be integrated with the other to create a comprehensive treatment plan for your dog suffering with inflammation.</p>
      <p>For instance: a course of NSAIDs such as Metacam, combined with hydrotherapy and a nutritional supplement such as Salmon Oil for dogs, could be exactly what your dog needs to have their pain and inflammation treated from all angles.</p>
      <h2 id="conclusion">conclusion</h2>
      <p>Overall, NSAIDs such as Metacam are widely accepted by dog owners as the go-to treatment for the pain and discomfort caused by inflammation - but there are risks involved, particularly when used over a prolonged period.</p>
      <p>Many dog owners express concern about the high risks associated with NSAIDs, such as gastro issues, stomach ulcers, liver and kidney damage.</p>
      <p>It’s great that medications like NSAIDs are available to dog owners - however, you do have a choice, and if you think there are other options to try first, there are natural alternatives (therapies, nutritional supplements) you can integrate into your dog’s initial treatment plan to see if they have an impact in delaying or reducing painful symptoms.</p>
      <p>As always, get your vet’s advice and be completely open with them, and together you should end up with a treatment plan that has your dog feeling as happy, physically healthy and pain-free as possible.</p>
      <p>Our resident Pooch Vet, Linda says:</p>
      <p>“As a vet and an advocate for pets, I'm so grateful for the existence of NSAIDs like Metacam (Meloxicam).</p>
      <p>I prescribe it most days I'm at work as it is a safe and effective way to manage pain, reduce fever and minimise inflammation.</p>
      <p>For those on long-term NSAIDs, many will benefit from adjunctive therapies such as nutritional supplements and it's always a good idea to chat to your vet about what can be done to minimise the need for medication.”</p>
      <h2 id="faqs">faqs</h2>
      <p>Here are some final questions about using Metacam for your dog.</p>
      <h4>How long can a dog be on Metacam?</h4>
      <p>This will depend on your specific dog and their ailments, so ask your vet’s opinion on how long your pooch will need to stay on medication such as Metacam.</p>
      <p>Occasionally, NSAIDs are used as a one-off treatment for pain (such as post-surgery or due to an injury); at other times, such as in management for chronic pain, your dog may be prescribed NSAIDs for a much longer time.</p>
      <h4>What if I miss a dose of Metacam?</h4>
      <p>If you miss a dose of Metacam, just continue taking it as usual when the next dose comes around. Never double up a dose to make up for a missed one - this carries the risk of overdosing.</p>
      <p>If you miss more than one dose, call your vet for advice. If you have further questions about Metacam and NSAIDs, feel free to get in touch with us, or you can chat it through with your vet. At Pooch & Mutt we have a range of natural Joint Care Supplements to help fight inflammation in dogs and keep them strong and healthy.</p>
      <section>References</section>
`,
  headings: [
    { id: 'introduction-to-nsaids-in-veterinary-care', text: 'introduction-to-nsaids-in-veterinary-care', level: 2 },
    { id: 'how-metacam-works', text: 'how-metacam-works', level: 2 },
    { id: 'common-uses-of-metacam-in-dogs', text: 'common-uses-of-metacam-in-dogs', level: 3 },
    { id: 'dosage-guidelines-for-metacam', text: 'dosage-guidelines-for-metacam', level: 3 },
    { id: 'comparing-metacam-with-other-nsaids-rimadyl-(carprofen)', text: 'comparing-metacam-with-other-nsaids-rimadyl-(carprofen)', level: 3 },
    { id: 'potential-side-effects-of-nsaids', text: 'potential-side-effects-of-nsaids', level: 2 },
    { id: 'dangers-of-overdose', text: 'dangers-of-overdose', level: 3 },
    { id: 'meloxicam-poisoning-in-dogs', text: 'meloxicam-poisoning-in-dogs', level: 3 },
    { id: 'exploring-alternative-treatments', text: 'exploring-alternative-treatments', level: 2 },
    { id: 'hydrotherapy-for-dogs', text: 'hydrotherapy-for-dogs', level: 3 },
    { id: 'acupuncture-for-dogs', text: 'acupuncture-for-dogs', level: 3 },
    { id: 'nutritional-supplements', text: 'nutritional-supplements', level: 3 },
    { id: 'understanding-when-nsaids-are-necessary', text: 'understanding-when-nsaids-are-necessary', level: 2 },
    { id: 'consulting-with-your-veterinarian', text: 'consulting-with-your-veterinarian', level: 2 },
    { id: 'integrating-nsaids-with-alternative-treatments', text: 'integrating-nsaids-with-alternative-treatments', level: 2 },
    { id: 'conclusion', text: 'conclusion', level: 2 },
    { id: 'faqs', text: 'faqs', level: 2 },
  ]
},



'osteoarthritis-in-dogs-a-comprehensive-guide': {
  title: 'Osteoarthritis in dogs: a comprehensive guide',
  category: 'Pets',
  snippet: "Snippet not found",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/BLOG_OSTEOARTHRITIS_IN_DOGS_IMAGE_2_500x_crop_center.jpg?v=1704711011",
    alt: "Osteoarthritis in dogs: a comprehensive guide",
    caption: "understanding-osteoarthritis-in-dogs"
  },
  content: `
<p>One of the most distressing parts of being a pooch parent is supporting your lovely dog through potential health conditions as they age. Osteoarthritis, a degenerative disease which deteriorates joints and affects mobility, is one of the most common ailments for dogs.</p>
      <p>So what is the likelihood your dog might get osteoarthritis, what are the symptoms of arthritis in dogs, and is there anything you can do to prevent it? If your dog does get osteoarthritis, how can you keep them as happy, healthy and mobile as possible?</p>
      <p>In this comprehensive guide, we’ll answer all your questions around this tricky disorder so that you’ll feel prepared to help your dog through osteoarthritis, whatever happens.</p>
      <h2 id="understanding-osteoarthritis-in-dogs">understanding-osteoarthritis-in-dogs</h2>
      <p>Osteoarthritis (sometimes referred to as OA throughout this article) is a common condition for dogs, but it’s normal to be confused over what it means. Let’s start with a basic overview of the disease.</p>
      <h3 id="what-is-osteoarthritis">what-is-osteoarthritis</h3>
      <p>Osteoarthritis is a degenerative joint condition. In simple terms, the cushioning of cartilage (the rubbery substance that joins two bones together and absorbs impact as a dog jumps, runs and moves) wears down over time, and isn’t repaired naturally in a dog’s body. Eventually, the cartilage is so damaged that the joint is no longer protected, and the ends of the bones rub together. This is very painful for the dog, and they may struggle to walk, get up and move around as easily.</p>
      <p>Early detection is very important when it comes to your pooch having osteoarthritis, as symptoms get worse over time. The right treatment can significantly improve your dog’s comfort levels and mood and reduce pain, thus allowing more beneficial movement and a delay in the onset and severity of their symptoms.</p>
      <h3 id="causes-and-risk-factors-of-osteoarthritis">causes-and-risk-factors-of-osteoarthritis</h3>
      <p>There are a few reasons why a dog might develop osteoarthritis, and some dogs are more at risk than others. Be sure you know about these risk factors for osteoarthritis (in both genetics and lifestyle) when you first come to look after a new pooch.</p>
      <b>Genetics / Susceptible breed A dog may develop OA because their parents did, or because they’re a breed that is prone to getting it (usually giant breeds). They may also be born with a physical quirk, or have developmental abnormalities which means the likelihood of developing OA is more common.</b>
      <b>Injury trauma An injury that causes a distortion in a bone or joint, or an unusual gait, could eventually cause cartilage and bone to wear down prematurely, leading to OA symptoms.</b>
      <b>Improper diet A balanced and nutritious diet is key to keeping the joints protected and bones strong. OA can come on sooner in life if a dog isn’t getting the right nutrition. Also, if your pooch eats a lot of fatty, sugary foods or human scraps, weight gain could indirectly lead to OA due to the excess pressure put on the joints.</b>
      <b>Obesity As above, if your dog is obese or carries excess weight, they are more likely to develop OA without intervention to keep them lean.</b>
      <b>Other joint conditions OA can sometimes occur in parallel, or as a result of, other diseases that affect joints - such as Lyme disease, or hip or elbow dysplasia.</b>
      <b>Age Often, OA is just a result of a dog’s body ageing and the joints wearing down.</b>
      <h3 id="prevalence-in-dogs">prevalence-in-dogs</h3>
      <p>Osteoarthritis is one of the most prevalent health conditions for pooches of all ages. Even young dogs and puppies can develop osteoarthritis, and it’s estimated that up to 80% of dogs will start to show symptoms over the course of their lives.</p>
      <h3 id="common-breeds-affected">common-breeds-affected</h3>
      <p>As mentioned, there are dog breeds that are more prone to developing joint pain and osteoarthritis. It tends to be bigger dog breeds, such as:</p>
      <b>German Shepherds</b>
      <b>Rottweilers</b>
      <b>Great Danes</b>
      <b>Golden Retrievers</b>
      <b>Newfoundlands</b>
      <li>Saint Bernards</li>
      <p>If your pooch falls under any of these breed categories, it’s very important that they receive regular vet check-ups for osteoarthritis throughout their lifetime. That said, any dog breed can develop the condition; including those who carry excess weight, or working dogs who put heavy and persistent strain on their muscles and joints.</p>
      <h3 id="osteoarthritis-in-puppies">osteoarthritis-in-puppies</h3>
      <p>Even puppies can have osteoarthritis - particularly if their breed is prone to the disease. It can also happen if there’s been a defect in their growth or development, if they’ve suffered from an injury or infection, or if they have another kind of immunity malfunction such as Lyme disease (in which the body attacks the joints).</p>
      <h2 id="prevention-of-osteoarthritis">prevention-of-osteoarthritis</h2>
      <p>As mentioned above, there are certain factors that may increase the risk of your pooch getting osteoarthritis. If your dog is genetically predisposed, the risk of OA will be harder to curb, though there is lots of evidence that making targeted lifestyle choices can significantly slow the onset of symptoms - and even act as a preventative measure.</p>
      <h3 id="preventive-measures">preventive-measures</h3>
      <p>Here are some ways you might try to prevent OA symptoms from coming on early in your pooch:</p>
      <b>Nutrition for joint care A nutritious diet formulated for joint care can go a long way in helping protect the joints, keeping bones and muscles strong, and improving your dog’s mood and physical condition overall. Keeping your dog lean and physically fit will go a long way to staving off OA. Nutrition is also an important part of treatment, post-diagnosis - stay tuned for what constitutes a healthy diet for dogs’ joints.</b>
      <b>Joint care supplements Lots of pooch parents use joint care supplements for dogs (such as glucosamine or fish oil) as a preventative measure, particularly if their dog breed is at risk.</b>
      <b>Regular vet check-ups Seeing the vet regularly is essential - as early detection of OA is key to keeping symptoms at bay.</b>
      <b>Frequent exercise An active dog who gets lots of time outdoors will be a stronger, healthier dog for longer. This will also curb weight gain, which can be a risk for OA.</b>
      <b>Physiotherapy If your pooch has an injury or joint dysfunction, pay attention to those joints through physiotherapy even before OA symptoms occur.</b>
      <li>Everyday monitoring Keep a close eye on your dog’s wellbeing and behaviour, particularly around their gait, mobility, energy levels and any licking of joints or limbs.</li>
      <h2 id="signs-and-symptoms-of-osteoarthritis">signs-and-symptoms-of-osteoarthritis</h2>
      <p>So, you’ve recognised whether your dog might be prone to getting OA and you want to be able to spot the earliest signs. That’s the best attitude to have, as getting in early with treatment gives your pooch the best chance of staying pain-free and mobile for much longer.</p>
      <h3 id="recognising-the-signs">recognising-the-signs</h3>
      <p>As a pooch parent, you’ll likely notice when your dog isn’t acting quite like their usual energetic selves. Signs of OA will present in your dog in the following ways:</p>
      <b>Slower getting to their feet</b>
      <b>Altered gait/slight difficulty walking</b>
      <b>Reluctance to go for walks</b>
      <b>Stiff movements, slowness</b>
      <b>Difficulty getting up stairs or jumping into car</b>
      <b>Changes in behaviour/lower energy levels</b>
      <b>Obvious pain/discomfort</b>
      <li>Swelling joints</li>
      <p>Once you’ve noticed these symptoms in your pooch, note down how often they’ve occurred and arrange a check-up with the vet.</p>
      <h3 id="areas-most-affected">areas-most-affected</h3>
      <p>Arthritis can occur throughout a dog’s body, but the joints responsible for the most movement are most commonly impacted by OA;  the knees, hips, shoulders, ankles and elbows. Sometimes the paws and spine can be affected, particularly in older dogs. If your pooch is a working dog, they may get OA in areas that see the most strain.</p>
      <h2 id="diagnosis-of-osteoarthritis-in-dogs">diagnosis-of-osteoarthritis-in-dogs</h2>
      <p>Once you’ve taken your pooch to the vet, they will likely diagnose in one or more of the following ways…</p>
      <h3 id="veterinary-diagnostic-approaches">veterinary-diagnostic-approaches</h3>
      <p>Assessment and physical examination</p>
      <p>Your vet will take into account any recent observations about your dog’s symptoms or predisposed risks. They will then give your pooch a full physical examination, feeling for potential swellings or sensitive areas, and observing your dog’s gait as they walk.</p>
      <p>X-ray</p>
      <p>An x-ray can often show damage to cartilage or any areas where bones are significantly wearing down.</p>
      <p>Fluid and blood tests</p>
      <p>A vet might take a fluid sample from affected joints, or do some further blood tests.</p>
      <p>They may also run a CT or MRI scan. All of these steps are to identify osteoarthritis and rule out any other possible diagnosis.</p>
      <h3 id="can-osteoarthritis-be-cured">can-osteoarthritis-be-cured</h3>
      <p>Once diagnosed, osteoarthritis can’t be cured. It’s a degenerative condition, so it’s important to implement lifestyle changes as well as a specialist diet and medication to support your pooch and manage their pain as their symptoms progress.</p>
      <h2 id="treatment-options">treatment-options</h2>
      <p>Once your dog has received a diagnosis of osteoarthritis, many pooch parents opt for a mixture of conventional treatment and alternative therapies. The choice is yours alone, but definitely listen to your trusted vet’s advice before you try anything new.</p>
      <h3 id="conventional-treatments">conventional-treatments</h3>
      <p>The most commonly offered treatment will be medication and potentially surgery, to help keep your dog’s symptoms at bay and lessen the pain from their sore or debilitating joints.</p>
      <h4>NSAIDs</h4>
      <p>Your dog will likely be prescribed NSAIDs by your vet, which stand for Non-Steroidal Anti-Inflammatory Drugs. These are used to reduce the pain of inflammation in the joints, lower any fever present, and offer some much-needed pain relief to your pooch. In the UK they might be called Metacam, Loxicom or Rimadyl - though there are other brands available.</p>
      <h4>Surgery</h4>
      <p>If symptoms are severe, medication hasn’t been as effective as hoped, or there’s a specific spot in the body where osteoarthritis has taken hold, surgery can be an option. This could involve the insertion of a small camera to assess the cartilage damage (called an arthroscopy), removal of damaged tissue, flushing of the damaged joint - or in severe cases, even full joint replacement, such as in the hip or knee.</p>
      <h3 id="supplements-and-alternative-therapies">supplements-and-alternative-therapies</h3>
      <p>As well as conventional treatments, lots of dog owners opt for alternative therapies, such as herbal remedies and health supplements. This could include:</p>
      <h4>Joint supplements</h4>
      <p>Joint supplements for dogs are intended to soothe joint pain and rebuild cartilage, as well as boost mobility in the bone joints. They may contain ingredients such as fish oil, which is great for dogs due to its omega-3 and 6 essential fatty acids, collagen, glucosamine,  chondroitin sulphate, hyaluronic acid, MSM (methylsulphonylmethane) and vitamin c. Our Pooch & Mutt Joint Supplements contain all of these active ingredients!</p>
      <h4>Chondroitin sulphate and glucosamine</h4>
      <p>A powerful combination of chondroitin and glucosamine is often present in joint care supplements for dogs. The great thing about this power combo is they form the building blocks of cartilage. Though glucosamine occurs in the body, dogs naturally produce less as they age, which is one of the reasons cartilage starts to break down.</p>
      <p>Therefore, bolstering a dog’s diet with glucosamine-rich foods, or a supplement for dogs containing glucosamine and chondroitin, can help rebuild the shock-absorbing, cartilage cushioning that once kept your dog’s joints comfortable and strong. Here’s more info on how glucosamine can benefit a dog’s body.</p>
      <p>NOTE: Though you might consider using joint supplements for humans on your dog, it’s really important to opt for joint supplements for dogs. These will contain ingredients specifically formulated to benefit a dog’s body, so will be of lesser risk than a human version.</p>
      <h4>Physiotherapy for dogs</h4>
      <p>Physio is another great route for dogs with osteoarthritis. A physiotherapist for dogs can help relieve pain by stretching out their affected joints, and keeping their bones moving safely. They can also offer guidance to use support devices (like ramps or specialist dog beds), or implement low impact exercise, such as swimming or an underwater treadmill, so your dog gets their daily movement without doing any extra damage to their joints.</p>
      <h2 id="managing-osteoarthritis-in-dogs">managing-osteoarthritis-in-dogs</h2>
      <p>Once diagnosed, osteoarthritis will be with your pooch for the rest of their life - so it’s essential to manage the condition each day. This way your beloved dog will be comfortable, content, and active for longer, and severe symptoms will be delayed.</p>
      <h3 id="nutrition-and-weight-management">nutrition-and-weight-management</h3>
      <p>Osteoarthritis symptoms are worsened in dogs that suffer from obesity or excess weight, so doing everything you can to keep your dog lean and active will have huge benefits in the long run. You can do this by:</p>
      <b>Choosing a nutrition-focused dog food brand that uses lean proteins, fresh fruit and veggies and targeted nutrient content. We have an extensive range of dry and wet food, packed with goodness, to target specific health concerns.</b>
      <b>Avoiding fatty foods, including human scraps and leftovers</b>
      <b>Keeping your dog well hydrated</b>
      <b>Maintaining a regular exercise routine</b>
      <li>Adopting alternative, low impact exercises</li>
      <h3 id="nutrition-for-dogs-with-osteoarthritis">nutrition-for-dogs-with-osteoarthritis</h3>
      <p>Fill your dog’s diet with whole, organic ingredients that are full of joint-boosting nutrients. This could include -</p>
      <ul>
        <li>Oily fish such as salmon or mackerel, for omega-3 and 6 and fatty acids which soothe joints and boost wellbeing.</li>
        <li>Lean proteins like turkey or chicken, for muscle building and strength.</li>
        <li>Turmeric, which has anti-inflammatory properties.</li>
        <li>Leafy greens and vegetables for a host of vitamins, minerals and antioxidants.</li>
        <li>Glucosamine-rich shellfish, such as crab meat or green-lipped mussels.</li>
        <li>Joint and bone supplements for dogs - for accessible levels of glucosamine and other helpful ingredients that can be easily added to their regular dog food.</li>
        <li>Fish oil, such as salmon oil for dogs, will provide a condensed shot of powerful, omega-rich fatty acids for boosted joints.</li>
      </ul>
      <h3 id="exercise-and-physical-activity">exercise-and-physical-activity</h3>
      <p>The conundrum when a dog has osteoarthritis is that their mobility is impacted - and as the condition worsens, they become reluctant to go for their usual walkies! This can be upsetting for dog owners, but keeping up with your dog’s daily exercise routine is a huge part of managing their condition.</p>
      <h4>Alternative exercise</h4>
      <p>Tweaking their exercise routine to put a focus on low impact movement is key for dogs with osteoarthritis…</p>
      <ul>
        <li>Shorten walks, and take them more frequently, rather than going on long, strenuous hikes.</li>
        <li>Consider the terrain - flat grass, for example, is a much softer option than concrete or gravel. Inclines are fine so long as they’re gentle, and you take it slow.</li>
        <li>Increase gentle forms of exercise such as swimming, or an underwater treadmill to take pressure off aching joints. A physiotherapist can help you with this.</li>
        <li>Be mindful of your dog’s energy levels - playtime should be relaxed, not too rough, and be sure your pooch can balance themselves.</li>
      </ul>
      <h2 id="home-remedies-and-lifestyle-adjustments">home-remedies-and-lifestyle-adjustments</h2>
      <p>When your beloved pooch has sore and aching joints and finds it harder to get around, there are plenty of ways you can make life more comfortable for them.</p>
      <h3 id="modifying-your-home-for-a-dog-with-osteoarthritis">modifying-your-home-for-a-dog-with-osteoarthritis</h3>
      <p>Ramps Assistive devices such as ramps can help your pooch get in and out of the house, up and down steps, into a car and onto beds.</p>
      <p>Comfortable sleeping setup Reduce stress for your dog by keeping your home warm and comfortable, with a sleeping area specifically set up to support your pooch’s aching joints.</p>
      <p>Slip-free flooring If you have laminate or wooden flooring, non-slip mats or strips of carpet can help your wobbly dog get around the house without struggle.</p>
      <p>Lower feeding bowls and make other small tweaks so that your dog doesn’t have to strain themselves to reach things when they don’t have to.</p>
      <p>Supportive bodywear The petcare industry offers lots of wearable support for dogs with joint and mobility issues, such as leads and harnesses that lift the weight off a dog’s feet, and anti-slip booties so they can grip the ground more easily.</p>
      <h2 id="faqs">faqs</h2>
      <p>That just about covers it for this comprehensive guide, but here are some final answers to commonly asked questions about osteoarthritis in dogs…</p>
      <h3 id="the-difference-between-rheumatoid-arthritis-and-osteoarthritis">the-difference-between-rheumatoid-arthritis-and-osteoarthritis</h3>
      <p>There are commonalities between rheumatoid arthritis (RA) and osteoarthritis (OA); they are both conditions of the joints degenerating over time, causing discomfort and mobility issues for a dog. The big difference is that RA is an autoimmune disease, in which a dysfunctioning immune system attacks the joints.</p>
      <p>In comparison, OA is a degenerative disease that develops due to age, wear and tear of the joints or genetic disposition. It isn’t due to a malfunction in the immune system.</p>
      <h3 id="impact-of-osteoarthritis-on-your-dog’s-life-expectancy">impact-of-osteoarthritis-on-your-dog’s-life-expectancy</h3>
      <p>The effect of osteoarthritis on a dog’s longevity depends on how early it is detected and how well the condition is managed as it develops. If pooch parents take all advice surrounding lifestyle changes, medication, nutrition and regular vet check-ups, and truly love and care for their pooch each day, an arthritic dog should be able to live a long, happy and relatively comfortable life, without their time being shortened too much at all.</p>
      <p>A diagnosis of osteoarthritis in your dog can be a scary and troubling time, but the condition is common - and it needn’t be the end of the world for you nor your beloved pooch. With some early preparation, a vet’s advice and some nutrition and lifestyle tweaks, many dog owners are able to manage this disease so that their dog’s mobility, physical wellbeing and spirits all remain in tip-top condition for much longer.</p>
      <p>If you’re keen to supplement your dog’s diet with natural, joint-boosting nutrients, there’s plenty to choose from in the Pooch & Mutt Joint Care range. This includes specialised nutrition as well as our dog supplements for joint care and omega-rich Salmon Oil for dogs.</p>
      <p>References.</p>
      <b>‘Canine Osteoarthritis and Treatments: A Review’, 2015 - Veterinary Science Development.</b>
      <b>‘Randomised double-blind, positive-controlled trial to assess the efficacy of glucosamine/chondroitin sulfate for the treatment of dogs with osteoarthritis’, 2006 - National Library of Medicine.</b>
      <b>‘Systematic review of clinical trials of treatments for osteoarthritis in dogs’, 2007 - American Veterinary Medical Association.</b>
      <b>‘What is arthritis?’ - Canine Arthritis Management.</b>
`,
  headings: [
    { id: 'understanding-osteoarthritis-in-dogs', text: 'understanding-osteoarthritis-in-dogs', level: 2 },
    { id: 'what-is-osteoarthritis', text: 'what-is-osteoarthritis', level: 3 },
    { id: 'causes-and-risk-factors-of-osteoarthritis', text: 'causes-and-risk-factors-of-osteoarthritis', level: 3 },
    { id: 'prevalence-in-dogs', text: 'prevalence-in-dogs', level: 3 },
    { id: 'common-breeds-affected', text: 'common-breeds-affected', level: 3 },
    { id: 'osteoarthritis-in-puppies', text: 'osteoarthritis-in-puppies', level: 3 },
    { id: 'prevention-of-osteoarthritis', text: 'prevention-of-osteoarthritis', level: 2 },
    { id: 'preventive-measures', text: 'preventive-measures', level: 3 },
    { id: 'signs-and-symptoms-of-osteoarthritis', text: 'signs-and-symptoms-of-osteoarthritis', level: 2 },
    { id: 'recognising-the-signs', text: 'recognising-the-signs', level: 3 },
    { id: 'areas-most-affected', text: 'areas-most-affected', level: 3 },
    { id: 'diagnosis-of-osteoarthritis-in-dogs', text: 'diagnosis-of-osteoarthritis-in-dogs', level: 2 },
    { id: 'veterinary-diagnostic-approaches', text: 'veterinary-diagnostic-approaches', level: 3 },
    { id: 'can-osteoarthritis-be-cured', text: 'can-osteoarthritis-be-cured', level: 3 },
    { id: 'treatment-options', text: 'treatment-options', level: 2 },
    { id: 'conventional-treatments', text: 'conventional-treatments', level: 3 },
    { id: 'supplements-and-alternative-therapies', text: 'supplements-and-alternative-therapies', level: 3 },
    { id: 'managing-osteoarthritis-in-dogs', text: 'managing-osteoarthritis-in-dogs', level: 2 },
    { id: 'nutrition-and-weight-management', text: 'nutrition-and-weight-management', level: 3 },
    { id: 'nutrition-for-dogs-with-osteoarthritis', text: 'nutrition-for-dogs-with-osteoarthritis', level: 3 },
    { id: 'exercise-and-physical-activity', text: 'exercise-and-physical-activity', level: 3 },
    { id: 'home-remedies-and-lifestyle-adjustments', text: 'home-remedies-and-lifestyle-adjustments', level: 2 },
    { id: 'modifying-your-home-for-a-dog-with-osteoarthritis', text: 'modifying-your-home-for-a-dog-with-osteoarthritis', level: 3 },
    { id: 'faqs', text: 'faqs', level: 2 },
    { id: 'the-difference-between-rheumatoid-arthritis-and-osteoarthritis', text: 'the-difference-between-rheumatoid-arthritis-and-osteoarthritis', level: 3 },
    { id: 'impact-of-osteoarthritis-on-your-dog’s-life-expectancy', text: 'impact-of-osteoarthritis-on-your-dog’s-life-expectancy', level: 3 },
  ]
},
'pooch-first-aid': {
  title: 'Dog First Aid for owners: Essential tips and tricks for emergency situations',
  category: 'Pets',
  snippet: "Snippet not found",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/BLOG_WALK_YOUR_PET_MONTH_FIRST_AID_2_1_500x_crop_center.jpg?v=1704379457",
    alt: "Dog First Aid for owners: Essential tips and tricks for emergency situations",
    caption: "recognising-an-emergency"
  },
  content: `
<p>Emergencies can happen anytime and anywhere, so as an owner, it's essential to be prepared for them.</p>
      <p>Pet first aid is just as important as first aid for humans and it can make a huge difference in our dogs' well-being during a crisis.</p>
      <p>From minor injuries to life-threatening situations, knowing what to do in the heat of the moment could be the deciding factor in your pooch's outcome.</p>
      <p>A big part of pet first aid is being prepared, as emergencies can strike when we least expect them. That's why it's crucial for us to have the necessary knowledge and resources to tackle such situations efficiently.</p>
      <p>Being prepared for emergencies means having your vet's number stored in your phone, having a well-equipped pet first aid kit, and knowing some basic first aid techniques for your dog.</p>
      <p>Understanding what to do in various emergency situations, such as choking, wounds, or seizures, can potentially save your pet's life.</p>
      <p>So, whether you're a new pawrent or a seasoned owner, it's never too late to learn about pet first aid.</p>
      <div>Play Video
VIEW ON TIKTOK</div>
      <h2 id="recognising-an-emergency">recognising-an-emergency</h2>
      <p>As a dog owner, it's essential to know the signs of a health emergency and when to seek help from a vet. In this section, we'll go over some common signs of distress and how to quickly assess your pooch's condition.</p>
      <h3 id="signs-of-distress">signs-of-distress</h3>
      <p>It's crucial to keep an eye on your pet's behaviour for any sudden changes. Some common signs to watch for include:</p>
      <ul>
        <li>Lethargy or withdrawal</li>
        <li>Seizures or shaking</li>
        <li>Difficulty breathing</li>
        <li>Collapse or inability to stand</li>
        <li>Rapid heart rate</li>
        <li>Loss of appetite</li>
        <li>Vomiting or diarrhoea</li>
      </ul>
      <p>If you notice any of these symptoms, it's essential to act fast. Dogs can be very good at hiding their pain, so even subtle changes in behaviour could indicate a serious problem.</p>
      <h3 id="assessing-your-dogs-condition">assessing-your-dogs-condition</h3>
      <p>If your dog exhibits any of these warning signs, it's important to quickly assess their condition to determine if it's an emergency. Here are some steps I recommend:</p>
      <p>Stay calm: Panicking won't help your pet - it can actually make their condition worse.</p>
      <ul>
        <li>Take a few deep breaths and try to remain as calm as possible.</li>
        <li>Check responsiveness: Gently call your pet's name or lightly touch them to see if they respond. Unresponsiveness could be a sign of a more serious issue.</li>
        <li>Inspect for visible injuries: Look for any signs of injury such as wounds, swelling, or active bleeding.</li>
        <li>Assess breathing and heart rate:</li>
        <li>Place your hand on your dog’s chest to feel for a heartbeat, and check their breathing by watching their chest and sides.</li>
      </ul>
      <p>If you're worried, it's always best to consult with a vet as soon as possible. First aid is never a replacement for proper veterinary care; rather it acts to limit any damage that might occur to your pet whilst you get them to the nearest vet.</p>
      <h2 id="fundamentals-of-pet-first-aid">fundamentals-of-pet-first-aid</h2>
      <p>As a vet, I’ve seen first-hand that emergencies can happen anytime and anywhere. That's why it's essential to be prepared with the basics of pet first aid.</p>
      <p>In this section, I'll cover the essentials for a pet first aid kit and the immediate steps to follow in an emergency situation.</p>
      <h3 id="pet-first-aid-kit-essentials">pet-first-aid-kit-essentials</h3>
      <p>A well-prepared pet first aid kit is crucial for keeping our furry friends safe in case of emergencies.</p>
      <p>Your pet first aid kit should always be nearby and to hand, whether that be in your bag or car. Here are some items I recommend including in a pet first aid kit:</p>
      <ul>
        <li>Sterile gauze and adhesive tape for wound dressing</li>
        <li>Curved scissors for safe handling</li>
        <li>Tweezers for removing splinters or debris</li>
        <li>Tick removal tool for correctly removing ticks</li>
        <li>Cold pack for reducing swelling and pain</li>
        <li>Saline solution for eye injuries and rinsing wounds</li>
        <li>Emergency contact information for your vet and local emergency vet</li>
        <li>Muzzle to prevent bites in case your pet experiences pain or fear</li>
      </ul>
      <p>We can easily find most of these items at a local pharmacy or online. Keeping these first aid supplies close to hand can make all the difference when our pets need urgent care.</p>
      <h3 id="immediate-steps-in-an-emergency-situation">immediate-steps-in-an-emergency-situation</h3>
      <p>When the unthinkable happens, quick thinking and knowledge of basic first aid can save our dogs' lives.</p>
      <p>The first step is always to stay calm. If we panic, it will be difficult to provide the emergency care our pets need.</p>
      <p>Here are the immediate steps to follow in an emergency:</p>
      <p>Assess the situation: Observe your dog closely to identify the nature and severity of their condition. Is your pet conscious? Are they breathing? Are there any visible injuries or signs of distress?</p>
      <p>Call for help: Having your vet's phone number saved in your phones can be a lifesaver. After assessing the situation, we should contact our vet or emergency vet clinic to explain the situation and receive further guidance.</p>
      <p>Administer first aid: Depending on the advice you receive from the vet, you may need to apply basic first aid techniques on your dog to stabilise their condition before transport. For example, applying pressure on bleeding wounds or offering reassurance to a distressed pet.</p>
      <p>Similarly, we should be prepared to perform CPR if the situation calls for it. Always follow the guidance of the professionals in these situations.</p>
      <h2 id="handling-specific-injuries">handling-specific-injuries</h2>
      <h3 id="wound-care">wound-care</h3>
      <ul>
        <li>The first thing to do is clean the area with a sterile wash or clean water.</li>
        <li>For small cuts or abrasions, apply an antiseptic ointment and cover the wound with a clean bandage.</li>
        <li>If the wound is bleeding heavily, applying direct pressure with a clean cloth should help control the bleeding.</li>
        <li>Avoid removing the pressure. Even if blood seeps through, don't remove the material; instead add more layers to continue the pressure.</li>
        <li>Don’t bandage up wounds unless your vet tells you to do so.</li>
        <li>Incorrectly bandaging could cause complications if it’s wrapped too tightly.</li>
        <li>In case the bleeding persists, it's best to contact your vet immediately.</li>
      </ul>
      <h3 id="dealing-with-broken-bones">dealing-with-broken-bones</h3>
      <ul>
        <li>If your pet has a suspected fracture or broken bone, the first step is to reassure them and keep them as still as possible to prevent further injury.</li>
        <li>If the bone is visible or the skin is broken, covering it with a clean cloth can help protect the wound.</li>
        <li>Splinting or bandaging may be necessary depending on the location and size of the fracture, but it's important not to do this yourself as it could cause more pain or damage.</li>
        <li>Don't give your dog any painkillers that you may have at home (human or animal).</li>
        <li>Seek immediate veterinary care in these situations.</li>
      </ul>
      <h3 id="burns-and-scalds-treatment">burns-and-scalds-treatment</h3>
      <ul>
        <li>If your pet experiences a burn or scald, start by cooling the area immediately with cold running water for at least 10 minutes. Never use ice or iced water.</li>
        <li>Ensure your dog doesn’t get too cold. Keep them warm with a blanket, but make sure it doesn’t make contact with the burn.</li>
        <li>Using a cold, wet cloth to cover the burn can provide temporary relief.</li>
        <li>Avoid applying any ointments or creams in these cases, as these may not be suitable for your dog and could cause complications.</li>
        <li>For chemical burns, flush the area with water and contact a vet immediately.</li>
        <li>Always get in touch with your vet, no matter how big or small the burn is.</li>
      </ul>
      <h3 id="choking-and-airway-blockages">choking-and-airway-blockages</h3>
      <ul>
        <li>If your dog is choking or experiencing an airway blockage, remain calm and try to open their mouth to see if the obstruction is visible.</li>
        <li>If you can gently remove the item without causing injury, then do so.</li>
        <li>If the object is lodged deep or the pet resists, visit the vet immediately.</li>
      </ul>
      <h3 id="heatstroke">heatstroke</h3>
      <ul>
        <li>When it comes to heatstroke, time is of the essence.</li>
        <li>If you suspect your pet is suffering from heatstroke, the first thing you should do is move them to a cooler area with plenty of shade or airflow.</li>
        <li>While it may be tempting to use ice, it's better to wet their coat with tepid or cool water instead. Never use ice or iced water.</li>
        <li>Ice cold water can cause the blood vessels to constrict, making it harder for heat to be released.</li>
        <li>You can offer a small amount of fresh, cool water to drink, but make sure to get to the vet as soon as possible.</li>
      </ul>
      <h3 id="poisoning-and-toxins">poisoning-and-toxins</h3>
      <ul>
        <li>If you think your pet has ingested a poison or toxic substance, it's important to act fast.</li>
        <li>Remove them from the source of the toxin and collect any evidence of the substance if possible. This could be crucial for the vet to determine the appropriate treatment.</li>
      </ul>
      <p>Here's a useful list of information to gather:</p>
      <p>- Name of the substance or object</p>
      <p>- Strength or concentration of the product</p>
      <p>- Approximate amount ingested</p>
      <p>- Time of ingestion</p>
      <p>Once you have this information, contact your vet immediately.</p>
      <h3 id="traffic-accidents">traffic-accidents</h3>
      <p>Traffic accidents can result in serious injuries for our pets. If your dog has been involved in a road traffic accident, first ensure your own safety by moving to a secure location away from the road.</p>
      <p>Then, assess your dog's condition - look for signs of shock, respiratory distress, or bleeding.</p>
      <p>Providing first aid for pets in this situation may include:</p>
      <ul>
        <li>Preventing your pet from moving to avoid further injury</li>
        <li>Applying pressure to any bleeding wounds with a clean cloth or gauze</li>
        <li>Keeping your pet warm with a blanket or towel</li>
      </ul>
      <p>Remember to contact your vet immediately and follow their guidance. They may recommend you bring your pet in for an examination to determine the full extent of their injuries and the best course of action for treatment.</p>
      <h2 id="cpr-and-rescue-breathing">cpr-and-rescue-breathing</h2>
      <p>The ability to perform CPR and rescue breathing might just save your pet’s life. In this section, I'll discuss how to perform CPR on your pet and demonstrate rescue breathing techniques.</p>
      <h3 id="performing-cpr-on-your-dog">performing-cpr-on-your-dog</h3>
      <p>First, we need to check for two primary signs before starting CPR: breathing and heartbeat. If your pet is not breathing and their heartbeat is absent, it's time to initiate CPR.</p>
      <ol>
        <li>To begin, place your pet on a flat surface, ensuring their left side faces upward.</li>
        <li>For small pets, I recommend using a tabletop.</li>
        <li>Before starting chest compressions, ensure your pet's airway is clear by gently tilting their head backward and checking for obstructions.</li>
        <li>Next, place your hands firmly on their ribcage; one hand should be on top of the other.</li>
        <li>Press down firmly, compressing the chest by about 2 inches for large dogs and 1 inch for small pets.</li>
        <li>The compression rate should be about 100-120 per minute*.</li>
        <li>While performing compressions, it's important to allow the chest to fully recoil between compressions.</li>
      </ol>
      <p>*So you know you’re performing at the right compression rate, some people find it easier to sing a song of the same tempo.</p>
      <p>Here are some song suggestions to follow in your head:</p>
      <ul>
        <li>Stayin’ Alive by the BeeGees</li>
        <li>Another One Bites the Dust by Queen</li>
        <li>Crazy in Love by Beyoncé ft. Jay-Z</li>
        <li>Dancing Queen by ABBA</li>
      </ul>
      <h3 id="rescue-breathing-techniques">rescue-breathing-techniques</h3>
      <p>Rescue breathing plays a vital role in providing oxygen to your dog when they’re unable to breathe on their own.</p>
      <p>Follow these steps for an effective rescue breathing technique:</p>
      <ol>
        <li>Gently tilt your pet's head backward: This action helps to open up their airway.</li>
        <li>Check for obstructions: If you see any foreign objects blocking their airway, remove them carefully.</li>
        <li>Close their mouth: Make sure your pet's mouth is closed before you begin the next step.</li>
        <li>Breathe into their nostrils: Place your mouth over your pet's nostrils and gently blow into them. Remember to watch for their chest expansion while doing this.</li>
        <li>Count and adjust: Aim for about 20 breaths per minute during rescue breathing.</li>
      </ol>
      <p>It's essential to adjust your force depending on your pet's size. In any situation where your dog’s breathing might be compromised, make sure to call your vet immediately after starting CPR to seek professional help.</p>
      <h2 id="preparation-and-prevention">preparation-and-prevention</h2>
      <p>As a veterinarian, I can't stress enough the importance of being prepared for emergencies and preventing accidents.</p>
      <p>In this section, I'll discuss how to avoid common hazards, and the benefits of investing in training and first aid courses.</p>
      <h3 id="avoiding-common-hazards">avoiding-common-hazards</h3>
      <p>Ensuring our dogs' safety should be a top priority. Here are some simple yet effective ways to keep them safe:</p>
      <ul>
        <li>Pet-proofing: Just as we childproof our homes, we should also pet-proof them by removing anything from their way that could be potentially harmful. This includes toxic plants and food, electrical cords, and small objects that can be swallowed.</li>
        <li>Regular vet visits: Scheduling regular check-ups with the local vet will help identify any potential health issues before they become serious. Veterinary medicine has come a long way and can prevent many problems from escalating if addressed promptly.</li>
        <li>Pet insurance: Accidents can happen, and having reliable pet insurance can alleviate any financial stress during unexpected emergencies.</li>
      </ul>
      <h3 id="training-and-first-aid-courses">training-and-first-aid-courses</h3>
      <p>Taking the time to educate ourselves about pet first aid is invaluable. Here's why:</p>
      <ul>
        <li>Knowledge: By attending a Pet First Aid Course in person, you can learn essential lifesaving skills such as CPR, wound care, and how to recognise and respond to common pet emergencies.</li>
        <li>Confidence: The knowledge gained from training enables us to feel confident in our ability to handle emergencies, which can make all the difference when time is of the essence.</li>
        <li>First aid kit: Having a well-equipped first aid kit is essential to be able to provide first aid to your pet. You can purchase these ready-made or make your own using the components that we mentioned earlier in this article.</li>
      </ul>
      <h2 id="additional-resources">additional-resources</h2>
      <p>Here’s a list of additional resources for you to explore. Here, you'll find helpful apps, further reading, and courses that can be lifesavers when you need them the most.</p>
      <h3 id="pet-first-aid-reading-and-courses">pet-first-aid-reading-and-courses</h3>
      <p>When it comes to pet first aid, there's always more to learn. I suggest looking into some of the extensive resources and courses available to deepen your knowledge:</p>
      <ul>
        <li>Books: Some great reads include the American Red Cross's Pet First Aid booklet and the The Pet First Aid Handbook. Both of these books offer comprehensive information on how to handle a variety of situations and emergencies.</li>
        <li>Online courses: To take your pet first aid skills to the next level, consider enrolling in an online course. Udemy offers a Pet First Aid course that covers first aid basics, in-depth demonstrations, and emergency care topics.</li>
        <li>Veterinary Support: Lastly, always remember that your local vet or emergency care clinic should be your first call for any pet health concerns. They can provide you with the expert guidance and proper care your pet needs during an emergency.</li>
      </ul>
      <p>I hope these resources help you feel more confident and prepared to handle any pet emergencies or health concerns that may arise.</p>
      <p>Hopefully, you never need to implement the advice offered in this article but having the right knowledge and tools can make all the difference in an emergency.</p>
`,
  headings: [
    { id: 'recognising-an-emergency', text: 'recognising-an-emergency', level: 2 },
    { id: 'signs-of-distress', text: 'signs-of-distress', level: 3 },
    { id: 'assessing-your-dogs-condition', text: 'assessing-your-dogs-condition', level: 3 },
    { id: 'fundamentals-of-pet-first-aid', text: 'fundamentals-of-pet-first-aid', level: 2 },
    { id: 'pet-first-aid-kit-essentials', text: 'pet-first-aid-kit-essentials', level: 3 },
    { id: 'immediate-steps-in-an-emergency-situation', text: 'immediate-steps-in-an-emergency-situation', level: 3 },
    { id: 'handling-specific-injuries', text: 'handling-specific-injuries', level: 2 },
    { id: 'wound-care', text: 'wound-care', level: 3 },
    { id: 'dealing-with-broken-bones', text: 'dealing-with-broken-bones', level: 3 },
    { id: 'burns-and-scalds-treatment', text: 'burns-and-scalds-treatment', level: 3 },
    { id: 'choking-and-airway-blockages', text: 'choking-and-airway-blockages', level: 3 },
    { id: 'heatstroke', text: 'heatstroke', level: 3 },
    { id: 'poisoning-and-toxins', text: 'poisoning-and-toxins', level: 3 },
    { id: 'traffic-accidents', text: 'traffic-accidents', level: 3 },
    { id: 'cpr-and-rescue-breathing', text: 'cpr-and-rescue-breathing', level: 2 },
    { id: 'performing-cpr-on-your-dog', text: 'performing-cpr-on-your-dog', level: 3 },
    { id: 'rescue-breathing-techniques', text: 'rescue-breathing-techniques', level: 3 },
    { id: 'preparation-and-prevention', text: 'preparation-and-prevention', level: 2 },
    { id: 'avoiding-common-hazards', text: 'avoiding-common-hazards', level: 3 },
    { id: 'training-and-first-aid-courses', text: 'training-and-first-aid-courses', level: 3 },
    { id: 'additional-resources', text: 'additional-resources', level: 2 },
    { id: 'pet-first-aid-reading-and-courses', text: 'pet-first-aid-reading-and-courses', level: 3 },
  ]
},



'walking-your-pooch-in-winter': {
  title: 'Walking your pooch in winter',
  category: 'Pets',
  snippet: "Snippet not found",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/24-08-23_BLOG_SEO_BLOG_TIPS_FOR_A_DOGS_BEDTIME_ROUTINE_2_500x_crop_center.jpg?v=1704309111",
    alt: "Walking your pooch in winter",
    caption: "make-sure-your-dog-can-be-seen-in-the-dark"
  },
  content: `
<p>It might not be something you’ve really given too much thought to before, but the way you walk your dog during different seasons can vary drastically.</p>
      <p>People usually know about the dangers of walking during the hot (if we’re lucky) summer - but winter can also come with its challenges!</p>
      <p>Don’t avoid the walks altogether if conditions are a little treacherous, instead swat up on how to look after your fur baby during those colder, frostier times so that they’re comfortable, happy, warm and safe.</p>
      <h2 id="make-sure-your-dog-can-be-seen-in-the-dark">make-sure-your-dog-can-be-seen-in-the-dark</h2>
      <p>Winter months come armed with early dark nights, meaning you might find yourself on the evening walk in complete darkness.</p>
      <p>It’s really important that both you and the pooch are visible to cars and other passers-by. You might be able to see them, but it doesn’t mean they can see you.</p>
      <p>Invest in a reflective coat, collar or harness for your pooch so they’re bright and visible and there’s less risk of any accidents occurring. Safety first!</p>
      <h2 id="put-a-coat-on-them">put-a-coat-on-them</h2>
      <p>Just like us, dogs feel that big drop in temperature. Just because they have a layer of fur, doesn’t mean they’re protected from the cold.</p>
      <p>Some breeds do cope better with the colder weather - but others who don’t have an undercoat really need that extra thermal layer.</p>
      <p>Dog breeds that do have an undercoat include:</p>
      <ul>
        <li>Akitas</li>
        <li>Huskies</li>
        <li>Bernese Mountain Dogs</li>
        <li>Chow Chows</li>
        <li>German Shepherds</li>
      </ul>
      <p>If your pooch doesn’t have a fur coat that’s like these breeds, there’s a good chance you’ll need to invest in a good-quality jacket, coat, jumper or fleece.</p>
      <p>If you’re struggling to get your dog into a warm covering, then read our blog on dogs wearing clothes for some advice.</p>
      <p>There are some breeds that really do need that extra TLC when it comes to keeping warm during walks. These are usually:</p>
      <ul>
        <li>Teacup, toy or smaller dog breeds</li>
        <li>Leaner breeds with a lower body fat percentage such as Whippets, Greyhounds and Lurchers</li>
        <li>Short-haired breeds such as Beagles, Labradors and Boxers</li>
      </ul>
      <p>Of course, the breed list under each bullet point is much more extensive than this - so if you don’t know your dog’s coat type already, it’s worth doing some research to see how they typically react to the cold weather.</p>
      <p>Age and health are also really important factors to consider. Puppies and golden oldies will feel the cold more, and those pooches who have certain health conditions may be more sensitive.</p>
      <h2 id="keep-their-fur-neat-and-tidy">keep-their-fur-neat-and-tidy</h2>
      <p>If you have a longer-haired pooch that’s prone to knots and tangles, we recommend regular grooming and brushing so the weather doesn’t cause problems.</p>
      <p>We’re not suggesting you get their fur clipped short as that would be counterproductive, but keeping it neat and tidy means the weather won’t cause troublesome knots and mats.</p>
      <p>If such problems occur it can be really uncomfortable for them, and in some cases detrimental to their health - and really long hair can take longer to dry meaning they’ll be wearing a damp coat, making them feel cold and shivery.</p>
      <h2 id="take-care-of-their-paws">take-care-of-their-paws</h2>
      <p>The same knotting and tangling mentioned above can happen around their paws during winter too, which can cause damage to their precious feet and pads.</p>
      <p>Before you take them out for a walk, make sure their feet fur is kept short. There are other measures you can take too, to make sure their little pitter patter feet are winter ready:</p>
      <ul>
        <li>Dog booties or socks They might seem like a lot of effort to put on, but dog booties or socks can be super effective. They keep their feet warm on frozen or snowy paths, and stop grit, salt and snow getting between their toes. Not just a fashion accessory, eh!</li>
        <li>Apply paw balm There are lots of pet balms on the market which are excellent during the winter months. Apply to their paws and nose regularly to keep them soft and moisturised - avoiding painful cracks, sores and dry skin</li>
        <li>Clean their paws after walkies We’re not just talking about removing the muck here - winter comes with a whole host of unbeknown dangers. Grit and salt chemicals can get stuck between their toes which can be extremely dangerous if they lick it, and ice and snow can cause frostbite if paws are left cold and uncleaned - which can be fatal. We recommend using warm water and cotton wool to gently clean pads and between those toes.</li>
      </ul>
      <h2 id="keep-active-to-keep-warm">keep-active-to-keep-warm</h2>
      <p>Keep up those games of fetch during the winter months, and encourage your pup to keep active.</p>
      <p>This will help keep their temperature higher to avoid feeling the cold, and is great for their body and mind too!</p>
      <h2 id="stay-safe-around-snow-and-ice">stay-safe-around-snow-and-ice</h2>
      <p>If you usually let your dog run free off lead, it’s probably not the best option when there’s snow or ice around.</p>
      <p>A snow blanket may cover deep patches or holes that are unsafe, meaning if your pooch is running riot they could fall and hurt themselves.</p>
      <p>The same goes for ice - they may see a frozen lake or pond and run across without understanding the dangers. Keep them on the lead at all times so you know they’re free from hazards while they’re by your side.</p>
      <p>If you notice your pooch’s behaviour change during the cold weather or they seem hesitant to go out, you might need to look at making small changes to help them feel more at ease. And if you have any health concerns, then contact your vet ASAP.</p>
`,
  headings: [
    { id: 'make-sure-your-dog-can-be-seen-in-the-dark', text: 'make-sure-your-dog-can-be-seen-in-the-dark', level: 2 },
    { id: 'put-a-coat-on-them', text: 'put-a-coat-on-them', level: 2 },
    { id: 'keep-their-fur-neat-and-tidy', text: 'keep-their-fur-neat-and-tidy', level: 2 },
    { id: 'take-care-of-their-paws', text: 'take-care-of-their-paws', level: 2 },
    { id: 'keep-active-to-keep-warm', text: 'keep-active-to-keep-warm', level: 2 },
    { id: 'stay-safe-around-snow-and-ice', text: 'stay-safe-around-snow-and-ice', level: 2 },
  ]
},



'mental-health-how-walking-can-help-you-and-your-dog': {
  title: 'Mental health: How walking can help you and your dog',
  category: 'Pets',
  snippet: "Snippet not found",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/BLOG_WALK_YOUR_PET_MONTH_MENTAL_HEALTH_3_500x_crop_center.jpg?v=1704291160",
    alt: "Mental health: How walking can help you and your dog",
    caption: "keeping-fit"
  },
  content: `
<p>We’re sure you know by now, that us Pooch & Mutters are THE biggest advocates of supporting pooch health from the inside out. That goes for their physical health, and equally as important - their mental health.</p>
      <p>Our Good Mood Food is bursting with ingredients to elevate a happy brain - as that happy brain controls all that your pooch is!</p>
      <p>As their dependant (and of course those who aren’t pawrents too), it goes without saying that your own mental health should be a priority. And there’s no better way to work together to get mentally in shape, than to go for WALKIES!</p>
      <p>Here are some of the amazing ways going on outdoor adventures with your furry sidekick, can keep you feeling like your best selves:</p>
      <h2 id="keeping-fit">keeping-fit</h2>
      <p>People often associate keeping fit with losing weight - which can be an encouraging element, but there’s so much more to keeping fit than just that!</p>
      <p>Being fit and healthy can help you and your pooch:</p>
      <ul>
        <li>Sleep soundly, so that the magic 7 hours (for you) is attainable. Dogs will need much more than that depending on their age and breed</li>
        <li>Keep blood pressure and cholesterol low, for a healthy heart and longer life expectancy</li>
        <li>Keep in shape, which boosts confidence and self-esteem to help reduce feelings of depression (depression is a thing for dogs too)</li>
        <li>Keep your minds sharp! The impact being fit has on your body helps focus your brain - so any challenges that come your way may feel easier to deal with</li>
      </ul>
      <h2 id="boosting-endorphins-through-play">boosting-endorphins-through-play</h2>
      <p>We can learn a lot from our pooches. Especially with how much good play and fun times can take the pressure off those everyday stresses!</p>
      <p>It’s the opportunity to let loose, put aside any worries in that moment, and get those endorphins (the brain chemicals that stimulate relaxation and improve our mood) released.</p>
      <p>Fun pooch/pawrent playtime can also:</p>
      <ul>
        <li>Strengthen your bond!</li>
        <li>Help correct/support any behavioural issues your dog may suffer from</li>
        <li>Give you both a much-needed energy release from boredom or that Groundhog Day feeling</li>
        <li>Help you learn some new tricks together, which can feel very rewarding</li>
        <li>Build their confidence, which can help relieve pressure and uncertainty for you both</li>
        <li>Remind you you’re never too old to be silly - life’s too short!</li>
      </ul>
      <h2 id="getting-fresh-air">getting-fresh-air</h2>
      <p>Did you know that getting a daily bout of fresh air is scientifically proven to be good for your health? Yep, really.</p>
      <p>Feeling the wind in your hair or fur comes with endless benefits, including:</p>
      <ul>
        <li>Cleaning your lungs and improving your breathing</li>
        <li>Strengthening your immune system, so you’re fighting fit against any nasties that come your way</li>
        <li>Improving blood pressure and heart rate, reducing the risk of serious health issues</li>
        <li>Aiding your digestive system to help keep everything functioning as it should</li>
        <li>Increasing energy levels and keeping your mind feeling sharp</li>
        <li>Giving you time and space to think, make decisions and remove yourself from stressors</li>
      </ul>
      <h2 id="the-chance-to-meet-other-pawrents">the-chance-to-meet-other-pawrents</h2>
      <p>You might be feeling lonely and craving interaction, or maybe you’re feeling super sociable and just want to meet new people and pooches! Whichever one it is, getting out and about is the perfect opportunity to get chatting, and making new friends in the process.</p>
      <p>Having people to talk to can bring fun, fulfillment and motivation to your life - which we all need.</p>
      <p>And if your pooch makes a new fur bestie in the process then win-win! We know that dogs are (usually) sociable beings and stimulating those senses with a new buddy will do them the world of good.</p>
      <h2 id="creating-a-routine">creating-a-routine</h2>
      <p>Although spontaneity can give us those short-term thrills - we all need some sort of routine to keep us feeling focused and in control when life feels hectic.</p>
      <p>Dogs especially love routine, and having a daily walk to look forward to helps provide structure, giving them the comfort they need to live a meaningful life.</p>
      <p>Don’t underestimate the power that a good routine can have on your mental health.</p>
      <p>Set specific times each day to aim to get out. It’ll give you something to look forward to, and set up the rest of your day nicely around it.</p>
      <h2 id="the-opportunity-to-try-something-new">the-opportunity-to-try-something-new</h2>
      <p>If there’s only so much ‘routine’ you can cope with, then seize the opportunity to try something new with it! Go on your daily walk for all of the above reasons - but add a cheeky twist to it.</p>
      <p>Try a fresh route and take in the new sights, challenge yourself to step out of your comfort zone and go climbing, jump in the car and walk somewhere a little further from home - do whatever makes you feel good while you’re out exploring! You might end up discovering a new hobby while you’re at it.</p>
      <p>Your dog will absolutely embrace this, as they’ll adore the new smells and scents they pick up. Did you know that 15 minutes of pooch sniffing is the equivalent of 30 minutes physical exercise?</p>
      <p>So it doesn’t necessarily have to take more time - just trying something new will offer a huge amount of benefits for you both!</p>
      <p>So go on, enjoy your outdoor adventures and see for yourself the positives that come with it.</p>
`,
  headings: [
    { id: 'keeping-fit', text: 'keeping-fit', level: 2 },
    { id: 'boosting-endorphins-through-play', text: 'boosting-endorphins-through-play', level: 2 },
    { id: 'getting-fresh-air', text: 'getting-fresh-air', level: 2 },
    { id: 'the-chance-to-meet-other-pawrents', text: 'the-chance-to-meet-other-pawrents', level: 2 },
    { id: 'creating-a-routine', text: 'creating-a-routine', level: 2 },
    { id: 'the-opportunity-to-try-something-new', text: 'the-opportunity-to-try-something-new', level: 2 },
  ]
},
'liver-disease-in-dogs-symptoms-stages-treatment': {
  title: 'Liver Disease in Dogs: Symptoms, Stages & Treatment',
  category: 'Pets',
  snippet: "Snippet not found",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/Liver_disease_-_HEADER_500x_crop_center.jpg?v=1687428712",
    alt: "Liver Disease in Dogs: Symptoms, Stages & Treatment",
    caption: "what-causes-liver-disease-in-dogs"
  },
  content: `
<p>If your dog has been diagnosed with liver disease, you might understandably be a worried pooch parent. You may wonder: what does liver disease mean for a dog, what are the symptoms, and how do you understand and treat the different stages of liver disease? Also, if a dog has liver disease, do you switch their food? What should they eat?</p>
      <p>It’s completely normal to have so many questions - after all, our dogs are such beloved members of the family and we just want them to be healthy and as happy as they can be. In this article, we’ll explain the symptoms, stages and treatment of liver disease in dogs, so that you’ll feel more confident and well equipped for whatever stage of the condition your pooch is in.</p>
      <h2 id="what-causes-liver-disease-in-dogs">what-causes-liver-disease-in-dogs</h2>
      <p>Liver disease is relatively common in dogs and can affect all breeds and ages. There’s a lot of variation in what contributes to the condition:</p>
      <ul>
        <li>Sometimes it’s genetic factors that make liver disease more likely - in breeds such as Standard Poodles, Chihuahuas, Golden Retrievers and West Highland Terriers, for example</li>
        <li>Eating fatty foods over a long period can increase the chance of developing liver disease</li>
        <li>Ingesting toxic substances - including plants such as ragwort, certain wild mushrooms, mouldy corn or artificial sweetener - can cause liver failure</li>
        <li>Liver disease can be a side effect of illnesses like diabetes, or can appear alongside pancreas issues</li>
        <li>A severe injury or trauma to the liver can lead to liver disease</li>
        <li>If your dog is senior, developing organ dysfunction such as liver disease can be a part of old age.</li>
      </ul>
      <h2 id="signs-and-symptoms-of-liver-disease-in-dogs">signs-and-symptoms-of-liver-disease-in-dogs</h2>
      <p>So, what to look out for? It can be tough to spot liver disease in your dog, as the common symptoms could relate to many other illnesses or conditions. In any case, take your pooch to a vet to be tested if you spot any of the following:</p>
      <ul>
        <li>Loss of appetite and/or weight loss</li>
        <li>Drinking and peeing more often than usual</li>
        <li>Vomiting and diarrhoea</li>
        <li>Instability on their feet/not walking correctly</li>
        <li>Yellow whites of eyes or tongue (signs of jaundice)</li>
        <li>General weakness or lethargy</li>
        <li>Blood when they pee or poop</li>
        <li>Seizures</li>
      </ul>
      <h3 id="hepatic-encephalopathy-in-dogs">hepatic-encephalopathy-in-dogs</h3>
      <p>In some cases, liver disease in dogs can lead to a secondary illness called hepatic encephalopathy - a brain condition. It might seem strange for a change in liver function to impact the brain, and really, it’s not entirely understood. As the liver is responsible for filtering toxins from the blood, it’s thought that changes in blood chemistry caused by a deteriorated liver can cause the brain to dysfunction.</p>
      <p>It’s most commonly linked to a portosystemic shunt in dogs (a particular liver condition) - but can also occur after acute liver failure or alongside severe/late stage liver disease.</p>
      <h3 id="how-is-liver-disease-diagnosed-in-dogs">how-is-liver-disease-diagnosed-in-dogs</h3>
      <p>Once you’ve noticed your dog isn’t acting quite themselves and you’ve taken them to the vets, it’s likely the vet will carry out a few tests, such as blood tests, x-rays or an ultrasound. If the tests show that the liver isn’t functioning normally, they may carry out a biopsy on your dog to remove tissue for further testing.</p>
      <p>From there, they’ll know the type of liver disease your dog is suffering from and how advanced it is, and should instruct you on the best way to manage it.</p>
      <h2 id="stages-of-liver-disease-in-dogs">stages-of-liver-disease-in-dogs</h2>
      <p>The severity of your dog’s symptoms could indicate how advanced their liver disease has become. Generally, liver disease progression is defined by early stages and late stages…</p>
      <h3 id="early-stages-of-liver-disease">early-stages-of-liver-disease</h3>
      <p>When liver disease is in its early stages, your pooch may display mild symptoms such as decreased appetite, some weight loss, or peeing and drinking more frequently. They might get the odd bout of sickness and diarrhoea. The early stages can be hard to detect, as these symptoms can seem mundane and easily go under the radar. If you have any suspicions that things aren’t right, get your pooch to the vet for a check up.</p>
      <h3 id="later-stages-of-liver-disease">later-stages-of-liver-disease</h3>
      <p>During the more advanced stages of liver disease, symptoms are more severe, as the liver’s inability to function causes your pooch to become more unwell. Your dog might be generally lethargic and weak, have jaundice of the eyes, gums and tongue, an inability to hold their pee means they may urinate in the house, and they may vomit, get diarrhoea and go off their food.</p>
      <h3 id="treatment-for-liver-disease-in-dogs">treatment-for-liver-disease-in-dogs</h3>
      <p>When it comes to treatment, getting the right food is an important step to manage liver disease in dogs - as if their liver can’t process what they eat it will significantly worsen symptoms and make the dog miserable. Treatment for a dog’s liver dysfunction depends on how advanced the damage is, and could be a combination of the following:</p>
      <b>Switching to a hepatic diet is one of the most important treatments for liver disease (read on for more about this)</b>
      <b>You or a vet should administer medications such as antibiotics, immunosuppressive drugs or nausea medication to manage sickness and symptoms</b>
      <b>Fluid therapy may be useful for maintaining hydration</b>
      <b>Nutritional supplements such as milk thistle and Omega 3 fatty acids can boost the dog’s health and overall wellbeing</b>
      <b>Supportive measures will be needed, such as monitoring of blood pressure and taking to the vets for check-ups on a regular basis.</b>
      <h2 id="hepatic-diet-for-dogs">hepatic-diet-for-dogs</h2>
      <p>It can be tough to know what to feed a dog with liver disease, but it’s usually vital for their treatment that they’re switched to a hepatic diet. Your vet will likely suggest a hepatic dog food as it’s specially formulated to provide your dog with all the nutrition and supplements they need without putting undue stress on the liver. Hepatic dog food needs to be extra appetising, too, as dogs with a dodgy liver often don’t want to eat.</p>
      <p>For dogs with liver issues who also have a grain allergy or who prefer a grain-free diet, Pooch & Mutt has made a specialist dog food for liver disease that contains zero grain. Unlike other prescription hepatic foods, we’ve boosted flavour by adding delicious chicken skin and salmon oil - the perfect amount of succulent fats to make it irresistible to dogs who may have gone off their food. To top it off, we’ve added milk thistle - its natural nutrients are excellent for liver function.</p>
      <h3 id="can-liver-disease-be-cured-in-dogs">can-liver-disease-be-cured-in-dogs</h3>
      <p>Whether a dog can be ‘cured’ of liver disease really depends on the stage of progression and the cause (for instance, if your pooch has liver damage as a part of diabetes, it would be dependent on the diabetes improving).</p>
      <p>Liver disease tends to be progressive, and the damage already done to the liver rarely goes in reverse. However, in many cases liver disease can be managed and slowed so that a dog can live out their days happily. Staying ahead of symptoms, feeding them the right food, and maintaining regular check-ups with the vet will improve your dog’s everyday quality of life and hopefully extend their life, too.</p>
      <p>If your pooch has liver disease, you’ll probably have a lot on your mind in regards to getting them the best treatment possible. That’s why Pooch & Mutt has formulated a range of vet-recommended specialist foods for dogs with specific health conditions, including our Veterinary Food for Liver Disease. We’ve created the exact right balance of proteins, nutrients and supplements so rather than fuss over food, you can just focus on caring for and loving your dog every day.</p>
      <p>If you want to learn more about what to feed your dog if they have liver problems, check out our blog here.</p>
      <section>References</section>
`,
  headings: [
    { id: 'what-causes-liver-disease-in-dogs', text: 'what-causes-liver-disease-in-dogs', level: 2 },
    { id: 'signs-and-symptoms-of-liver-disease-in-dogs', text: 'signs-and-symptoms-of-liver-disease-in-dogs', level: 2 },
    { id: 'hepatic-encephalopathy-in-dogs', text: 'hepatic-encephalopathy-in-dogs', level: 3 },
    { id: 'how-is-liver-disease-diagnosed-in-dogs', text: 'how-is-liver-disease-diagnosed-in-dogs', level: 3 },
    { id: 'stages-of-liver-disease-in-dogs', text: 'stages-of-liver-disease-in-dogs', level: 2 },
    { id: 'early-stages-of-liver-disease', text: 'early-stages-of-liver-disease', level: 3 },
    { id: 'later-stages-of-liver-disease', text: 'later-stages-of-liver-disease', level: 3 },
    { id: 'treatment-for-liver-disease-in-dogs', text: 'treatment-for-liver-disease-in-dogs', level: 3 },
    { id: 'hepatic-diet-for-dogs', text: 'hepatic-diet-for-dogs', level: 2 },
    { id: 'can-liver-disease-be-cured-in-dogs', text: 'can-liver-disease-be-cured-in-dogs', level: 3 },
  ]
},



'kidney-disease-in-dogs-causes-symptoms-treatment': {
  title: 'Kidney Disease in Dogs: Causes, Symptoms & Treatment',
  category: 'Pets',
  snippet: "Snippet not found",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/Kidney_disease_-_HEADER_500x_crop_center.jpg?v=1687426692",
    alt: "Kidney Disease in Dogs: Causes, Symptoms & Treatment",
    caption: "what-causes-kidney-disease-in-dogs"
  },
  content: `
<p>Do you have a precious pooch who suffers from kidney disease? This can be a worrying diagnosis for a dog parent, no matter what the severity - and you may have a barrage of questions and concerns. You may wonder what signs to watch out for, what causes kidney disease, how to treat it effectively and whether you should change your dog’s food? With the right advice, food and veterinary treatment, you should be well equipped to give your dog with kidney disease a calm, happy and comfortable life with as little trouble from their symptoms as possible.</p>
      <p>If you’re in the dark over what could indicate kidney disease in your dog, or how to care for them if they develop kidney issues, come along with us as we go through the common causes, symptoms and treatment…</p>
      <h2 id="what-causes-kidney-disease-in-dogs">what-causes-kidney-disease-in-dogs</h2>
      <p>Kidney disease can also be called renal disease, and it comes in two forms: chronic and acute. It’s relatively common, especially in older dogs - however there are lots of potential contributors to a dog’s kidney problems, so the cause isn’t always completely clear.</p>
      <ul>
        <li>Some breeds of dog are genetically predisposed to kidney issues, such as English Cocker Spaniels, German Shepherds or Bull Terriers.</li>
        <li>Ingesting toxic substances can contribute to kidney failure; things such as antifreeze, rat poison, artificial sweetener or even grapes.</li>
        <li>Some may have kidney disease as a side effect of cancer or other illnesses.</li>
        <li>Kidney disease can be the result of a severe injury to your dog.</li>
        <li>There has been evidence that periodontal disease (a very common condition of the mouth and gums that leads to tooth loss) can lead to kidney and liver damage.</li>
        <li>Sometimes, the dog is just suffering from old age, and sadly their organs may start to malfunction or not work in the same way as they used to.</li>
      </ul>
      <h2 id="signs-and-symptoms-of-kidney-disease-in-dogs">signs-and-symptoms-of-kidney-disease-in-dogs</h2>
      <p>As all the major organs, kidneys are extremely important to a dog’s functioning - they filter toxins from the blood, regulate levels of potassium and sodium, conserve water and produce urine. Therefore, symptoms of kidney disease in dogs often show up as dehydration or urinary issues, or as general sickness.</p>
      <p>Look out for the following signs of kidney disease:</p>
      <ul>
        <li>Drinking and peeing excessively (as the kidneys lose their ability to conserve water, it comes straight through as urine)</li>
        <li>Peeing in the house when they don’t usually</li>
        <li>Vomiting and diarrhoea</li>
        <li>Weight loss and lack of appetite</li>
        <li>Ulcers and pale gums</li>
        <li>General lethargy and dullness</li>
        <li>Weak bones and joints</li>
        <li>Sudden blindness (this can come from high blood pressure)</li>
      </ul>
      <p>If your dog is displaying one or more of these signs, book an appointment with the vet immediately so they can do a thorough check of your pooch.</p>
      <h3 id="how-do-you-test-for-kidney-disease-in-dogs">how-do-you-test-for-kidney-disease-in-dogs</h3>
      <p>Once you’ve taken your dog to the vet and explained their symptoms, it’s likely they will carry out blood and urine tests. Abnormalities can show up in urine that indicate kidney disease, whereas an elevated blood pressure is also a sign. In some cases, your dog might go for an ultrasound or x-ray to check the size and shape of the kidneys.</p>
      <p>If, after testing, it’s confirmed that your pooch has kidney disease, the next step will be to assess what type, and how advanced the disease is.</p>
      <h3 id="acute-vs-chronic-kidney-disease-in-dogs">acute-vs-chronic-kidney-disease-in-dogs</h3>
      <p>There are two types of kidney disease in dogs - chronic and acute:</p>
      <p>Chronic kidney disease is irreversible, and means the kidneys progressively degrade over time. It’s usually caused by a kidney malfunction rather than consumption of a toxic substance or an illness, and though it means progressive deterioration of the kidneys, symptoms can appear to come on suddenly.</p>
      <p>Acute kidney disease is usually sudden onset, and can be caused by either cancer or another illness, an injury, or as a reaction to a toxic substance. Acute kidney disease may be fatal in some cases, or it may be cured completely by treatment. In other cases, it may cause permanent damage that eventually leads to chronic kidney disease.</p>
      <h2 id="stages-of-kidney-disease-in-dogs">stages-of-kidney-disease-in-dogs</h2>
      <p>To identify just how poorly your dog is, and make it easier to assess treatment, kidney disease is diagnosed in stages.</p>
      <h3 id="stage-1-(early-stage-kidney-disease-in-dogs)">stage-1-(early-stage-kidney-disease-in-dogs)</h3>
      <p>Stage 1 indicates the very start of the disease - usually identified by extra protein in the urine, or overly dilute urine. The first stage is hard to detect, as it often shows very few symptoms, if any at all. Dogs are born with so much kidney tissue, that it could be months of damage to that tissue before any symptoms start to show.  At this stage, your dog shouldn’t be feeling any discomfort.</p>
      <h3 id="stage-2-kidney-disease-in-dogs">stage-2-kidney-disease-in-dogs</h3>
      <p>Stage 2 is a very mild stage of kidney disease, in which a dog may be showing slightly more obvious symptoms such as a decreased appetite or weight loss. This is when the kidneys are becoming more damaged than in Stage 1.</p>
      <h3 id="stage-3-kidney-disease-in-dogs">stage-3-kidney-disease-in-dogs</h3>
      <p>Stage 3 is a moderate stage of kidney damage progression. Your pooch will start to show more severe signs of illness - they might be sick and get diarrhoea, appear to be generally low, go off their food, and pee and drink a lot more than usual. The medications your vet prescribes and the specialist food your dog eats will be even more vital at this stage of the disease.</p>
      <h3 id="stage-4-(end-stage-kidney-disease-in-dogs)">stage-4-(end-stage-kidney-disease-in-dogs)</h3>
      <p>Stage 4 is the most serious diagnosis - it generally indicates late to end stage of kidney disease, also known as kidney failure. When given this diagnosis, there usually isn’t a lot of time left, and the treatment will revolve around keeping your lovely dog comfortable, well loved and fed as well as possible for the rest of their time with you.</p>
      <h2 id="treatment-for-kidney-disease-in-dogs">treatment-for-kidney-disease-in-dogs</h2>
      <p>If your dog is diagnosed with kidney disease, their treatment will depend on the type and stage of their condition. At first, it may be putting them on a renal diet, which will later increase to include treatment for their more severe symptoms.</p>
      <p>Generally, treatment could be any or all of the following:</p>
      <ul>
        <li>Switching to a renal diet. Malfunctioning kidneys require food that doesn’t put pressure on them, so your pooch will likely be put on a specialist renal diet (see below).</li>
        <li>You or a vet will need to administer medications such as phosphorus binders, blood pressure regulators, or medicines to manage vomiting, nausea and UTIs.</li>
        <li>Fluid therapy. Kidneys affect fluid in the body, so your dog may need intravenous fluids to restore hydration and electrolyte balance, as well as flush toxins through their kidneys.</li>
        <li>Supportive measures. This includes adding supplements such as fatty acids to your dog’s diet to boost their health, using appetite stimulants, and taking regular urine and blood tests to monitor progress.</li>
      </ul>
      <h3 id="renal-diet-for-dogs">renal-diet-for-dogs</h3>
      <p>We’ve mentioned a renal diet a few times in this article, as it’s a vital treatment for a dog with kidney problems. A renal diet, or kidney-friendly diet, will alleviate symptoms of kidney disease, protect the kidneys from working overtime and encourage your pooch to eat more, as they’re likely to go off their food as the disease progresses. Alongside the right medicines and treatment, a specialist, vet-recommended renal food should significantly improve your pooch’s wellbeing and even extend their life expectancy.</p>
      <p>It can be nerve-wracking to know exactly what kind of food a dog with kidney disease should eat, and which food groups and snacks to avoid - so read our fuss-free article on the best food for dogs with kidney disease to put your mind at ease.</p>
      <p>By the way, we have our own specialist dog food range for dogs with kidney disease - Pooch & Mutt Veterinary Renal Food. It has been thoughtfully formulated in accordance to a renal diet; so contains gentle proteins like salmon, peas and eggs; chicken fat for a delicious taste to stoke their appetite; and salmon oil for those essential Omega 3 fatty acids. A lot of renal foods on the market contain grain, making life difficult for pooches with kidney disease and a grain intolerance - so we’ve made sure our renal food is also entirely grain-free.</p>
      <p>Our dogs are so precious to us, and we know that having a kidney disease diagnosis is far from a desirable outcome. No matter what their condition, having access to the right food and treatment can take some of the mental load off, so that you can concentrate on loving and caring for your dog every day.</p>
      <p>If you’d like to put your dog on a grain-free renal diet for dogs, take a look at our Veterinary Renal Food, one of the specialist recipes in our new Veterinary range.</p>
      <p>References</p>
      <ul>
        <li>“Acute on chronic kidney disease in dogs: Etiology, clinical and clinicopathologic findings, prognostic markers, and survival”, 2020 - National Library of Medicine.</li>
      </ul>
      <ul>
        <li>“Healthy and Chronic Kidney Disease (CKD) Dogs Have Differences in Serum Metabolomics and Renal Diet May Have Slowed Disease Progression”, 2021 - National Library of Medicine.</li>
        <li>“A longitudinal study on the acceptance and effects of a therapeutic renal food in pet dogs with IRIS-Stage 1 chronic kidney disease”, 2017 - Wiley Online Library.</li>
        <li>“The impact of periodontal disease and dental cleaning procedures on serum and urine kidney biomarkers in dogs and cats”, 2021 - National Library of Medicine.</li>
      </ul>
      <p>If you want to learn more about what to feed your dog if they have kidney problems, check out our blog here.</p>
      <section>References</section>
`,
  headings: [
    { id: 'what-causes-kidney-disease-in-dogs', text: 'what-causes-kidney-disease-in-dogs', level: 2 },
    { id: 'signs-and-symptoms-of-kidney-disease-in-dogs', text: 'signs-and-symptoms-of-kidney-disease-in-dogs', level: 2 },
    { id: 'how-do-you-test-for-kidney-disease-in-dogs', text: 'how-do-you-test-for-kidney-disease-in-dogs', level: 3 },
    { id: 'acute-vs-chronic-kidney-disease-in-dogs', text: 'acute-vs-chronic-kidney-disease-in-dogs', level: 3 },
    { id: 'stages-of-kidney-disease-in-dogs', text: 'stages-of-kidney-disease-in-dogs', level: 2 },
    { id: 'stage-1-(early-stage-kidney-disease-in-dogs)', text: 'stage-1-(early-stage-kidney-disease-in-dogs)', level: 3 },
    { id: 'stage-2-kidney-disease-in-dogs', text: 'stage-2-kidney-disease-in-dogs', level: 3 },
    { id: 'stage-3-kidney-disease-in-dogs', text: 'stage-3-kidney-disease-in-dogs', level: 3 },
    { id: 'stage-4-(end-stage-kidney-disease-in-dogs)', text: 'stage-4-(end-stage-kidney-disease-in-dogs)', level: 3 },
    { id: 'treatment-for-kidney-disease-in-dogs', text: 'treatment-for-kidney-disease-in-dogs', level: 2 },
    { id: 'renal-diet-for-dogs', text: 'renal-diet-for-dogs', level: 3 },
  ]
},



'reverse-sneezing-in-dogs': {
  title: 'Reverse sneezing in dogs',
  category: 'Pets',
  snippet: "Snippet not found",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/27-10-23_BLOG_REVERSE_SNEEZING_2_500x_crop_center.jpg?v=1702751773",
    alt: "Reverse sneezing in dogs",
    caption: "what-is-reverse-sneezing"
  },
  content: `
<p>Sounds unusual, we know - but reverse sneezing is quite a common phenomena in dogs that might have you feeling a little unsettled when it happens. Read on for a basic explanation of reverse sneezing in dogs and what you can do if and when your pooch gets an attack of these backwards bursts.</p>
      <h2 id="what-is-reverse-sneezing">what-is-reverse-sneezing</h2>
      <p>Unlike regular sneezing (when a dog will eject air outwards through the nose), reverse sneezing has air sucked back, causing your dog to make a cough-snort sound. It isn’t painful for the dog, but it is involuntary, and they might do it repeatedly for 10 or 15 seconds - or even longer.</p>
      <h3 id="what-causes-the-reverse-sneeze">what-causes-the-reverse-sneeze</h3>
      <p>‘Reverse sneezing’ or ‘backwards sneezing’ is usually a result of irritation at the back of the throat, causing a spasm of the muscles between the throat and nose. Your dog will abruptly inhale or snort as if sneezing backwards as a result of the tickling sensation.</p>
      <p>Unsurprisingly, reverse sneezing is most common in dog breeds with flat noses and shorter snouts (called Brachycephalic breeds), such as Pugs, Boxers and Shih Tzus. But any dog or breed can be the victim of reverse sneezing too!</p>
      <p>As reverse sneezing is caused by throat irritation, it will be more likely to happen to your pooch in the following scenarios:</p>
      <ul>
        <li>When eating or drinking</li>
        <li>Being pulled on the lead or dragging the lead</li>
        <li>If they’re allergic to something</li>
        <li>If they have a cold, or build up of mucus</li>
        <li>When there’s a lot of dust or pollen in the air</li>
        <li>They’re overexcited</li>
      </ul>
      <p>Sometimes, however, there won’t be any obvious reason for reverse sneezing, especially if their breed is prone to the phenomena (read on for a list of breeds that commonly reverse sneeze).</p>
      <h2 id="is-reverse-sneezing-dangerous-for-dogs">is-reverse-sneezing-dangerous-for-dogs</h2>
      <p>Reverse sneezing is common, therefore not considered dangerous. If you have a Pug, Shih Tzu or other squat-nosed pooch, it’s just part of having a flat-faced breed. If it happens a lot, however - so much that it seems to impact their quality of life or significantly disturbs their day-to-day, you might want to see a vet for possible treatment.</p>
      <h3 id="what-happens-when-a-dog-reverse-sneezes">what-happens-when-a-dog-reverse-sneezes</h3>
      <p>When a dog reverse sneezes their throat muscles are irritated, therefore their trachea shortens and they’re forced to lift their head and sharply inhale, causing a cough or snort sound. It’s the same reflex as a regular sneeze, except whereas a usual sneeze is to settle an irritation in the nose, a reverse sneeze is focused at the back of the throat.</p>
      <h3 id="what-does-reverse-dog-sneezing-sound-like">what-does-reverse-dog-sneezing-sound-like</h3>
      <p>A dog’s ‘backwards sneeze’ will sound more like a snort or cough - and it’s sometimes called ‘snorking’. It can be concerning to a pooch parent because you may think your dog is choking, due to the throat-based, guttural noise - however a reverse sneeze is usually completely safe.</p>
      <h3 id="how-long-do-episodes-of-reverse-sneezing-last">how-long-do-episodes-of-reverse-sneezing-last</h3>
      <p>A dog might reverse sneeze just once before their irritation is soothed, or it might be more of a reverse sneezing episode lasting around 10 to 15 seconds (or longer). If your dog reverse sneezes for an extended time (repeatedly sneezing throughout a period of an hour or more, for instance), they may have something in their throat or be suffering from an allergy, and you should contact your vet.</p>
      <h2 id="are-there-any-breeds-of-dog-prone-to-reverse-sneezing">are-there-any-breeds-of-dog-prone-to-reverse-sneezing</h2>
      <p>Dogs with short snouts and flat noses, also called Brachycephalic dog breeds, are more prone to reverse sneezing. This includes squat-nosed dogs such as: Pugs Bulldogs Boxers Shih Tzus Pekingese Bull Mastiffs Cavalier King Charles Spaniels However, all dog breeds can suffer from the occasional bout of reverse sneezing.</p>
      <h2 id="what-should-i-do-if-my-dog-reverse-sneezes">what-should-i-do-if-my-dog-reverse-sneezes</h2>
      <p>Reverse sneezing isn’t really a cause for concern; your dog will usually be overexcited or clearing their airways from dust or irritants. Take note if your pooch reverse sneezes a lot, and especially if they have extended episodes which interrupt their daily routine or seem to distress them; this could be a reason to take your dog to a vet for more advice.</p>
      <h3 id="how-can-i-help-my-dog-through-a-reverse-sneezing-episode">how-can-i-help-my-dog-through-a-reverse-sneezing-episode</h3>
      <p>Reverse sneezes are no reason to panic, so be sure to demonstrate a sense of calmness to your pooch when it happens. Here are some suggested techniques to help the episode pass a little quicker:</p>
      <ul>
        <li>Hold their head back and gently massage the throat to encourage them to swallow</li>
        <li>Place your finger over one nostril for a few seconds at a time, while lightly massaging their throat - again to encourage swallowing</li>
        <li>Cover both nostrils for a second, so they breathe through their mouth instead of nose</li>
        <li>Lightly blow in their face, and offer some water</li>
        <li>Open their mouth and press down on the tongue (be careful with this - only try if you know for sure your dog won’t bite you!)</li>
      </ul>
      <h3 id="when-should-i-worry-about-reverse-sneezing">when-should-i-worry-about-reverse-sneezing</h3>
      <p>You might worry about your overly ‘snorking’ dog and wonder, “Is reverse sneezing dangerous?”. As we’ve said, it isn’t generally anything to worry about and is relatively common for dogs, especially flat-nosed breeds. If your dog seems distressed by an apparent reverse sneezing episode, they reverse sneeze continually or they appear to be choking instead, this is the time to urgently take your dog to the vet.</p>
      <h3 id="how-to-tell-reverse-sneezing-from-choking">how-to-tell-reverse-sneezing-from-choking</h3>
      <p>Reverse sneezing can sound like your dog is choking as it’s based in the throat muscles - however it’s relatively easy to tell the difference. If your pooch ‘snorks’ for a long time, seems in relative distress, or is drooling, retching or pawing at their face, they could be choking on something. Of course, it’s more likely to be choking if your pooch has been eating something that may have gotten lodged in their throat. If you don’t feel you can remove the choking item yourself, take them urgently to a vet.</p>
      <h2 id="how-is-a-reverse-sneeze-diagnosed">how-is-a-reverse-sneeze-diagnosed</h2>
      <p>You’ll know your dog is reverse sneezing as it will be over quickly (either immediately or within 20 seconds or so - however it’s worth noting episodes can last a couple of minutes) - and it usually occurs when your pooch inhales dust or allergens, is overexcited or eating too quickly. If you take your dog to a vet, they would diagnose reverse sneezing by asking you about the frequency of sneezing episodes, observing your dog’s behaviour and doing some examinations on your dog’s throat. They can also rule out any other potential conditions with this check-up.</p>
      <h3 id="when-should-you-see-a-vet">when-should-you-see-a-vet</h3>
      <p>If your dog reverse sneezes so much that it’s affecting their quality of life, or they seem very distressed by each sneezing episode, you should take them to a vet to assess possible treatment. They could have a different throat or sinus condition so it’s important they get checked over to be sure.</p>
      <h4>Tracheal collapse</h4>
      <p>Tracheal collapse in dogs is when the windpipe (trachea) becomes weak and loses rigidity, causing the poor pooch to suffer as it becomes awkward to breathe. They may choke or splutter when experiencing tracheal collapse. It will seem more severe than simple reverse sneezing, but they can be mistaken for each other.</p>
      <h4>Congestive heart failure</h4>
      <p>Dogs with congestive heart failure have problems breathing due to their heart not being able to sufficiently pump blood around the body, which can lead to a build-up of fluid. Dogs with this heart condition may cough, wheeze and exhibit distress when trying to breathe. They may reverse sneeze occasionally as a result of fluid in the body, but congestive heart failure is a very separate condition to reverse sneezing.</p>
      <h2 id="how-is-reverse-sneezing-treated">how-is-reverse-sneezing-treated</h2>
      <p>As it’s not a serious condition, reverse sneezing is more about keeping your pooch comfortable and away from triggers as much as possible. Read on for tips on how to prevent reverse sneezing in your dog, and stop it when it starts:</p>
      <h3 id="ways-to-prevent-reverse-sneezing-in-dogs">ways-to-prevent-reverse-sneezing-in-dogs</h3>
      <p>If your dog tends to frequently get an attack of backwards sneezing, try the following preventative measures to keep them relaxed and less likely to be triggered: Reduce allergens as much as you can. If you find your dog is sensitive to dust, particular cooking smells or overpowering flowery scents in the house, keep those scents as unobtrusive as possible, or at a distance from your dog (e.g. cooking spicy food when your dog is out for a walk).</p>
      <p>In general, you’ll want to make sure your dog is able to breathe freely in the home without being triggered. Take some time to assess whether your dog has specific allergies that make them sneeze. Keep your pooch calm. Dogs get excitable, that’s a given - but try not to work them up too much if it often causes them to reverse sneeze. Pre-empt excitable times by giving them calming dog food or a calming dog treat. Have lots of water around. Your dog will need to drink and keep hydrated to keep their throat clear and soothed.</p>
      <h3 id="what-to-do-if-your-dog-keeps-reverse-sneezing">what-to-do-if-your-dog-keeps-reverse-sneezing</h3>
      <p>If your pooch keeps reverse sneezing, either in one single episode or if it’s a daily occurrence, take them to a vet for a check-up. Your poor ‘snorking’ pooch shouldn’t have to put up with daily reverse sneezing attacks, and with a light rearranging of their diet, routines or environment, they could sneeze significantly less.</p>
      <p>Got a dog that reverse sneezes a lot when excited? Bolster their diet with our Calm & Relaxed range, including grain-free calming dog food to help keep their demeanour steady and breathing smooth. If you have more questions about reverse sneezing and your dog, feel free to get in touch with us.</p>
`,
  headings: [
    { id: 'what-is-reverse-sneezing', text: 'what-is-reverse-sneezing', level: 2 },
    { id: 'what-causes-the-reverse-sneeze', text: 'what-causes-the-reverse-sneeze', level: 3 },
    { id: 'is-reverse-sneezing-dangerous-for-dogs', text: 'is-reverse-sneezing-dangerous-for-dogs', level: 2 },
    { id: 'what-happens-when-a-dog-reverse-sneezes', text: 'what-happens-when-a-dog-reverse-sneezes', level: 3 },
    { id: 'what-does-reverse-dog-sneezing-sound-like', text: 'what-does-reverse-dog-sneezing-sound-like', level: 3 },
    { id: 'how-long-do-episodes-of-reverse-sneezing-last', text: 'how-long-do-episodes-of-reverse-sneezing-last', level: 3 },
    { id: 'are-there-any-breeds-of-dog-prone-to-reverse-sneezing', text: 'are-there-any-breeds-of-dog-prone-to-reverse-sneezing', level: 2 },
    { id: 'what-should-i-do-if-my-dog-reverse-sneezes', text: 'what-should-i-do-if-my-dog-reverse-sneezes', level: 2 },
    { id: 'how-can-i-help-my-dog-through-a-reverse-sneezing-episode', text: 'how-can-i-help-my-dog-through-a-reverse-sneezing-episode', level: 3 },
    { id: 'when-should-i-worry-about-reverse-sneezing', text: 'when-should-i-worry-about-reverse-sneezing', level: 3 },
    { id: 'how-to-tell-reverse-sneezing-from-choking', text: 'how-to-tell-reverse-sneezing-from-choking', level: 3 },
    { id: 'how-is-a-reverse-sneeze-diagnosed', text: 'how-is-a-reverse-sneeze-diagnosed', level: 2 },
    { id: 'when-should-you-see-a-vet', text: 'when-should-you-see-a-vet', level: 3 },
    { id: 'how-is-reverse-sneezing-treated', text: 'how-is-reverse-sneezing-treated', level: 2 },
    { id: 'ways-to-prevent-reverse-sneezing-in-dogs', text: 'ways-to-prevent-reverse-sneezing-in-dogs', level: 3 },
    { id: 'what-to-do-if-your-dog-keeps-reverse-sneezing', text: 'what-to-do-if-your-dog-keeps-reverse-sneezing', level: 3 },
  ]
},
'which-christmas-plants-are-poisonous-to-dogs': {
  title: 'Which Christmas plants are poisonous to dogs?',
  category: 'Pets',
  snippet: "Snippet not found",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/08-11-23_BLOG_POISONOUS_PLANTS_HEADER_2000X1120_46f9fe48-3fce-496e-8519-0a4091e51ad8_500x_crop_center.jpg?v=1700135339",
    alt: "Which Christmas plants are poisonous to dogs?",
    caption: "which-christmas-plants-are-toxic-to-dogs"
  },
  content: `
<p>The festive season is upon us, and it’s likely you’ve pulled out all the red, green and frosted foliage imaginable to adorn every doorway, banister and table top...

There’s one big problem, however: your dog. Very excited by all the festivities, they’re likely going to chomp on anything they can get their curious snout on. You’re going to want to dog-proof your house over Christmas, especially when it comes to potentially toxic plants.

So what kinds of festive plants are safe to have around your pooch? Can you have a real Christmas tree with a dog? Is fake snow toxic to dogs? We’ve laid out the answers below so you can keep toxic plants out of reach of your dog and therefore off your worried mind. There is a lot to stress over at Christmas time, but your cheeky pooch getting into the poinsettias needn’t be one of them.</p>
      <h2 id="which-christmas-plants-are-toxic-to-dogs">which-christmas-plants-are-toxic-to-dogs</h2>
      <p>The most important thing to remember is there isn’t really a ‘safe’ plant for a dog to decide is their Christmas meal. Some plants are milder in toxicity than others, so won’t have much effect if they’re munched on in small amounts, while others are more toxic to dogs if they have a chew.</p>
      <h3 id="poinsettias">poinsettias</h3>
      <p>With their bright red flowers and deep green leaves, poinsettias are the classic Christmas pot plant - and yes, they are mildly toxic to dogs if ingested but shouldn’t cause any serious harm. Still, keep your joyful poinsettias out of your pup’s reach, on a high display or somewhere that can’t be seen from dog level. If they do end up munching on the leaves or flowers, symptoms could include dribbling, vomiting or skin or mouth irritation from the sap.</p>
      <h3 id="mistletoe">mistletoe</h3>
      <p>Despite what you might expect, mistletoe isn’t highly poisonous to dogs, though it can cause mild sickness. If eaten, your pooch will either carry on symptomless, or they could show signs of a tummy bug such as sickness or diarrhoea. In rare cases, it has been found to cause confusion and tremors in dogs. To be safe, it’s best to hang mistletoe well out of reach of dogs so they aren’t tempted to try it.</p>
      <h3 id="holly">holly</h3>
      <p>The obvious danger of holly is its sharpness - but swallowing the leaves may cause your dog to only have mild sickness. If, however, your dog eats a bunch of holly berries, that could be more serious and cause heart issues, especially if your dog is small.</p>
      <p>Overall, it’s not the most pleasant thing for a dog to eat, which should hopefully put them off - but if you hang holly in your house, make sure it’s high up so your dog can’t get to it.</p>
      <h3 id="ivy">ivy</h3>
      <p>Ivy is known for causing skin irritation in humans, and that applies to dogs too. Contact with a dog’s skin could cause a reaction, and it could cause mild sickness or diarrhoea if they eat the leaves. Ivy is often used in wreaths and Christmas garlands, so make sure none fall out onto the floor where a dog can munch on it.</p>
      <h3 id="lilies">lilies</h3>
      <p>Lilies are highly toxic to dogs, and cats for that matter - so if you have pets, you shouldn’t keep a lily anywhere near them. Eating even a small amount could result in kidney failure or even prove fatal. For this reason, it’s sensible to keep lilies away from your home, not just at Christmas but all year round.</p>
      <h3 id="amaryllis">amaryllis</h3>
      <p>Amaryllis aren’t as commonly used in homes at Christmas, but they are poisonous to dogs, so keep them well out of reach if you do decide to get some. The bulbs in particular can cause drooling, vomiting, diarrhoea - or in severe cases, heart or respiratory issues.</p>
      <h3 id="christmas-cactus">christmas-cactus</h3>
      <p>A Christmas cactus (also called a schlumbergera) isn’t all that dangerous to dogs; just like some of the Christmas plants mentioned, eating the leaves might cause mild discomfort such as diarrhoea. They are very pretty but as with all the plants listed, it’s best to keep them out of sight/reach of your pooch so they aren’t tempted to have a taste.</p>
      <h2 id="can-you-have-a-real-christmas-tree-with-a-dog">can-you-have-a-real-christmas-tree-with-a-dog</h2>
      <p>Real Christmas trees are potentially of no concern to a dog. Thankfully, live trees that are popular at Christmas such as fir, pine and spruce are generally non-toxic to dogs if they gnaw on them. This is good if you’re used to the magic of a real Christmas tree each year, as it can be tough to even consider going without one!</p>
      <p>You’re not all in the clear, though - as it’s the decorations, plant fertiliser and dropping needles that may cause problems for your pooch rather than the tree itself.</p>
      <h3 id="pine-needles">pine-needles</h3>
      <p>Pine needles are spiky and aren’t all that appetising, but generally that probably won’t stop a dog from trying a mouthful anyway. As they’re sharp and might have sap on them, any dropped needles could cause irritation to your dog’s mouth and stomach if they eat them, and may cause gastrointestinal issues. Try to keep them hoovered or swept up regularly, or use a gate for the tree to deter your dog from seeing it as a snack.</p>
      <h3 id="tree-sap">tree-sap</h3>
      <p>In small amounts (one lick, for instance), tree sap shouldn’t have much impact on your dog - however if they ingest a lot of it, it could make them unwell. It could be an idea to keep a close eye on your dog when they’re around a real Christmas tree to deter any chewing or licking.</p>
      <h3 id="fertiliser">fertiliser</h3>
      <p>Dogs should not ingest any form of plant fertiliser as it’s very toxic. If you water your tree with plant fertiliser and it trickles down into a base plate, your pooch could be tempted to lap at it. Be aware of this by keeping your Christmas tree dog-proofed.</p>
      <h3 id="edible-tree-decorations">edible-tree-decorations</h3>
      <p>Any edible tree decorations, or baubles that look like something edible should be kept well out of reach of your pooch. You don’t want them to eat chocolate, sweets or popcorn strings which could upset their stomach. Additionally, don’t decorate your tree with holly, ivy or other live garlands that your dog could pull down.</p>
      <h2 id="are-fake-christmas-trees-safe-for-dogs">are-fake-christmas-trees-safe-for-dogs</h2>
      <p>A dog shouldn’t feel all that tempted to eat a fake Christmas tree as it doesn’t taste good; then again, we should never put it past them. Having a fake tree solves the problem of dropping pine needles, however they could still have hazardous baubles hanging from them, or be coated in fake snow, which can potentially be toxic to dogs. Take the same precautions with a fake tree as you would a real one to ensure your dog stays safely away.</p>
      <p>Here’s a full guide to dog-proofing your house at Christmas.</p>
      <h3 id="is-the-fake-snow-on-christmas-trees-toxic-to-dogs">is-the-fake-snow-on-christmas-trees-toxic-to-dogs</h3>
      <p>Confusingly, some fake snow is poisonous to dogs if they eat it, and some isn’t. To be safe, it’s best to buy a lovely fake Christmas tree that doesn’t come with a scenic dusting of snow - or at least don’t buy one that your dog will see or come into contact with regularly.</p>
      <h2 id="protecting-your-pet-from-toxic-plants">protecting-your-pet-from-toxic-plants</h2>
      <p>The most obvious tip for keeping your pet away from toxic Christmas plants is to not buy any - but of course, even fake plants might be a risk if your dog munches anything and everything, or is especially prone to sampling new and exciting items they find lying around the house.</p>
      <p>If simply not having the plants in the house isn’t an option, you could try the following:</p>
      <ul>
        <li>Keep all festive plants well away from anywhere your dog can reach. This means hanging them around the rafters or from ceilings should be fine, as well as on high shelves or tables - but avoid having them on floors, door frames or low tables.</li>
        <li>Use dog-gates to keep your pooch out of rooms that are heavily adorned with Christmas foliage.</li>
        <li>Distract your dog with Christmas dog treats to eat instead. These cheese fondue festive dog treats are delicious; or you could even get a dog advent calendar so they get used to a tasty, daily distraction.</li>
        <li>Give them edible presents on Christmas day. Perhaps their own Christmas gift box for dogs - full of treats so tasty that the plants and tree won’t even get a look in.</li>
        <li>Keep a close eye on your dog over Christmas time. Be sure they’re kept under supervision at all times, and if you leave them at home, be sure it’s in a space without anything potentially edible.</li>
      </ul>
      <h2 id="what-if-your-dog-ingests-a-poisonous-plant">what-if-your-dog-ingests-a-poisonous-plant</h2>
      <p>If you suspect your dog has only eaten a small amount of a festive plant, monitor the situation closely. If they are a bit sick or get diarrhoea, that’s to be expected. However if the vomiting or tummy issues are severe, or it goes on for more than a day, it’s sensible to take them to a vet as soon as you can.</p>
      <p>If you notice a highly toxic plant has been eaten, such as holly berries or a lily, get your dog to a vet immediately, even if they aren’t yet showing any symptoms.</p>
      <h3 id="how-can-i-tell-if-my-pet-is-sick-or-poisoned">how-can-i-tell-if-my-pet-is-sick-or-poisoned</h3>
      <p>If your pooch is severely vomiting, seems lethargic, disorientated, is trembling or has severe diarrhoea, they may have been poisoned by ingesting toxic plants. Get your pooch to a vet immediately so they can receive treatment.</p>
      <p>Dogs can get very excitable over Christmas, and want to eat everything, just as we do. So long as you keep a sharp eye on your dog over the festive period, keep hazards out of reach and give them lots of tasty treats as a distraction, your family and your dog can enjoy a wonderful, non-toxic Christmas!</p>
      <p>If you want to treat your dog over Christmas with something that is festive and tasty, try our festive treats for dogs - or tick their present off the list with our delectable Christmas dog hamper.</p>
`,
  headings: [
    { id: 'which-christmas-plants-are-toxic-to-dogs', text: 'which-christmas-plants-are-toxic-to-dogs', level: 2 },
    { id: 'poinsettias', text: 'poinsettias', level: 3 },
    { id: 'mistletoe', text: 'mistletoe', level: 3 },
    { id: 'holly', text: 'holly', level: 3 },
    { id: 'ivy', text: 'ivy', level: 3 },
    { id: 'lilies', text: 'lilies', level: 3 },
    { id: 'amaryllis', text: 'amaryllis', level: 3 },
    { id: 'christmas-cactus', text: 'christmas-cactus', level: 3 },
    { id: 'can-you-have-a-real-christmas-tree-with-a-dog', text: 'can-you-have-a-real-christmas-tree-with-a-dog', level: 2 },
    { id: 'pine-needles', text: 'pine-needles', level: 3 },
    { id: 'tree-sap', text: 'tree-sap', level: 3 },
    { id: 'fertiliser', text: 'fertiliser', level: 3 },
    { id: 'edible-tree-decorations', text: 'edible-tree-decorations', level: 3 },
    { id: 'are-fake-christmas-trees-safe-for-dogs', text: 'are-fake-christmas-trees-safe-for-dogs', level: 2 },
    { id: 'is-the-fake-snow-on-christmas-trees-toxic-to-dogs', text: 'is-the-fake-snow-on-christmas-trees-toxic-to-dogs', level: 3 },
    { id: 'protecting-your-pet-from-toxic-plants', text: 'protecting-your-pet-from-toxic-plants', level: 2 },
    { id: 'what-if-your-dog-ingests-a-poisonous-plant', text: 'what-if-your-dog-ingests-a-poisonous-plant', level: 2 },
    { id: 'how-can-i-tell-if-my-pet-is-sick-or-poisoned', text: 'how-can-i-tell-if-my-pet-is-sick-or-poisoned', level: 3 },
  ]
},



'fish-hide-the-safer-healthier-alternative-to-rawhide': {
  title: 'Fish Hide: The safer, healthier alternative to Rawhide',
  category: 'Pets',
  snippet: "Snippet not found",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/BLOG_FISH_HIDE_VS_RAW_HIDE_3_500x_crop_center.jpg?v=1699957854",
    alt: "Fish Hide: The safer, healthier alternative to Rawhide",
    caption: "why-do-dogs-like-hide-products"
  },
  content: `
<p>Does your pooch go mad for the chewy challenge of a piece of Rawhide, but you’re (rightly so) nervous about the dangers that come with it?</p>
      <p>Worry no longer, as we’ve developed a brand new alternative - our Fish Hide Chews!</p>
      <p>Not only are they healthy, long-lasting and moreish but they’re 100% natural, and safe for your dog to gnaw away on. Unlike traditional Rawhide.</p>
      <p>Made your ears prick up? Then read on to discover why we’re so against Rawhide, all the benefits of Fish Hide, and why it’s an excellent replacement for traditional Rawhide for dogs.</p>
      <h2 id="why-do-dogs-like-hide-products">why-do-dogs-like-hide-products</h2>
      <p>Chewing is a natural instinct for dogs and puppies, meaning mischievous pooches like that Hide allows them to keep chewing for hours on end!</p>
      <p>The act of chewing encourages a dog’s pituitary gland to release endorphins into the brain (happy hormones that create a sense of calm and happiness). They’re known as the body’s ‘natural painkiller’ because of their ability to relieve pain, as well as providing a ‘natural high’.</p>
      <p>Just like humans, endorphins produce a calming effect in dogs. Chewing becomes the canine version of ‘self-medicating’ to release anxiety or frustration.</p>
      <p>Long-lasting Hide Chews act as a great boredom buster for our dogs, giving them something to focus on. They also clean their teeth, due to the repetitive chewing action that breaks down tartar while also massaging gums.</p>
      <h2 id="what-is-rawhide-for-dogs">what-is-rawhide-for-dogs</h2>
      <p>If you’re an established pooch parent you probably know about Rawhide. But do you know all the ins and outs, and why it’s such a taboo product in the dog world?</p>
      <p>Rawhide is a long-lasting dog chew that isn’t meant for consumption - just chewing. It’s a waste product of the leather industry and is made from the inner layer of either cow or horse Hides (their skin). The outer layer of the Hide is the leather part that’s used for shoes, clothes, upholstery, etc - while the inner Rawhide is chemically treated, dehydrated and turned into a dog chew.</p>
      <h3 id="common-risks-with-traditional-rawhide">common-risks-with-traditional-rawhide</h3>
      <p>Rawhide isn't made for consumption, just chewing. Which might have you wondering, “Is Rawhide bad for dogs?”</p>
      <p>Once upon a time, it was a popular product for owners to give to their dog. However, over recent years people have become more aware of the dangers associated with Rawhide - with many (especially vets) now taking a stance against it!:</p>
      <ul>
        <li>Rawhide isn’t made for consumption. It is not considered a food item and is only supposed to be used for chewing. This is worrying when you see the Hide diminishing during the chewing process.</li>
        <li>Traditional commercial Rawhide is produced using toxic chemicals and additives. Chemicals are used to strip the skin, bleach the hide white and slow the decaying process.</li>
        <li>The cooking process involved in making traditional Rawhide can result in sharp pieces and splintering parts when the dog chews on it, which is extremely dangerous.</li>
        <li>Rawhide chews are extremely indigestible which can often lead to choking, or blockages in the digestive tract which may require surgery to be removed. Because these pieces are so indigestible, they can sit in the stomach for months without breaking down or passing through the digestive tract. This can cause digestive problems and eventually create dangerous intestinal blockages or bowel obstructions. This is very serious and can lead to death if not removed.</li>
        <li>Rawhide is cheap to make, and can often be produced in countries where there are little-to-no safety regulations.</li>
      </ul>
      <h2 id="the-safer-alternative-pooch-and-mutt-fish-hide-chews-for-dogs">the-safer-alternative-pooch-and-mutt-fish-hide-chews-for-dogs</h2>
      <p>We don’t like Rawhide. At ALL. There we said it. This strong dislike made us eager to develop an alternative product for pooches, which still attained that ‘long-lasting chew’ element, but removed the dangers - and actually included health benefits. After all, creating Good Mood Food is what we’re about!</p>
      <p>Which is why our Fish Hide Chews were born. They’re a clever, healthy alternative to traditional Rawhide and have a sea of health benefits for pooches:</p>
      <p>Our Fish Hide Chews for dogs are made from 100%* natural Cod Skin (depending which chew you go for). This makes them tough like Rawhide - but without the common pitfalls; just lots of perks.</p>
      <h3 id="what-are-the-benefits-of-fish-hide-for-dogs">what-are-the-benefits-of-fish-hide-for-dogs</h3>
      <p>Fish Hide Chews are the safest, most nutritious option when it comes to long-lasting dog chews. Here’s why Fish Hide is the safe alternative to Rawhide, and why we’re so proud to be able to offer this product to you and your pooches:</p>
      <p>✓  Made with 100*% Cod Skin meaning:</p>
      <ul>
        <li>They’re high in Omega 3 and 6 (essential for healthy skin and coat, as well as strong nails, boosted immune system and improved cognitive function)</li>
        <li>A high source of collagen and protein</li>
        <li>Aids joint health and mobility in dogs</li>
      </ul>
      <p>✓ They’re sustainably sourced. The Fish Hide used in our Fish Chews is a waste product from the human food industry. This means the source of fish is more sustainable - as it would otherwise go to waste!</p>
      <p>✓ They’re exceptionally long-lasting and due to the vet-approved, hand-rolled technique used to make them - won’t splinter or don’t have sharp edges. This means they’re safer for your pooch to chew on for long periods of time</p>
      <p>✓ We use a drying and rolling process rather than cooking; meaning they retain all their nutritional benefits and are highly digestible</p>
      <p>✓ They’re a natural toothbrush that cleans your dog’s teeth, massages gums and works jaw muscles - while alleviating boredom at the same time!</p>
      <p>✓ They’re made in the EU under closely-monitored safety guidelines, using a technique approved by vets.</p>
      <h2 id="why-will-my-dog-love-fish-hide">why-will-my-dog-love-fish-hide</h2>
      <p>We’ve covered the reasons why Fish Hide is the safe alternative To Rawhide, helping put your mind at ease. But what will your dog love about them?</p>
      <h4>They’re delicious.</h4>
      <p>We’ve created Fish Hide Chews in two mega-tasty flavours:</p>
      <b>Long-Lasting 100% Cod</b>
      <p>This deliciously fishy hide is made entirely from all-natural Cod Skin, which is gently dried and rolled without any added ingredients.</p>
      <b>Calming Cod and Chamomile</b>
      <p>If you’re looking for calming chews for dogs, this Chamomile and Lavender Fish Hide Chew will have your pooch feeling content and peaceful. It’s 98.5% all-natural Cod Skin with 1% Chamomile and 0.5% Lavender - no added extras.</p>
      <h4>They’re fun!</h4>
      <p>Fish Hide will have your pooch happily immersed in a chewy heaven for hours on end. As it’s so satisfying to chew with no sharp edges, your dog will be hooked from the first nibble, and you can stay worry-free (although, as with any food product or toy, we always recommend supervision).</p>
      <p>To summarise…</p>
      <p>There are so many plus points to cover, so here’s a rundown of why Fish Hide is a real catch compared to contentious traditional Rawhide for dogs:</p>
      <b>It’s 100% natural with no dodgy or toxic ingredients.</b>
      <p>Commercial Rawhide contains artificial additives and chemicals as part of the cooking process.</p>
      <b>It’s dried out and rolled, so it retains its nutritional content.</b>
      <p>Commercial Rawhide is intensely cooked and bleached, offering no health benefits.</p>
      <b>It contains loads of the amazing health benefits of fresh cod.</b>
      <p>Traditional Rawhide doesn't contain fishy goodness and loses any nutrients during the bleaching and cooking process.</p>
      <b>It’s safer for dogs to chew on, it’s digestible, there are no sharp edges and it doesn’t splinter.</b>
      <p>Rawhide is cooked in such a way that it’s prone to splitting and splintering. It’s not seen as a food product, but a chew toy, and isn’t safe to be ingested by dogs.</p>
      <b>It’s sustainable, as it’s a by-product of human food.</b>
      <p>Rawhide is a by-product of leather making.</p>
      <h3 id="how-do-i-feed-my-dog-fish-hide">how-do-i-feed-my-dog-fish-hide</h3>
      <p>Now you’re sold on the benefits, how is your dog supposed to eat Fish Hide Chews?</p>
      <ul>
        <li>Give your pooch a Fish Hide Chew when they’re feeling restless or bored, so they can enjoy a good gnawing session! They’re satisfied, while you’re happy knowing it’s safe and they’re giving their teeth a good clean too.</li>
      </ul>
      <ul>
        <li>Fish Hide Chews are a complementary food that also act as a chew toy, so shouldn’t ever be given instead of regular meals. Your pooch will only ever need one Fish Chew at a time, and you can give another whenever the last one runs out.</li>
        <li>Although we’re confident our Fish Hide Chews are a much safer alternative to Rawhide - all chews and toys pose a degree of risk, so make sure your pooch is always supervised when chomping.</li>
      </ul>
      <h3 id="how-long-does-fish-hide-last">how-long-does-fish-hide-last</h3>
      <p>Their Fish Hide Chew should last a while - depending on how often your pooch pays attention to it, their size, and the duration of their chew session. Of course, if you have a bigger breed or a serial chewer, they’re bound to get through their chew at a faster rate! But they’ll still benefit from all the goodness of the ingredients in exactly the same way.</p>
      <p>When your pooch isn't chewing their Fish Hide Chew, keep it in an airtight container until they'd like it again.</p>
      <p>If your dog loves long-lasting dog chews, try Pooch & Mutt’s nutritious Fish Hide Chews. Our duo of fantastic flavours includes our 100% Cod Long-Lasting Fish Hide Chew, and our Chamomile and Lavender Calming Fish Hide Chew.</p>
      <p>If you have any more questions about long-lasting chews for dogs, Rawhide, or anything else - then feel free to get in touch!</p>
      <p>*Our Long-Lasting Fish Hide Chews are made from 100% Cod Skin; while our Calming Fish Hide Chews are made from 98.5% Cod Skin and 1.5% Chamomile and Lavender.</p>
`,
  headings: [
    { id: 'why-do-dogs-like-hide-products', text: 'why-do-dogs-like-hide-products', level: 2 },
    { id: 'what-is-rawhide-for-dogs', text: 'what-is-rawhide-for-dogs', level: 2 },
    { id: 'common-risks-with-traditional-rawhide', text: 'common-risks-with-traditional-rawhide', level: 3 },
    { id: 'the-safer-alternative-pooch-and-mutt-fish-hide-chews-for-dogs', text: 'the-safer-alternative-pooch-and-mutt-fish-hide-chews-for-dogs', level: 2 },
    { id: 'what-are-the-benefits-of-fish-hide-for-dogs', text: 'what-are-the-benefits-of-fish-hide-for-dogs', level: 3 },
    { id: 'why-will-my-dog-love-fish-hide', text: 'why-will-my-dog-love-fish-hide', level: 2 },
    { id: 'how-do-i-feed-my-dog-fish-hide', text: 'how-do-i-feed-my-dog-fish-hide', level: 3 },
    { id: 'how-long-does-fish-hide-last', text: 'how-long-does-fish-hide-last', level: 3 },
  ]
},



'cbd-for-dogs-what-s-the-deal': {
  title: 'CBD for dogs: What’s the deal?',
  category: 'Pets',
  snippet: "Snippet not found",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/16-10-23_BLOG_CBD_FOR_DOGS3_500x_crop_center.jpg?v=1699609573",
    alt: "CBD for dogs: What’s the deal?",
    caption: "what-is-cbd"
  },
  content: `
<p>Have you heard of CBD for dogs? CBD (cannabidiol) products - particularly CBD oils - are definitely on the rise when it comes to human consumption; plenty of people swear by it to reduce stress and anxiety and even use it for pain relief, or as an anti-inflammatory.</p>
      <p>But is CBD oil safe for dogs? What kind of benefits does it have, is it legal, and should you try it on your dog? We’re here to help answer these burning questions and give you all the facts, so you can make your own decision on what’s best for your pooch.</p>
      <h2 id="what-is-cbd">what-is-cbd</h2>
      <p>CBD stands for cannabidiol and it’s one of many compounds derived from hemp or cannabis plants. The other main compound found in these plants is THC - tetrahydrocannabinol - and this is the part that can have psychoactive effects. As CBD is a different compound and contains almost zero THC,  it doesn’t induce a feeling of being ‘high’ in the user. It’s worth reiterating: a good CBD product should NOT get your dog stoned.</p>
      <p>CBD is most often available as an oil or tincture for humans, with a whole roster of products coming onto the market that are CBD-infused - such as chocolate, chewing gum, bath products and more.</p>
      <p>There are different strengths of CBD, too; a higher strength may come from a more concentrated part of the source plant (the buds or leaves, for instance).</p>
      <p>Though CBD for humans is increasingly accepted as a great natural remedy, there’s a growing debate around whether CBD products for pets have the same effect. The research is ongoing.</p>
      <h2 id="is-cbd-oil-beneficial-for-dogs">is-cbd-oil-beneficial-for-dogs</h2>
      <p>Though the research on CBD and its effects on dogs is still in the beginning stages, many people have reported positive results from feeding CBD to their dog, just the same as when they’ve taken CBD themselves. It can be used as a relaxant, as an anti-inflammatory, a sleep aid, for pain relief and more (read on for an extensive list of all the benefits and uses of CBD for dogs). It can be prescribed by a vet in certain scenarios, but CBD oil products for pets are not yet available as a commercial product.</p>
      <h3 id="how-does-cbd-affect-dogs">how-does-cbd-affect-dogs</h3>
      <p>Numerous dog owners report positive results from feeding their dogs CBD - usually by adding CBD oil to dog food as a supplement. Ideally it can have a calming, anti-anxiety effect on dogs, as well as offering pain relief. There are also reports of its anti-inflammatory properties, making it a potential natural remedy for pooches with conditions such as arthritis, or dogs who suffer allergies.</p>
      <p>Some dog owners may worry that CBD will make their dog feel ‘stoned’. High quality CBD should contain almost zero levels of THC (tetrahydrocannabinol); a different compound of hemp and cannabis plants which has psychoactive effects. All CBD or hemp products for dogs should clearly state that they are THC-free. Make sure you check the label to be sure.</p>
      <h3 id="why-do-people-give-cbd-to-their-pets">why-do-people-give-cbd-to-their-pets</h3>
      <p>Though CBD products for dogs haven’t been authorised by a UK veterinary board as of yet, lots of dog owners are seeing the potential benefits of CBD as an alternative, natural supplement or sleep remedy to give their dogs.</p>
      <h3 id="what-are-the-benefits">what-are-the-benefits</h3>
      <p>If you feed CBD to your dog, they could experience the following benefits to their health:</p>
      <b>Pain relief</b>
      <b>Reduced anxiety</b>
      <b>Anti-inflammatory effects</b>
      <b>Better sleep</b>
      <b>All-round contentedness</b>
      <b>Fewer/less severe seizures</b>
      <b>Reduced blood pressure</b>
      <p>There is only anecdotal evidence of the benefits of CBD to dogs - though it is sometimes prescribed by vets as an alternative remedy to usual medicines.</p>
      <h3 id="common-cbd-claims">common-cbd-claims</h3>
      <p>Whenever any new supplement or health food becomes popular that hasn’t been officially passed by a veterinary board, there are usually widespread rumours that come along, too. Here are some of the claims you may hear about CBD for dogs:</p>
      <h3 id="cbd-is-anti-inflammatory">cbd-is-anti-inflammatory</h3>
      <p>CBD does appear to have anti-inflammatory properties, so could have positive impacts on a dog that has arthritis, allergies or other painful health conditions that could cause a dog discomfort.</p>
      <h3 id="cbd-for-dogs-is-illegal">cbd-for-dogs-is-illegal</h3>
      <p>Nope - CBD for dogs isn’t illegal, but in the UK there are legal restrictions around how it can be given to dogs. All CBD dog products need to be THC-free, and at the moment (2023), can only be prescribed by a vet. In future, it may be that CBD-infused dog products are readily available on the commercial market - but for now there are no authorised CBD dog products for sale in the UK.</p>
      <p>The commercial viability of CBD products for pets is somewhat ‘stuck’, for now as there are also funding concerns. The Veterinary Medicines Directorate (VMD) has authorised it for veterinary use - however, this means pet care brands who want to sell CBD commercially are required to do costly studies in order to market to the public. CBD isn’t patentable, so it’s a big decision to commit to for a company as it’s so costly.</p>
      <h3 id="cbd-can-make-dogs-high">cbd-can-make-dogs-high</h3>
      <p>CBD shouldn’t make your dog high, on the condition that it is given in safe, low strengths and contains no THC (tetrahydrocannabinol) - this is the compound with psychoactive properties that can be harmful to pets. All hemp or CBD products for dogs should clearly state that they’re ‘THC-free’.</p>
      <h3 id="cbd-can-cure-canine-arthritis">cbd-can-cure-canine-arthritis</h3>
      <p>There is no cure for canine arthritis; any poor pooches with arthritis can only manage the effects and slow its progression. However, there are anecdotal reports that CBD’s anti-inflammatory properties can help ease the joint pain that comes from arthritis.</p>
      <h2 id="is-cbd-oil-safe-for-dogs">is-cbd-oil-safe-for-dogs</h2>
      <p>Many pooch parents supplement their dog’s diet with CBD and report good results. Technically, a high-quality CBD oil should contain nothing dangerous for a dog’s consumption - but do chat with your vet first if you want to try it.</p>
      <p>As the research on CBD’s effectiveness for dogs is still underrepresented, there is an element of risk if you use it outside of a vet’s advice. Be extra cautious if your pooch is already on prescribed medication.</p>
      <h3 id="risks-of-using-cbd-oil-for-dogs">risks-of-using-cbd-oil-for-dogs</h3>
      <p>As with any alternative supplement or medicine, there is always a risk of use. The risk comes from using a product outside of a vet’s advice, or a cheap product, as it could be low quality or be inaccurate in its packaging or list of ingredients. If the CBD you give your dog isn’t THC-free, then they may suffer from symptoms of intoxication.</p>
      <h3 id="possible-side-effects-of-cbd-in-dogs">possible-side-effects-of-cbd-in-dogs</h3>
      <p>Your pooch would ideally havea positive reaction to CBD, and you’ll notice them becoming calmer and more content.  Unwanted side effects, however, could include lethargy and acting generally out of sorts. If you’ve given your dog CBD in some form, you should keep a close eye on them afterwards for any symptoms or iffy behavioural changes.</p>
      <h3 id="symptoms-and-signs-of-cbd-toxicity">symptoms-and-signs-of-cbd-toxicity</h3>
      <p>Uh oh - so you may have fed your pooch CBD and something doesn’t seem right. Dogs can become intoxicated by CBD if it’s of a low quality or contains THC, the psychoactive compound also present in the source plant. Get in touch with a vet right away if you notice the following:</p>
      <b>Lethargy - Your dog isn’t just tired but seems extremely drained or lethargic.</b>
      <b>Strange behaviour - Your pooch is seeming out of sorts; is more aggressive or anxious than usual, for instance, or they seem dazed.</b>
      <b>Lack of coordination - Take note if your dog isn’t walking straight, or seems uneasy on their feet.</b>
      <b>Increased heart rate - If your pooch’s heart is racing, this could be a sign of intoxication.</b>
      <h3 id="dogs-taking-other-medications-or-supplements">dogs-taking-other-medications-or-supplements</h3>
      <p>There is a lack of evidence at the moment about what medicines or supplements can and can’t be combined with CBD. It’s definitely a good idea to speak to your vet if you’re concerned about any particular medications your pooch might be regularly taking, and whether you should try CBD for dogs.</p>
      <h2 id="what-dog-health-problems-can-cbd-oil-aid">what-dog-health-problems-can-cbd-oil-aid</h2>
      <p>In official terms, CBD products for dogs can only be prescribed by a vet. Pooch parents might consider supplementing their dog’s diet with CBD  if their dog has any of the following conditions:</p>
      <h3 id="dogs-with-cancer">dogs-with-cancer</h3>
      <p>As CBD oil is thought to reduce anxiety, blood pressure and aid sleep, it has been known to relieve some of the uncomfortable symptoms of cancer in dogs.</p>
      <h3 id="dogs-with-allergies">dogs-with-allergies</h3>
      <p>Allergies often lead to itching and skin reactions. As CBD has anti-inflammatory effects, it can be used as a natural remedy for allergy symptoms such as rashes and redness. Its calming effects can also aid the discomfort that comes from itching or scratching.</p>
      <h3 id="dogs-in-pain">dogs-in-pain</h3>
      <p>One of the most discussed benefits of CBD is as a natural pain reliever. If your pooch is in pain, either due to joint issues, a health condition or an injury, CBD could provide pain relief.</p>
      <h3 id="dogs-with-joint-problems">dogs-with-joint-problems</h3>
      <p>Joint issues or arthritis can cause a lot of pain and discomfort in your pooch. CBD oil is known for its anti-inflammatory effects as well as a natural pain reliever, so many dog owners use CBD for dogs with joint problems.</p>
      <h3 id="dogs-with-seizures-and-epilepsy">dogs-with-seizures-and-epilepsy</h3>
      <p>Intriguingly, CBD is thought to have anticonvulsant properties, so could reduce the frequency and severity of seizures. This is due to its ability to regulate various physiological processes, and induce a reduction in anxiety and tension.</p>
      <p>It could also ease damage to brain cells due to being a natural anti-inflammatory. If you choose to try CBD as a natural remedy for your dog’s seizures or epilepsy, consult with your vet and closely monitor your pooch.</p>
      <h3 id="dogs-with-behavioural-issues">dogs-with-behavioural-issues</h3>
      <p>CBD oil is often used for its calming properties - it’s a natural relaxant and could reduce anxiety in dogs. For this reason, it’s a potential remedy for dogs with behavioural issues; for instance if your dog is particularly sensitive around loud noises, visitors, walks or meeting other dogs, or if they have separation anxiety.</p>
      <h3 id="dogs-with-anxiety">dogs-with-anxiety</h3>
      <p>As above, CBD oil can be a useful natural remedy for dogs who suffer with anxiety or stress. The anti-anxiety effects of CBD oil in humans are well documented, though it’s still being tested with dogs and the research is still in its foundational stages. It could also be used to aid sleep in dogs if your pooch gets particularly antsy before bed times.</p>
      <p>*In all of the above cases, remember the research around CBD for dogs is still very new and not entirely understood. You should always speak with a vet before using any alternative health remedies, especially if your dog is already taking prescribed medicine.</p>
      <h2 id="how-much-cbd-can-dogs-have">how-much-cbd-can-dogs-have</h2>
      <p>As CBD isn’t yet authorised by a veterinary board in the UK, there is some vagary around recommended dosage for dogs, and variations in a ‘CBD for dogs dose calculator’.</p>
      <p>If you do choose to administer CBD to your dog after chatting to a vet, you should add a small amount of CBD oil to your dog’s food (a few drops) to slowly introduce it. If you’re trying out CBD treats, refer to the recommendations on the packaging (a high quality product should instruct accordingly). Monitor your pooch closely afterwards and note any changes in behaviour or symptoms.</p>
      <h2 id="how-to-choose-cbd-products-for-your-dog">how-to-choose-cbd-products-for-your-dog</h2>
      <p>There are all kinds of CBD products out there that aren’t technically authorised - even dog CBD gummies.</p>
      <p>The best CBD products for dogs will be high quality (this means it won’t be cheap, it will be transparent about how it’s sourced/the ingredients and will likely be organic), and it should clearly state that it is THC-free.</p>
      <p>Add any CBD oil to your dog’s food, rather than administer on an empty stomach - and chat to your vet to get their opinion on the products you’re using.</p>
      <p>In summary…</p>
      <p>We want to give you all the information regarding CBD for dogs so you can be fully informed to make your own decision. Though it hasn’t been officially passed as a commercial product for pets, the research is still ongoing and there could be some exciting developments in future. For now, the most important things to remember are:</p>
      <ul>
        <li>In the UK, CBD for dogs can only be officially prescribed by vets.</li>
        <li>If you decide to administer it, choose high-quality CBD products for dogs that are clearly labelled THC-free.</li>
        <li>Chat to your vet before trying CBD on your dog, especially if your pooch is currently prescribed ongoing medication.</li>
        <li>Monitor their reactions closely, and immediately cease use if you notice anything untoward.</li>
      </ul>
      <p>Get in touch with us if you have any questions around CBD for dogs, we’ll be happy to chat with you about it. Or, you could try our hemp products for dogs - such as our tasty new Hemp Chewies - which have similar calming and anti-inflammatory effects as well as a host of natural health benefits.</p>
      <p>References</p>
      <b>“Scientific Validation of Cannabidiol for Management of Dog and Cat Diseases” - 2023, Annual Review of Animal Biosciences (US).</b>
      <b>“Can I buy cannabidiol (CBD) for my pet?” - 2022, Veterinary Medicines Doctorate (UK).</b>
      <span>“CBD clinical trial results on seizure frequency in dogs 'encouraging'”</span>
      <b>- 2019,</b>
      <a>Science Daily.</a>
`,
  headings: [
    { id: 'what-is-cbd', text: 'what-is-cbd', level: 2 },
    { id: 'is-cbd-oil-beneficial-for-dogs', text: 'is-cbd-oil-beneficial-for-dogs', level: 2 },
    { id: 'how-does-cbd-affect-dogs', text: 'how-does-cbd-affect-dogs', level: 3 },
    { id: 'why-do-people-give-cbd-to-their-pets', text: 'why-do-people-give-cbd-to-their-pets', level: 3 },
    { id: 'what-are-the-benefits', text: 'what-are-the-benefits', level: 3 },
    { id: 'common-cbd-claims', text: 'common-cbd-claims', level: 3 },
    { id: 'cbd-is-anti-inflammatory', text: 'cbd-is-anti-inflammatory', level: 3 },
    { id: 'cbd-for-dogs-is-illegal', text: 'cbd-for-dogs-is-illegal', level: 3 },
    { id: 'cbd-can-make-dogs-high', text: 'cbd-can-make-dogs-high', level: 3 },
    { id: 'cbd-can-cure-canine-arthritis', text: 'cbd-can-cure-canine-arthritis', level: 3 },
    { id: 'is-cbd-oil-safe-for-dogs', text: 'is-cbd-oil-safe-for-dogs', level: 2 },
    { id: 'risks-of-using-cbd-oil-for-dogs', text: 'risks-of-using-cbd-oil-for-dogs', level: 3 },
    { id: 'possible-side-effects-of-cbd-in-dogs', text: 'possible-side-effects-of-cbd-in-dogs', level: 3 },
    { id: 'symptoms-and-signs-of-cbd-toxicity', text: 'symptoms-and-signs-of-cbd-toxicity', level: 3 },
    { id: 'dogs-taking-other-medications-or-supplements', text: 'dogs-taking-other-medications-or-supplements', level: 3 },
    { id: 'what-dog-health-problems-can-cbd-oil-aid', text: 'what-dog-health-problems-can-cbd-oil-aid', level: 2 },
    { id: 'dogs-with-cancer', text: 'dogs-with-cancer', level: 3 },
    { id: 'dogs-with-allergies', text: 'dogs-with-allergies', level: 3 },
    { id: 'dogs-in-pain', text: 'dogs-in-pain', level: 3 },
    { id: 'dogs-with-joint-problems', text: 'dogs-with-joint-problems', level: 3 },
    { id: 'dogs-with-seizures-and-epilepsy', text: 'dogs-with-seizures-and-epilepsy', level: 3 },
    { id: 'dogs-with-behavioural-issues', text: 'dogs-with-behavioural-issues', level: 3 },
    { id: 'dogs-with-anxiety', text: 'dogs-with-anxiety', level: 3 },
    { id: 'how-much-cbd-can-dogs-have', text: 'how-much-cbd-can-dogs-have', level: 2 },
    { id: 'how-to-choose-cbd-products-for-your-dog', text: 'how-to-choose-cbd-products-for-your-dog', level: 2 },
  ]
},
'dog-teeth-chattering': {
  title: 'Dog Teeth Chattering - why they do it and what it means',
  category: 'Pets',
  snippet: "Snippet not found",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/24-08-23_BLOG_SEO_BLOG_TEETH_CHATTERING_1_500x_crop_center.jpg?v=1692883862",
    alt: "Dog Teeth Chattering - why they do it and what it means",
    caption: "why-do-dogs-chatter-their-teeth"
  },
  content: `
<p>So this is new - your dog was sniffing, grinning or panting as usual, but now their teeth are chattering?! If you’ve noticed your dog’s teeth chatter sometimes and you’re not entirely sure why, you’ll be glad to know this is quite common - not just in dogs, but cats and lots of other mammals, too. There are various reasons behind it, so it’s a good idea to investigate each time your pooch’s jaw starts to judder.</p>
      <p>Read on for the full lowdown on why your dogs’ teeth are chattering, and the most common reasons for sudden teeth chattering in dogs.</p>
      <h2 id="why-do-dogs-chatter-their-teeth">why-do-dogs-chatter-their-teeth</h2>
      <p>There are a few common reasons why dogs’ teeth chatter:</p>
      <ul>
        <li>They could be very cold, or confusingly, very hot</li>
        <li>They may be in pain for some reason</li>
        <li>They may have sniffed something that’s triggered certain canine bodily sensors</li>
      </ul>
      <p>Let’s go into some of the reasons your dog’s teeth might chatter in more detail…</p>
      <h3 id="they’ve-been-triggered-by-pheromones">they’ve-been-triggered-by-pheromones</h3>
      <p>Not a lot of pooch parents know this, but dogs have a sensory system located in the roof of their mouth, just behind their teeth called the ‘vomeronasal system’, or ‘Jacobson’s Organ’. This picks up on pheromones (a chemical substance produced and released into the environment by an animal) as well as specific smells and tastes, which for some reason, can activate a teeth chattering response. So when your pooch is sniffing away at something they can’t get enough of, and the teeth start chattering, this is what’s happening.</p>
      <h3 id="they’re-excited-or-nervous">they’re-excited-or-nervous</h3>
      <p>Excitement and nervousness are two seemingly opposite emotions, however they’re actually extremely similar when it comes to the physical sensations in the body. In either case, adrenaline floods the body and may cause your dog’s teeth to chatter, almost as a nervous release of some kind.</p>
      <p>Make a note of when this happens most often - is it when your dog is scared (during a vet visit, or when there are strangers outside, for example) or during happy times, such as when they’re playing with other dogs or jumping up to a loved and familiar visitor? Their accompanying body language should give it away.</p>
      <h3 id="they-are-too-cold-or-too-hot">they-are-too-cold-or-too-hot</h3>
      <p>Similar to humans and other animals, when a dog is cold, they may shiver or chatter their teeth as a way to generate extra body heat. If it’s cold and you note this behaviour, be sure to warm up your dog with a blanket, coat or take them into a warmer environment.</p>
      <p>Confusingly, they may chatter their teeth if they’re hot, too. This is because dogs don’t sweat like humans, so while panting, they may have involuntary movements in their jaw such as teeth chattering. Be sure to get your dog into a cooler spot if you notice this.</p>
      <h3 id="they’re-in-pain">they’re-in-pain</h3>
      <p>Teeth chattering is a common indicator that your dog could be in pain. This is linked to a sense of stress, as your pooch is likely experiencing physiological movements in response to feeling discomfort. If the chattering comes on suddenly and for no obvious reason, you should check your dog for other signs of pain - such as lethargy, low mood, whimpering or an obvious injury and take them to a vet if you notice anything concerning.</p>
      <h3 id="they-have-toothache-or-periodontal-disease">they-have-toothache-or-periodontal-disease</h3>
      <p>A case of toothache or periodontal disease (in which a dog’s teeth and gums tend to get sore, infected or swollen), could result in your dog’s mouth juddering. This is again a response to feeling pain and discomfort, and is perhaps a sign that they can’t close their mouth properly. Periodontal disease, sore gums or toothache is more likely the case if your pooch’s teeth chattering is accompanied by bad breath.</p>
      <p>If your dog’s dental hygiene leaves a lot to be desired, try to remedy this with more regular teeth brushing or some doggy dental sticks or dental dog treats.</p>
      <h3 id="they-may-have-a-neurological-condition">they-may-have-a-neurological-condition</h3>
      <p>In rarer cases, your dog’s teeth chattering may be neurological. If the episode is accompanied by seizures, full body tremors or your pooch seems distant or ‘out of it’ in any way, this could be a sign of something more serious. Definitely take them to a vet as soon as you can.</p>
      <h2 id="meanings-of-teeth-chatter-in-dogs">meanings-of-teeth-chatter-in-dogs</h2>
      <p>So you know what triggers teeth chattering, but what about when your dogs’ teeth suddenly chatter in certain scenarios? You might be wondering, “Why does my female dog chatter their teeth when near a male?” or “Why is my dog chattering their teeth when they’re not cold?”</p>
      <p>Below we’ve covered some common triggers for that all-familiar clacking of teeth. The most important thing is to identify the scenarios in which your pooch gets a teeth chattering episode - so that you’ll know whether it’s nothing to worry about, or you should take them to see a vet.</p>
      <h3 id="why-does-my-dog-chatter-their-teeth-when-excited">why-does-my-dog-chatter-their-teeth-when-excited</h3>
      <p>Sometimes a dog’s teeth chatter when their body is responding to the adrenaline of excitement. If your pooch slips into a teeth chattering episode during exciting circumstances - such as when a loved person is visiting, or perhaps before walkies, dinner, or the introduction of a new toy - then you’ll know that teeth chattering is linked to positive emotions, and therefore is not necessarily a cause for concern.</p>
      <h3 id="why-do-dogs-chatter-their-teeth-after-licking">why-do-dogs-chatter-their-teeth-after-licking</h3>
      <p>Your pooch might chatter their teeth after licking something or themselves. As mentioned, teeth chattering is linked to the ‘vomeronasal system’, also called the ‘Jacobson’s Organ’ which is located behind their snout/front teeth. As licking means your pooch is likely receiving a lot of pheromones, that system is being activated and causing their teeth to chatter. It should subside once their activated body has returned to normal.</p>
      <h3 id="why-are-my-male-dog’s-teeth-chattering-after-smelling-a-female">why-are-my-male-dog’s-teeth-chattering-after-smelling-a-female</h3>
      <p>A male dog’s teeth might chatter after smelling a female dog. Sniffing a female may cause your male dog to receive an influx of pheromones that flips their nervous system somewhat into overdrive, thus the chattering teeth.</p>
      <p>If your male pooch has just sniffed a female, you can assume that’s why their teeth are click-clacking away - it’s an indication that their body is reacting to what (or who) they’ve smelt. If it continues later, though, or happens without a female around, spend some time considering what else may have triggered it.</p>
      <h3 id="why-does-my-female-dog-chatter-their-teeth">why-does-my-female-dog-chatter-their-teeth</h3>
      <p>It’s not only male dogs that chatter their teeth after sniffing a female - females, too, will react physically to pheromones and smells. But it could be that your female dog is chattering her teeth for any number of reasons. As far as we know, there shouldn’t really be any sex-based differences, as all pooches (and most mammals, for that matter - including us!) have the ‘Jacobson’s Organ’ situated in the roof of their mouth. In simple terms, if your dog’s teeth are chattering, you should investigate every reason why, whether they’re a boy dog or a girl dog.</p>
      <h3 id="why-is-my-older-dog-chattering-their-teeth">why-is-my-older-dog-chattering-their-teeth</h3>
      <p>Older dogs will chatter their teeth for the same reasons younger dogs do, but there may be some age-related factors that are making certain triggers more likely. Your pooch may be in pain, be suffering from periodontal disease or toothache, or may even have arthritis or general soreness. If this persists and teeth chattering seems to be a sign of pain in general, you might want to talk it over with your vet.</p>
      <h3 id="teeth-chatter-due-to-dental-issues">teeth-chatter-due-to-dental-issues</h3>
      <p>Your dog’s teeth chattering may be due to dental issues - in fact, it’s very likely. Dental problems and periodontal disease is extremely common in dogs, which can start with a simple toothache or sore gums that causes them to feel discomfort and soreness. If your pooch’s teeth chattering is accompanied by other signs of toothache (change in mood, drooling, reddened gums, pawing at face), it’s highly likely that’s the cause.</p>
      <h3 id="dog-teeth-chattering-and-focal-motor-seizures-neurological-issues">dog-teeth-chattering-and-focal-motor-seizures-neurological-issues</h3>
      <p>In rare cases, your dog’s chattering teeth could be a sign of a neurological issue. Your pooch may even be suffering from a focal motor seizure. During focal motor seizure in dogs, repetitive movement is localised, meaning they shudder or shake in only one part of the body (in this case, the jaw or face). Get in touch with your vet so your dog can be tested for certain neurological conditions. They may receive medication so that the teeth chattering doesn’t cause them any distress.</p>
      <h3 id="should-i-always-take-my-dog-to-a-vet-if-their-teeth-chatter">should-i-always-take-my-dog-to-a-vet-if-their-teeth-chatter</h3>
      <p>In many cases, your dog’s teeth chattering is probably not a cause for concern - you should decipher your pooch’s body language and the situation you’re in (is it very cold right now, are there visitors in the house? etc.), and note when there’s a pattern of it happening. If your dog’s jaw starts juddering every time they’re in an exciting situation, for instance, it’s clearly a behavioural quirk and not something to worry about.</p>
      <p>If your dog’s teeth chattering comes on randomly, or is accompanied by more concerning behaviour such as drooling, pawing of face, general low mood or some form of paralysis or fit, then it makes sense that you should take them to get checked over by a vet.</p>
      <p>Teeth chattering in dogs is often a symptom of dodgy dental health - meaning your poor pooch likely has a toothache. If you think your dog could do with extra oral care, Pooch & Mutt dental sticks for dogs contain tasty, munchable ingredients like peanut butter and spirulina. For more bite-size oral care, there’s our Dental Meaty Treats.</p>
`,
  headings: [
    { id: 'why-do-dogs-chatter-their-teeth', text: 'why-do-dogs-chatter-their-teeth', level: 2 },
    { id: 'they’ve-been-triggered-by-pheromones', text: 'they’ve-been-triggered-by-pheromones', level: 3 },
    { id: 'they’re-excited-or-nervous', text: 'they’re-excited-or-nervous', level: 3 },
    { id: 'they-are-too-cold-or-too-hot', text: 'they-are-too-cold-or-too-hot', level: 3 },
    { id: 'they’re-in-pain', text: 'they’re-in-pain', level: 3 },
    { id: 'they-have-toothache-or-periodontal-disease', text: 'they-have-toothache-or-periodontal-disease', level: 3 },
    { id: 'they-may-have-a-neurological-condition', text: 'they-may-have-a-neurological-condition', level: 3 },
    { id: 'meanings-of-teeth-chatter-in-dogs', text: 'meanings-of-teeth-chatter-in-dogs', level: 2 },
    { id: 'why-does-my-dog-chatter-their-teeth-when-excited', text: 'why-does-my-dog-chatter-their-teeth-when-excited', level: 3 },
    { id: 'why-do-dogs-chatter-their-teeth-after-licking', text: 'why-do-dogs-chatter-their-teeth-after-licking', level: 3 },
    { id: 'why-are-my-male-dog’s-teeth-chattering-after-smelling-a-female', text: 'why-are-my-male-dog’s-teeth-chattering-after-smelling-a-female', level: 3 },
    { id: 'why-does-my-female-dog-chatter-their-teeth', text: 'why-does-my-female-dog-chatter-their-teeth', level: 3 },
    { id: 'why-is-my-older-dog-chattering-their-teeth', text: 'why-is-my-older-dog-chattering-their-teeth', level: 3 },
    { id: 'teeth-chatter-due-to-dental-issues', text: 'teeth-chatter-due-to-dental-issues', level: 3 },
    { id: 'dog-teeth-chattering-and-focal-motor-seizures-neurological-issues', text: 'dog-teeth-chattering-and-focal-motor-seizures-neurological-issues', level: 3 },
    { id: 'should-i-always-take-my-dog-to-a-vet-if-their-teeth-chatter', text: 'should-i-always-take-my-dog-to-a-vet-if-their-teeth-chatter', level: 3 },
  ]
},



'can-dogs-get-sunburn': {
  title: 'Can dogs get sunburn?',
  category: 'Pets',
  snippet: "Snippet not found",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/Can_dogs_get_sunburn_-_BODY_2_500x_crop_center.jpg?v=1690197248",
    alt: "Can dogs get sunburn?",
    caption: "can-dogs-get-sunburn"
  },
  content: `
<p>Most dog owners know from experience that a dog who’s been out in the hot sun becomes far from functional - they may even sit down mid-walk and refuse to move! There are other reasons for your dog to avoid the strongest heat of a summer day, however, and that’s the risk of sunburn.</p>
      <p>If you’ve ever been out in the sun with your dog and wondered ‘can a dog get sunburn?’ - the answer is yes, they can - and it’s important to take precautions just as you would with your own easily damaged skin.</p>
      <p>Read on as we explain more about doggo sunburn, signs your dog might be suffering from too much sun, and what you can do to protect your pooch on hot summer days.</p>
      <h2 id="can-dogs-get-sunburn">can-dogs-get-sunburn</h2>
      <p>In short - yes, dogs can absolutely get sunburn.</p>
      <div>Play Video
VIEW ON TIKTOK</div>
      <p>As lots of dogs are covered in thick fur, you’d be forgiven for believing they can’t get sunburn or wouldn’t need sun protection, such as sunscreen. Believe it or not, dogs need sunscreen as much as humans do - especially dogs with patches of exposed skin, a thin coat, or if they’re a breed that is susceptible to becoming sunburnt (more on that later).</p>
      <p>Still, even a dog with thick fur who’s less at risk of skin damage can get sunburn on their belly, groin area, nose, ears or eyelids.</p>
      <h2 id="signs-of-sunburn-in-dogs">signs-of-sunburn-in-dogs</h2>
      <p>We all know the sense of growing unease when we’ve been in the sun too long, and the last thing you want is for your dog to be in that same discomfort. As dogs can’t communicate when they feel this way, be aware of the following signs that your dog might be getting sunburnt:</p>
      <b>Pink or reddened skin. The most obvious sign of sunburn is reddened skin, especially where they have the shortest hair or their skin is exposed, like on their belly or groin area.</b>
      <b>A warm or overly hot body. If you touch your dog, their skin will feel warmer than usual, or even overly hot.</b>
      <b>Swelling. If a dog is overheating, parts of their body that are too hot may become swollen.</b>
      <b>Flaky or peeling skin. After a dog has been sunburnt, their skin may be itchy and could flake and peel, just as it does for humans when we get severe sunburn.</b>
      <b>Pain or soreness. Your dog might cry or whimper when touched in certain areas after being in the sun.</b>
      <b>Restlessness or behavioural changes. If it’s a sunny day and your dog can’t seem to relax, or is restless, barking or bothering you, it could be a sign they’re not enjoying their time in the sun and want to go inside.</b>
      <b>Blistering. In extreme cases, your pooch may develop blisters or sores if they’ve been severely burned.</b>
      <h3 id="dog-breeds-prone-to-sunburn">dog-breeds-prone-to-sunburn</h3>
      <p>As you’d expect, dog breeds with short hair and light-coloured skin or fur are more prone to sunburn than those with long-haired coats or darker skin.</p>
      <p>Bulldogs, for example, with their very short hair and upturned noses, are very prone to sunburn; as well as other short-haired breeds like Boxers, Dalmations, Pitbulls and Greyhounds.</p>
      <p>Of course, hairless dog breeds such as the Chinese Crested Dog or the Xoloitzcuintli (Mexican Hairless Dog) are also very at risk of their skin being burnt on a bright day and will require special attention to keep them protected.</p>
      <p>Despite this, remember that all dogs can get sunburn, no matter the breed. Dark-coated dogs with light-pigmented noses, such as Collies, are at risk too - or any dog with white colouring or thin hair on their delicate ears and eyelids.</p>
      <h2 id="dog-sunburn-treatment">dog-sunburn-treatment</h2>
      <p>If your pooch has mild sunburn, i.e. slightly reddened skin and an overly warm body, it will likely get better on its own with a little help from you. Mild sunburn in dogs can be treated at home, but if your dog doesn’t seem themselves, appears to be in pain or discomfort, or if the sun damage is visibly severe, it’s important to take them to the vets for a check-up.</p>
      <p>Here’s how to help them at home:</p>
      <ul>
        <li>Move them out of the sun. It might seem obvious but if you notice your pooch is burning while still outdoors in direct sunlight, move them into shade or take them indoors for the rest of the day.</li>
      </ul>
      <ul>
        <li>Apply a cold compress like a cool, damp cloth on your pooch’s worst affected areas.</li>
      </ul>
      <ul>
        <li>Some aloe vera gel may also cool down the skin, if you don’t have any prescribed ointment as an alternative.</li>
      </ul>
      <ul>
        <li>Be sure your dog is well hydrated and has access to fresh, clean water.</li>
      </ul>
      <ul>
        <li>It can help to place them on a cooling mat for dogs, or near something cold (a covered bag of frozen peas, for instance) so they have somewhere to get cooling relief.</li>
      </ul>
      <ul>
        <li>For extra soothing effects, offer them calming dog food or a few calming dog treats - they usually contain natural relaxants like chamomile.</li>
      </ul>
      <ul>
        <li>Try an oatmeal bath. We know not all dogs are keen on baths, but oats are known for their soothing, anti-inflammatory properties and a warm oaty bath is great for calming down a dog’s sunburnt skin. Just be sure the water is warm, not hot.</li>
      </ul>
      <h3 id="when-to-contact-your-vet">when-to-contact-your-vet</h3>
      <p>If your dog seems out of sorts after a day in the sun, contact your vet so they can give them a thorough check over.</p>
      <p>If your dog’s sunburn is severe; i.e. if their discomfort lingers, they seem sensitive to the touch or if there is any blistering or pain, a vet can offer them some stronger, more targeted treatments, such as prescription ointment, painkillers or antibiotics.</p>
      <h2 id="dog-sunburn-prevention">dog-sunburn-prevention</h2>
      <p>Prevention is better than cure, especially when it comes to sun damage - and the best way to beat a nasty case of sunburn is to protect your dog’s skin from exposure in the first place. Remember: if you don’t regularly protect your dog from sunburn you risk other dangerous health conditions such as heatstroke, or even skin cancer.</p>
      <p>So when the days start to brighten and temperatures heat up, be sure to take the following precautions for your dog:</p>
      <p>Give your pooch plenty of shade. Lots of us would hate to be stuck in the endless glare of the sun without the chance to get shade, so give your pooch the same courtesy and be sure they have plenty of exit routes. This means stopping at shaded spots on a sunny walk, putting up a parasol in the garden, and offering easy access back into the house for whenever they need it.</p>
      <p>Use sunblock for dogs. Wherever your dog has areas of exposed skin, even if it’s just their tummy, groin, ears and shaven bits - cover them in specialist doggy sun cream to avoid a nasty burn.</p>
      <p>Don’t walk them at peak times of day. The hours between 11am and 4pm are usually sweltering for dogs during a hot summer. Try to walk them earlier or later in the day to avoid them catching the sun and getting too hot while exercising.</p>
      <p>Keep lots of water nearby. Dogs need hydration during hotter weather, just like us! Ensure their water is cold, frequently changed, topped up and easy to get to.</p>
      <p>Sun hats for dogs. Yep - dogs can wear hats for sun protection! If your dog is willing to wear a sun hat, be sure it has a visor that shields their most sun-sensitive areas, like their nose and eyes. You could also try a dog coat, sun shirt or mat made for UV protection.</p>
      <h2 id="do-dogs-need-sunscreen">do-dogs-need-sunscreen</h2>
      <p>Dogs have skin that can be easily burnt in the sun, therefore they need sun protection, just as humans do. As you can’t avoid taking your dog outside during warm summer weather, sun cream for dogs is definitely something you should invest in.</p>
      <p>Evidence suggests that dogs who suffer from sun-induced skin cancers are usually affected in areas with glabrous skin - meaning a sparsely-haired belly, armpits and groin areas. This makes it all the more important to protect this delicate skin.</p>
      <h3 id="can-you-get-sun-cream-for-dogs">can-you-get-sun-cream-for-dogs</h3>
      <p>You can indeed get sun cream for dogs. There are specialist sunscreens made just for pooches - apply it liberally to exposed skin, areas where their fur is thinner, and on noses, ears and eyelids to create a barrier of sun protection for your pup’s precious skin. And keep reapplying throughout the day!</p>
      <p>Be sure to pick a sun cream that’s formulated for your pet - as some of the ingredients in human sun cream aren’t good for dogs, and they’re prone to licking it off and ingesting it.</p>
      <p>Sun cream for dogs should ideally be waterproof, have an SPF of at least 30, and not contain zinc oxide or para-aminobenzoic acid (PABA).</p>
      <p>If your pooch has spent too much time in the sun and needs to relax and cool down come the evening, soothe their nerves with Pooch & Mutt Calm & Relaxed Dry Dog Food. It contains turkey, rich with L-tryptophan (which helps release happy hormones) and chamomile, a natural relaxant - it’s also totally grain-free. For more information about pooch sunburn or skin protection, feel free to get in touch with us.</p>
      <section>References</section>
`,
  headings: [
    { id: 'can-dogs-get-sunburn', text: 'can-dogs-get-sunburn', level: 2 },
    { id: 'signs-of-sunburn-in-dogs', text: 'signs-of-sunburn-in-dogs', level: 2 },
    { id: 'dog-breeds-prone-to-sunburn', text: 'dog-breeds-prone-to-sunburn', level: 3 },
    { id: 'dog-sunburn-treatment', text: 'dog-sunburn-treatment', level: 2 },
    { id: 'when-to-contact-your-vet', text: 'when-to-contact-your-vet', level: 3 },
    { id: 'dog-sunburn-prevention', text: 'dog-sunburn-prevention', level: 2 },
    { id: 'do-dogs-need-sunscreen', text: 'do-dogs-need-sunscreen', level: 2 },
    { id: 'can-you-get-sun-cream-for-dogs', text: 'can-you-get-sun-cream-for-dogs', level: 3 },
  ]
},



'what-food-is-best-for-dogs-with-kidney-disease': {
  title: 'What food is best for dogs with kidney disease?',
  category: 'Pets',
  snippet: "Snippet not found",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/VET-RANGE-RENAL-KIDNEY-BLOG-1_500x_crop_center.jpg?v=1682958544",
    alt: "What food is best for dogs with kidney disease?",
    caption: "nutrition-and-diet-for-dogs-with-kidney-disease"
  },
  content: `
<p>If your poor pooch has dysfunctioning kidneys, perhaps due to chronic kidney failure, you’ve probably been recommended they go on a renal diet. It’s not only vital that a dog with kidney conditions eats a diet that is perfectly suited to their needs, they need to want to eat it - as their illness can mean that they’re turned off from food. We know this can be worrying for pooch parents, who only want what’s best for their dog - so how do you make sure you’re feeding your dog the best food for their kidney problems?</p>
      <p>Read on to learn the attributes of a renal diet for dogs, so you can feed the right food for your dog’s kidney dysfunction and ensure they live the happiest life possible.</p>
      <h2 id="nutrition-and-diet-for-dogs-with-kidney-disease">nutrition-and-diet-for-dogs-with-kidney-disease</h2>
      <p>Just like all dog’s vital organs, the kidneys are important for many reasons - they filter toxins from the blood, regulate levels of potassium and sodium, conserve water and produce urine. When a dog’s kidneys start to malfunction, they can get very ill. You can read all about the causes and symptoms of kidney disease in dogs right here. However, if your dog’s already been diagnosed with kidney issues, you’ve probably been instructed to put them on a renal diet.</p>
      <p>It’s essential that you feed your dog with kidney problems a strictly renal diet only so that they can live a happy, relatively stress-free life with alleviated symptoms from their poorly kidneys. It’s actually the most important part of your dog’s treatment and could significantly improve their life expectancy.</p>
      <h2 id="what-foods-are-good-for-dogs-with-kidney-failure">what-foods-are-good-for-dogs-with-kidney-failure</h2>
      <p>So, what does a renal diet mean? Renal, or kidney-friendly food for dogs has special attributes, and it can be confusing for a worried dog owner to understand all the various weights and restrictions involved. Put simply, a renal diet for dogs supports the kidneys while providing a dog with all the nutrition they need to live and function happily.</p>
      <p>Generally speaking, a renal diet has:</p>
      <ul>
        <li>High water and moisture content. Staying hydrated is important for the kidneys, which don’t function well without a lot of water to produce urine.</li>
        <li>Low protein levels. Protein creates waste products that are tricky for damaged kidneys to process, so monitoring protein intake takes the pressure off.</li>
        <li>Low phosphorus levels. The kidneys are fundamental in filtering phosphorus in urine, so dogs with kidney disease tend to get a build-up of phosphorus. Reducing the amount of phosphorus in the diet significantly helps.</li>
        <li>Low sodium. Salt can worsen symptoms of kidney disease in dogs.</li>
        <li>Omega 3 fatty acids. The vital AHAs and DHAs found in fish oil, for instance, reduce inflammation in dogs and improve their kidney function.</li>
        <li>Delicious flavours. Pooches with kidney failure feel too ill to eat sometimes. A tasty fat booster (such as chicken skin) makes the food irresistible!</li>
      </ul>
      <h2 id="best-dog-food-for-kidney-disease">best-dog-food-for-kidney-disease</h2>
      <p>So now you know what constitutes a sensible renal diet for a dog, what is the best food to feed a dog with kidney disease?</p>
      <ul>
        <li>Firstly, bear in mind that relying on cheap commercial dog food to support your dog’s ailing kidneys is doomed to fail. Cheap brands of dog food tend to contain preservatives, artificial flavourings and ‘filler’ ingredients that will put stress on a dog’s kidneys and provide little nutritional value. It’s important to look a bit further for a nutrient-rich specialist food that supports your dog’s health condition.</li>
      </ul>
      <ul>
        <li>Some pooch parents opt for a homemade or raw food for dogs (sometimes called the BARF diet), as they like to know exactly what goes into their dog’s meals. Though this can be successful for dogs in good health, it’s more difficult when your pooch has specific dietary requirements. Preparing a renal diet from scratch is time-consuming and harder to balance than choosing a high-quality, specialist dog food that has been created for that purpose. If you’re dead-set on sticking to a homemade diet, chat to a pet nutritionist first for some expert advice on preparing it.</li>
      </ul>
      <ul>
        <li>A premium quality, specialist dog food that comes prescribed or recommended by vets is the best route if your dog has kidney disease or failure. This food will be specially prepared to support a renal diet, and should boost your dog’s overall health as well as protecting them from getting more unwell than they need to be. It should also be simply delicious for a dog, so that even if they’re off their food, they can’t help but lap it up.</li>
      </ul>
      <h2 id="best-non-prescription-dog-food-for-kidney-disease">best-non-prescription-dog-food-for-kidney-disease</h2>
      <p>Some premium quality vet-recommended foods on the market are just as effective as prescription dog foods - our Pooch & Mutt Veterinary Renal Food, for instance. It has been specifically formulated in accordance to a renal diet, containing salmon, peas and eggs for protein rather than meat, as meat has high levels of protein which is tougher to digest. It contains chicken fat, for a super delicious taste they’ll love to eat every day - and salmon oil for those essential Omega 3 fatty acids.</p>
      <p>A lot of renal dog foods on the market contain grain, making life difficult for dogs with kidney disease and a grain allergy, or difficulty digesting grain. For this reason our vet-recommended renal food is also entirely grain-free.</p>
      <h3 id="can-my-dog-eat-renal-dog-food-for-kidney-disease-and-problems">can-my-dog-eat-renal-dog-food-for-kidney-disease-and-problems</h3>
      <p>If your vet has instructed that your pooch eat renal dog food, then a specialist renal food such as our Pooch & Mutt Vet food is a great choice - but chat it over with your vet first to be sure. It’s typically given to dogs with chronic kidney insufficiency, especially those in the late to end stages of the disease.</p>
      <p>If your dog doesn’t have kidney problems, do not feed them renal dog food - it doesn’t contain the right balance of ingredients to support a dog with regular health.</p>
      <h2 id="dog-food-for-kidney-disease-faqs">dog-food-for-kidney-disease-faqs</h2>
      <p>You’re almost fully clued up on how to feed your precious pooch a renal diet. To finish, let’s go over some commonly asked questions about feeding a dog with kidney disease.</p>
      <h3 id="what-foods-can-cause-kidney-failure-in-dogs">what-foods-can-cause-kidney-failure-in-dogs</h3>
      <p>Foods aren’t necessarily the cause of kidney failure - there can be many causes including genetic factors, toxins, underlying health conditions etc. However there are foods that may exacerbate symptoms which tend to contain high protein, high salt or high phosphorus levels; all of which are hard for damaged kidneys to tolerate. For this reason it’s best for your dog to avoid foods such as red meat, jerky, pigs’ ears, rawhide and bones, as well as grapes and raisins.</p>
      <h3 id="is-cat-food-bad-for-dogs’-kidneys">is-cat-food-bad-for-dogs’-kidneys</h3>
      <p>Even for dogs with regular health, it’s generally not a good idea to feed a dog cat food as both cat and dog food is made to different requirements. This is particularly true of dogs who are unwell or have health issues such as kidney disease. Cat food contains a very different balance of food groups that makes it suitable for a cat’s digestive system, not a dog’s. It usually contains high levels of fat and protein and therefore shouldn’t be fed to a dog with kidney dysfunction.</p>
      <h3 id="is-tuna-good-for-dogs-with-kidney-disease">is-tuna-good-for-dogs-with-kidney-disease</h3>
      <p>Tuna might be a favourite fishy snack for some dogs, but for dogs with kidney disease it’s a big no-go. Tuna contains high levels of phosphorus, which is damaging for a dog that needs to be on a renal diet.</p>
      <h3 id="what-vegetables-are-good-for-dogs-with-kidney-disease">what-vegetables-are-good-for-dogs-with-kidney-disease</h3>
      <p>Let’s not underestimate the wonders of vegetables on a dog’s kidney health! Plenty of veggies contain nutrients, vitamins and minerals that are kind to kidneys.</p>
      <p>These include:</p>
      <p>✔ Carrots, which help promote good digestion; cucumbers for their high moisture, high fibre and low salt content; peas as a tasty and digestible source of protein; and potatoes and sweet potatoes for being starchy carbohydrates and a great source of B vitamins.</p>
      <p>Vegetables you should avoid:</p>
      <p>X Tomatoes, as dogs with kidney issues need to avoid high levels of potassium, and tomatoes contain a lot of it. Tomatoes also contain oxalates, which can contribute to the formation of kidney stones. Best to keep tomatoes in your salad bowl, but not your pooch’s.</p>
      <h3 id="can-dogs-with-kidney-disease-have-peanut-butter">can-dogs-with-kidney-disease-have-peanut-butter</h3>
      <p>Lots of dog parents feed their pooches peanut butter and see no issue, but when it comes to dysfunctional kidneys, you’ll definitely want to steer clear. Many peanut butters on the market contain the artificial sweetener Xylitol, which, though fine for humans, is toxic for dogs and can cause or worsen kidney failure. Unsurprisingly, we recommend you avoid feeding your pooch peanut butter altogether.</p>
      <h3 id="which-fruits-are-good-for-dogs-with-kidney-disease">which-fruits-are-good-for-dogs-with-kidney-disease</h3>
      <p>Eating healthy fresh fruits is a great way for a dog to nourish their kidneys, in moderation as part of a specialist renal diet.</p>
      <ul>
        <li>Blueberries and strawberries are perfect options, as they both contain antioxidants to battle toxins that may further damage the kidneys, and fibre to aid gentle digestion.</li>
        <li>Watermelon can also be a juicy treat for a dog with kidney disease, as it’s deliciously hydrating but low in phosphorus.</li>
        <li>Apples cut up into munchable pieces are fine for your pooch to eat in moderation. Apple is rich in pectin to absorb damaging toxins.</li>
      </ul>
      <ul>
        <li>Bananas are fine to feed your pooch in small amounts as they’re relatively low in phosphorus, protein but high in potassium - however, whether it’s low enough depends on what else your dog is eating. Some dogs also have difficulties digesting bananas, so make a decision based on what you know about your dog, and always ask your vet.</li>
      </ul>
      <p>When your dog has been diagnosed with a serious health condition, it can be nerve-wracking deciding what to feed them, but it needn’t be. With the right choice of expertly-prepared, vet-recommended food, you’ll know you’re doing the best you can for your dog’s long and happy life. As always, if you aren’t sure about what exactly you should and shouldn’t feed your dog, ask your vet during regular check-ups.</p>
      <p>If your dog has been instructed to eat a renal diet for kidney disease, our Pooch & Mutt Veterinary Renal Food is your dog’s dream choice. Our specialist vet range has a specialist recipe for all kinds of health conditions - browse the full collection here.</p>
      <p>If you're worried your pooch might be suffering with kidney problems, take a look at our blog post all about kidney disease in dogs.</p>
      <section>References</section>
`,
  headings: [
    { id: 'nutrition-and-diet-for-dogs-with-kidney-disease', text: 'nutrition-and-diet-for-dogs-with-kidney-disease', level: 2 },
    { id: 'what-foods-are-good-for-dogs-with-kidney-failure', text: 'what-foods-are-good-for-dogs-with-kidney-failure', level: 2 },
    { id: 'best-dog-food-for-kidney-disease', text: 'best-dog-food-for-kidney-disease', level: 2 },
    { id: 'best-non-prescription-dog-food-for-kidney-disease', text: 'best-non-prescription-dog-food-for-kidney-disease', level: 2 },
    { id: 'can-my-dog-eat-renal-dog-food-for-kidney-disease-and-problems', text: 'can-my-dog-eat-renal-dog-food-for-kidney-disease-and-problems', level: 3 },
    { id: 'dog-food-for-kidney-disease-faqs', text: 'dog-food-for-kidney-disease-faqs', level: 2 },
    { id: 'what-foods-can-cause-kidney-failure-in-dogs', text: 'what-foods-can-cause-kidney-failure-in-dogs', level: 3 },
    { id: 'is-cat-food-bad-for-dogs’-kidneys', text: 'is-cat-food-bad-for-dogs’-kidneys', level: 3 },
    { id: 'is-tuna-good-for-dogs-with-kidney-disease', text: 'is-tuna-good-for-dogs-with-kidney-disease', level: 3 },
    { id: 'what-vegetables-are-good-for-dogs-with-kidney-disease', text: 'what-vegetables-are-good-for-dogs-with-kidney-disease', level: 3 },
    { id: 'can-dogs-with-kidney-disease-have-peanut-butter', text: 'can-dogs-with-kidney-disease-have-peanut-butter', level: 3 },
    { id: 'which-fruits-are-good-for-dogs-with-kidney-disease', text: 'which-fruits-are-good-for-dogs-with-kidney-disease', level: 3 },
  ]
},
'best-food-for-dogs-with-allergies': {
  title: 'What\'s the best food for dogs with allergies?',
  category: 'Pets',
  snippet: "Snippet not found",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/VET-RANGE-SENSITIVITY-BLOG-1_500x_crop_center.jpg?v=1682958258",
    alt: "What's the best food for dogs with allergies?",
    caption: "most-common-food-allergies-in-dogs"
  },
  content: `
<p>Dogs get allergies just like us - from grass, pollen and eggs to fabrics and fleas.</p>
      <p>Unsurprisingly though, the culprit is often their food, and not monitoring what your dog eats means their unwanted allergy symptoms may cause them (and you!) hassle.</p>
      <p>In a lot of cases, food allergies in dogs present as itchy or irritated skin - in fact, excessive itching is one of the most common reasons their owners take them to the vets! If you’re somewhat in the dark over skin allergies in dogs, what causes them and what symptoms to look out for, we’ve gone into more detail here.</p>
      <p>For this article however, we’ll be discussing the best food to give a dog with food allergies; pooches who suffer from symptoms such as skin irritation, digestive issues, ear infections and sickness due to something they eat.</p>
      <h2 id="most-common-food-allergies-in-dogs">most-common-food-allergies-in-dogs</h2>
      <p>In theory, dogs can be allergic to any food - but the six most common food allergies in dogs are beef, chicken, eggs, dairy, soy and grains. You might be thinking “but chicken and beef are favourites for dogs”. This is often why they’re listed as common allergens - there are simply more cases of these food allergies due to the frequent usage of these meats in commercial dog foods. Interestingly, the more dogs eat something every day, the more likely they are to develop an allergic reaction to it.</p>
      <p>You can read more here about the various types of food allergies in dogs and common symptoms associated with them.</p>
      <h2 id="elimination-diet-for-dogs">elimination-diet-for-dogs</h2>
      <p>If you’ve noticed your dog develops allergy symptoms to something they’ve eaten, you’ll want to track that food down! Identifying your dog’s potential food allergy can be a long-winded process that takes many months; however the results are 100% worth it. By nipping those nasty symptoms at the source, you’ll learn more about your dog’s digestive needs and have more power to increase their comfort and wellbeing.</p>
      <ul>
        <li>When you consult a vet about the problem, it’s likely you’ll be instructed to try an elimination diet. This involves a ‘stripping back’ of all proteins or potential allergens in your dog’s food so that for two to three months, they’ll essentially be on a ‘detox’. Their elimination diet usually involves eating gentle ingredients that are easy to digest (such as potato and fish), a specialist food for dogs with sensitive stomachs, or a novel protein dog food (more on that later).</li>
      </ul>
      <ul>
        <li>After the two to three months are up, your pooch’s allergy symptoms should be reduced or gone completely. This is when you start the process of reintroducing foods, one by one, and seeing which of them triggers symptoms again.</li>
      </ul>
      <p>As we said, this can seem long-winded - and even feel cruel to change your dog’s diet so drastically. Remember it’s for their own good, so don’t give up on the stripped-back diet after only a couple of weeks. It can take as long as three months for all proteins to leave a dog’s body, and it’s only then that you’ll have a good basis to ‘test’ which food could be the trigger of your dog’s allergy troubles.</p>
      <h2 id="food-options-for-dogs-with-allergies">food-options-for-dogs-with-allergies</h2>
      <p>Once you’ve identified your dog’s food allergy, congratulate yourself on a job well done! Now it’s time to adjust your dog’s diet so that they’re rarely exposed to the triggering food and can eat freely and hungrily without the addition of any pain, bloating or irritation.</p>
      <ul>
        <li>If you’ve identified that your pooch has a food allergy, it’s recommended that you avoid cheap, mass-produced dog foods. Many of them are made with artificial ingredients, preservatives and ‘filler’ foods in place of fresh, whole ingredients. Fillers have no benefit whatsoever to a dog with dietary requirements such as yours (or any dog, for that matter), and may even exacerbate the issue.</li>
      </ul>
      <ul>
        <li>Many pooch parents switch their dog to a homemade or raw food diet (also called the BARF diet) after realising they have a food allergy . This is understandable - as your dog has had adverse reactions to specific foods, so you’ll want to be completely in control of what’s in their dog bowl every mealtime. However, there are downsides to this route. It can be time-consuming to prepare, and getting the right balance of nutrients to create a complete, well-rounded diet without including the triggering foods can be complicated. Choosing a specialist, vet-recommended food for dogs with allergies can take the guesswork out of this - but if you’re adamant to go homemade, chat to a pet nutritionist first for advice.</li>
      </ul>
      <ul>
        <li>There are some great specialist foods on the market that are just as good as prescription foods for dogs with allergies. A premium-quality, specialist dog food for allergies and stomach sensitivity will avoid common trigger foods such as beef, chicken and grain, while being specifically formulated to provide all the nutrition a dog needs to be healthy, happy and well-functioning.</li>
      </ul>
      <h2 id="novel-protein-dog-food-for-allergies">novel-protein-dog-food-for-allergies</h2>
      <p>Sometimes, a vet might recommend a novel protein food for your dog with allergies - it could also be called ‘single source dog food’ or ‘limited ingredient dog food’. It can be given to a dog after their food allergy is already identified, or during their elimination diet.</p>
      <h3 id="what-is-novel-protein-dog-food">what-is-novel-protein-dog-food</h3>
      <p>A novel protein dog food is a specialist food formulated for dogs with food allergies, sensitivities or intolerances. As a dog’s food allergy is usually to a protein such as beef, chicken or eggs, a novel protein food includes a niche protein product instead. The aim is to use a tasty, nutritious protein that the dog is unlikely to have eaten before.</p>
      <h3 id="why-is-novel-protein-dog-food-good-for-allergies">why-is-novel-protein-dog-food-good-for-allergies</h3>
      <p>Here’s the clever part. Allergies develop after a dog has eaten something so frequently over the years, such as beef or chicken, that their immune system has become desensitised to its presence. As a novel protein food includes meat that the dog has supposedly never eaten before, their immune system will detect the new food, fight off any negative effects that lead to undesirable allergy symptoms, and digest the protein with no issues.</p>
      <p>Novel protein foods are a great option for pooches with a beef or chicken allergy, for instance - and a good ‘detox’ food when you’re carrying out an elimination diet for your pooch. Our Pooch & Mutt Vet Food for Sensitivity contains Hydrolysed Salmon Protein, which is a novel protein source.</p>
      <h2 id="hypoallergenic-dog-food-for-allergies">hypoallergenic-dog-food-for-allergies</h2>
      <p>If your pooch has food allergies, sensitivities or intolerances, it’s likely you’ll be recommended to try a hypoallergenic dog food. A lot of specialist dog foods can be called ‘hypoallergenic’ - it’s a descriptor rather than an exclusive type of food - so there is overlap with lots of other dog foods such as grain-free food and food for stomach sensitivity.</p>
      <h3 id="what-is-hypoallergenic-dog-food">what-is-hypoallergenic-dog-food</h3>
      <p>Hypoallergenic food for dogs is made to be safer on a dog’s digestion - it’s been formulated with ingredients that are less likely to trigger an adverse reaction in your dog’s body, so it’s especially good for dogs with food allergies, sensitivities and intolerances.</p>
      <h3 id="why-is-hypoallergenic-dog-food-good-for-allergies">why-is-hypoallergenic-dog-food-good-for-allergies</h3>
      <p>There are common food allergies in dogs; usually beef, chicken, eggs, dairy, soy and grains. Hypoallergenic food is made without any of these ingredients so it’s safer for dogs with sensitive stomachs or who suffer adverse reactions to a standard diet. Hypoallergenic food is often (but not always) grain-free, and is made with nutritious, high-quality ingredients to boost a dog’s health and digestion.</p>
      <h2 id="what’s-the-best-food-for-dogs-with-allergies">what’s-the-best-food-for-dogs-with-allergies</h2>
      <p>Dogs with food allergies will thrive on a diet that’s made with their dietary restrictions in mind. It will usually have the following:</p>
      <b>Complete, well-rounded nutrition. Specialist food for allergies won’t contain red meat or other triggering foods such as eggs, dairy or grains. To make up for the omission of certain food groups, the contents will be carefully formulated to provide a balanced diet full of nutrients, vitamins and minerals.</b>
      <b>Hydrolysed protein sources. Proteins will be hydrolysed (a process that breaks proteins into smaller pieces) so that a dog can digest without triggering an allergic reaction.</b>
      <b>Hypoallergenic. A food for dogs with allergies or sensitive stomachs will be hypoallergenic - meaning it avoids triggering food groups and artificial preservatives and uses healthy, natural ingredients.</b>
      <b>Grain-free. Food for allergies is often grain-free - this is because grain is a common food allergy for dogs, while some with sensitive stomachs have trouble digesting grain. All our Pooch & Mutt food is completely grain-free.</b>
      <b>Added supplements. To aid digestion and inject extra health benefits, dog food for allergies might contain added vitamins, minerals or probiotics and prebiotic supplements.</b>
      <p>Our Pooch & Mutt Vet Food for Sensitivity has been made with the above criteria in mind, and is a premium-quality, vet-recommended food for dogs with food allergies, sensitive stomachs or intolerances.</p>
      <p>As well as being grain-free (our specialty) it’s also packed with hydrolysed salmon, peas and buckwheat, a delicious combo which can be gently digested by a pooch’s sensitive tum without bother. There’s also coconut oil as a source of good fats, apple pulp for improved poop consistency, and prebiotics and probiotics to promote a harmonious environment in your dog’s gut.</p>
      <h2 id="how-long-does-it-take-for-dog-food-allergies-to-clear-up">how-long-does-it-take-for-dog-food-allergies-to-clear-up</h2>
      <p>If you’ve put your dog on an elimination diet to allow for allergy symptoms to clear up, this could take anything from six weeks to three months. But food allergies in general are usually long-term for a dog, and should be considered a health condition to be handled with care throughout the dog’s life; using specialist food and thoughtful dietary choices.</p>
      <p>Though a food allergy is usually life-long for a dog, it doesn’t mean they have to go without delicious, nutritious food that promotes a happy, energised life and healthy growth. As well as choosing the right dog food, be sure to avoid all other triggering foods such as human scraps or fatty treats.</p>
      <p>If your pooch is fed a long-term diet that doesn’t trigger their allergies, the symptoms of their allergy may be greatly diminished and they’ll feel a lot happier and calmer within themselves.</p>
      <p>If your dog needs a tasty, grain-free specialist food for sensitive stomachs and food allergies, try our Vet Food for Sensitivity. Our grain-free Vet range has been developed for dogs with all kinds of specialist health issues, take a look at the full collection here.</p>
      <p>References</p>
      <ol>
        <li>Food allergy in Dogs and Cats: A Review, 2007 - Taylor Francis Online</li>
        <li>Diagnosis and management of food allergies in dogs and cats - Vetfolio</li>
        <li>Update on food allergy in the dog and cat, 2001 - Veterinary Information Network</li>
      </ol>
`,
  headings: [
    { id: 'most-common-food-allergies-in-dogs', text: 'most-common-food-allergies-in-dogs', level: 2 },
    { id: 'elimination-diet-for-dogs', text: 'elimination-diet-for-dogs', level: 2 },
    { id: 'food-options-for-dogs-with-allergies', text: 'food-options-for-dogs-with-allergies', level: 2 },
    { id: 'novel-protein-dog-food-for-allergies', text: 'novel-protein-dog-food-for-allergies', level: 2 },
    { id: 'what-is-novel-protein-dog-food', text: 'what-is-novel-protein-dog-food', level: 3 },
    { id: 'why-is-novel-protein-dog-food-good-for-allergies', text: 'why-is-novel-protein-dog-food-good-for-allergies', level: 3 },
    { id: 'hypoallergenic-dog-food-for-allergies', text: 'hypoallergenic-dog-food-for-allergies', level: 2 },
    { id: 'what-is-hypoallergenic-dog-food', text: 'what-is-hypoallergenic-dog-food', level: 3 },
    { id: 'why-is-hypoallergenic-dog-food-good-for-allergies', text: 'why-is-hypoallergenic-dog-food-good-for-allergies', level: 3 },
    { id: 'what’s-the-best-food-for-dogs-with-allergies', text: 'what’s-the-best-food-for-dogs-with-allergies', level: 2 },
    { id: 'how-long-does-it-take-for-dog-food-allergies-to-clear-up', text: 'how-long-does-it-take-for-dog-food-allergies-to-clear-up', level: 2 },
  ]
},
'best-dog-food-for-liver-disease': {
  title: 'What’s the best dog food for liver disease?',
  category: 'Pets',
  snippet: "Snippet not found",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/VET-RANGE-HEPATIC-BLOG-1_500x_crop_center.jpg?v=1682957927",
    alt: "What’s the best dog food for liver disease?",
    caption: "nutritional-requirements-for-dog-food-for-liver-disease"
  },
  content: `
<p>Does your dog have liver disease or problems, and as a result, often turns their nose up at their food? Lack of appetite is a common symptom of liver disease in dogs and can be anxiety-inducing for a dog parent, who quite rightly wants them to eat for their health. If your pooch has a liver that’s somewhat dysfunctional, sourcing the most beneficial food for them - and making sure they want to eat it - is an essential part of their ongoing treatment.</p>
      <p>So, what’s the best dog food for dogs with liver disease? In this article we’ll go through the attributes you’ll need to look for when planning the best diet for your liver-strained pooch, and go over some key foods they should and shouldn’t eat in order to stay fit and well.</p>
      <h2 id="nutritional-requirements-for-dog-food-for-liver-disease">nutritional-requirements-for-dog-food-for-liver-disease</h2>
      <p>Just as in humans, the liver is mightily important to a dog’s internal function - put simply, it helps digest food, filter toxins and regulate the blood. There’s lots of contributors to liver disease in dogs, and if you’re not sure if your dog has it, you can read more about its symptoms and causes here.</p>
      <p>If you already know that your dog has liver disease, you’ll hopefully be aware that the right diet is essential to their daily functioning and needs to be carefully chosen. A diet that’s tailored to support a damaged liver is called a hepatic diet - and that’s a phrase you’ll want to remember. A hepatic diet contains easily digestible ingredients and a clever balance of food groups that will nourish your dog, and their liver, while putting as little pressure on the organ as possible.</p>
      <h2 id="best-dog-food-for-liver-disease-and-problems">best-dog-food-for-liver-disease-and-problems</h2>
      <p>So when your dog has liver disease or problems, you’ll want to find a high-quality hepatic dog food for their regular meals. But what exactly does this mean, and what should you look for when sourcing this food?</p>
      <p>Let’s lay out the main attributes of a hepatic diet, i.e. the best food for your dog’s liver problems:</p>
      <p>Usually, a hepatic dog food has:</p>
      <ul>
        <li>Low protein. Unlike regular dog food, an effective dog food for liver disease won’t contain high levels of protein, as processing protein presents a challenge for a damaged or struggling liver. The protein that is present will come from gently digestible ingredients such as cod, peas or eggs. Occasionally meat such as chicken or ostrich may be used - but red meat should be avoided.</li>
        <li>Easily digestible. Everything in a hepatic dog food should be as gentle as possible for a dog’s body to digest.</li>
        <li>Low levels of copper. In some instances, copper build-up can cause the liver to dysfunction. For this reason, hepatic food avoids high levels of copper.</li>
        <li>High zinc content. Zinc helps to further counteract any copper build-up in the liver.</li>
        <li>Delicious flavours. As dogs with liver function have a decreased appetite, it’s important for their food to taste irresistible.</li>
      </ul>
      <h3 id="is-low-protein-dog-food-good-for-liver-disease">is-low-protein-dog-food-good-for-liver-disease</h3>
      <p>Though protein-heavy food is usually recommended for dogs of standard health, for dogs with liver dysfunction it tends to be the opposite. The liver works especially hard to process protein, so reducing the amount it has to work with means your dog’s body isn’t being put under stress that it can’t handle.</p>
      <p>Protein is still an essential food group however, so dog food for liver disease will usually derive protein from small amounts of fish, eggs or peas as an alternative to red meat or offal.</p>
      <h2 id="what-food-can-i-give-my-dog-with-liver-disease">what-food-can-i-give-my-dog-with-liver-disease</h2>
      <p>So exactly what kind of food should you go for that supports a liver-friendly, hepatic diet for dogs?</p>
      <ul>
        <li>It’s important to avoid cheap commercial dog food if your pooch has special dietary needs for liver function, as it often contains preservatives, sugars and filler ingredients that serve no value to your dog’s liver. Commercial dog foods have to pass certain standards to be deemed a complete and balanced diet, but most cheap brands simply won’t have a suitable option for your pooch’s niche requirements.</li>
      </ul>
      <ul>
        <li>If you’re a fan of homemade or raw food for dogs (sometimes called the BARF diet) things can be tricky, as preparing a hepatic diet can be more time-consuming and harder to balance than choosing a high-quality, ready-made dog food. Some pooch parents like to know exactly what’s in their dog’s meals however, so if you’d like to stick to homemade or raw food, chat to a pet nutritionist first to ensure you get meals exactly right.</li>
      </ul>
      <ul>
        <li>If your dog has liver issues, going for a premium-quality, specialist dog food that comes recommended by vets is the best way to go. The right food should be an integral part of your dog’s treatment - boosting their energy and protecting them from sickness, stomach upsets and any low mood that might come from their liver problems. It should also be extra appetising so that your dog is enticed to eat it, even when they don’t feel hungry.</li>
      </ul>
      <p>For dogs with liver issues who also have a grain allergy or who prefer a grain-free diet, Pooch & Mutt offers a vet recommended, specialist dog food for liver disease that contains zero grain. Our Veterinary Food for Liver Disease uses the specifications of a hepatic diet for healthy liver function and is entirely grain-free. What’s more, unlike other prescription hepatic foods, we’ve boosted flavour by adding delicious chicken skin and salmon oil - the perfect amount of succulent fats to make it irresistible to dogs who may have gone off their food. To top it off, we’ve added milk thistle - its nutrients are excellent for liver function.</p>
      <h3 id="can-my-dog-eat-hepatic-dog-food-for-liver-disease-and-problems">can-my-dog-eat-hepatic-dog-food-for-liver-disease-and-problems</h3>
      <p>If your vet has instructed that your pooch eat hepatic dog food, then a premium specialist hepatic food such as our Pooch & Mutt Vet range should be fine, but chat it over with your vet first to be sure.</p>
      <p>Hepatic dog food is usually prescribed for dogs with the following conditions:</p>
      <b>Chronic liver (hepatic) insufficiency</b>
      <b>Portosystemic shunt (PSS)</b>
      <b>Hepatic encephalopathy</b>
      <b>Convalescence following intoxication</b>
      <p>If your dog doesn’t have liver problems, do not feed them hepatic dog food as it doesn’t contain the right balance of ingredients to support a standard dog diet and they could become unwell.</p>
      <h3 id="are-blueberries-good-for-dogs-with-liver-disease">are-blueberries-good-for-dogs-with-liver-disease</h3>
      <p>Not only are blueberries deemed a ‘superfood’ for humans, in moderation they are packed full of benefits for dogs too - and are even recommended for boosting liver function in dogs. Blueberries contain anthocyanins - clever antioxidants that protect the liver from oxidative stress; and also Vitamin K, which is especially good for liver health.</p>
      <h3 id="is-peanut-butter-good-for-dogs-with-liver-disease">is-peanut-butter-good-for-dogs-with-liver-disease</h3>
      <p>Peanut butter is generally safe to give your dog, however unprocessed peanut butter is not recommended for liver disease and it's always best to check the packaging for any harmful substances.</p>
      <p>Unprocessed peanut butter contains aflatoxins which is a cancer-causing mycotoxin that often targets the liver.</p>
      <p>The FDA (US Food and Drug Administration) warns that acute, prolonged exposure to aflatoxins “inhibit the normal functions of the liver, including carbohydrate and lipid metabolism and protein synthesis.”</p>
      <p>Finally, any peanut butter brand that contains Xylitol - an artificial sweetener that is fine for humans, but toxic to dogs - should definitely be avoided, as Xylitol has also been reported to contribute to liver failure.</p>
      <p>If your dog is craving peanut butter, our dental sticks are a great option for those with hepatic disease as they're low in protein too.</p>
      <h3 id="are-bananas-good-for-dogs-with-liver-disease">are-bananas-good-for-dogs-with-liver-disease</h3>
      <p>Bananas sometimes get a bad rep for being relatively high fat and high sugar, but they’re high in B vitamins and a safe snack for dogs with liver disease when given in moderation.</p>
      <h3 id="are-eggs-good-for-dogs-with-liver-disease">are-eggs-good-for-dogs-with-liver-disease</h3>
      <p>Eggs are one of the best sources of protein for dogs with liver disease. As they’re nutrient-rich and gentle on digestion, eggs are a tasty alternative to meat protein sources (especially red meat) as part of a hepatic diet.</p>
      <h3 id="are-sweet-potatoes-good-for-dogs-with-liver-disease">are-sweet-potatoes-good-for-dogs-with-liver-disease</h3>
      <p>Yummy sweet potatoes are packed with B vitamins which help support liver function, so it’s a great food option for a dog with liver disease. It’s also rich in starch and a good source of complex carbohydrates.</p>
      <h3 id="what-foods-should-dogs-with-liver-disease-avoid">what-foods-should-dogs-with-liver-disease-avoid</h3>
      <p>There’s lots of reasons dogs develop liver disease, and this can dictate what foods they should and shouldn’t eat. Some dogs have liver dysfunction due to copper build-up, for instance, so need to avoid foods rich in copper - but for other dogs, this may not be the case. Always talk to your vet to get specific recommendations over the needs of your pooch.</p>
      <p>Usually, dogs with liver disease are recommended to avoid:</p>
      <ul>
        <li>Foods high in copper or salt, such as lamb, duck, pork and offal</li>
        <li>Red meats high in protein, such as beef</li>
        <li>Dog food containing meat meal, preservatives, artificial ingredients and high sugar</li>
        <li>Table scraps and human leftovers</li>
        <li>Xylitol, the artificial sweetener (this should always be avoided by all dogs).</li>
      </ul>
      <p>If your pooch has a poorly liver, you may be nervous over whether they’re eating the best food for their condition, especially as dogs with liver dysfunction suffer from a suppressed appetite. With the right specialist dog food, however, you needn’t worry - as they’ll be getting the exact right balance of food groups and nutrients to support their liver’s needs and boost their health and wellbeing overall.</p>
      <p>Pooch & Mutt’s Veterinary Range has been developed for a variety of specific health conditions in dogs - including our Hepatic/Liver Veterinary Food which contains all the active ingredients and specifications of a prescription dog food on a tasty, grain-free base. With added chicken skin and salmon oil, your pooch will be licking the bowl clean every mealtime.</p>
      <p>If you're worried your pooch might be suffering with liver problems, take a look at our blog post all about liver disease in dogs.</p>
      <section>References</section>
`,
  headings: [
    { id: 'nutritional-requirements-for-dog-food-for-liver-disease', text: 'nutritional-requirements-for-dog-food-for-liver-disease', level: 2 },
    { id: 'best-dog-food-for-liver-disease-and-problems', text: 'best-dog-food-for-liver-disease-and-problems', level: 2 },
    { id: 'is-low-protein-dog-food-good-for-liver-disease', text: 'is-low-protein-dog-food-good-for-liver-disease', level: 3 },
    { id: 'what-food-can-i-give-my-dog-with-liver-disease', text: 'what-food-can-i-give-my-dog-with-liver-disease', level: 2 },
    { id: 'can-my-dog-eat-hepatic-dog-food-for-liver-disease-and-problems', text: 'can-my-dog-eat-hepatic-dog-food-for-liver-disease-and-problems', level: 3 },
    { id: 'are-blueberries-good-for-dogs-with-liver-disease', text: 'are-blueberries-good-for-dogs-with-liver-disease', level: 3 },
    { id: 'is-peanut-butter-good-for-dogs-with-liver-disease', text: 'is-peanut-butter-good-for-dogs-with-liver-disease', level: 3 },
    { id: 'are-bananas-good-for-dogs-with-liver-disease', text: 'are-bananas-good-for-dogs-with-liver-disease', level: 3 },
    { id: 'are-eggs-good-for-dogs-with-liver-disease', text: 'are-eggs-good-for-dogs-with-liver-disease', level: 3 },
    { id: 'are-sweet-potatoes-good-for-dogs-with-liver-disease', text: 'are-sweet-potatoes-good-for-dogs-with-liver-disease', level: 3 },
    { id: 'what-foods-should-dogs-with-liver-disease-avoid', text: 'what-foods-should-dogs-with-liver-disease-avoid', level: 3 },
  ]
},



'what-is-gastrointestinal-dog-food': {
  title: 'What is gastrointestinal dog food?',
  category: 'Pets',
  snippet: "Snippet not found",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/VET-RANGE-GASTROINTESTINAL-BLOG-1_500x_crop_center.jpg?v=1682958290",
    alt: "What is gastrointestinal dog food?",
    caption: "nutrition-and-diet-for-dogs-with-gastrointestinal-problems"
  },
  content: `
<p>Everyone knows gastrointestinal issues are nasty, and when your dog suffers from them regularly it can be distressing for both you and your poor pooch. Gastroenteritis can be a short-term or persistent issue, depending on your dog’s health condition and whether they have a particularly sensitive stomach. If you’ve already established that your dog has repeated issues with vomiting, diarrhoea and a sore belly, you might be wondering, what do I feed a dog with gastrointestinal problems?</p>
      <p>Read on for our rundown on the best food for dogs with gastrointestinal issues, because as always - a dog’s health, happiness and wellbeing begins with what they eat every day.</p>
      <h2 id="nutrition-and-diet-for-dogs-with-gastrointestinal-problems">nutrition-and-diet-for-dogs-with-gastrointestinal-problems</h2>
      <p>A dog tummy that’s easily triggered needs careful consideration when it comes to diet and nutrition. If your dog has gastrointestinal problems, they should have a strict feeding routine that’s nearly always the same, to have the most reduced chance of stomach stress.</p>
      <p>Overall, you should avoid feeding them sugary treats or human scraps. Quite often, stomach issues in dogs can come from too little exposure to a certain food group, or too much of something else, such as sugar or fats.</p>
      <h3 id="do-dogs-with-gastrointestinal-problems-need-low-fat-dog-food">do-dogs-with-gastrointestinal-problems-need-low-fat-dog-food</h3>
      <p>The general consensus among experts is that high levels of fat can cause havoc with a dog’s gut, so if your dog suffers from gastrointestinal problems on the regular, you should be choosing a dog food with low fat levels to curb any nasty intestinal triggers. This is a particular problem with dogs who have pancreatitis, as an excess of fat is often what causes the illness and it can severely exacerbate its symptoms.</p>
      <h3 id="what-to-feed-a-dog-with-pancreatitis">what-to-feed-a-dog-with-pancreatitis</h3>
      <p>Pancreatitis is a potentially serious condition affecting the pancreas and how a dog produces certain vital enzymes for digestion. If gone untreated it can be life-threatening, so if your dog has suffered from it in the past, be extremely vigilant over what they’re fed. This generally means no human food, no fatty foods, and choosing a prescription or specialist dog food that contains no more than 10% fat as part of their daily treatment.</p>
      <p>Aside from this, be sure to let family, friends and well-meaning house guests know that sneaking your pooch some chicken skin or sausage roll under the table isn’t doing them any favours, it could actually do them serious harm.</p>
      <h2 id="food-for-dogs-with-gastrointestinal-problems-or-pancreatitis">food-for-dogs-with-gastrointestinal-problems-or-pancreatitis</h2>
      <p>We’ve established that dogs with gastrointestinal problems or pancreatitis need special care, especially when it comes to what they eat. As well as avoiding human scraps, fatty treats or junk food, they should be fed dog food that is formulated specifically for turbulent tummies.</p>
      <ul>
        <li>If you feed your dog commercial pet food, be particularly diligent over reading the label and nutrition information. Don’t choose a cheap food that contains preservatives, artificial ingredients or ‘filler’ products - the food should contain a high level of lean proteins, have low fat and be of a premium quality.</li>
      </ul>
      <ul>
        <li>You may be using a prescription or specialist dog food, recommended by your vet - this is usually the case when a dog is diagnosed with ongoing gastrointestinal issues or pancreatitis. Common brands include Royal Canin and Hill’s Prescription Diet. These brands of dog food all contain varied fat content, so listen to your vet’s instructions over what level of fat they recommend for your specific pooch. At Pooch & Mutt we offer a veterinary range of dog food for gastroenteritis which is grain-free - read on for more information about whether this could suit your dog.</li>
      </ul>
      <ul>
        <li>Some pooch parents are fans of homemade food for their dogs or they feed them a raw food diet (also called BARF diet). This is a time-consuming option and again it’s never certain how much fat, carbohydrates, vitamins or minerals are going into your dog’s meals when you prepare food this way - but some owners feel more comfortable knowing they’re in total control of their dog’s food content. We recommended you speak to a vet or a dog nutritionist first if you’d like to take this route.</li>
      </ul>
      <h2 id="choosing-the-best-dog-food-for-gastrointestinal-problems-or-pancreatitis">choosing-the-best-dog-food-for-gastrointestinal-problems-or-pancreatitis</h2>
      <p>If your dog has gastrointestinal problems or pancreatitis, their specific needs can vary from dog to dog. Overall, the most vital thing is that the food is of a high quality, has a low fat content and contains natural, nutritious ingredients that are targeted towards digestive health.</p>
      <p>A lot of vets recommend any premium quality gastrointestinal food that has a fat level of 18% and below - but for some dogs with severe pancreatitis, this threshold can go as low as 10%.</p>
      <p>Pooch & Mutt’s Vet Range for Gastroenteritis has been designed with the above criteria in mind. It contains only 15% fat, and prebiotics and probiotics to restore balance in the gut microbiome. It’s also grain-free, so that dogs with an allergy or intolerance to grain, or who just prefer the effects of a grain-free diet, get even more digestive benefits.</p>
      <p>Note that as our dog food for gastroenteritis contains 15% fat, it’s suitable for any dogs who have received veterinary guidance to eat food of that fat level - not those who have been advised to eat food of 10% fat or below.</p>
      <h3 id="what-is-gastrointestinal-dog-food">what-is-gastrointestinal-dog-food</h3>
      <p>Basically, if your pooch has gastrointestinal issues, a gastrointestinal dog food should provide their safest source of complete nutrition to keep them healthy, energised and without stomach upsets.</p>
      <p>Dogs that would benefit from gastrointestinal food include the following:</p>
      <ul>
        <li>They have an ongoing sensitive stomach, therefore suffer regular bouts of vomiting, diarrhoea, mucus in their stools or other intestinal nasties</li>
        <li>They suffer from pancreatitis or another diagnosed gut disorder</li>
        <li>They’ve just suffered from a random, short-term vomiting bug or illness</li>
        <li>They have a diagnosed chronic GI disorder such as EPI (Exocrine Pancreatic Insufficiency), IBD (Inflammatory Bowel Disease) and SIBO (Small Intestinal Bacterial Overgrowth).</li>
      </ul>
      <h3 id="what-does-gastrointestinal-dog-food-do">what-does-gastrointestinal-dog-food-do</h3>
      <p>Specialist food for dogs with gastrointestinal problems will contain specific ingredients, chosen for their effectiveness in easing a dodgy tum. These include:</p>
      <ul>
        <li>Lean proteins such as chicken, turkey or fish, for building strength and repair</li>
        <li>Probiotics and prebiotics to restore harmony in gut bacteria and replenish gut cells</li>
        <li>Vitamins and minerals to nourish your dog, keeping them comfortable and well during recovery</li>
        <li>Low fat, as fat is a trigger for dogs who suffer from internal tummy troubles</li>
      </ul>
      <p>Pooch & Mutt Gastrointestinal Veterinary Food is also enriched with electrolytes to help replace those lost during episodes of vomiting or diarrhoea. On top of this, there is lots of fibre to help solidify stools and prevent anal gland disease.</p>
      <h3 id="alternative-to-royal-canin-gastrointestinal-low-fat-dog-food">alternative-to-royal-canin-gastrointestinal-low-fat-dog-food</h3>
      <p>The pet food brand Royal Canin has a popular low fat dog food for dogs with gastrointestinal issues. For dogs who eat grain or are prone to acute pancreatitis, Royal Canin could be a sensible option, as it only contains 7% fat.</p>
      <p>If your dog is on a grain-free diet, however - perhaps because they have a grain allergy or you’ve discovered grain to be tougher on your dog’s digestion - and your dog has been recommended to eat a gastrointestinal dog food of 15% fat or less, Pooch & Mutt’s Vet dog food for Gastroenteritis is a tasty and effective alternative.</p>
      <h2 id="dog-gastro-diet-faqs">dog-gastro-diet-faqs</h2>
      <p>Phew! We’ve almost covered everything, but to finish off, here are some commonly asked questions about putting a dog on a gastrointestinal diet:</p>
      <h3 id="can-i-continually-feed-my-dog-gastrointestinal-food">can-i-continually-feed-my-dog-gastrointestinal-food</h3>
      <p>If your pooch has been diagnosed with ongoing gastrointestinal problems or pancreatitis, they’ll likely have to be on a prescribed diet of specialist food indefinitely. In these cases it’s fine to continually feed this food to your dog - just be sure to have regular check-ups with your vet.</p>
      <p>If you’re feeding your dog a gastroenteritis food based on a short-term bout of illness however, it should be ok to wean them back to their regular food within a couple of weeks, or when they appear to have recovered. Chat to your vet if you’re not 100% sure.</p>
      <h3 id="how-long-can-i-feed-my-dog-gastrointestinal-food">how-long-can-i-feed-my-dog-gastrointestinal-food</h3>
      <p>As above, it depends on the severity of your dog’s condition. Dogs with diagnosed stomach conditions should probably stay on prescribed gastrointestinal food indefinitely, however if your dog is usually strong-stomached and has just had a tummy bug, it’s not recommended to continually feed your dog gastrointestinal food as it’s not suitable for them. You should move back onto their regular food shortly after recovery.</p>
      <h3 id="what-treats-can-you-give-a-dog-with-pancreatitis">what-treats-can-you-give-a-dog-with-pancreatitis</h3>
      <p>All dogs deserve treats! Even those with stomachs that can’t handle sugary, fatty foods - and luckily there are treats made especially for intestinally sensitive pooches. If you’re wondering what treats to feed a dog with pancreatitis, be sure they’re low fat, have no added sugar and are free of junk and preservatives.</p>
      <p>In summary…</p>
      <p>Having a dog with tummy issues can be scary, as it’s a lot of pressure to feed your dog exactly the right thing. Armed with the right information, however, it needn’t be this way. Once you’ve picked a healthy and reliable dog food that’s formulated specifically for your dog’s needs, you can put your mind at ease that you’re doing the best you can for their ongoing gut rumbles.</p>
      <p>If your dog has been recommended a special diet for their gastrointestinal problems and requires a food containing no more than 15% fat, our new Pooch & Mutt Gastrointestinal Veterinary Food is just the ticket. You can even use it short-term if your usually strong-stomached dog has suffered a bout of sickness. Our specialist grain-free vet range has a specialist recipe for all kinds of health conditions - browse the full collection here.</p>
      <section>References</section>
`,
  headings: [
    { id: 'nutrition-and-diet-for-dogs-with-gastrointestinal-problems', text: 'nutrition-and-diet-for-dogs-with-gastrointestinal-problems', level: 2 },
    { id: 'do-dogs-with-gastrointestinal-problems-need-low-fat-dog-food', text: 'do-dogs-with-gastrointestinal-problems-need-low-fat-dog-food', level: 3 },
    { id: 'what-to-feed-a-dog-with-pancreatitis', text: 'what-to-feed-a-dog-with-pancreatitis', level: 3 },
    { id: 'food-for-dogs-with-gastrointestinal-problems-or-pancreatitis', text: 'food-for-dogs-with-gastrointestinal-problems-or-pancreatitis', level: 2 },
    { id: 'choosing-the-best-dog-food-for-gastrointestinal-problems-or-pancreatitis', text: 'choosing-the-best-dog-food-for-gastrointestinal-problems-or-pancreatitis', level: 2 },
    { id: 'what-is-gastrointestinal-dog-food', text: 'what-is-gastrointestinal-dog-food', level: 3 },
    { id: 'what-does-gastrointestinal-dog-food-do', text: 'what-does-gastrointestinal-dog-food-do', level: 3 },
    { id: 'alternative-to-royal-canin-gastrointestinal-low-fat-dog-food', text: 'alternative-to-royal-canin-gastrointestinal-low-fat-dog-food', level: 3 },
    { id: 'dog-gastro-diet-faqs', text: 'dog-gastro-diet-faqs', level: 2 },
    { id: 'can-i-continually-feed-my-dog-gastrointestinal-food', text: 'can-i-continually-feed-my-dog-gastrointestinal-food', level: 3 },
    { id: 'how-long-can-i-feed-my-dog-gastrointestinal-food', text: 'how-long-can-i-feed-my-dog-gastrointestinal-food', level: 3 },
    { id: 'what-treats-can-you-give-a-dog-with-pancreatitis', text: 'what-treats-can-you-give-a-dog-with-pancreatitis', level: 3 },
  ]
},



'how-to-store-wet-dog-food': {
  title: 'How to Store Wet Dog Food',
  category: 'Pets',
  snippet: "Snippet not found",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/HOW-TO-STORE-WET-FOOD-BLOG-1_500x_crop_center.jpg?v=1680187943",
    alt: "How to Store Wet Dog Food",
    caption: "how-do-you-store-wet-dog-food"
  },
  content: `
<p>Does your pooch go crazy for their meaty and delicious wet food diet? We’re not surprised - wet food for dogs has a delectable texture, tastes yummy and smells so good to dogs that it can alert them of dinnertime from the other side of the house. That said, the nature of wet food means it can go off easily, and even dry up and spoil if left too long in the dog bowl.</p>
      <p>So how can you make sure your dog’s wet food stays tasty, appetising, and retains its nutritional integrity for as long as possible? Read on for our easy tips on how to successfully store wet dog food to keep it fresher for longer.</p>
      <h2 id="how-do-you-store-wet-dog-food">how-do-you-store-wet-dog-food</h2>
      <p>Wet food comes in all kinds of containers, from sachets and pouches to tubs and cans. Check the side of the packaging to learn specifics on how to store it, but overall, you can’t go wrong by storing it in a cool, dry place, such as a kitchen cupboard or a pantry with a secure door.</p>
      <p>Unopened wet dog food generally has a long shelf life - up to two years, if stored correctly - and makes for a long-lasting, economic option for your dog’s diet as you can stockpile while knowing it won’t lose nutrition, start to smell or go off.</p>
      <h3 id="where-to-store-wet-dog-food">where-to-store-wet-dog-food</h3>
      <p>Try to store your unopened wet dog food in a cool, dry place away from direct sunlight - such as in a dedicated food cupboard or pantry or even in a basement or garage.</p>
      <h3 id="does-wet-dog-food-need-to-be-refrigerated">does-wet-dog-food-need-to-be-refrigerated</h3>
      <p>There’s no need for unopened wet food to be refrigerated - it’s actually at its tastiest when first opened and served at room temperature. As mentioned, store unopened wet food in a cool, dry place away from bright lights. When opened, however, it will need to be refrigerated to stay palatable and safe.</p>
      <h2 id="how-to-store-opened-wet-dog-food">how-to-store-opened-wet-dog-food</h2>
      <p>When you’ve opened wet dog food, the stakes are a little higher. After serving your dog some wet food from a pouch, you’ll want to put the remaining food in a separate, airtight container, such as a ziplock food bag, and store it in the fridge. If the food is canned, you can also use one of those nifty plastic lids and place the can in the fridge.</p>
      <p>The most important thing is that the container is adequately sealed, as exposure to oxygen will mean it spoils much faster (not to mention an open dog food container will have your fridge smelling like a dog’s dinner each time the door is opened).</p>
      <h3 id="does-opened-wet-dog-food-need-to-be-refrigerated">does-opened-wet-dog-food-need-to-be-refrigerated</h3>
      <p>It’s really important to store wet dog food in the refrigerator once it’s been opened. This is because wet food exposed to the open air is more likely to spoil, attract bacteria and/or dry up, which ruins the texture and flavour of the food for your dog. In the fridge and stored in an adequate, airtight container, the wet food should last up to a week, retain its nutrition and still be palatable for your hungry pup.</p>
      <p>If you’ve heated refrigerated wet dog food to raise it to room temperature, do NOT refrigerate after this; simply throw the leftovers away.</p>
      <h3 id="how-long-can-i-keep-wet-dog-food-in-the-fridge">how-long-can-i-keep-wet-dog-food-in-the-fridge</h3>
      <p>In general, opened wet food should last for up to seven days when refrigerated - but the longer it’s left, the more it declines in taste and quality. If your pooch eats wet food for most meals, it’s likely to be gobbled up within a couple of days anyway, however if you only use a bit at a time (for a topper to dry food, perhaps), you’ll want to be more aware of how long the food has been sitting there, and throw it away when it’s past its best.</p>
      <p>We recommend only keeping refrigerated wet dog food for up to two days. A helpful tip to keep track is to make a note of when the food was placed in the fridge, perhaps on a sticky label that you can attach to the container or airtight bag.</p>
      <h3 id="how-long-can-you-keep-wet-dog-food-out">how-long-can-you-keep-wet-dog-food-out</h3>
      <p>When your dog leaves wet food in the bowl, maybe because they never eat a whole portion or if they’re a grazer, there’s not much time until the food starts to spoil. Wet food left in a bowl will dry up and lose its flavour in only a few hours, in fact - so if your pooch hasn’t eaten it by the end of the day, you should wash up the bowl and throw any leftover wet food in the bin before serving up your pooch’s next meal.</p>
      <h2 id="faqs">faqs</h2>
      <p>Here are a couple of quick answers to commonly asked questions around storing your dog’s wet food…</p>
      <h3 id="can-you-freeze-pooch-and-mutt-wet-dog-food">can-you-freeze-pooch-and-mutt-wet-dog-food</h3>
      <p>We don’t recommend freezing our natural, grain-free wet dog food; it will somewhat change the texture when it thaws and you’ll need to defrost using a pan of hot water. We suggest keeping unopened Pooch & Mutt wet dog food in a cool, dry place and when opened, refrigerate and use up within two days.</p>
      <h3 id="how-to-tell-if-wet-dog-food-has-gone-bad">how-to-tell-if-wet-dog-food-has-gone-bad</h3>
      <p>If unopened wet dog food is past the use-by date on the packaging, you’ll want to dispose of it. As wet food has a long shelf life, a pouch or can past this date will contain food that is very old indeed.</p>
      <p>For wet food, you’ll know it isn’t fit for your dog’s consumption by a dry, dehydrated appearance; instead of a fresh, meaty aroma it will smell of nothing, or else just unpleasant, and it will likely grey and go off-colour. Of course, if mould has developed, or if your dog has become sick after eating, this is also a sure sign to throw it away.</p>
      <p>For a varied choice of delicious, nutritious wet food that always tastes good (when stored correctly!), browse our grain-free wet dog food collection - every recipe is packed with natural ingredients, vitamins and minerals to keep your dog happy, energised and healthy.</p>
`,
  headings: [
    { id: 'how-do-you-store-wet-dog-food', text: 'how-do-you-store-wet-dog-food', level: 2 },
    { id: 'where-to-store-wet-dog-food', text: 'where-to-store-wet-dog-food', level: 3 },
    { id: 'does-wet-dog-food-need-to-be-refrigerated', text: 'does-wet-dog-food-need-to-be-refrigerated', level: 3 },
    { id: 'how-to-store-opened-wet-dog-food', text: 'how-to-store-opened-wet-dog-food', level: 2 },
    { id: 'does-opened-wet-dog-food-need-to-be-refrigerated', text: 'does-opened-wet-dog-food-need-to-be-refrigerated', level: 3 },
    { id: 'how-long-can-i-keep-wet-dog-food-in-the-fridge', text: 'how-long-can-i-keep-wet-dog-food-in-the-fridge', level: 3 },
    { id: 'how-long-can-you-keep-wet-dog-food-out', text: 'how-long-can-you-keep-wet-dog-food-out', level: 3 },
    { id: 'faqs', text: 'faqs', level: 2 },
    { id: 'can-you-freeze-pooch-and-mutt-wet-dog-food', text: 'can-you-freeze-pooch-and-mutt-wet-dog-food', level: 3 },
    { id: 'how-to-tell-if-wet-dog-food-has-gone-bad', text: 'how-to-tell-if-wet-dog-food-has-gone-bad', level: 3 },
  ]
},



'can-dogs-eat-cat-food-and-cats-eat-dog-food': {
  title: 'Can dogs eat cat food and vice versa?',
  category: 'Pets',
  snippet: "Snippet not found",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/CAN-DOGS-EAT-CAT-FOOD-1_500x_crop_center.jpg?v=1680186921",
    alt: "Can dogs eat cat food and vice versa?",
    caption: "what-is-the-difference-between-cat-and-dog-food"
  },
  content: `
<p>Though culturally seen as firm frenemies, pet parents who own both dogs and cats will know that their infamous rivalry is only a bit true. Dogs and cats can happily coexist in the same home with no issues - except when it comes to sharing food.</p>
      <p>If your dog and cat dine in close proximity and one has wandered over into a bowl not their own,  you may have pondered: can dogs even eat cat food? Can cats eat dog food? Will anything happen to my dog or my cat if their food gets mixed up?</p>
      <p>These are fair questions, so to put your mind at ease, read on to be clued up on the difference between dog food and cat food.</p>
      <h2 id="what-is-the-difference-between-cat-and-dog-food">what-is-the-difference-between-cat-and-dog-food</h2>
      <p>The main difference between dog food and cat food is based on the fact that dogs are omnivores; meaning they eat a combination of animal-based food and plant-based food; and cats are carnivores, so only eat fish and meat.</p>
      <h3 id="protein-levels">protein-levels</h3>
      <p>Because cats need to get all of their nutrients from meat, naturally their food contains a higher amount of protein than dog food. Commercial dog food will contain a mix of proteins, carbs, fruit, vegetables and other plants intended to provide them with a varied mix of nutrients.</p>
      <h3 id="taste">taste</h3>
      <p>A higher level of meat/protein means cat food tends to contain more fat. Unsurprisingly, this meat-heavy, fatty food is truly delicious to dogs - so it’s very likely that if your dog comes across a bowl of cat food, he will enthusiastically gobble it up.</p>
      <h3 id="nutritional-value">nutritional-value</h3>
      <p>Another key element in cat and dog nutrition is that dogs require 10 amino acids to come from their diet, whereas cats require 11 - the extra one being taurine. Additionally, some of the amino acids they both need, such as arginine, are naturally produced in a dog’s body in higher amounts - whereas a cat needs to acquire them through food.</p>
      <p>For this reason, food for cats is purposely created to provide these 11 amino acids through meat proteins, whereas commercial dog food provides the 10 they need through both meat and plant-based ingredients.</p>
      <p>Read more about the specific nutrients, vitamins and minerals that dogs need</p>
      <h2 id="can-a-cat-eat-dog-food">can-a-cat-eat-dog-food</h2>
      <p>A cat can eat a dog’s food as a one-off, but it won’t have enough nutritional value to the cat, so should never be used long-term as a replacement for ‘real’ cat food.</p>
      <h3 id="is-dog-food-bad-for-cats">is-dog-food-bad-for-cats</h3>
      <p>Cats require more fat, protein and amino acids than dog food provides, so a cat that eats a dog’s food will be left nutritionally deficient. A long-term diet of only dog food can even prove fatal to the poor moggie.</p>
      <p>If a cat has eaten your dog’s food one time, it shouldn’t do the cat much harm - but be sure to switch to something more nutritious, such as hypoallergenic cat food as soon as possible.</p>
      <h2 id="can-a-dog-eat-cat-food">can-a-dog-eat-cat-food</h2>
      <p>A dog sure can eat cat food - with the higher fat and protein content found in commercial cat food, dogs tend to find it tastier and more appetising than their regular dog food. Whether that tasty, fatty cat food is good for the dog, however, is another matter!</p>
      <h3 id="is-cat-food-bad-for-dogs">is-cat-food-bad-for-dogs</h3>
      <p>As cats are wholly carnivores with no real need for fruits and vegetables in their diet, their regular cat food doesn’t contain these ingredients - so can be detrimental to a dog’s health.</p>
      <p>The high amount of fat also found in cat food will cause weight gain in a dog over time, likely to make them slow and lethargic. There’s a host of other risks: it can trigger stomach upset in a dog with a sensitive stomach, boost an overweight dog’s chance of pancreatitis (a condition common in dogs who consume a lot of fat) or worsen the condition of a dog with liver or kidney disease.</p>
      <p>Our advice? Best to stick to hypoallergenic dog food that is packed full of the goodness your dog needs.</p>
      <h3 id="when-is-it-ok-to-give-a-dog-cat-food">when-is-it-ok-to-give-a-dog-cat-food</h3>
      <p>There are certain exceptional circumstances in which cat food might be a viable alternative to dog food for a dog. If your dog has been ill and needs to gain weight, has cancer, or suffers from muscle loss or a lack of appetite, tempting them with cat food could be a good idea to get them eating again. However, we always recommend consulting with your Vet first before making any such changes.</p>
      <h3 id="my-dog-ate-cat-food---what-to-do">my-dog-ate-cat-food---what-to-do</h3>
      <p>If you’ve gasped at the sight of your dog hoovering the cat’s food into his hungry chops, don’t worry about it too much. Your pooch has enjoyed a delicious treat meal, at least - but be sure this doesn’t become a habit.</p>
      <p>Don’t feed your dog cat food as a regular meal, but be sure they’re eating nutrient-packed dog food with the optimal levels of fat, protein and veggies so they stay lean, energetic and sharp in both body and mind.</p>
      <p>Did you hear: our Pooch & Mutt range isn’t just for dogs!? To ensure your dog and cat are getting the nutrients intended for their specific dietary needs, check our range of hypoallergenic food for dogs - and our delicious dry food for cats.</p>
      <section>References</section>
`,
  headings: [
    { id: 'what-is-the-difference-between-cat-and-dog-food', text: 'what-is-the-difference-between-cat-and-dog-food', level: 2 },
    { id: 'protein-levels', text: 'protein-levels', level: 3 },
    { id: 'taste', text: 'taste', level: 3 },
    { id: 'nutritional-value', text: 'nutritional-value', level: 3 },
    { id: 'can-a-cat-eat-dog-food', text: 'can-a-cat-eat-dog-food', level: 2 },
    { id: 'is-dog-food-bad-for-cats', text: 'is-dog-food-bad-for-cats', level: 3 },
    { id: 'can-a-dog-eat-cat-food', text: 'can-a-dog-eat-cat-food', level: 2 },
    { id: 'is-cat-food-bad-for-dogs', text: 'is-cat-food-bad-for-dogs', level: 3 },
    { id: 'when-is-it-ok-to-give-a-dog-cat-food', text: 'when-is-it-ok-to-give-a-dog-cat-food', level: 3 },
    { id: 'my-dog-ate-cat-food---what-to-do', text: 'my-dog-ate-cat-food---what-to-do', level: 3 },
  ]
},
'dogs-anal-glands-common-problems-treatment': {
  title: 'Dog’s Anal Glands: Common Problems & Treatment',
  category: 'Pets',
  snippet: "Snippet not found",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/ANAL-GLANDS-BLOG-image_500x_crop_center.jpg?v=1657637910",
    alt: "Dog’s Anal Glands: Common Problems & Treatment",
    caption: "what-are-anal-glands-in-dogs"
  },
  content: `
<p>For some individual pets, anal glands can become problematic and owners must be aware of what they are and what can go wrong with them.</p>
      <div>Play Video</div>
      <h2 id="what-are-anal-glands-in-dogs">what-are-anal-glands-in-dogs</h2>
      <p>Dog anal glands are small sacs; about the size of a cherry, that sit inside the anus. If we were to say the anus was a clock face, the glands are found at about 4 and 8 o’clock.</p>
      <p>The sacs are lined with sebaceous glands and they produce a strong, foul-smelling liquid that dogs use to mark territory and communicate with other dogs in the vicinity.</p>
      <p>Anal glands cannot be seen externally and can only be felt by inserting fingers into the anus.  This is done with a gloved hand, using lubricant to minimise discomfort.</p>
      <h2 id="what-causes-anal-gland-problems-in-dogs">what-causes-anal-gland-problems-in-dogs</h2>
      <ul>
        <li>Blockages</li>
      </ul>
      <div>Sometimes, the fluid inside the gland is not expressed and it builds up, causing a blockage.</div>
      <ul>
        <li>Infections
The gland can become infected, leading to discomfort, an elevated temperature and swelling of the gland.</li>
      </ul>
      <ul>
        <li>Ruptured abscesses
An advanced infection can cause the gland to swell with pus and to then ulcerate onto the skin. The owner will see a small hole in the skin that is oozing blood and pus.</li>
      </ul>
      <ul>
        <li>Cancer
An adenocarcinoma is the most common type of tumour to affect the anal sac. These tumours frequently cause elevated calcium levels and signs such as excess thirst and weakness.</li>
      </ul>
      <h2 id="symptoms-of-blocked-anal-glands-in-dogs">symptoms-of-blocked-anal-glands-in-dogs</h2>
      <p>One of the quintessential signs of anal gland issues is ‘the scoot’. Scooting or bum dragging is a dog’s way of trying to relieve the irritation they are feeling. Many owners mistakenly assume that this is a sign of worms, but it is simply an indication that the anal area is very irritated.</p>
      <p>You might notice your dog sitting down abruptly and/or quickly looking behind them with an alert or concerned expression on their face.</p>
      <p>A swelling may be visible around the anus and we might also detect a fishy smelling, brown discharge being leaked from the anus.</p>
      <p>Some dogs will stretch to lick and chew at their back end. While some can reach, others may lick and chew their rump and legs instead. This can lead to fur loss and red skin.</p>
      <h2 id="are-any-breeds-at-increased-risk">are-any-breeds-at-increased-risk</h2>
      <p>We see anal gland issues much more commonly in small breeds, due to their conformation. They seem to be more prone to narrow openings of the anal glands. Obese dogs are also at higher risk. This is thought to be due to them having weaker muscles.</p>
      <p>It is relatively uncommon for larger breeds to suffer with chronic anal gland issues, but it certainly happens.</p>
      <p>Pedigree dogs are at highest risk. This is likely due to the fact that atopic dermatitis (allergies) is more common in these dogs and anal gland issues go hand in hand with atopy.</p>
      <h2 id="how-to-express-dog-anal-glands">how-to-express-dog-anal-glands</h2>
      <p>Anal glands will need to be squeezed and emptied if they are impacted. This is something owners can be taught to safely do at home. We should only empty glands that require emptying; if the dog has no anal gland issues, there is no need to empty them.</p>
      <ul>
        <li>When emptying glands at home, prepare yourself before getting your dog. Make sure you have disposable gloves, paper towel and some lubricant such as KY jelly or vaseline.</li>
        <li>The easiest place to empty glands is in the bath! Ideally you would have one person holding the dogs shoulders forward and praising them. They can also reward them with high value treats las they stay calm.</li>
        <li>If you imagine the anus is a clock face, each gland is located at 4 and 8 o'clock. Gently insert your thumb into the anus, steadying the anal gland with your pointer finger, which will be on the outside of the anus.</li>
        <li>Squeeze with firm pressure, releasing all of the contents onto a tissue. You will feel the gland shrinking from the size of a grape to a small 'empty balloon'.</li>
        <li>As this can be a strange sensation, your dog may try to run or jump, so ensure they are being held firmly.</li>
        <li>Reward your doggy. You are done!</li>
      </ul>
      <p>Many owners are (understandably) not confident to empty the glands at home and this is always something a vet will be happy to do. Some dogs require their glands to be emptied very regularly (every 4 to 6 weeks), while others may only need it a few times in their life.</p>
      <p>If there is an infection, the dog will need a course of antibiotics and anti inflammatories.</p>
      <p>A dog who is licking at their back end due to the discomfort should be given a buster collar to protect the surrounding skin and tissue.</p>
      <p>Uncommonly, surgery is needed to treat ongoing anal gland issues, particularly if they cannot be managed medically and are significantly affecting a dog’s quality of life.</p>
      <h2 id="how-can-you-prevent-dog-anal-gland-issues">how-can-you-prevent-dog-anal-gland-issues</h2>
      <p>Thankfully, there are lots of things we can do to help prevent anal gland issues. This includes:</p>
      <ul>
        <li>Feeding a high quality diet with ample fibre and supplementing the diet with fibre if needed. This helps keep the stool solid, ensuring the glands are naturally expressed when the dog passes stool.</li>
        <li>Providing ample exercise. Not only will this prevent a dog becoming over-weight, exercise aids in gut health and helps promote healthy bowel movements.</li>
        <li>Preventing obesity. Consider a slimming diet such as Pooch & Mutt’s Slim & Slender if your dog is over weight. This high fibre weight loss diet helps stave off hunger and can speed up weight loss.</li>
        <li>Schedule regular check ups. You can ask your vet to check your dog’s glands during their routine checks and you may also need to book them in for regular ‘anal gland checks’.</li>
      </ul>
      <h2 id="faqs">faqs</h2>
      <section>How do you know if your dog needs his anal glands expressed?
What happens when a dog’s anal glands are full?
How often should you express dogs’ anal glands?</section>
`,
  headings: [
    { id: 'what-are-anal-glands-in-dogs', text: 'what-are-anal-glands-in-dogs', level: 2 },
    { id: 'what-causes-anal-gland-problems-in-dogs', text: 'what-causes-anal-gland-problems-in-dogs', level: 2 },
    { id: 'symptoms-of-blocked-anal-glands-in-dogs', text: 'symptoms-of-blocked-anal-glands-in-dogs', level: 2 },
    { id: 'are-any-breeds-at-increased-risk', text: 'are-any-breeds-at-increased-risk', level: 2 },
    { id: 'how-to-express-dog-anal-glands', text: 'how-to-express-dog-anal-glands', level: 2 },
    { id: 'how-can-you-prevent-dog-anal-gland-issues', text: 'how-can-you-prevent-dog-anal-gland-issues', level: 2 },
    { id: 'faqs', text: 'faqs', level: 2 },
  ]
},
'probiotics-prebiotics-for-dogs-whats-difference': {
  title: 'Probiotics and prebiotics for dogs: what\'s the difference?',
  category: 'Pets',
  snippet: "Snippet not found",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/PROBITOTIC-AND-PREBIOTICS-BLOG-2_500x_crop_center.jpg?v=1663078432",
    alt: "Probiotics and prebiotics for dogs: what's the difference?",
    caption: "what-are-probiotics-and-prebiotics-for-dogs"
  },
  content: `
<p>Probiotics, prebiotics, synbiotics… there’s a lot of scientific words bouncing around in the world of doggy digestive health. How do you ensure everything is running smoothly in your dog’s tum when you’re not entirely sure what defines probiotics from prebiotics, or what they even do?</p>
      <p>Probiotics and prebiotics for dogs are integral to promoting harmony in your pooch’s gut. Read on to learn about the important relationship between them both and how to incorporate their powerful gut-protecting attributes into your dog’s diet.</p>
      <h2 id="what-are-probiotics-and-prebiotics-for-dogs">what-are-probiotics-and-prebiotics-for-dogs</h2>
      <p>Probiotics and prebiotics for dogs are a nutritional power pairing. Separately, they perform quite different functions, but together they ensure a well-balanced, peaceful environment in the gut by promoting growth of the ‘friendly’ bacteria your dog needs to help digest food, absorb nutrients, prevent disease and maintain a healthy immune system. (1)</p>
      <h3 id="probiotics-for-dogs">probiotics-for-dogs</h3>
      <p>In short, probiotics are digestible, ‘good’ bacteria that help balance the flora of your dog’s gut. Dogs have plenty of probiotics already present in their body, but can often benefit from more. When fed to a dog, probiotics can come as a supplement, as high-quality wet or dry dog food, or as natural whole food. Live yoghurt is a prime example of a natural probiotics source, but vegetables such as carrots or asparagus are also packed with probiotic goodness.</p>
      <h3 id="prebiotics-for-dogs">prebiotics-for-dogs</h3>
      <p>Prebiotics are carbohydrate compounds that, unlike probiotics, aren’t digestible by your dog’s body - but actually act as food sources for the good bacteria already present. By supporting the growth of good bacteria, prebiotics help suppress the harmful microbes that make your dog ill, boosting their immunity and overall digestive health. Again, prebiotics for dogs can either be fed in supplement form, as wet or dry dog food, or via prebiotic-rich natural foods such as chicory root, or dandelion greens.</p>
      <h2 id="how-do-pre-and-probiotics-for-dogs-work">how-do-pre-and-probiotics-for-dogs-work</h2>
      <p>When your dog has finished a nutrient-rich meal, that’s when prebiotics and probiotics are getting to work to strengthen your dog’s tum…</p>
      <ul>
        <li>Probiotics are digested, broken down and released as healthy bacteria into your dog’s gut and intestinal tract. If you think of the word ‘probiotics’, that’s exactly what these bacteria are doing - adding to the climate of ‘good’ bacteria in your dog’s digestive microbiome.</li>
      </ul>
      <ul>
        <li>Prebiotics, contrastingly indigestible to the body, travel unscathed through the dog’s stomach and intestines until they reach the colon. Here they convert into short-chain fatty acids (SCFA) and become a source of food for the ‘friendly’ bacteria living there, leading them to strengthen and grow.</li>
      </ul>
      <p>Probiotics and prebiotics are a power combo for your pooch’s gut health, which is why they’re often found together in digestive supplements for dogs. How their health-positive features complement each other to benefit the body is known as synbiotics.</p>
      <h2 id="when-should-you-use-probiotics-and-prebiotics">when-should-you-use-probiotics-and-prebiotics</h2>
      <p>There are plenty of scenarios for which it’s helpful to give your dog’s gut health a boost in balancing its natural flora.</p>
      <ul>
        <li>If your dog is recovering from a bout of gastroenteritis, it's likely their gut flora could do with a surge of good bacteria, as the microbiome of their stomach is often stripped of goodness when your dog has been vomiting or suffering from diarrhoea.</li>
      </ul>
      <ul>
        <li>Even simple toilet issues, such as diarrhoea or constipation, may be an indicator that your dog could benefit from more probiotics and prebiotics in their diet (2). A healthy gut should result in your pooch pooping regularly and with stools that are not too hard, soft or wet.</li>
      </ul>
      <ul>
        <li>If probiotics add to the healthy bacteria in the gut, antibiotics do the opposite; killing off all bacteria, including the good stuff, in order to beat an infection. When your dog has been on a course of antibiotics, try supplementing their diet with pre and probiotics to ensure their gut flora is re-balanced and they can quickly get back on tail-wagging form.</li>
      </ul>
      <ul>
        <li>Believe it or not, a host of non-digestive issues can also be sourced back to an imbalance in the gut. Itchy skin, allergies, a yeast infection or stress in dogs can all be improved by probiotics and prebiotics. (4)</li>
      </ul>
      <ul>
        <li>An increase in dog farts (flatulence) could also be a sign of disharmony in the gut that may require attention. In fact, if you find yourself blaming it on the dog more often, perhaps you could benefit from some pre and probiotics, too…!</li>
      </ul>
      <h3 id="how-long-does-it-take-for-pre-and-probiotics-to-work-in-dogs">how-long-does-it-take-for-pre-and-probiotics-to-work-in-dogs</h3>
      <p>It depends on the dog, but improvements to tummy or toilet issues should start to show within a few days of introducing probiotics and prebiotics, and can even cut recovery time in half. If your dog’s digestive condition is slightly more severe, pre and probiotics could take around 4-6 weeks to take effect. If you’re using them as part of a preventative plan, it’s fine to feed your dog pre and probiotics every day.</p>
      <p>Note that not every dog needs a boost of probiotics and prebiotics, as they may be getting enough already through diet. Pre and probiotics for dogs are highly unlikely to cause any harm, but more extensive research is needed on their effect on different dog breeds, ages and health conditions - so be sure to discuss with your vet before introducing them to your dog’s diet.</p>
      <p>If you’d like to learn more about doggy digestive health, get in touch with us. To use the power duo of prebiotics and probiotics to get your dog’s gut into tip-top shape, check out Pooch & Mutt’s Bionic Biotic pre and probiotic supplement.</p>
      <section>References</section>
`,
  headings: [
    { id: 'what-are-probiotics-and-prebiotics-for-dogs', text: 'what-are-probiotics-and-prebiotics-for-dogs', level: 2 },
    { id: 'probiotics-for-dogs', text: 'probiotics-for-dogs', level: 3 },
    { id: 'prebiotics-for-dogs', text: 'prebiotics-for-dogs', level: 3 },
    { id: 'how-do-pre-and-probiotics-for-dogs-work', text: 'how-do-pre-and-probiotics-for-dogs-work', level: 2 },
    { id: 'when-should-you-use-probiotics-and-prebiotics', text: 'when-should-you-use-probiotics-and-prebiotics', level: 2 },
    { id: 'how-long-does-it-take-for-pre-and-probiotics-to-work-in-dogs', text: 'how-long-does-it-take-for-pre-and-probiotics-to-work-in-dogs', level: 3 },
  ]
},
'dog-diarrhea-causes-information': {
  title: 'Dog Diarrhoea: Causes, Information & Advice',
  category: 'Pets',
  snippet: "Snippet not found",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/09edc2f383b19d35c3f4c966395db0fd_500x_crop_center.jpg?v=1623314963",
    alt: "Dog Diarrhoea: Causes, Information & Advice",
    caption: "what-causes-diarrhoea-in-dogs"
  },
  content: `
<p>Dog diarrhoea is most commonly associated with colitis in dogs, which is essentially caused by an inflammation of the colon which results in soft stools. Dog diarrhoea can be a distressing for both dog and owner and can mean frequent trips to the vet.</p>
      <p>Diarrhoea in dogs on the whole is not a life-threatening condition. However older dogs, puppies and smaller dogs can often find it tough when dealing with dog diarrhoea so it’s worth keeping an eye on dog colitis too.</p>
      <h2 id="what-causes-diarrhoea-in-dogs">what-causes-diarrhoea-in-dogs</h2>
      <p>Diarrhoea occurs when the food passes through the gut too quickly and not enough of the nutrients and water are absorbed and it can be caused by a number of factors. Issues like buying poor-quality and cheap pet food can have an adverse effect on a dog’s digestion system which in turn leads to dog colitis.</p>
      <p>Overeating can also leave you with a dog colitis problem. This can occur when dogs are fed just once a day and certain foods sometimes don’t agree with a dog and lead to dog diarrhoea. Dogs, like humans, can suffer from stress and this can also present a dog diarrhoea problem.</p>
      <p>There are however a wider range of possible causes including:</p>
      <ul>
        <li>A bacterial, viral or parasitic infection</li>
        <li>Stress (such as a long car ride)</li>
        <li>Dietary indiscretion (when your cheeky pooch eats something they shouldn’t have)</li>
        <li>Toxin ingestion</li>
        <li>An abrupt diet change</li>
        <li>A food allergy or sensitivity</li>
        <li>Inflammatory Bowel Disease</li>
        <li>Colitis</li>
        <li>Intestinal cancer</li>
        <li>Hormonal disorders such as Addison’s disease. Etc.</li>
      </ul>
      <p>When a vet is presented with a dog with diarrhoea, they will look at their age, breed and medical history when assessing the possible causes. Younger dogs are more prone to parasites while cancer tends to affect the older population.</p>
      <h3 id="diarrhoea-in-puppies">diarrhoea-in-puppies</h3>
      <p>As diarrhoea in puppies is so very common, it really deserves a whole section to itself. For many puppy owners, the first health issue they will encounter is loose stool.</p>
      <p>The combination of leaving mum for the first time, a long car ride, a diet change and a trip to the vets is the ‘perfect storm’ for some individuals when it comes to developing runny stool. It is also true that many puppies are born with a worm burden and this is not always successfully eradicated by the breeder.</p>
      <h2 id="signs-and-symptoms">signs-and-symptoms</h2>
      <p>For most owners, diarrhoea in their dog will be something they are familiar with. At one time or another, the vast majority of dogs will develop loose stools. This may only last a short while or may continue for several weeks in some individuals.</p>
      <p>Loose stool can be accompanied by other signs such as</p>
      <ul>
        <li>Vomiting</li>
        <li>Abdominal cramps</li>
        <li>Lethargy</li>
      </ul>
      <p>Whether or not veterinary treatment is required isn’t always obvious but usually depends on the severity of the diarrhoea, the other symptoms present and how long it has been going on for. If left untreated, diarrhoea can result in dehydration, nutritional deficiencies and weight loss. If concerned, a vet visit is always wise.</p>
      <p>Dog diarrhoea can also occur after your dog has undergone treatment for another condition or injury and is on a course of antibiotics. Antibiotics can leads to a dog’s diarrhoea problem as whilst working to kill the dangerous bacteria, they can sometimes disrupt the normal healthy bacteria in the intestine, which results in diarrhoea in dogs.</p>
      <p>Viral infections such as parvovirus can cause severe foul-smelling dog diarrhoea and bacterial infections from sources such as spoiled food and salmonella can result in dog colitis.</p>
      <h3 id="symptoms-of-colitis-in-dogs">symptoms-of-colitis-in-dogs</h3>
      <p>The symptoms for colitis dogs are generally soft stools. A dog with colitis may have less energy and go off their food. So if you’re dog is perhaps not acting their normal self or seems a little reserved, it is worth checking their stools for any early signs of dog colitis.</p>
      <ul>
        <li>Chronic dogs diarrhoea - Most dogs suffering from dog colitis will experience chronic diarrhoea. Diarrhoea is loose, inconsistent bowel movements which can eventually become entirely liquid.</li>
        <li>Frequent Bowel Movement - If your dog is making a lot more trips to the back yard, then it is often a sign that your canine is experiencing dog diarrhoea. Be aware that stool may contain mucus and fresh red blood.</li>
        <li>Tenesmus (Difficulty passing stools) - Tenesmus is a dog’s feeling of the need to evacuate the bowels, with little or no stool passed. Tenesmus may be constant or intermittent, and is usually accompanied by pain, cramping and involuntary straining efforts. It can be a temporary and transient problem related to constipation. Tenesmus can be a symptom of diarrhoea in dogs.</li>
      </ul>
      <h2 id="treatments">treatments</h2>
      <h3 id="short-term-treatments">short-term-treatments</h3>
      <p>Treatment for short-term diarrhoea dog is generally simple.</p>
      <p>Short-term dog diarrhoea may occur if your dog has eaten something he shouldn't, or if you have changed his diet recently, he could wind up with a bout of dog diarrhoea; this could also be the result of eating dairy products or a food he's allergic to.</p>
      <p>As a short term treatment, try him on a diet of our specially formulated Gastrointestinal Dry Dog Food.</p>
      <p>Start him off with small amounts every four hours. If he's doing well, feed him about 1/4 of his regular food along with the dry food; gradually upping the percentage over several days until he's back on his normal diet.</p>
      <p>While your dog is recuperating from dog colitis, make sure he's getting enough water. Diarrhoea can rapidly lead to dehydration, so your vet may recommend a drink enriched with electrolytes such as Oraladea or Lectade.</p>
      <p>Limit your pet's level of exercise to short walks while they are recovering from dog diarrhoea.</p>
      <h3 id="long-term-treatments">long-term-treatments</h3>
      <p>Longer term dog diarrhoea is most likely to be a digestive problem so addressing with your vet should be the first port of call. Vets can perform stool analysis and abdominal scans to help provide a diagnosis and suggest the right treatment plan.</p>
      <p>Elimination diets might be conducted to also try and understand if your dog has an allergy or intolerance. Grains, dairy and even chicken can be common allergens that cause stomach upset.</p>
      <p>If your longer-term dog diarrhoea is the problem then another thing that you could try is looking at finding a way to re-balance the good bacteria in your dog’s gut – helping them to properly digest their food.</p>
      <p>Bionic Biotic is a supplement full of natural ingredients to promote solid stools, healthy digestion, skin & coat.</p>
      <p>Packed with anti-oxidants, probiotics, fish oil, vitamins and minerals this natural supplement complements all diets perfectly. This probiotic health supplement is specifically tailored to actively promote solid stools and healthy digestion.</p>
      <p>Both probiotics and prebiotics promote a healthy gut microbiome, whilst the added antioxidants can help your dog fight off skin infections as they promote a robust immune system.</p>
      <p>It also provides important nutrients to reduce itching and scratching, with Biotin to help aid healthy fur growth; ideal for those whose itching leads to fur loss or thinning.</p>
      <p>On top of this, our Bionic Biotic supplement is packed full of other healthy ingredients, thus, we can potentially support and improve health in a number of areas including a dog’s skin, their gastrointestinal tract and their immune system.</p>
      <p>By supporting each of these key areas, we can ensure our dogs are fighting fit and can potentially prevent certain health conditions as a dog gets older, helping our pooches to always feel good on the inside and look great on the outside.</p>
      <h3 id="treatment-for-puppies">treatment-for-puppies</h3>
      <p>Puppies are more prone to dehydration from diarrhoea than adult dogs and can become unwell quickly. This is why diarrhoea in puppies always merits veterinary attention. Your vet will examine your young dog and may advise some further testing such as a stool analysis. Treatment will largely depend on what has caused the loose stool. It may consist of probiotics, fluids, parasite treatment and a specific diet.</p>
      <h2 id="preventing-dog-diarrhoea">preventing-dog-diarrhoea</h2>
      <p>There are several steps you can take to minimise the risk of dogs diarrhoea. When changing your dog onto a new brand of food, instead be sure to do it gradually to see how they react to it. Make sure your dog doesn’t eat anything that is lying around as this can contribute to dog colitis. For peace of mind, try our Sensitivity Dry Dog Food For Allergies for nutritious food that has been specially formulated to be easy on the tummy.</p>
      <p>Remember, you are not alone – there are many dogs that suffer from dog diarrhoea, runny stools and colitis.</p>
`,
  headings: [
    { id: 'what-causes-diarrhoea-in-dogs', text: 'what-causes-diarrhoea-in-dogs', level: 2 },
    { id: 'diarrhoea-in-puppies', text: 'diarrhoea-in-puppies', level: 3 },
    { id: 'signs-and-symptoms', text: 'signs-and-symptoms', level: 2 },
    { id: 'symptoms-of-colitis-in-dogs', text: 'symptoms-of-colitis-in-dogs', level: 3 },
    { id: 'treatments', text: 'treatments', level: 2 },
    { id: 'short-term-treatments', text: 'short-term-treatments', level: 3 },
    { id: 'long-term-treatments', text: 'long-term-treatments', level: 3 },
    { id: 'treatment-for-puppies', text: 'treatment-for-puppies', level: 3 },
    { id: 'preventing-dog-diarrhoea', text: 'preventing-dog-diarrhoea', level: 2 },
  ]
},



'dental-sticks-and-your-dog': {
  title: 'Dental Sticks and Your Dog',
  category: 'Pets',
  snippet: "Snippet not found",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/blog-image-how-to-care-for-dogs-teeth_500x_crop_center.jpg?v=1653645174",
    alt: "Dental Sticks and Your Dog",
    caption: "the-important-of-good-dental-hygiene"
  },
  content: `
<div>Many owners ask me how they can best care for their pet’s teeth. A healthy mouth not only means fresher breath, it can also minimise the risk of infection and prevent future dental treatments.</div>
      <p>While brushing our dog’s teeth every day is the best way of caring for them, this may not be possible for a range of reasons. We should persist with trying the toothbrush and, at the same time, can offer regular dental sticks to help prevent plaque build up.</p>
      <h2 id="the-important-of-good-dental-hygiene">the-important-of-good-dental-hygiene</h2>
      <p>When food cakes on to teeth, bacteria proliferate. This leads to red gums, visible calculus build up, a foul smell and oral pain. A large proportion of adult dogs have dental disease and may be suffering in silence.</p>
      <p>It is often presumed a dog will stop eating when their teeth are hurting but this is rarely the case. Most dogs will soldier on, eating their meals and acting normal despite severe dental disease and chronic pain.</p>
      <h2 id="the-knock-on-effect">the-knock-on-effect</h2>
      <p>Dental disease can lead to a range of issues, not least a poorer quality of life. The bacteria burden can mean that infections spread around the body, affecting organs including the liver and heart.</p>
      <p>If teeth aren’t kept clean, calculus builds up and the gums become swollen and inflamed. The teeth loosen in their socket and become wobbly, eventually requiring extraction.</p>
      <h2 id="signs-of-dental-disease">signs-of-dental-disease</h2>
      <p>It is not always easy to tell if your dog has dental disease but signs can include:</p>
      <ul>
        <li>Red or inflamed gums that bleed easily</li>
        <li>Bad breath (halitosis)</li>
        <li>A visible yellow or brown build up on the surface of the teeth</li>
        <li>Drooling</li>
        <li>A preference for wet food</li>
        <li>A change in how your dog chews</li>
      </ul>
      <h2 id="how-to-care-for-those-pearly-whites">how-to-care-for-those-pearly-whites</h2>
      <p>Protecting your pet’s teeth isn’t rocket science. The best things we can do are to:</p>
      <ul>
        <li>Brush our dog’s teeth daily using a doggy tooth brush and tooth paste</li>
      </ul>
      <ul>
        <li>Use products such as enzymatic gels we rub on the teeth and powders we add to the food or water; these products can reduce plaque build up</li>
      </ul>
      <ul>
        <li>Feed dry kibble rather than wet food, especially if you have a small breed dog or one genetically prone to dental disease</li>
      </ul>
      <ul>
        <li>Offer a daily dental stick*</li>
      </ul>
      <p>*Remember to factor this into your dog’s daily calorie intake, reducing their meal portions so they are not being overfed.</p>
      <h2 id="the-reality">the-reality</h2>
      <p>Realistically, how many of my clients brush their pet’s teeth every day? I’d be willing to bet it is less than 5%. In fact, the majority of my clients do not brush their pet’s teeth at all. This can be because their pet won’t allow it or because the owner simply is not aware of the importance.</p>
      <p>When tooth brushing is not an option (due to a pet’s anxiety or aggression), we should try to slowly introduce it. Unfortunately, this won’t always be successful.</p>
      <h2 id="why-dental-sticks-help">why-dental-sticks-help</h2>
      <p>Dental sticks are a very useful tool, especially for those canines who aren’t big fans of the toothbrush. The abrasive surface scrapes along teeth, preventing plaque from sticking to the surface of the tooth and even breaking off chunks of calculus.</p>
      <p>The benefit of this ‘scraping’ is that the incidence of periodontal disease is reduced. The real beauty of the dental stick? To your dog, they are a high value treat!</p>
      <h2 id="why-choose-pooch-and-mutt">why-choose-pooch-and-mutt</h2>
      <p>As is always the case with Pooch and Mutt, they’ve designed a product with your pooch’s health and wellbeing at the forefront of their mind. Not only are these dental sticks shaped to clean deep between teeth, they are designed to last longer, ensuring your dog gets plenty of chewing time. This chewing keeps those gnashers sparkling white, while also provide your dog with something enriching to be doing (while you’re having a brew and putting your feet up!).</p>
      <p>Pooch and Mutt’s Dental Sticks are supplemented with SHMP (sodium hexametaphosphate) which is an anti-staining and tartar preventative ingredient used by human dentists.</p>
      <h2 id="three-great-options">three-great-options</h2>
      <p>You can choose between the calming ‘Hemp & Sage’ dental stick, refreshing ‘Spirulina & Mint’ superfood stick or vegan friendly 'Peanut Butter' dental sticks.</p>
      <p>Hemp & Sage: For those dogs who are anxious, prone to stress or a little bit ‘loopy’, this dental stick is worth trying. Hemp is a naturally stress reducing ingredient, that may even improve sleep quality. Sage has medicinal effects and has been used since ancient times. It is a herb that is high in anti oxidants and that can reduce bacterial load and plaque formation.</p>
      <p>Spirulina & Mint: If you’re keen to keep your dog’s breath smelling fresh, the mint in this stick will do the trick. A natural antimicrobial, mint kills bacteria in the mouth. Spirulina is an algae; a powerful antioxidant that can reduce oral inflammation and bolsters the immune system.</p>
      <p>Peanut Butter: Not only are these delicious Dental Sticks grain-free, they're also VEGAN, completely plant powered and suitable for dogs with a sensitive stomach or poultry allergy.</p>
      <h3 id="shop-all-now-alongside-our-other-dental-products-here">shop-all-now-alongside-our-other-dental-products-here</h3>
`,
  headings: [
    { id: 'the-important-of-good-dental-hygiene', text: 'the-important-of-good-dental-hygiene', level: 2 },
    { id: 'the-knock-on-effect', text: 'the-knock-on-effect', level: 2 },
    { id: 'signs-of-dental-disease', text: 'signs-of-dental-disease', level: 2 },
    { id: 'how-to-care-for-those-pearly-whites', text: 'how-to-care-for-those-pearly-whites', level: 2 },
    { id: 'the-reality', text: 'the-reality', level: 2 },
    { id: 'why-dental-sticks-help', text: 'why-dental-sticks-help', level: 2 },
    { id: 'why-choose-pooch-and-mutt', text: 'why-choose-pooch-and-mutt', level: 2 },
    { id: 'three-great-options', text: 'three-great-options', level: 2 },
    { id: 'shop-all-now-alongside-our-other-dental-products-here', text: 'shop-all-now-alongside-our-other-dental-products-here', level: 3 },
  ]
},



'calming-music-for-dogs-relaxed-pooch-playlist': {
  title: 'Calming Music for Dogs: Relaxed Pooch Playlist',
  category: 'Pets',
  snippet: "Snippet not found",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/Artboard_3-2_500x_crop_center.jpg?v=1648644140",
    alt: "Calming Music for Dogs: Relaxed Pooch Playlist",
    caption: "the-top-tracks-to-calm-your-pooch"
  },
  content: `
<p>Any dog owner knows that soothing your pooch can be difficult, especially with over-active and energetic puppies. Numerous scientific studies and research have shown that music is a great way to help reduce stress and separation anxiety in our furry friends. However, with endless playlists to choose from, it’s hard to know which one is best placed to relax your dog.</p>
      <p>With over 4,000 combined likes, we gathered data from 13 official Spotify playlists, analysing over 500 songs and 24 hours of music to determine the most popular songs to help settle your dog. Listen to our data-driven playlist on Spotify below.</p>
      <p>Click me to listen to the playlist through Spotify:</p>
      <h2 id="the-top-tracks-to-calm-your-pooch">the-top-tracks-to-calm-your-pooch</h2>
      <p>After looking at over 500 different songs, we’ve narrowed down the list to the top 10 most soothing tracks for your pup.</p>
      <p>We explored the Bpm (tempo/song speed), energy (how intense/active the track is), happiness (how cheerful the track is), instrumentals (how likely to feature no vocals), acoustics, speechiness (words spoken on the track), and decibels (how loud) to determine why these songs are so relaxing. According to our research, here are the top tracks you should play to relax your dog.</p>
      <p>Sources: Spotify and Tune Bat</p>
      <p>Each of these top 10 songs appeared several times across the different playlists, with the top three tracks featuring 5x more than the 500 songs analysed across the 13 Spotify playlists we studied. The remaining tracks appeared at least twice more</p>
      <h2 id="creating-the-ultimate-song-for-relaxed-dogs">creating-the-ultimate-song-for-relaxed-dogs</h2>
      <p>Based on our findings, we calculated the averages of each track to discover the perfect composition for a song for calming dogs. As it turns out, slow, quiet, acoustic songs with minimal vocals are the best ones to play for calm pups and chilled-out doggos.</p>
      <p>The ultimate calming songs comprise:</p>
      <ul>
        <li>An adante (or walking speed) Bpm of 95</li>
        <li>A low dB of 24</li>
        <li>A low energy level of 22</li>
        <li>A melancholic melody (20/100 happiness)</li>
        <li>A gentle acoustic rating of 87</li>
        <li>Minimal spoken vocals (82 in instrumentals and 6 in speechiness)</li>
      </ul>
      <p>By playing songs that have these levels, you can help your pooch to stay calm and collected if they’re feeling boisterous or anxious.</p>
      <p>If you’re looking for something to sing along to as you chill at home, do housework, or even taking your pup on an adventure our ideal song parameter findings also show that these popular tracks could help to settle your pup:</p>
      <ul>
        <li>My Heart Will Go On - Céline Dion</li>
        <li>Sail - AWOLNATION</li>
        <li>I Will Always Love You - Whitney Houston</li>
        <li>Hey There Delilah - Plain White T’s</li>
        <li>More Than Words - Extreme</li>
        <li>Imagine - Jack Johnson</li>
        <li>Work Out - J. Cole</li>
        <li>Dancing On My Own - Calum Scott</li>
      </ul>
      <p>So why are these parameters important and how do they affect how your pup feels? Let’s look a little further into the meanings of the different aspects of what makes relaxing music for dogs.</p>
      <h3 id="andante-bpm">andante-bpm</h3>
      <p>Scientists and researchers have delved into the effect of music on dogs to determine the perfect canine-friendly frequencies to reduce stress. Studies found that classical music with a low Bpm of 50-60 is proven to reduce stress, but after time, dogs become bored.</p>
      <p>Instead, reggae and soft rock are better genres for reducing heart rate, barking and stress. Researchers speculate this is due to the similarities in Bpm (beats per minute) of these genres to dogs’ heart rates, beating around 120 to 160 Bpm depending on the breed. This mimics the feeling of relaxation puppies seek from their mothers' heartbeat when snuggling into them.</p>
      <p>Our research matches this theory, with the average Bpm of 95 matching more closely with that of a dog’s heart rate.</p>
      <h3 id="low-decibels">low-decibels</h3>
      <p>Dogs have extremely sensitive hearing. Your dog's top-end of hearing is between 47,000 and 65,000 Hz (depending on the breed), a range that's far too high-pitched for us mere mortals to register. And, according to Stanley Coren in his book, How Dogs Think, dogs can hear sounds at volumes as low as 5 to 15dB. In comparison, we humans can only hear in a range of 20 to 20,000Hz.</p>
      <p>Decibels (dB) are used to measure the intensity of sound. To put into perspective just how sensitive your dog's hearing is, the CDC rates normal breathing at 10dB and a ticking watch at 20dB.</p>
      <p>All the tracks in our research are below 40dB, which is the average for home noise and are not likely to startle or disturb your dog from sounds they’re used to hearing on an everyday basis.</p>
      <h3 id="melancholic-melodies-and-gentle-acoustic-songs">melancholic-melodies-and-gentle-acoustic-songs</h3>
      <p>It’s no surprise that dogs need entertainment just like humans. When we listen to music, we experience entrainment - a process where rhythms can cause major systems in the body like heart rate, brain waves, and breathing to speed up or slow down.</p>
      <p>Researchers have noted that dogs can also be entrained when experiencing external rhythms. As with humans, the more complex the music, the more energy is required to decipher it, which is why simple, gentle acoustic songs with more sombre melodies lead to a greater relaxation response.</p>
      <p>The majority of the tracks we looked at had simple arrangements and minimal electric instrumentation, thus meaning that the brain doesn’t have to work as hard to process the song, particularly in cases where dogs are already feeling stressed or anxious.</p>
      <h2 id="top-tips-from-vet-linda">top-tips-from-vet-linda</h2>
      <p>If you’re new to playing music for your pups, you probably have some questions. We spoke to Veterinary Surgeon, Dr Linda Simon to answer any queries and concerns you may have about playing soothing music for dogs.</p>
      <h3 id="any-tips-for-getting-puppies-used-to-background-noise">any-tips-for-getting-puppies-used-to-background-noise</h3>
      <p>Puppyhood is the absolute best time to get your dog used to everyday noises. This includes things like sirens, fireworks, traffic, and thunderstorms. The best way to do this is to naturally introduce them to the noises in real-time to help desensitise them to each sound.</p>
      <p>Ensure you are calm and that the experience is positive. Reward their calm behaviour with lots of treats and praise. If they seem unsettled, remove them from the situation.</p>
      <h3 id="when-is-the-best-time-to-play-calming-music-for-your-dog">when-is-the-best-time-to-play-calming-music-for-your-dog</h3>
      <p>Calming music is a hugely useful tool that can be used for any dog, whether anxious or not. Some of the most common situations in which I'll advise its use is:</p>
      <ul>
        <li>When an owner leaves their dog home alone. This is especially important if they suffer from separation anxiety.</li>
        <li>When there is external noise that could be stressful (such as a party next door or a firework session). Giving your dog another noise to focus on can help minimise stress levels.</li>
        <li>When crate training and/or sleep training your puppy. You may find the sessions go better when calming music is being played in the background.</li>
        <li>When travelling in your car, particularly if your dog gets a little nervous.</li>
      </ul>
      <h3 id="any-body-language-to-look-out-for-that-might-indicate-your-dog-isnt-responding-well-to-music">any-body-language-to-look-out-for-that-might-indicate-your-dog-isnt-responding-well-to-music</h3>
      <p>A dog's body language can be subtle, and it is important you watch them closely when introducing a new type of music. If your dog freezes or tenses, if they are howling or restless, if they are drooling or trembling, they may dislike the music. The wrong music or music that is being played too loud has the potential to upset your dog.</p>
      <h3 id="why-do-some-dogs-experience-noise-aversion-do-you-have-any-tips-other-than-music-and-audiobooks-that-could-help-with-the-fear-of-noise">why-do-some-dogs-experience-noise-aversion-do-you-have-any-tips-other-than-music-and-audiobooks-that-could-help-with-the-fear-of-noise</h3>
      <p>Most of the time, dogs develop noise aversion or phobia because they were not positively exposed to the noise when younger. Thus, when they hear it as adults, they do not know what it is, and it can be scary to them.</p>
      <p>Dogs can also have noise aversion if they associate negative feelings with certain noises. For example, perhaps they were overwhelmed and scared while out walking in a busy environment, and the noise of traffic reminds them of that bad feeling.</p>
      <p>Desensitisation to 'scary' noises is a powerful tool. Expose your dog to a taped version of the noise they fear. Start small on a very low volume and ensure your dog is comfortable and calm. Reward this behaviour. Over time (this can be a few weeks or months), gradually build the volume until your dog is no longer fearful of the noise.</p>
      <p>There are other things you can do to help keep your dog calm besides playing them relaxing music. For anxious or excitable dogs, try feeding them Pooch & Mutt’s Calm & Relaxed range. It includes a hypoallergenic and grain-free food that contains 45% lean, L-tryptophan rich turkey, which is vital in the creation of Serotonin, a brain signalling chemical that controls mood and sleep. It’s also rich in sweet potato, which contains anti-stress B-vitamins to help keep them feeling chilled out and chamomile, which is well known for soothing nerves. Not only that, but it’s extremely tasty too!</p>
`,
  headings: [
    { id: 'the-top-tracks-to-calm-your-pooch', text: 'the-top-tracks-to-calm-your-pooch', level: 2 },
    { id: 'creating-the-ultimate-song-for-relaxed-dogs', text: 'creating-the-ultimate-song-for-relaxed-dogs', level: 2 },
    { id: 'andante-bpm', text: 'andante-bpm', level: 3 },
    { id: 'low-decibels', text: 'low-decibels', level: 3 },
    { id: 'melancholic-melodies-and-gentle-acoustic-songs', text: 'melancholic-melodies-and-gentle-acoustic-songs', level: 3 },
    { id: 'top-tips-from-vet-linda', text: 'top-tips-from-vet-linda', level: 2 },
    { id: 'any-tips-for-getting-puppies-used-to-background-noise', text: 'any-tips-for-getting-puppies-used-to-background-noise', level: 3 },
    { id: 'when-is-the-best-time-to-play-calming-music-for-your-dog', text: 'when-is-the-best-time-to-play-calming-music-for-your-dog', level: 3 },
    { id: 'any-body-language-to-look-out-for-that-might-indicate-your-dog-isnt-responding-well-to-music', text: 'any-body-language-to-look-out-for-that-might-indicate-your-dog-isnt-responding-well-to-music', level: 3 },
    { id: 'why-do-some-dogs-experience-noise-aversion-do-you-have-any-tips-other-than-music-and-audiobooks-that-could-help-with-the-fear-of-noise', text: 'why-do-some-dogs-experience-noise-aversion-do-you-have-any-tips-other-than-music-and-audiobooks-that-could-help-with-the-fear-of-noise', level: 3 },
  ]
},



'dog-eye-health-how-to-tell-if-your-dogs-eyes-are-healthy': {
  title: 'Dog Eye Health: How to tell if your dog\'s eyes are healthy?',
  category: 'Pets',
  snippet: "Snippet not found",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/Blog-Images-eyes1_500x_crop_center.jpg?v=1633604397",
    alt: "Dog Eye Health: How to tell if your dog's eyes are healthy?",
    caption: "signs-that-your-dog-may-have-a-problem"
  },
  content: `
<p>We look closely at our dog’s eyes every day and most owners will notice if something is different right away. Realising your dog may have an issue with their eye health can be jarring, as we all know just how important their vision is for their day to day life.</p>
      <h2 id="signs-that-your-dog-may-have-a-problem">signs-that-your-dog-may-have-a-problem</h2>
      <p>There are a range of signs your dog may display when something is going on with one or both of their eyes. These signs may progress slowly or come on seemingly overnight. Watch out for the following:</p>
      <ul>
        <li>Squinting (a sign of discomfort)</li>
        <li>Discharge. This may be in a range of colours including transparent, yellow, green or brown. For some, it streams down their face. For others, it clumps together and causes matted fur.</li>
        <li>Redness of the lining of the eye (the conjunctiva).</li>
        <li>Cloudiness</li>
        <li>Signs of irritation which may include face rubbing or pawing at the eye</li>
      </ul>
      <h2 id="when-to-visit-the-vet-about-your-dogs-eyes">when-to-visit-the-vet-about-your-dogs-eyes</h2>
      <p>Home is not the place to be diagnosing or attempting to treat an eye issue. It is important that a dog with an eye problem be seen by a vet right away. This is especially true if they seem in discomfort or are a dog breed known to suffer with significant eye issues such as a Pug or Shih Tzu.</p>
      <p>The vet will check your dog all over and ask you questions about the signs you’ve noticed. They will assess your dog’s vision and ocular reflexes and should look right into the back of the eye to assess the retina. It is likely your vet will measure your dog’s tear production and stain the cornea for any scratches or ulcers. If there is a concern for glaucoma (raised pressure), the eye pressure will be measured. All of these tests can be done quickly and during a routine consultation by a ‘GP’ vet.</p>
      <h2 id="common-eye-issues-in-dogs">common-eye-issues-in-dogs</h2>
      <p>While there are a huge range of eye conditions that can affect dogs, below is a short explanation of some of the more common ones.</p>
      <ul>
        <li>Bacterial or viral conjunctivitis. Dogs can develop eye infections at any age and signs will include red and weepy eyes. One or both eyes can be affected. For some, the infection will have spread from the skin or ears. Most infections can be treated quickly with topical antibiotics.</li>
      </ul>
      <ul>
        <li>‘Dry Eyes’ or Keratoconjunctivitis Sicca. When a dog does not have adequate eye lubrication from their tears, the eye becomes dry and feels scratchy. Affected dogs develop a thick, yellow discharge and are prone to infections and ulcers. Certain breeds such as the Pug, King Charles and Westie are predisposed. It is a good idea for vets to monitor the tear production of these dogs at their annual check, regardless of signs.</li>
      </ul>
      <ul>
        <li>Corneal Ulcers. Ulcers can be caused by traumatic injuries (such as a scratch from the family cat) or underlying medical issues such as Dry Eye. Most heal within a few days when there are no complications. A buster collar may be needed to help protect the eye as it heals.</li>
      </ul>
      <ul>
        <li>High pressure in the eye itself causes intense pain and requires urgent treatment. The vet will need to determine what the underlying cause is and address this promptly.</li>
      </ul>
      <ul>
        <li>Nuclear sclerosis. As a dog gets older, their eyes can develop a slight blue haze. Many owners worry that this is a cataract. In fact, this old age change is not thought to significantly affect vision and is a normal occurrence in an older dog.</li>
      </ul>
      <h2 id="why-do-my-dogs-eyes-always-water">why-do-my-dogs-eyes-always-water</h2>
      <p>For some dogs, a mild discharge that is clear is ‘normal’ for them. These dogs will have brown or red tear stains under their eyes and will not show signs of ocular discomfort.</p>
      <p>Certain dog breeds, such as the Maltese and Poodle are notorious for tear stains and the colour is due to a pigment called porphyrin.  This tear staining is not a concern and is more of a cosmetic issue. However, it is sensible to confirm with your vet that there is nothing more going on.</p>
      <h2 id="how-to-clean-your-dogs-eyes">how-to-clean-your-dogs-eyes</h2>
      <p>If your dog has a medical reason for their eyes to be discharging or crusty, your vet will advise you on how best to clean them. This will usually involve warm water or saline washes before the application of medicine.</p>
      <p>For those with tear staining, there are several products on the market that claim to reduce the appearance of tear stains. In my experience, none work brilliantly. Owners can gently clean under the eyes with rose water each morning, being sure to dry the fur well after. This prevents crusts from forming and keeps the dog more comfortable.</p>
      <p>Want to know more about how to take care of your dog's grooming needs at home? Read our article by award winning dog groomer to find out her top tips for grooming your dog at home.</p>
`,
  headings: [
    { id: 'signs-that-your-dog-may-have-a-problem', text: 'signs-that-your-dog-may-have-a-problem', level: 2 },
    { id: 'when-to-visit-the-vet-about-your-dogs-eyes', text: 'when-to-visit-the-vet-about-your-dogs-eyes', level: 2 },
    { id: 'common-eye-issues-in-dogs', text: 'common-eye-issues-in-dogs', level: 2 },
    { id: 'why-do-my-dogs-eyes-always-water', text: 'why-do-my-dogs-eyes-always-water', level: 2 },
    { id: 'how-to-clean-your-dogs-eyes', text: 'how-to-clean-your-dogs-eyes', level: 2 },
  ]
},



'how-can-i-encourage-my-fussy-dog-to-eat': {
  title: 'Dog Not Eating Food: A Guide To Fussy Eaters',
  category: 'Pets',
  snippet: "Snippet not found",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/FUSSY-EATER-BLOG-1_500x_crop_center.jpg?v=1680096454",
    alt: "Dog Not Eating Food: A Guide To Fussy Eaters",
    caption: "why-is-my-dog-not-eating-his-dog-food"
  },
  content: `
<p>Dogs are known for a lot of things; jumping up to greet you, tearing manically after a thrown toy, wagging their tongue out of an open car window… and in most cases, eating anything they can get their snouts on.</p>
      <p>What if your dog has lost their appetite, though, or just won’t eat their regular food - is that a cause for concern? The short answer is ‘maybe’, as there are lots of reasons your pooch might be turning their nose up at dinner.</p>
      <p>Read our full guide to fussy eaters to assess why your dog might not be eating, and get them back to cleaning the bowl as usual.</p>
      <h2 id="why-is-my-dog-not-eating-his-dog-food">why-is-my-dog-not-eating-his-dog-food</h2>
      <p>If your dog could usually pass for a canine vacuum cleaner, it can be worrying to see they’ve left food behind at meal times. However, the cause of this could be very simple.</p>
      <h3 id="medical">medical</h3>
      <p>The first thing to consider is whether your dog is suffering from a health issue, and if it could warrant a visit to the vet. The cause for snubbing food could be as simple as a stomach upset, or it could be a sign of something more serious.</p>
      <ul>
        <li>Stomach upset - If your dog also has runny poop and/or is vomiting, they could be suffering from food poisoning.</li>
        <li>Dental issues - Sore gums, an ulcer, cavities or a mouth injury could be making it hard for your pooch to eat.</li>
        <li>Vaccinations - If your dog has just been vaccinated, they may be feeling under the weather.</li>
        <li>Infection or intestinal obstruction - An internal issue could be causing your dog pain and suppressing their appetite.</li>
        <li>Pancreatitis, liver or kidney disease - Poor appetite could be a sign of more serious conditions such as these.</li>
        <li>Cancer - If your pooch refuses food for more than a couple of days, it could be an early sign of cancer or a tumour.</li>
      </ul>
      <h3 id="behavioural">behavioural</h3>
      <p>Dogs are anxious creatures, and even the calmest, most placid dog can suffer from a stressed stomach if their surroundings have changed. Your dog may be off his food as a behavioural reaction to scenarios such as:</p>
      <ul>
        <li>A house move - If you’ve just moved, your dog may be showing his discomfort by not eating at first.</li>
        <li>Travel - Taking your dog to an unfamiliar location is another stress-trigger that might cause fussy eating.</li>
        <li>Visitors or other dogs in the house - A distracting crowd or new people could disrupt your dog’s eating routine.</li>
        <li>A stressful environment (arguing, loud children etc) - Dogs can pick up on human emotions. If there’s been a lot going on, this could suppress their hunger for a while.</li>
        <li>Fireworks or storms - Infamously stressful for pets, loud events such as fireworks can really put your pooch off their food.</li>
        <li>Owner not present - If you’ve had to leave your dog in the presence of strangers, they might not feel safe to eat as usual.</li>
      </ul>
      <h3 id="when-to-be-concerned-about-your-dog-not-eating">when-to-be-concerned-about-your-dog-not-eating</h3>
      <p>If you can’t seem to pinpoint a reason for your dog not eating; they’re not eating anything, including treats or home-cooked food, and they leave their food for more than one day, this is the time to pay attention in case something more serious is going on. Take your dog to the vet for a checkover. The vet will ask questions about your dog’s recent activities and be able to examine them for certain symptoms.</p>
      <h2 id="dog-won’t-eat-his-food-but-will-eat-treats">dog-won’t-eat-his-food-but-will-eat-treats</h2>
      <p>Perhaps less concerning, but still a problem to be rectified, is when your dog is happy to eat treats or specific snacks but won’t eat regular meals. Believe it or not, this has a term - Partial Anorexia - and it doesn’t have entirely the same meaning as in humans.</p>
      <p>Partial Anorexia in dogs is when a dog is only happy to eat certain foods, and therefore isn’t getting the nutrition they usually would from a regular, balanced diet. It can often stem from the dog eating too many treats (perhaps because all household members are sneaking the dog a treat throughout the day), and in time, they become savvy enough to refuse all food to the alternative.</p>
      <h3 id="am-i-overfeeding-my-dog-puppy">am-i-overfeeding-my-dog-puppy</h3>
      <p>If the above sounds familiar, it could be worth analysing whether you are overfeeding your dog or puppy with too many scraps, snacks and treats. Ask yourself the following:</p>
      <ul>
        <li>Do I often succumb to my dog begging for human food?</li>
        <li>How many family members feed the dog?</li>
        <li>Are treats too readily available (i.e. do you use a treat to pacify all your dog’s behaviours?)</li>
        <li>Does my pooch have a lax or irregular feeding routine?</li>
      </ul>
      <p>If you realise that your dog is a fussy eater due to disorganised feeding habits, it could be worth getting back to basics around feeding routines for your dog. If they’re a puppy, be sure to consult a puppy feeding guide.</p>
      <h2 id="how-to-encourage-your-dog-to-eat-dog-food-again">how-to-encourage-your-dog-to-eat-dog-food-again</h2>
      <p>All is not lost if your dog has become a fussy pooch! Follow the below steps and keep at them - until your dog is in a regular routine and looks forward to their meals again.</p>
      <ul>
        <li>Cut back on treats! - The biggest, most effective step is to strip back all the extra food the dog is snacking on in between meals. So call a household meeting to stop those multiple treat streams at the source, and agree to quit sneaking table scraps too. When your pooch isn’t receiving food elsewhere, they’ll look forward to main meals, big time.</li>
        <li>Make mealtimes more fun - Just eating from a bowl can be boring, so maybe use a mealtime toy for dogs that dispenses dog biscuits as they move it around.</li>
        <li>Make dry food tastier - Either switch out your regular dry food for something tastier, or add a bit of warm water to the biscuits to increase moisture and improve texture.</li>
        <li>Switch out your regular dog food - Maybe your dog is bored of their food, and a more nutritious, tasty dry food for dogs is the answer. Otherwise, you could try slowly switching their food from dry food to wet.</li>
        <li>Change the feeding environment - Simply placing the dog’s bowl elsewhere might do the trick. Also, some dogs don’t like the reflective surface of a steel bowl, so a (non-toxic) plastic food bowl could be a preferable option.</li>
        <li>Stick to a regular feeding routine - Dogs love routine, and they really don’t get bored of eating the same food every day. It means they know what to expect, and their tummies will thank them for it, too.</li>
        <li>Praise their efforts - Ignore your dog when they beg, but pile on the praise when they eat their regular food. Positive reinforcement, rather than doggy treats, should be the aim when getting your dog eating healthily again.</li>
      </ul>
      <h2 id="food-for-fussy-dogs-and-picky-eaters">food-for-fussy-dogs-and-picky-eaters</h2>
      <p>For dogs that are fussy or picky eaters, it’s a good idea to choose foods that are more palatable and nutritious for them than commercial dog foods.  A high-protein food for dogs, for example, should encourage your pooch to eat while still providing essential nutrients to keep them healthy and functioning from the inside out.</p>
      <p>If you’d like to chat more about feeding a fussy dog, get in touch with us. Or try Pooch & Mutt’s range of hypoallergenic, grain-free dog foods and healthy dog treats - packed with tasty whole proteins, vitamins, minerals and nutritional supplements.</p>
      <h3 id="references">references</h3>
      <ul>
        <li>‘Anorexia, or lack of appetite, in dogs and cats’, 2007 - Veterinary Partner</li>
        <li>‘Appetite stimulants in dogs and cats’, 2015 - Wiley Online Library</li>
      </ul>
`,
  headings: [
    { id: 'why-is-my-dog-not-eating-his-dog-food', text: 'why-is-my-dog-not-eating-his-dog-food', level: 2 },
    { id: 'medical', text: 'medical', level: 3 },
    { id: 'behavioural', text: 'behavioural', level: 3 },
    { id: 'when-to-be-concerned-about-your-dog-not-eating', text: 'when-to-be-concerned-about-your-dog-not-eating', level: 3 },
    { id: 'dog-won’t-eat-his-food-but-will-eat-treats', text: 'dog-won’t-eat-his-food-but-will-eat-treats', level: 2 },
    { id: 'am-i-overfeeding-my-dog-puppy', text: 'am-i-overfeeding-my-dog-puppy', level: 3 },
    { id: 'how-to-encourage-your-dog-to-eat-dog-food-again', text: 'how-to-encourage-your-dog-to-eat-dog-food-again', level: 2 },
    { id: 'food-for-fussy-dogs-and-picky-eaters', text: 'food-for-fussy-dogs-and-picky-eaters', level: 2 },
    { id: 'references', text: 'references', level: 3 },
  ]
},
};