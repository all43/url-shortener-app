export default {
  name: 'Api',
  data: () => ({
    loading: false,
  }),
  methods: {
    request(path, data) {
      const host = process.env.VUE_APP_HOST;
      const port = process.env.VUE_APP_PORT;
      const url = `${host}:${port}/${path}`;
      const options = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      if (data) {
        options.method = 'POST';
        options.body = JSON.stringify(data);
      }
      return fetch(url, options);
    },
  },
};
