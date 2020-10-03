const actionBtn = document.querySelector(".actions-action");
const charitiesBtn = document.querySelector(".actions-charities");
const booksBtn = document.querySelector(".actions-books");
const podcastBtn = document.querySelector(".actions-podcast");
// **********************************
const unaTitle = document.querySelector(".una-title");
const unaContent = document.querySelector(".una-content");
const unaLink = document.querySelector(".una-link");
const dosTitle = document.querySelector(".dos-title");
const dosContent = document.querySelector(".dos-content");
const dosLink = document.querySelector(".dos-link");
const tresTitle = document.querySelector(".tres-title");
const tresContent = document.querySelector(".tres-content");
const tresLink = document.querySelector(".tres-link");
const kwatroTitle = document.querySelector(".kwatro-title");
const kwatroContent = document.querySelector(".kwatro-content");
const kwatroLink = document.querySelector(".kwatro-link");
const singkoTitle = document.querySelector(".singko-title");
const singkoContent = document.querySelector(".singko-content");
const singkoLink = document.querySelector(".singko-link");
// *************************
const popUp = document.querySelectorAll(".action-resources-container");

actionBtn.addEventListener("click", actionReplace);
charitiesBtn.addEventListener("click", charitiesReplace);
booksBtn.addEventListener("click", booksReplace);
podcastBtn.addEventListener("click", podcastReplace);

function actionReplace() {
  this.style.color = "gray";
  charitiesBtn.style.color = "#fbfbfb";
  booksBtn.style.color = "#fbfbfb";
  podcastBtn.style.color = "#fbfbfb";
  unaTitle.textContent = "Talk About it";
  unaContent.textContent =
    "The most important step to fighting our climate crisis is to start conversations with people around you-- to begin with shared values and connect the dots between those values and issues we already care about.";
  unaLink.textContent = "Talk About It-a TED talk by Katherina Hayhoe";
  unaLink.href =
    "https://www.ted.com/talks/katharine_hayhoe_the_most_important_thing_you_can_do_to_fight_climate_change_talk_about_it";

  // *************************
  dosTitle.textContent = "Choose Vegetables Over Meat";
  dosContent.textContent =
    "Switching to lower impact meats such as chicken,eggs or pork is the most effective way to reduce your dietary footprint.After fossil fuels, the food industry--and in particular the meat and daryy sector.";
  dosLink.textContent = "What You Need to Know About Sustainable Diets";
  dosLink.href =
    "  https://www.wri.org/blog/2016/04/sustainable-diets-what-you-need-know-12-charts";
  // *************************
  tresTitle.textContent = "Go Car-free";
  tresContent.textContent =
    "A 2017 study by Seth Wynes and Kimberly Nicholas found that going car-free is one of the most effective actions an individual could take to mitigate climate change. In industrialized countries, getting rid of your car can reduce 2.5 tonnes of CO";
  tresLink.textContent = "Green Your Commute";
  tresLink.href =
    " https://blueandgreentomorrow.com/environment/green-commuting-how-to-do-why-its-important/";
  // *************************
  kwatroTitle.textContent = "Switch to Renewables";
  kwatroContent.textContent =
    "Onshore wind and solar energy have become the lowest-cost form of energy generation across the world. In Latin America, Asia and Africa, solar energy is the cheapest source of electricity for many households. In the UK, onshore wind and solar are competitive with gas and by 2025 will be the cheapest source of electricity generation.";
  kwatroLink.textContent = "Change Stars at Home";
  kwatroLink.href =
    "https://www.climaterealityproject.org/blog/change-starts-home-four-ways-switch-renewables";
  // *************************
  singkoTitle.textContent = "Flying Less";
  singkoContent.textContent =
    "We should be thoughtful and selective about traveling and carefully consider whether a trip is worth its climate impacts. Planes run on fossil fuels and we are decades away from solar-powered commercial flights. Virtual meetings, holidaying in local destinations or using trains instead of planes all are ways to cut down.";
  singkoLink.textContent = "Trusted Carbon Offset Projects";
  singkoLink.href =
    "https://thebulletin.org/2019/09/just-how-bad-is-my-air-travel-for-the-climate-and-what-should-i-do/https://offset.climateneutralnow.org/";
}

function charitiesReplace() {
  this.style.color = "gray";
  actionBtn.style.color = "#fbfbfb";
  booksBtn.style.color = "#fbfbfb";
  podcastBtn.style.color = "#fbfbfb";
  unaTitle.textContent = "Climate Emergency Fund";
  unaContent.textContent =
    "This organization provides support to individuals and organizations who demonstrate the intention and capability of disrupting the inadequate and immoral gradual approach governments around the world are taking to addressing the climate emergency.";
  unaLink.textContent = "Donate Here";
  unaLink.href = "https://climateemergencyfund.org/?form=donate";

  // *************************
  dosTitle.textContent = "Clean Energy Innovation Policy Program";
  dosContent.textContent =
    ", a highly regarded US think tank that focuses on the intersection of technological innovation and public policy. This program seeks to accelerate the transition of domestic and global energy systems to low-carbon resources, which, according to ";
  dosLink.textContent = "Donate Here";
  dosLink.href =
    "https://itif.org/support-itif-clean-energy-innovation-policy-program";
  // *************************
  tresTitle.textContent = "Clean Air Task Force";
  tresContent.textContent =
    "A US-based non-profit which works to reduce climate and non-climate pollutants through research and analysis, public advocacy leadership, and partnership with the private sector. It was founded in 1996 with the aim of enacting federal policy reducing the air pollution caused by American coal-fired power plants.";
  tresLink.textContent = "Donate Here";
  tresLink.href = "https://www.catf.us/donate/";
  // *************************
  kwatroTitle.textContent = "Coalition for Rainforest Nations";
  kwatroContent.textContent =
    "An intergovernmental organization of over 50 rainforest nations around the world, from Ecuador to Bangladesh to Fiji.  It was founded in 2004 by the Prime Minister of Papua New Guinea and the President of Costa Rica, and since then it’s been partnering directly with governments and communities to protect their rainforests.";
  kwatroLink.textContent = "Donate Here";
  kwatroLink.href = "https://www.rainforestcoalition.org/donations/";
  // *************************
  singkoTitle.textContent = "Cool Earth";
  singkoContent.textContent =
    "A UK-based international non-profit that protects endangered rainforest in order to combat global warming, protect ecosystems and to provide employment for local people. The organization shares the most effective conservation methods around the world and invests in those with the potential for best outcomes for people and rainforest. ";
  singkoLink.textContent = "Donate Here";
  singkoLink.href = "https://www.coolearth.org/get-involved/donate-cool-earth/";
}
function booksReplace() {
  this.style.color = "gray";
  actionBtn.style.color = "#fbfbfb";
  charitiesBtn.style.color = "#fbfbfb";
  podcastBtn.style.color = "#fbfbfb";
  unaTitle.textContent = "We Are the Weather";
  unaContent.textContent =
    "Author Jonathan Safran Foer explores the central global dilemma of our time in a surprising, deeply personal, and urgent new way. The task of saving the planet will involve a great reckoning with ourselves―with our all-too-human reluctance to sacrifice immediate comfort for the sake of the future. ";
  unaLink.textContent = "The Book";
  unaLink.href =
    "https://www.goodreads.com/book/show/43565381-we-are-the-weather";
  // *************************
  dosTitle.textContent = "No One is Too Small to Make a Difference";
  dosContent.textContent =
    "This book brings you Greta Thunberg, the young climate activist who has become the voice of a generation, in her own words, for the first time. Collecting her speeches that have made history across the globe.";
  dosLink.textContent = "The Book";
  dosLink.href =
    "https://www.goodreads.com/book/show/51764686-no-one-is-too-small-to-make-a-difference";
  // *************************
  tresTitle.textContent = "Six Degrees";
  tresContent.textContent =
    "This book is a descriptive outline of what to expect from a warming world, degree by degree, as well as the inspiration for the degree-based structure of this very project. At 1 degree, most coral reefs and many mountain glaciers will be lost.";
  tresLink.textContent = "The Book";
  tresLink.href = "https://www.goodreads.com/book/show/227477.Six_Degrees";
  // *************************
  kwatroTitle.textContent = "The Thinking Person's Guide to Climate Change";
  kwatroContent.textContent =
    "This book is rooted in the first, up to date on the second, and anything but the last. Combining years of data with recent research, including conclusions from the ";
  kwatroLink.textContent = "The Book";
  kwatroLink.href =
    "https://www.goodreads.com/book/show/42897740-the-thinking-person-s-guide-to-climate-change";
  // *************************
  singkoTitle.textContent = "The unhabitable Earth";
  singkoContent.textContent =
    "As author David Wallace-Wells describes—this is not a book about the science of global warming; it is about what warming means to the way we live on this planet. Climate change is worse, much worse, than you think. The book is both a meditation on the devastation we have brought upon ourselves and an impassioned call to action.";
  singkoLink.textContent = "The Book";
  singkoLink.href =
    "https://www.goodreads.com/book/show/41552709-the-uninhabitable-earth";
}

function podcastReplace() {
  this.style.color = "gray";
  actionBtn.style.color = "#fbfbfb";
  charitiesBtn.style.color = "#fbfbfb";
  booksBtn.style.color = "#fbfbfb";
  unaTitle.textContent = "No Place like Home";
  unaContent.textContent =
    "A podcast that gets to the heart of climate change through personal stories, hosted by Mary Anne Hitt and Anna Jane Joyner. From staying sane in the age of climate change.";
  unaLink.textContent = "Listen to Spotify";
  unaLink.href =
    "https://open.spotify.com/show/6DuuXYg5XcluBtcOE1Klis?si=UMau3r1JSfOhe9Snopp7lg";
  // *************************
  dosTitle.textContent = "Mothers of Invention";
  dosContent.textContent =
    "A podcast on feminist climate change solutions, hosted by Ireland’s first female president Mary Robinson and comedian Maeve Higgins. Episodes explore different ways of effecting change in the area of climate justice.";
  dosLink.textContent = "Listen to Spotify";
  dosLink.href = "https://open.spotify.com/show/0lV4tqnaahncpqXrMrCmkj";
  // *************************
  tresTitle.textContent = "Costing the Earth";
  tresContent.textContent =
    "A BBC podcast that dives into fresh ideas from the sharpest minds working toward a cleaner, greener planet. The show questions widely accepted truths, challenges those in charge and covers a diverse range of topics from building golf courses on sand dunes to climate changes’ effects on human and animal fertility.";
  tresLink.textContent = "Listen to Spotify";
  tresLink.href =
    "https://open.spotify.com/show/7ot9kxKONDasPLMLxDuVrV?si=mQttPVJcSgyXciHw4QQ9tA";

  // *************************
  kwatroTitle.textContent = "Climate Conversations";
  kwatroContent.textContent =
    "A podcast produced by MIT Climate—Massachusetts Institute of Technology’s hub for all the scientific work being done on climate change across the university. The show addresses difficult topics through a scientific lens but dissects it in an accessible and digestible manner.";
  kwatroLink.textContent = "Listen to Spotify";
  kwatroLink.href =
    "https://podcasts.apple.com/ca/podcast/climate-conversations-a-climate-change-podcast/id1265791892";
  // *************************
  singkoTitle.textContent = "Warm Regards";
  singkoContent.textContent =
    "A podcast about the warming planet. The show is hosted by Dr. Jacquelyn Gill, a paleoecologist at the University of Maine, and co-host including Dr. Ramesh Laungani, a biologist at Doane University with co-hosts and Dr. Sarah Myhre, a climate scientist, scholar, and communicator.";
  singkoLink.textContent = "Listen to Spotify";
  kwatroLink.href =
    "https://open.spotify.com/show/6BfVCWCEOzpY4TlikFTzkg?si=IZaSIToITmqCS9NOtBfi_A";
}
