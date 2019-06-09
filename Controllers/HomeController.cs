using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using site.Models;

namespace site.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("GetLinha/{idLinha}")]
        public JsonResult GetLinha(string idLinha)
        {
            var contexto = new ContextoSql();
            var dados = contexto.GetLinha(idLinha);
            return new JsonResult(dados);
        }

        [HttpGet("GetDadosLinha/{texto}")]
        public JsonResult GetDadosLinha(string texto)
        {
            var contexto = new ContextoSql();
            var dados = contexto.GetDadosLinha(texto);
            return new JsonResult(dados);
        }

        [HttpGet("spSelBuscaLinha/{idlinha}/{dataInicio}/{dataFim}")]
        public JsonResult spSelBuscaLinha(string idlinha, DateTime dataInicio, DateTime dataFim)
        {
            var contexto = new ContextoSql();
            var dados = contexto.spSelBuscaLinha(idlinha,dataInicio,dataFim);
            return new JsonResult(dados);
        }

    }
}
