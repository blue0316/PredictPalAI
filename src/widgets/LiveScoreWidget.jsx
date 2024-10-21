import React, { useEffect } from "react";

const LiveScoreWidget = () => {
  useEffect(() => {
    // Function to load the Broadage script
    const loadBroadageScript = () => {
      (function (b, s, p, o, r, t) {
        b["broadage"] = b["broadage"] || [];
        if (!b["broadage"].length) {
          r = document.createElement(s);
          t = document.getElementsByTagName(s)[0];
          r.async = true;
          r.src = p;
          t.parentNode.insertBefore(r, t);
        }
        b["broadage"].push({
          bundleId: o.bundleId,
          widgets: o.widgets,
          accountId: o.accountId,
        });
      })(window, "script", "//cdn-saas.broadage.com/widgets/loader/loader.js", {
        bundleId: ["all-ls"],
        accountId: "6e9cb832-f7dc-4df8-a2df-822aeae803dd",
        widgets: {
          liveScore: [
            {
              element: "DOM_element_id_in_your_website_1728003622612",
              coverageId: "6bf0cf44-e13a-44e1-8008-ff17ba6c2128",
              options: {
                theme: "darkBlue",
                goalSound: true,
                webNotification: true,
                sportFilter: false,
                remainingTime: true,
                sportId: 1,
              },
            },
          ],
        },
      });
    };

    // Load the script when the component mounts
    loadBroadageScript();
  }, []); // Empty dependency array ensures this runs only once

  return <div id="DOM_element_id_in_your_website_1728003622612"></div>;
};

export default LiveScoreWidget;
