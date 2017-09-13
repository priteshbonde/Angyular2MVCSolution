using MVCAngular2.Models;
using MVCAngular2_DAL.Entity;
using MVCAngular2_DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Helpers;
using System.Web.Mvc;

namespace MVCAngular2.Controllers
{
    public class HomeController : Controller
    {
        private readonly IGamesServiceDAL _iGamesServiceDAL;
        public HomeController(IGamesServiceDAL iGamesServiceDAL)
        {
            _iGamesServiceDAL = iGamesServiceDAL;
        }
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public JsonResult GetGamesList()
        {
            List<GameInfo> lstGameinfo = new List<GameInfo>();

            List<Game> lstgames= _iGamesServiceDAL.GetGames();
            lstGameinfo = (from games in lstgames
                           select new GameInfo
                           {
                               game = games.Name,
                               platform = games.Description,
                               release = Convert.ToString(games.ReleaseDate)
                           }).ToList();
            return Json(lstGameinfo, JsonRequestBehavior.AllowGet);
        }


        public ActionResult AddGame(GameInfo game)
        {
            Game gamedb = new Game()
            {
                Name = game.game,
                Description = game.platform,
                ReleaseDate = Convert.ToDateTime(game.release)
            };

            gamedb = _iGamesServiceDAL.AddGame(gamedb);

            game = new GameInfo()
            {
                game = gamedb.Name,
                platform = gamedb.Description,
                release = Convert.ToString(gamedb.ReleaseDate)
            };
           

            return Json(game, JsonRequestBehavior.AllowGet) ;
        }
        //Method for harcoded list of items
        //public JsonResult GetGamesList()
        //{
        //    List<GameInfo> lstGameinfo = new List<GameInfo>();


        //    GameInfo gm = new GameInfo()
        //        {
        //            game = "Deus Ex: Mankind Divided",
        //            platform = " Xbox One, PS4, PC",
        //            release = "August 23"
        //        };

        //    lstGameinfo.Add(gm);
        //    gm = new GameInfo()
        //    {
        //        game = "Hue",
        //        platform = " Xbox One, PS4, Vita, PC",
        //        release = "August 24"
        //    };
        //    lstGameinfo.Add(gm);
        //    gm = new GameInfo()
        //    {
        //        game = "The Huntsman= Winter's Curse",
        //        platform = "PS4",
        //        release = "August 23"
        //    };
        //    lstGameinfo.Add(gm);
        //    gm = new GameInfo()
        //    {
        //        game = "The Huntsman= Winter's Curse",
        //        platform = "PS4",
        //        release = "August 23"
        //    };
        //    lstGameinfo.Add(gm);
        //    gm = new GameInfo()
        //    {
        //        game = "Couter strike 1.6",
        //        platform = "Windows",
        //        release = "August 25"
        //    };
        //    lstGameinfo.Add(gm);
        //    return Json(lstGameinfo, JsonRequestBehavior.AllowGet);
        //}
    }
}
