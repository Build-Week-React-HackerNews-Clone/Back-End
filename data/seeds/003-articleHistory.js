exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("articleHistory")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("articleHistory").insert([
        {
          rank: 1,
          article_id: 21323663,
          title: "Firefox 70",
          url:
            "https://hacks.mozilla.org/2019/10/firefox-70-a-bountiful-release-for-all/",
          time: 1571752934,
          descendants: 311,
          score: 1107,
          by: "feross",
          type: "story"
        },
        {
          rank: 2,
          article_id: 21324768,
          title: "Ask HN: What's a promising area to work on?",
          url: "https://news.ycombinator.com/",
          time: 1571758214,
          descendants: 602,
          score: 764,
          by: "richtapestry",
          type: "story"
        },
        {
          rank: 3,
          article_id: 21329655,
          title: "Geometry, Algebra, and Intuition (2017)",
          url:
            "http://www.shapeoperator.com/2017/02/28/geometry-algebra-intuition/",
          time: 1571787931,
          descendants: 2,
          score: 37,
          by: "sebg",
          type: "story"
        },
        {
          rank: 4,
          article_id: 21329453,
          title:
            "New York Times Eliminates Director of Information Security Position",
          url: "https://twitter.com/runasand/status/1186775481615605760",
          time: 1571786296,
          descendants: 13,
          score: 64,
          by: "idlewords",
          type: "story"
        },
        {
          rank: 5,
          article_id: 21328296,
          title:
            "TechCrunch published Snap earnings before numbers went public",
          url: "https://twitter.com/alexeheath/status/1186735799338860544",
          time: 1571776925,
          descendants: 53,
          score: 111,
          by: "tempsy",
          type: "story"
        },
        {
          rank: 6,
          article_id: 21328809,
          title: "FTC Brings First Case Against Developers of “Stalking” Apps",
          url:
            "https://www.ftc.gov/news-events/press-releases/2019/10/ftc-brings-first-case-against-developers-stalking-apps",
          time: 1571780938,
          descendants: 73,
          score: 91,
          by: "detaro",
          type: "story"
        },
        {
          rank: 7,
          article_id: 21324273,
          title:
            "Dramatically reduced power usage in Firefox 70 on macOS with Core Animation",
          url:
            "https://mozillagfx.wordpress.com/2019/10/22/dramatically-reduced-power-usage-in-firefox-70-on-macos-with-core-animation/",
          time: 1571756026,
          descendants: 59,
          score: 374,
          by: "muizelaar",
          type: "story"
        },
        {
          rank: 8,
          article_id: 21329870,
          title:
            "Pedestrian Bridge Collapse over SW 8th Street Miami, Florida [pdf]",
          url:
            "https://www.ntsb.gov/news/events/Documents/2019-HWY18MH009-BMG-abstract.pdf",
          time: 1571790422,
          descendants: 1,
          score: 11,
          by: "wallflower",
          type: "story"
        },
        {
          rank: 9,
          article_id: 21327114,
          title: "Natural Language Processing (2018) [pdf]",
          url:
            "https://github.com/jacobeisenstein/gt-nlp-class/blob/master/notes/eisenstein-nlp-notes.pdf",
          time: 1571769482,
          descendants: 9,
          score: 159,
          by: "scvalencia",
          type: "story"
        },
        {
          rank: 10,
          article_id: 21326484,
          title: "Don't Use VPN Services",
          url: "https://gist.github.com/joepie91/5a9909939e6ce7d09e29",
          time: 1571766007,
          descendants: 124,
          score: 185,
          by: "ductionist",
          type: "story"
        },
        {
          rank: 11,
          article_id: 21327443,
          title: "Storing 50M events per second in Elasticsearch",
          url:
            "https://datadome.co/store-50-million-event-per-second-in-elasticsearch/",
          time: 1571771571,
          descendants: 6,
          score: 22,
          by: "Benfromparis",
          type: "story"
        },
        {
          rank: 12,
          article_id: 21322291,
          title:
            "London Ultra Low Emission Zone cuts toxic air pollution by a third",
          url:
            "https://www.london.gov.uk/press-releases/mayoral/ulez-reduces-polluting-cars-by-13500-every-day",
          time: 1571742621,
          descendants: 166,
          score: 398,
          by: "sails",
          type: "story"
        },
        {
          rank: 13,
          article_id: 21329572,
          title:
            "WeWork Needed a Bailout, But Adam Neumann Still Leaves a Billionaire",
          url:
            "https://www.bloomberg.com/news/articles/2019-10-22/neumann-clings-to-billionaire-status-after-wework-gets-a-bailout",
          time: 1571787193,
          descendants: 24,
          score: 56,
          by: "uptown",
          type: "story"
        },
        {
          rank: 14,
          article_id: 21328219,
          title:
            "U.S. tech inventors are highly clustered because of idea spillover",
          url:
            "https://www.citylab.com/life/2019/10/technology-inventions-where-work-patents-agglomeration-data/599089/",
          time: 1571776378,
          descendants: 24,
          score: 51,
          by: "jseliger",
          type: "story"
        },
        {
          rank: 15,
          article_id: 21328923,
          title:
            "YARA – A pattern-matching Swiss knife for malware researchers",
          url: "http://virustotal.github.io/yara/",
          time: 1571781878,
          descendants: 1,
          score: 22,
          by: "Daviey",
          type: "story"
        },
        {
          rank: 16,
          article_id: 21325962,
          title: "Slimbook collaborates with the PowerPC laptop",
          url:
            "https://slimbook.es/en/noticias-notas-de-prensa-y-reviews/435-slimbook-collaborates-with-the-powerpc-laptop",
          time: 1571763519,
          descendants: 82,
          score: 139,
          by: "jrepinc",
          type: "story"
        },
        {
          rank: 17,
          article_id: 21325138,
          title: "Ask HN: Agriculture startups doing interesting work?",
          url: "https://news.ycombinator.com/",
          time: 1571759732,
          descendants: 120,
          score: 196,
          by: "greenie_beans",
          type: "story"
        },
        {
          rank: 18,
          article_id: 21323396,
          title:
            "Cache Poisoned DoS Attack: Shutdown any CDN Website with One HTTP Request",
          url: "https://cpdos.org/",
          time: 1571751233,
          descendants: 71,
          score: 238,
          by: "ldmail",
          type: "story"
        },
        {
          rank: 19,
          article_id: 21325295,
          title: "Ranked-choice voting is on the ballot in New York City",
          url:
            "https://www.nytimes.com/2019/10/15/opinion/new-york-ranked-choice-voting.html",
          time: 1571760421,
          descendants: 318,
          score: 737,
          by: "Reedx",
          type: "story"
        },
        {
          rank: 20,
          article_id: 21322712,
          title: "Ghost 3.0",
          url: "https://ghost.org/blog/3-0/",
          time: 1571746288,
          descendants: 80,
          score: 211,
          by: "sareiodata",
          type: "story"
        }
      ]);
    });
};
