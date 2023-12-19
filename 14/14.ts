/*
 * Con el tema de las redes sociales, Santa Claus tiene pánico que los niños se despierten mientras
 * él está repartiendo regalos en sus casos, usen el móvil para grabarlo y se haga viral en TikTok.
 *
 * Quiere evitarlo a toda costa. Cada casa en esa calle tiene un número de regalos preparados. Sin
 * embargo, las casas tienen un sistema de seguridad conectado entre casas adyacentes, por lo que
 * no puede dejar los regalos en dos casas seguidas, o se activará la alarma que alertará a los niños.
 *
 * Dada un array de enteros no negativos regalos que representa la cantidad de regalos en cada casa,
 * tu tarea es ayudar a Papá Noel a determinar la máxima cantidad de regalos que puede entregar en
 * una noche sin activar ninguna alarma.
 */

function maxGifts(houses: number[]): number {
  let include = 0;
  let exclude = 0;
  let newExclude = 0;

  for (let i = 0; i < houses.length; i++) {
    newExclude = Math.max(include, exclude);

    include = exclude + houses[i];
    exclude = newExclude;
  }

  return Math.max(include, exclude);
}

export default maxGifts;
