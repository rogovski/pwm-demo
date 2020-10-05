/**
 * http request for json apis
 */
export default function (url, options, timeout = 7000) {
    return Promise.race([
        fetch(url, options),
        new Promise((_, reject) =>
            setTimeout(() => reject(new Error('timeout')), timeout)
        )
    ])
    .then(r => {
      const status = r.status;
      return r.json().then(body => ({ status, body }));
    });
}
