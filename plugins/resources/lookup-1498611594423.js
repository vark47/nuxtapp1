(function(window, undefined) {
  var dictionary = {
    "32f4081c-6268-4aeb-9ce9-6849f3e00d41": "K12_v2_confront_v5",
    "24b1585a-c56f-4f05-930f-e84fdc387c90": "K12_v2_confront_v4",
    "78e9bf63-6742-4554-a0de-1d64feb64dd3": "K12_v2_confront_v3",
    "64af615a-3a83-4091-bf01-09531ab35f62": "K12_v2_confront_v2",
    "8bfbc3a4-91f1-4698-a731-c7034f1a614f": "K12_v2_confront_v1",
    "8d8411df-e267-4da6-bcc4-93f418ee1fd8": "Home_v3",
    "57c926cd-026f-4421-8ae2-8d3963bdb440": "Home_BACKUP",
    "af8917da-1b9c-40b9-92ff-c9d3715c9300": "Home_v2",
    "c9e2a4f9-39e2-46ac-8efa-83481e3e8f7b": "ContactUs_v3",
    "63124938-06b6-4f24-95bb-c6a51fa1b29f": "K12_v4",
    "3e15a290-f461-433a-b0ae-9da2c6584070": "ContactUs_v2",
    "0d36a045-5343-4336-b20e-2737f29765b5": "K12_v3",
    "ce5077aa-05e3-4e2c-a25c-f40e6b6a6905": "ContactUs_v1",
    "fde65fa7-5a93-4ddf-9031-b23676c69b53": "K12_v1",
    "50f57da1-05c7-4903-ade5-ab0af58c81f9": "HEd_v3",
    "c35989e1-7f27-4075-93fc-86c726141462": "HEd_v2",
    "15ae2c35-6390-4941-9438-212a30eb07de": "DRAFT",
    "b4ac8ad2-8c4a-471a-bf21-9d23a2e00ce9": "HEd_v1",
    "bbf9e037-9577-404c-9660-929fbf3cb5dc": "K12_v2_confront_v2_wordcloud",
    "dcd1c62d-58e9-43a6-aa87-25f91878edc7": "About_v4",
    "142cc417-3a33-47d2-9864-824f95beae91": "Workforce_v1",
    "d5917f20-0b30-46b4-8547-17a19b964578": "Solutions_v1",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);