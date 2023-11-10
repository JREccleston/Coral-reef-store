const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'kalam': ['Kalam', 'cursive'],
      'Nuecha': ['Neucha', 'cursive']
    },
    colors: {
      'b1': ' #caf0f8',
      'b2': '#90e0ef',
      'o1': ' #219ebc',
      'sky100': '#e0f2fe'
    },
    backgroundImage: {
      'cloud': "url('https://lh3.googleusercontent.com/pw/ADCreHedtQaWbUJFnYgp3yfWswj5umdgQsjggDFD4dJUP0CZ9edG8e2xUHJgJ_99hzCrYDgmJX1jB9QHPzDD6FHTwOYnrjxuGqvvbeUW4z8dbXDqGSE1JW0CWcIJ6Gtf_pilxi53lAnjQ640r4T5NiPRle9q9ehOWyOWgau7JAW8VKKtZ47gmt6f3BTjUy9jYxpPYUm-_lexxOdA_w-czKIYhZAwU39sJq5pkgpjOue3bFK1_oHKpJrijgkdvAJorBB6sxc3KVo2wUBzMrkm_6_ChcbbbTQ6YSnJ7j6ObOZkPwqWUzr1AlMonx4vgssGIiF5zqFUiHayRK0IsTtOIRsv_wkHrMhUhdfFp44sk6GphKNVN-v7c99cDbt9XuYqI44qOfLoVOowmgGRJa4fe0HHrFDaclq9NvOcAbS-mvEv_oIzWk6eHrxMifVXlkAxYFTbwO7nSlkEdS0E3v4F8l_pekEK7dObHDocFX6re7O3ALi1yuRrxKbz8-u2BIGy6xoNJs3DzuAarUWeCkDn-48A2DCefvNMF_tabRBu5BbxKjepWpf16vjmI5G67cBiM1GtqnZw55AIXMK47EJYJZlF-t20dOAdNkPxs7ZX3qi01KxPhpQ-x94DlxaKOdpfTlPtOuj42yfLJy769D13g3bEM-jeXlQHcHBLnY4Cf71EQ6JsSrlecTdSbbaGXlOVMzfULsok5OACHDnJuNLmLECIs1lJ40pjhUAI61RLAxnukMP4V83e4m3zxVY98iv8SohlIdrfo2gH-SbiQpabtvgpZdxhXycZUmMeXzkHvUorsWLNeNxCPHgOUDUsupVHnVFSjoIMwq366ruvcYHplBKkzdHIQLcbhIHSTelcp6NlUAApGFVbJLR4BBZ2_Gqk_UCLmU6k2c6zl5QIccWGvCoXcQ3uyTk=w1251-h938-s-no?authuser=0')",
    },
    plugins: [
      require('tailwindcss-animated')
    ],

  }
});


