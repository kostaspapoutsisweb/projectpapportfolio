console.log("Starting gran: Basic analytics that only tracks page views by tab session (nothing else), for dev purposes. Source code: https://coffeebank.github.io/gran");

// sessionStorage only saves for the tab session
let granId = sessionStorage.getItem('granId');
granToken = atob("Zjk4MTM1NzM1Zjk4ZDhmMmM5ZmFhZjdlNmVhMjM1NGJlYTU2ZjE1YQ==");

if (granId != null) {
  // if granId exists for this session
  console.log("gran: Existing session retrieved for " + granId);

  // update gran session
  fetch("https://api.github.com/repos/coffeebank/ghca/issues/comments/" + granId, { 
    method: "GET"
  })
  .then(response => response.json())
  .then(data => {
    console.log("gran: Session history - " + data.body + ' -> ' + window.location.pathname);
    return fetch("https://api.github.com/repos/coffeebank/ghca/issues/comments/" + granId, { 
      method: "PATCH",
      headers: { 
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': 'token ' + granToken
      },
      // Get existing message, concatenate current pathname
      body: JSON.stringify({"body": data.body + ', ' + window.location.pathname})
    })
  })
    
} else {
  // granId doesn't exist, create new and save to sessionStorage
  // comment is generated under each ghca/issue/# based on js
  fetch("https://api.github.com/repos/coffeebank/ghca/issues/{{ page.granIssue }}/comments", { 
    method: "POST",
    headers: { 
      'Accept': 'application/vnd.github.v3+json',
      'Authorization': 'token ' + granToken
    },
    body: JSON.stringify({"body": window.location.pathname})
  })
  .then(response => response.json())
  .then(data => {
    sessionStorage.setItem('granId', data.id);
    console.log("gran: New session started! {{ page.granIssue }}/{{ page.name }}, ID " + data.id);
  })

}

