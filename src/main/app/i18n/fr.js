{
  
  // In accordance with French typography:
  // "'" must be replaced by "’";
  // ":" must be preceded by a non-breaking space (&nbsp;);
  // quotation marks are "«" and "»" and must be preceded by a non-breaking space (&nbsp;).
  
  "global" : {
    "save" : "Enregistrer",
    "cancel" : "Annuler",
    "delete" : "Effacer",
    "required" : "Obligatoire",
    "download" : "Télécharger",
    "link" : "Lien",
    "bookmark" : "Favoris",
    "close" : "Fermer",
    "tags" : "Mots-clés" // New translation + unnecessary space deleted. Previouly: "Tags "
  },
  "tree" : {
    "subscribe" : "S’abonner",
    "import" : "Importer",
    "new_category" : "Nouvelle catégorie",
    "all" : "Tous",
    "starred" : "Favoris"
  },
  "subscribe" : {
    "feed_url" : "URL du flux",
    "feed_name" : "Nom du flux",
    "category" : "Catégorie"
  },
  "import" : {
    "google_reader_prefix" : "Laissez-moi importer vos flux depuis votre compte ",
    "google_reader_suffix" : ".",
    "google_download" : "Ou alors, téléchargez votre fichier subscriptions.xml.",
    "google_download_link" : "Récupérez-le ici.",
    "xml_file" : "Fichier OPML"
  },
  "new_category" : {
    "name" : "Nom",
    "parent" : "Parent"
  },
  "toolbar" : {
    "unread" : "Non-lus",
    "all" : "Tous",
    "previous_entry" : "Article précédent",
    "next_entry" : "Article suivant",
    "refresh" : "Actualiser", // More accurate translation ("actualiser" is used in web browsers to translated "refresh" in French). Previously: "Rafraîchir".
    "refresh_all" : "Forcer l’actualisation de mes flux", // Translated + unnecessary space deleted. Previouly: "Force refresh all my feeds ".
    "sort_by_asc_desc" : "Trier par date croissante/décroissante",
    "titles_only" : "Titres uniquement",
    "expanded_view" : "Vue étendue",
    "mark_all_as_read" : "Tout marquer comme lu",
    "mark_all_older_12_hours" : "Articles de plus de 12 heures", // Translated + unnecessary space deleted. Previously: "Items older than 12 hours ".
    "mark_all_older_day" : "Articles de plus d’un jour",
    "mark_all_older_week" : "Articles de plus d’une semaine",
    "mark_all_older_two_weeks" : "Articles de plus d’un mois",
    "settings" : "Paramètres", // More accurate translation. Previouly: "Préférences".
    "profile" : "Profil",
    "admin" : "Administration",
    "about" : "À propos", // "A" became "À".
    "logout" : "Déconnexion",
    "donate" : "Faire un don"
  },
  "view" : {
    "entry_source" : "sur ", // Space added at the end of the sentence.
    "entry_author" : "par ",
    "error_while_loading_feed" : "Erreur durant le chargement de ce flux",
    "keep_unread" : "Laisser non lu", // Other translation. Seems more accurate. Previouly: "Laisser non lu".
    "no_unread_items" : "n’a pas d’articles non lus.",
    "mark_up_to_here" : "Marquer comme lus jusqu’ici", // Conjugation. Previously: "Marquer comme lu jusqu'ici".
    "search_for" : "recherche pour&nbsp;:  ",
    "no_search_results" : "Aucun résultat pour les mots-clés recherchés" // Translated + unnecessary space deleted. Previously: "No match found for the requested keywords "
  },
  "feedsearch" : {
    "hint" : "Tapez un nom de flux…",
    "help" : "Utilisez la touche entrée pour sélectionner et les flèches pour naviguer.", // Dot added at the end of the sentence.
    "result_prefix" : "Vos flux&nbsp;:"
  },
  "settings" : {
    "general" : {
      "value" : "Général",
      "language" : "Langue",
      "language_contribute" : "Contribuer aux traductions",
      "show_unread" : "Afficher les flux et les catégories pour lesquels tous les articles sont lus", // Other translation. Previously: "Afficher les flux et les catégories pour lesquels tout est déjà lu".
      "social_buttons" : "Afficher les boutons de partage sur réseaux sociaux",
      "scroll_marks" : "En mode de lecture étendue, marquer les articles comme lus pendant le défilement." // Conjugation and other translation. Previously: "En mode de lecture étendu, marquer comme lu les éléments lorsque la fenêtre descend.".
    },
    "appearance" : "Apparence",
    "scroll_speed" : "Vitesse de défilement pour la navigation entre articles (en millisecondes) ", // Translated + unnecessary space deleted. Previously: Scrolling speed when navigating between entries (in milliseconds)".
    "scroll_speed_help" : "définir à 0 pour désactiver", // Translated + unnecessary space deleted. Previously: "set to 0 to disable ".
    "theme" : "Thème",
    "submit_your_theme" : "Proposez votre thème", // Other translation + Dot deleted. Previouly: "Soumettez votre thème."
    "custom_css" : "CSS personnalisée" // More accurate translation. Previouly: "CSS personnelle"
  },
  "details" : {
    "feed_details" : "Détails du flux",
    "url" : "URL",
    "website" : "Site Internet", // More French than "Site web".
    "name" : "Nom",
    "category" : "Catégorie",
    "position" : "Position",
    "last_refresh" : "Dernière actualisation", // "mise à jour" became "actualisation" in accordance with the toolbar translation.
    "message" : "Dernier message d’actualisation", // Translated + unnecessary space deleted. Previously: "Last refresh message ".
    "next_refresh" : "Prochaine actualisation", // "mise à jour" became "actualisation" in accordance with the toolbar translation.
    "queued_for_refresh" : "En attente d’actualisation", // Other translation. Previously: "En file d'attente".
    "feed_url" : "URL du flux",
    "filtering_expression" : "Expression de filtrage", // New line and translation.
    "filtering_expression_help" : "Si non vide, une expression est évaluée comme «&nbsp;<i>true</i>&nbsp;» (vrai) ou «&nbsp;<i>false</i>&nbsp;» (faux). Si faux, les nouveaux articles de ce flux seront marqués automatiquement comme lus.\nLes variables disponibles sont «&nbsp;<i>title</i>&nbsp;», «&nbsp;<i>content</i>&nbsp;», «&nbsp;<i>url</i>&nbsp;», «&nbsp;<i>author</i>&nbsp;» et «&nbsp;<i>categories</i>&nbsp;», et leur contenu est converti en lettres minuscules pour faciliter la comparaison des chaînes.\nExemple&nbsp;: url.contains('youtube') or (author eq 'athou' and title.contains('github').\nLa synthaxe complète est disponible <a href='http://commons.apache.org/proper/commons-jexl/reference/syntax.html' target='_blank'>ici (en anglais)</a>.", // New line and "attempted" translation. Are <i> and </i> tags allowed?
    "generate_api_key_first" : "Générez d’abord une clé API dans votre profil.", // Other translation. Previouly: "Générez une clé API dans votre profil d'abord.".
    "unsubscribe" : "Se désabonner",
    "unsubscribe_confirmation" : "Êtes-vous sûr de vouloir vous désabonner de ce flux&nbsp;?", // Translated + unnecessary space deleted. Previously: "Are you sure you want to unsubscribe from this feed? ".
    "delete_category_confirmation" : "Êtes-vous sûr de vouloir supprimer cette catégorie&nbsp;?", // Translated + unnecessary space deleted. Previouly: "Are you sure you want to delete this category? ".
    "category_details" : "Détails de la catégorie",
    "tag_details" : "Détails du mot-clé", // Translated + unnecessary space deleted. Previouly: "Tag details ".
    "parent_category" : "Catégorie parente"
  },
  "profile" : {
    "user_name" : "Nom",
    "email" : "Adresse électronique", // Other translation. Previouly: "E-mail".
    "change_password" : "Changer de mot de passe",
    "confirm_password" : "Confirmer le mot de passe",
    "minimum_6_chars" : "Minimum 6 caractères",
    "passwords_do_not_match" : "Les mots de passe ne correspondent pas",
    "api_key" : "Clé API",
    "api_key_not_generated" : "Pas encore générée",
    "generate_new_api_key" : "Générer une nouvelle clé API",
    "generate_new_api_key_info" : "Changer de mot de passe va générer une nouvelle clé API",
    "opml_export" : "Export du fichier OPML",
    "delete_account" : "Supprimer le compte", // More accurate translation. Previouly: "Effacer le compte".
    "delete_account_confirmation" : "Êtes-vous sûr de vouloir supprimer votre compte&nbsp;? Aucun retour en arrière possible&nbsp;!" // Translated + unnecessary space deleted. Previously: "Delete your acount? There's no turning back! ".
  },
  "about" : {
    "rest_api" : {
      "value" : "API REST",
      "line1" : "CommaFeed utilise JAX-RS et AngularJS. Une API REST est donc disponible.", // Other translation. Previously: "CommaFeed utilise JAX-RS et AngularJS, donc une API REST est disponible."
      "link_to_documentation" : "Lien vers la documentation."
    },
    "keyboard_shortcuts" : "Raccourcis clavier",
    "version" : "CommaFeed version",
    "line1_prefix" : "CommaFeed est un projet open-source. Les sources sont disponibles sur ",
    "line1_suffix" : ".",
    "line2_prefix" : "Si vous rencontrez un problème, merci de le signaler sur la page du projet sur ",
    "line2_suffix" : ".",
    "line3" : "Si vous aimez ce projet, n’hésitez pas à faire un don pour encourager le développeur et aider à couvrir les coûts d’hébergement du site.", // Other translation. Previously: "Si vous aimez ce projet, n'hésitez pas à faire un don pour encourager le développeur et aider à couvrir les coûts d'hébergement de la plate-forme.".
    "line4" : "Pour ceux qui préfèrent le bitcoin, voici l’adresse", // Other translation. Previously: "Pour ceux qui préfèrent Bitcoin, voici l'adresse"
    "goodies" : {
      "value" : "Extensions",
      "android_app" : "Applications Android&nbsp;", // Translation + non-breaking space added before ":" in accordance with French typography. Previously: "App Android" 
      "subscribe_url" : "URL pour s’abonner&nbsp;", // Non-breaking space added before ":" in accordance with French typography.
      "chrome_extension" : "Extension Chrome",
      "firefox_extension" : "Extension Firefox",
      "opera_extension" : "Extension Opera",
      "subscribe_bookmarklet" : "Bookmarklet d’ajout d’abonnement (cliquez)&nbsp;", // Non-breaking space added before ":" in accordance with French typography + translation completed. Previously: "Bookmarklet d'ajout d'abonnement".
      "subscribe_bookmarklet_asc" : "Du plus ancien au plus récent",
      "subscribe_bookmarklet_desc" :  "Du plus récent au plus ancien",
      "next_unread_bookmarklet" : "Bookmarklet vers le prochain article non lu (glisser-déposer vers la barre de favoris)" // Translation completed. Previously: "Bookmarklet vers le prochain article non-lu".
    },
    "translation" : {
      "value" : "Traduction",
      "message" : "Nous avons besoin d’aide pour traduire CommaFeed.",
      "link" : "Cliquez ici pour voir comment vous pouvez nous aider."
    },
    "announcements" : "Annonces",
    "shortcuts" : { // For all shortcuts, uppercase deleted in accordance with the English version.
      "mouse_middleclick" : "clic milieu de la souris", // Other translation. Previouly: "clic du milieu de la souris".
      "open_next_entry" : "ouvrir l’article suivant",
      "open_previous_entry" : "ouvrir l’article précédent",
      "spacebar" : "espace/maj+espace", // "shift" translated to "maj"
      "move_page_down_up" : "descendre/monter dans la page", // Other translation. Previously: "Faire descendre/monter la page".
      "focus_next_entry" : "sélectionner l’article suivant sans l’ouvrir",
      "focus_previous_entry" : "sélectionner l’article précédent sans l’ouvrir",
      "open_next_feed" : "ouvrir le flux ou la catégorie suivante", // More accurate translation. "Sélectionner" become "ouvrir".
      "open_previous_feed" : "ouvrir le flux ou la catégorie précédente", // More accurate translation. "Sélectionner" become "ouvrir".
      "open_close_current_entry" : "ouvrir/fermer l’article courant",
      "open_current_entry_in_new_window" : "ouvrir l’article courant dans une nouvelle fenêtre",
      "open_current_entry_in_new_window_background" : "ouvrir l’article courant dans une nouvelle fenêtre en arrière plan",
      "star_unstar" : "ajouter/enlever l’article courant des favoris",
      "mark_current_entry" : "marquer comme lu/non lu l’article courant", // Conjugation.
      "mark_all_as_read" : "marquer tous les articles comme lus",
      "open_in_new_tab_mark_as_read" : "ouvrir l’article courant dans une nouvelle fenêtre et marquer comme lu",
      "fullscreen" : "activer/désactiver le mode plein-écran",
      "font_size" : "augmenter/diminuer la taille de la police de l’article courant",
      "go_to_all" : "afficher tous les articles",
      "go_to_starred" : "afficher les articles favoris",
      "feed_search" : "naviguer vers un flux en entrant son nom"
    }
  }
}
