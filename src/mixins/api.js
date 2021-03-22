export default {
  name: 'Api',
  data: () => ({
    loading: false,
    error: '',
  }),
  methods: {
    async request(path, data) {
      const host = process.env.VUE_APP_HOST;
      const port = process.env.VUE_APP_PORT;
      const url = `${host}:${port}/${path}`;

      this.loading = true;
      this.error = '';

      const result = { success: false };
      const options = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      if (data) {
        options.method = 'POST';
        options.body = JSON.stringify(data);
      }
      try {
        const response = await fetch(url, options);
        const success = response.status >= 200 && response.status < 300;
        let responseData = {};
        const errorObj = {};
        if (success) responseData = await response.json();
        else {
          errorObj.error = response.status === 400 ? 'invalidUrl' : 'unknown';
        }
        Object.assign(result, responseData, { success }, errorObj);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn(e);
        const error = 'connectionError';
        this.error = error;
        result.error = error;
      }
      this.loading = false;
      return result;
    },
  },
};
