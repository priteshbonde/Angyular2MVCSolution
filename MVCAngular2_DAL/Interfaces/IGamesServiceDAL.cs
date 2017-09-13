using MVCAngular2_DAL.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MVCAngular2_DAL.Interfaces
{
    public interface IGamesServiceDAL
    {
        List<Game> GetGames();
        Game AddGame(Game game);
    }
}
