export class ApiError extends Error {
  constructor(status_code, detail, ...args) {
    super(detail, ...args);
    this.status_code = status_code;
  }
}

export class CloudocClient {
  constructor(access_token) {
    this.access_token = access_token;
    this.url = 'http://localhost:8080';
  }

  constructUrl(endpoint) {
    let params = new URLSearchParams(
      {
        access_token: this.access_token
      }
    );
    return this.url + endpoint + '/?' + params;
  }

  _req(url, params = {}) {
    let result;
    fetch(url, params)
      .then(response => {
        if (response.ok)
          return response.json()
        throw new ApiError(response.status, response.json());
      })
      .then(data => result = data);
    return result;
  }

  getDocumentsInfo() {
    return this._req(this.constructUrl('/documents'))
  }

  createDocument(documentName) {
    // TODO не работает (((
    return this._req(
      this.constructUrl('/documents'),
      {
        method: 'POST',
        body: JSON.stringify({name: documentName}),
      }
    )
  }
}
