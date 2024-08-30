export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      project_tags: {
        Row: {
          project_id: string;
          tag_id: string;
        };
        Insert: {
          project_id: string;
          tag_id: string;
        };
        Update: {
          project_id?: string;
          tag_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "project_tags_project_id_fkey";
            columns: ["project_id"];
            isOneToOne: false;
            referencedRelation: "projects";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "project_tags_tag_id_fkey";
            columns: ["tag_id"];
            isOneToOne: false;
            referencedRelation: "tags";
            referencedColumns: ["id"];
          }
        ];
      };
      projects: {
        Row: {
          category: Database["public"]["Enums"]["ecategory"];
          description: string | null;
          id: string;
          name: string;
          repository: string | null;
          website: string | null;
        };
        Insert: {
          category: Database["public"]["Enums"]["ecategory"];
          description?: string | null;
          id?: string;
          name: string;
          repository?: string | null;
          website?: string | null;
        };
        Update: {
          category?: Database["public"]["Enums"]["ecategory"];
          description?: string | null;
          id?: string;
          name?: string;
          repository?: string | null;
          website?: string | null;
        };
        Relationships: [];
      };
      tags: {
        Row: {
          id: string;
          name: string;
        };
        Insert: {
          id?: string;
          name?: string;
        };
        Update: {
          id?: string;
          name?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      ecategory: "software" | "data & ai" | "design" | "package";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};
