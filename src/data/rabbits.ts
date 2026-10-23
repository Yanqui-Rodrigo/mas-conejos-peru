export type Rabbit = {
  id: string
  name: string
  image: string
  description: string
  badge: string
  weight: string
  ears: 'caidas' | 'erguidas'
  coat: 'corto' | 'medio' | 'largo' | 'lanoso'
  temperament: string
  trait: string
  traitIcon: string
  price: number
}

export const rabbits: Rabbit[] = [
  {
    id: 'holland-lop', name: 'Holland Lop',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5IKwdExfeUCqv09rTnwyBYnBhK5Zl5WEFkH8wjFMKIfGiKM1AloS1q6QH1Zt5SHynCD8HVAjxHbJXTcZm5-aH9PJqO5S6lVq6DVcq6DCWjoHHO7IWk71fblnVbGKxRASZiIVwVqLQetke_dVa2xYLVuWQSGycD_4I7jM5i9FjePfdT3iOcqJGSvah4F3bcbOHGi9CNK6f91sq3rL1aqklnnBQmhqFHVSLFLV9q7McGim0vKlu01ff',
    description: 'El favorito indiscutible por su porte compacto, carita redondeada y temperamento dócil, juguetón y familiar.', badge: 'Orejas caídas (Lop)', weight: '1.8 kg', ears: 'caidas', coat: 'corto', temperament: 'Dócil, cariñoso', trait: 'Muy cariñoso', traitIcon: 'mood', price: 130,
  },
  {
    id: 'mini-lop', name: 'Mini Lop',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABc72AjdSHuqss_SN1NrE5iz3SYnWdqwV00eLud8qzgSxBuCV4BUjSUA7sPIlUyBsopf19WD-JnX9K7XD3qOecqSvry99lOzsBBGY28qT9WWO64mGFmJEcXr7dVC05vKrgPPqniIdeXjQvo3pvYEV1qeY7TLZc44a4Unu8jw6iRoQBDnSqjaumvoe8mTnRfL-ZZWy75PivTKcv8VUSRcy17Y4pZrY8iHPkMRRxjsqYMj0TWspqvd80',
    description: 'Cuerpo robusto y atlético, pelaje denso y orejas caídas en forma de herradura. Extraordinariamente sociable.', badge: 'Orejas caídas (Lop)', weight: '2.5 kg', ears: 'caidas', coat: 'medio', temperament: 'Robusto, sociable', trait: 'Altamente sociable', traitIcon: 'groups', price: 120,
  },
  {
    id: 'teddy-lop', name: 'Teddy Lop',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkApe6zpGjhfeI1cuMFquO-LCyfJy5MCUU8JO0q9mmjEajVnP8JrL1Ax_5eZ8wZricvPH1kki5MlE7DMTmQW3ElIBj81HteWhjpO-xkwMxGgfuBvVvC5nesbc1pWMgySeteKSGFK0YmBNEWMSke9gq8mtF_HiA_WBfSRw6b2DFtTem5t-1H2zlSgU40PsykklXBhTpY6nGbxIYvVLGB3eGdGQWoAIGm2BHYkOqJ36l2RqKvP7aOJyt',
    description: 'También conocido como Teddywidder: manto largo y esponjoso tipo peluche, orejitas caídas y carácter sereno.', badge: 'Pelaje largo / Teddy', weight: '1.7 kg', ears: 'caidas', coat: 'largo', temperament: 'Esponjoso, dócil', trait: 'Cepillado semanal', traitIcon: 'brush', price: 150,
  },
  {
    id: 'mini-lion-lop', name: 'Mini Lion Lop',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAG3t86xu8EACaf2So1zC9tbzADNp9Vpsl5SHttT3J7TjlNtzpyErEwGkkRV5YIG7xv7pArjmkJYQ02dzjXKtT2_8_Q7dQwBdjedhl_yEUAOsGXNkqaq-f6jTaU0kUS828TpI86qRvGOd1xVi-LSv-fUXHtJSkFMQukQoO9WKDFCtjw7HVVbnytvi73tnO_mLqVyNSCMLaI4YeGXwc8aJ_ZXh-nSNVzjunRRSuFkF5NsoJHmjp8fC2Q',
    description: 'Un híbrido fascinante que combina la melena del león con las orejas caídas y tiernas del linaje Lop.', badge: 'Lop + melena', weight: '1.6 kg', ears: 'caidas', coat: 'medio', temperament: 'Curioso, encantador', trait: 'Manto híbrido', traitIcon: 'auto_awesome', price: 140,
  },
  {
    id: 'american-fuzzy-lop', name: 'American Fuzzy Lop',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMK0Nan_scawuY4Xmbv_MHlcHk9mk63NkPhxqlJ9jkCFos7fsl1bwZJ1veBYhhAKGFqBmeRDPc2hu74-Vxleywa1OuYKsLIbGtGSU9FAjgg5_Asy2emfUuOWgzT8QdxUYbxYSZY0_arzRH2gvATorn5XNG-tdMoC--K-sZ1y8O6HWyQFzAhGiIbdFqERRVMfeJ-jnvn0lmNPQfmTIbGYWeNGbxJa6kE2abs54LSCOIPQ7-0cNi20lc',
    description: 'Orejas caídas y pelaje lanoso similar al angora en un porte enano; su temperamento es paciente y dulce.', badge: 'Lana lanosa', weight: '1.9 kg', ears: 'caidas', coat: 'lanoso', temperament: 'Dulce, lanoso', trait: 'Lana extra suave', traitIcon: 'cloud', price: 145,
  },
  {
    id: 'netherland-dwarf', name: 'Netherland Dwarf',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4kDeNzQQshfB4fw-S6L4NByyAfdCklseIG_FliCK9nV8rihewaW8B1Emxpg_-0kdfPMWU9MXXXxGXkjuD2R5gZdMaDzWT9XLjV2KHqwlkYcBzTOY-_-qmnbjtiA7AwGK0vmx0qSPIcK7cnt8G5iRyno1V94O22h4xEndecNPD9Aop11Ru8qxtkB7gCS-GMYaL9EMz85DdrYWty1L5GKIY_-Ck_efDrL7O3oqk4BuArHlmSxsaBPTi',
    description: 'Una de las razas más pequeñas del mundo: orejitas erguidas, porte esférico y energía para explorar.', badge: 'Orejas erguidas', weight: '1.0 kg', ears: 'erguidas', coat: 'corto', temperament: 'Vivaz, curioso', trait: 'Muy activo', traitIcon: 'bolt', price: 135,
  },
  {
    id: 'lionhead', name: 'Lionhead (Cabeza de León)',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAGulG7RPGE3HUBHM_k4eQ3KuWYgYakYg-DM4oJ_RWwy5LxDq5Mc9KPV2vDEr89XL69B_PH6tBZ-o14TG-iejTHlV3LX1_WVJnDAKunigWHgvFj2RkXJTOG6cb4-8Wd7qSUdE9TF7fkrjleRey60S2adwzDeRzhc8MiQLEfKoEDoBSKryLfhvIoT8yC1DqeIS4MdrbqzjTEQNNrq2tQvcZ0jbJawbuWV_PdPex73V6zwm_LJG20cTa',
    description: 'Su melena esponjosa rodea la cabeza. Es vivaz, inteligente y afectuoso, con orejas erguidas medianas.', badge: 'Orejas erguidas', weight: '1.5 kg', ears: 'erguidas', coat: 'largo', temperament: 'Vivaz, juguetón', trait: 'Muy inteligente', traitIcon: 'psychology', price: 125,
  },
  {
    id: 'english-lop', name: 'English Lop',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAhlMhYk7BkcdmPfkcrFxChbHj7IP-55s7gjUe4240hmU0hkztsFph_KtrcOqJfLdWA_SbFgBRX18XR_Ym5Mam4SJ2zvogpYRCLkcQGmocM8cIGNHw1FdyZYBLDb7dbVPaHDzNLOUNEcy7qS9OuZb-wRXakkIY500MccXCebAzWGk9osUWJj_A-CrEMpA4J5-uA2MA5zxoelpVuEymkmpMrUC4cbmxoCX3mSt4Iw9ukxvbGE_eMh9c',
    description: 'Histórica raza de orejas caídas extralargas y aterciopeladas. De temperamento noble, sereno y confiado.', badge: 'Orejas extralargas', weight: '4.2 kg', ears: 'caidas', coat: 'corto', temperament: 'Noble, tranquilo', trait: 'Ultra pacífico', traitIcon: 'spa', price: 165,
  },
  {
    id: 'french-lop', name: 'French Lop',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAfle32bqPxrhEdC6lGHjH8gF4mFo6JMvykwObOyERCRuj7Ee23_v7ixQPFoy8JxTiWbR2cxYDgck0eRxUtdbJ2_Zx3icNetM7gCcGhBrBAx-NXBJ54Z0g7Q68BNMbGIfwRxWbbZTtWg9dOehYZxPMOr5U-DOzqKkviSVKuW3CR_FQQA3VdVukT7y3Luh5y41cvM0sR6odHjMbhv-bOFhhZ8RUs9eZAruxnMusKgBNZ9TEewXItqd3',
    description: 'Un gigante de orejas caídas, tranquilo y apegado. Muy tolerante, ideal para convivir en espacios libres.', badge: 'Gigante bonachón', weight: '5.0 kg', ears: 'caidas', coat: 'corto', temperament: 'Calmo, compañero', trait: 'Gran compañero', traitIcon: 'chair', price: 160,
  },
  {
    id: 'cashmere-lop', name: 'Cashmere Lop',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1c678pLsm1Q50mSIyGx6Jqo3LvNxCgomq9q-0d9SpgNaQVMZBZf1m2BaRq0Dme0ocB_eNjFpSHXC9-Ck0JCI0Fr8XvH5ocf-7F_bHeIqFG_Yg0iRzu6Ii3wGEt2_457okp0qV0JtZnIKv1m6nq1CMwRDm6Xy2HkA54bvAn84yOr1AO1J8pz_zOfoTRQ-CmsJab0sij6msuH-sutoBTFD8aXcWRAy58lLyhn6YCFUvFsBt8ifqfHeV',
    description: 'Su pelaje sedoso y largo no se apelmaza con facilidad. Orejas caídas y temperamento afectuoso y dócil.', badge: 'Pelaje sedoso', weight: '2.3 kg', ears: 'caidas', coat: 'largo', temperament: 'Sedoso, apacible', trait: 'Manto sedoso', traitIcon: 'clean_hands', price: 140,
  },
  {
    id: 'jersey-wooly', name: 'Jersey Wooly',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAX_yPOiO2XGTbZonUJFVwzYJSEEF8s-iLEB_d0jIvXTCqKpZKDSHgEdZMc-mjIU7SDaWV56S6nGllmsx1ZNPQmZttUNsiFAMqy-HiS4Tk2dzzsILUrOlEPd5e0MWCyg3M1rkAjlWFadVvEWOYow5z32SBpgM9U9KZfwRmmGVmQS1Ikm95bBncueJ7iVORR_pCDY_e39B9ynTwVi8YdcN_SpzSqmSw0M0MenCd__EN7tny6-rTYl8R7',
    description: 'Conocido como el “conejo que no patea”. Miniatura, de lana esponjosa y orejitas erguidas.', badge: 'Orejas erguidas', weight: '1.3 kg', ears: 'erguidas', coat: 'lanoso', temperament: 'Tranquilo, afectuoso', trait: 'Extremadamente manso', traitIcon: 'sentiment_very_satisfied', price: 135,
  },
  {
    id: 'mini-rex', name: 'Mini Rex',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDd_gB39TJJUGzpGW21lZBfTSlmOr4VgiE6Ayr7J6sHOZsPBGlrgv3U-T3fFmt3D2Aj6kzRh6xba_0UQn2a1chqEytkDBIYlM3EYJWno0JPQGfEs-hTWlmevCIGMBQ37eeMGWaDSF-VVFBRe0mbx9eh3jOHONFUiGj9_b_71JtRqcihXE6mlR1W6B1P765H4Fzt0X3fU1IvnY03p0MnjfdVWpfdObqaivBiNY1keXx_TCDpQTfBfXcP',
    description: 'Famoso por su pelaje aterciopelado único al tacto. Orejas erguidas, mirada vivaz y gran inteligencia.', badge: 'Pelaje terciopelo', weight: '1.9 kg', ears: 'erguidas', coat: 'corto', temperament: 'Inteligente, aterciopelado', trait: 'Tacto aterciopelado', traitIcon: 'touch_app', price: 140,
  },
  {
    id: 'polish-rabbit', name: 'Polish Rabbit',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAF3zUC5kL5hxwLC_9dEyBPSvKz-YNATqxPIVtneqdrpLZP7cE2F6_yD5PW3wNnbio5OzZ8sxOyQGk0RGcvLAqxIefUgrHCfi76LAXAxqvP1-OtUPdjpJoJ_8W2mC-3w7HeBnx_tZBuHyRZvJQ2HdNQ4gVwCRG-3oh8SXsqRiAIiThkO1WXo2PHHwlFslkIzAUbxHpJIoROTLo9jNm219AmtS52JffCJtkedDQdNzVUaHgAlNztY9Xn',
    description: 'De cuerpo esbelto, ojos expresivos y pelaje reluciente. Una raza menuda y refinada que se socializa con paciencia.', badge: 'Orejas erguidas', weight: '1.1 kg', ears: 'erguidas', coat: 'corto', temperament: 'Esbelto, expresivo', trait: 'Mirada expresiva', traitIcon: 'visibility', price: 130,
  },
  {
    id: 'holland-dwarf-lop', name: 'Holland Dwarf Lop',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhWDm0d90XEoiMaHAwJ7ARgNnBqAHII6EHAwD23U0yKi1P-GOEhrEuTJj_oM0IkPHlH49qwHGgVA5Hr5mVMdJcBYGMGa74zdbb6Kk67dhcIsFSHFRJYuVEo05TjyVPgQTsaexJSOExnzI_ISTPgdz-XcvJS51mh5osLcaiiYtBnJY2YLHpzhzpRBVBDmfxStK8OVzgixHLE3o0mddF5WHPr64hOZqzaVVTBMN3oKWuT6mKqOR9h9L9',
    description: 'Una versión pequeña y tierna de orejas caídas. Conserva la dulzura del Holland en proporciones miniatura.', badge: 'Mini Lop enano', weight: '1.4 kg', ears: 'caidas', coat: 'corto', temperament: 'Tierno, miniatura', trait: 'Ultra tierno', traitIcon: 'child_care', price: 155,
  },
]
