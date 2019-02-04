from django.db import models


class DatabaseCheckModel(models.Model):
    def _create_database_entry(self, name):
        """
        Creates a simple field that allow us to test the connection between the app and the DB
        """
        if not name:
            raise ValueError('The name must be set')
        database_entry = self.model(name=name)
        database_entry.save(using=self._db)
        return database_entry

    def create_database_entry(self, name):
        return self._create_database_entry(name)

    name = models.CharField(max_length=50, blank=False, null=False)
    REQUIRED_FIELDS = ['name']
