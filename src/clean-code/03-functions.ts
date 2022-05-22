(() => {
  // función para obtener información de una película por Id
  function getMovieById(movieId: string) {
    console.log({ movieId });
  }

  // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
  function getCastMovieById(movieId: string) {
    console.log({ movieId });
  }

  // funcion para obtener el bio del actor por el id
  function getBioActorById(id: string) {
    console.log({ id });
  }

  // Crear una película
  interface IMovie {
    title: string;
    description: string;
    rating: string;
    cast: Array<string>;
  }
  function createMovie({ title, description, rating, cast }: IMovie) {
    console.log({ title, description, rating, cast });
  }

  // Crea un nuevo actor
  function createActor(fullName: string, birthdate: Date): boolean {
    if (verifyName(fullName)) console.log("Crear actor");
    return true;
    return false;
  }
  function verifyName(name: string) {
    if (name === "fernando") return false;
    return true;
  }

  //continuacion

  const getPayAmount = ({
    isDead = false,
    isSeparated = true,
    isRetired = false,
  }): number => {
    if (isDead) return 1500;
    if (isSeparated) return 2500;
    // if (isRetired)
    //   return 3000;
    // return 4000;
    return isRetired ? 3000 : 4000;
  };
})();
