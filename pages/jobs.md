---
layout: page
title: Ofertas de empleo
permalink: /jobs/
---

<h1>Ofertas de empleo</h1>

<p>Listado de oportunidades publicadas en TalentMatch. Usa el buscador para filtrar por palabra clave o etiqueta.</p>

<div class="mb-4">
  <div class="form-row">
    <div class="col-md-6 mb-2">
      <input id="job-search" class="form-control" placeholder="Buscar por puesto, tecnología o empresa" />
    </div>
    <div class="col-md-3 mb-2">
      <select id="job-filter" class="form-control">
        <option value="">Todas las etiquetas</option>
        {% assign tags = site.posts | map: "tags" | join: "," | split: "," | uniq %}
        {% for tag in tags %}
          {% if tag != "" %}
            <option value="{{ tag | strip }}">{{ tag | strip }}</option>
          {% endif %}
        {% endfor %}
      </select>
    </div>
    <div class="col-md-3 mb-2">
      <button id="job-clear" class="btn btn-outline-secondary btn-block">Limpiar</button>
    </div>
  </div>
</div>

<div id="jobs-list" class="row">
  {% for post in site.posts %}
    {% if post.categories contains "job" or post.job == true %}
      <div class="col-md-6 mb-4 job-item">
        {% include jobbox.html post=post %}
      </div>
    {% endif %}
  {% endfor %}
</div>

<hr />
<p>Para publicar una oferta, crea un archivo en <code>_posts</code> con front matter que incluya <code>categories: [job]</code> y los campos `company`, `location`, `tags` y `excerpt`.</p>

<script src="{{ site.baseurl }}/assets/js/jobs.js"></script>
