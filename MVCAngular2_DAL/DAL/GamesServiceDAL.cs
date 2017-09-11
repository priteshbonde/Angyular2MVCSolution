using MVCAngular2_DAL.Entity;
using MVCAngular2_DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MVCAngular2_DAL.DAL
{
    public class GamesServiceDAL: IGamesServiceDAL
    {
        public List<Game> GetGames()
        {
            List<Game> lstgames = new List<Game>();
            using (var context = new GamesDBEntities())
            {
                lstgames = context.Games.ToList();
            }
            return lstgames;
        }
    }
}
